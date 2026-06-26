# Updates GitHub About (description, homepage, topics) for web-print-pdf 2.1.8 SEO.
# Usage: $env:GH_TOKEN = 'ghp_...'; pwsh -File .github/scripts/update-github-about.ps1

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

$description = 'Silent browser printing via WebSocket local print agent. HTML/PDF to printer without dialog. Web Print Expert Client. Vue, React.'
$homepage = 'https://webprintpdf.com/'
$topics = @(
  'silent-print', 'silent-printing', 'websocket-print', 'print-agent', 'local-print-client',
  'desktop-print-client', 'browser-print', 'direct-print', 'javascript-print', 'web-printing',
  'print-library', 'invoice-printing', 'label-printing', 'receipt-printing', 'thermal-print',
  'pos-printing', 'batch-printing', 'print-automation', 'watermark-pdf', 'web-print-pdf'
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
