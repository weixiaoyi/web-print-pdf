# Publishes a GitHub Release from `.github/RELEASE_v<version>.md`.
#
# Why: package.json/docs changes ship to npm via `npm publish`, but GitHub Releases are
# a separate surface (search, notifications, "latest release" card). Publishing them was
# being skipped, which left version queries with no landing page.
#
# Usage:
#   $env:GH_TOKEN = 'ghp_...'                      # PAT with repo scope
#   powershell -ExecutionPolicy Bypass -File .github/scripts/publish-release.ps1 -Version 2.1.10
#   powershell -ExecutionPolicy Bypass -File .github/scripts/publish-release.ps1 -Version 2.1.10 -DryRun
#
# Note: releases are normally created by .github/workflows/release.yml (no PAT needed).
# Keep this script for the offline / no-Actions fallback.
#
# Tag must already exist on the remote (the repo's `npm version` flow pushes tags).

param(
  [Parameter(Mandatory = $true)]
  [string]$Version,

  [switch]$DryRun
)

$ErrorActionPreference = 'Stop'

$token = $env:GH_TOKEN
if (-not $token) { throw 'Set GH_TOKEN to a GitHub PAT with repo scope.' }

$owner = 'weixiaoyi'
$repo = 'web-print-pdf'
$tag = "v$Version"
$notesPath = Join-Path $PSScriptRoot "..\RELEASE_v$Version.md"

if (-not (Test-Path $notesPath)) {
  throw "Release notes not found: $notesPath (expected .github/RELEASE_v$Version.md)"
}

$body = Get-Content -Path $notesPath -Raw -Encoding utf8
$payload = @{
  tag_name         = $tag
  target_commitish = 'master'
  name             = "Release v$Version"
  body             = $body
  draft            = $false
  prerelease       = $false
} | ConvertTo-Json -Depth 5

if ($DryRun) {
  Write-Host "DRY RUN — payload that would be POSTed to /repos/$owner/$repo/releases:"
  Write-Host $payload
  exit 0
}

$headers = @{
  Authorization          = "Bearer $token"
  Accept                 = 'application/vnd.github+json'
  'X-GitHub-Api-Version' = '2022-11-28'
}

Write-Host "Creating release $tag ..."
$release = Invoke-RestMethod -Method Post `
  -Uri "https://api.github.com/repos/$owner/$repo/releases" `
  -Headers $headers `
  -Body $payload `
  -ContentType 'application/json'

Write-Host "Done: $($release.html_url)"
