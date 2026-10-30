# Guards the SEO invariants that are easy to break by hand.
# Usage: powershell -ExecutionPolicy Bypass -File .github/scripts/check-seo-metadata.ps1
# Exits 1 if anything drifts, so it can run in CI.

$ErrorActionPreference = 'Stop'

$root = Resolve-Path (Join-Path $PSScriptRoot '..\..')
$failures = New-Object System.Collections.Generic.List[string]

function Check {
  param([string]$Name, [scriptblock]$Test)

  try {
    if (& $Test) {
      Write-Host "PASS  $Name" -ForegroundColor Green
    } else {
      Write-Host "FAIL  $Name" -ForegroundColor Red
      $failures.Add($Name)
    }
  } catch {
    Write-Host "FAIL  $Name  ($_)" -ForegroundColor Red
    $failures.Add($Name)
  }
}

$pkg = Get-Content (Join-Path $root 'package.json') -Raw -Encoding utf8 | ConvertFrom-Json
$cfg = Get-Content (Join-Path $root '.github/repo-seo.config.json') -Raw -Encoding utf8 | ConvertFrom-Json
$keywordCount = $pkg.keywords.Count

Check 'package.json keywords[0..19] match repo-seo.config.json topics (order matters)' {
  ($pkg.keywords[0..19] -join ',') -eq ($cfg.topics -join ',')
}

Check 'package.json keywords[20..] match repo-seo.config.json npmOnlyKeywords' {
  ($pkg.keywords[20..($keywordCount - 1)] -join ',') -eq ($cfg.npmOnlyKeywords -join ',')
}

Check 'GitHub topics count is 20 (GitHub hard limit)' {
  $cfg.topics.Count -eq 20
}

Check 'npm homepage carries utm_source=npm (npm-side attribution)' {
  $pkg.homepage -match 'utm_source=npm'
}

Check 'READMEs use utm_source=github, not npm' {
  -not (Select-String -Path (Join-Path $root 'README.md'), (Join-Path $root 'README_EN.md') -Pattern 'utm_source=npm' -Quiet)
}

Check 'READMEs contain the TL;DR answer block' {
  (Select-String -Path (Join-Path $root 'README.md'), (Join-Path $root 'README_EN.md') -Pattern 'TL;DR' -Quiet) -eq $true
}

Check 'READMEs link to examples/' {
  (Select-String -Path (Join-Path $root 'README.md'), (Join-Path $root 'README_EN.md') -Pattern 'tree/master/examples' -Quiet) -eq $true
}

Check 'every examples/* directory has a package.json' {
  $missing = @(Get-ChildItem (Join-Path $root 'examples') -Directory |
    Where-Object { -not (Test-Path (Join-Path $_.FullName 'package.json')) })
  $missing.Count -eq 0
}

Check 'no misleading keywords (html-to-pdf / watermark-pdf)' {
  -not ($pkg.keywords -match 'html-to-pdf|watermark-pdf')
}

Check 'release notes file exists for the current package version' {
  Test-Path (Join-Path $root ".github/RELEASE_v$($pkg.version).md")
}

Write-Host ''
if ($failures.Count -gt 0) {
  Write-Host "$($failures.Count) check(s) failed." -ForegroundColor Red
  exit 1
}

Write-Host 'All SEO metadata checks passed.' -ForegroundColor Green
