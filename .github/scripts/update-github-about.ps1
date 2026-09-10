# Updates GitHub About (description, homepage, topics) for web-print-pdf 2.1.9.
# Usage: $env:GH_TOKEN = 'ghp_...'; pwsh -File .github/scripts/update-github-about.ps1
# Must match package.json keywords[0..19] / repo-seo.config.json topics

$ErrorActionPreference = 'Stop'
$token = $env:GH_TOKEN
if (-not $token) { throw 'Set GH_TOKEN to a GitHub PAT with repo scope.' }

$owner = 'weixiaoyi'
$repo = 'web-print-pdf'
$headers = @{
  Authorization = "Bearer $token"
  Accept        = 'application/vnd.github+json'
  'X-GitHub-Api-Version' = '2022-11-28'
}
$topicHeaders = $headers.Clone()
$topicHeaders['Accept'] = 'application/vnd.github.mercy-preview+json'

$description = 'Silent browser printing. Lodop/C-Lodop/hiprint alternative. No print dialog. Vue/React. Receipts, thermal labels, invoices.'
$homepage = 'https://webprintpdf.com/'
$topics = @(
  'silent-print', 'silent-printing', 'no-print-dialog', 'lodop', 'c-lodop',
  'clodop', 'lodop-alternative', 'hiprint', 'window-print', 'vue-print',
  'thermal-print', 'receipt-printing', 'label-printing', 'shipping-label', 'invoice-printing',
  'pos-printing', 'print-agent', 'browser-print', 'websocket-print', 'react-print'
)

Write-Host 'Updating description and homepage...'
Invoke-RestMethod -Method Patch `
  -Uri "https://api.github.com/repos/$owner/$repo" `
  -Headers $headers `
  -Body (@{ description = $description; homepage = $homepage } | ConvertTo-Json) `
  -ContentType 'application/json' | Out-Null

Write-Host 'Updating topics (20)...'
Invoke-RestMethod -Method Put `
  -Uri "https://api.github.com/repos/$owner/$repo/topics" `
  -Headers $topicHeaders `
  -Body (@{ names = $topics } | ConvertTo-Json) `
  -ContentType 'application/json' | Out-Null

Write-Host 'Done. Verify: https://github.com/weixiaoyi/web-print-pdf'
