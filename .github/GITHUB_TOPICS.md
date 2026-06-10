# GitHub Repository Topics Configuration

Canonical SEO settings live in `.github/repo-seo.config.json`. Apply automatically:

```powershell
$env:GITHUB_TOKEN = "ghp_xxx"
.\scripts\set-github-repo-seo.ps1
```

Or configure manually in GitHub **About** (gear icon).

## 📝 Repository Description

```
Powerful JavaScript HTML to PDF printing library. Convert HTML to PDF and print via WebSocket. Requires Web Print Expert Client for silent/local printing. Vue, React, Angular. Batch printing, watermarks.
```

## 🌐 Website

```
http://webprintpdf.com/
```

## 🔍 Recommended Topics (Max 20)

Copy-paste for GitHub About → Topics:

```
html-to-pdf, pdf-generator, javascript-print, web-printing, pdf-converter, print-library, vue-print, react-print, angular-print, typescript, batch-printing, websocket-print, silent-print, desktop-print-client, document-printing, print-automation, watermark-pdf, frontend, browser-print, web-print-pdf
```

| # | Topic | Purpose |
|---|-------|---------|
| 1 | `html-to-pdf` | Primary keyword |
| 2 | `pdf-generator` | High search volume |
| 3 | `javascript-print` | Language-specific |
| 4 | `web-printing` | Core functionality |
| 5 | `pdf-converter` | Alternative keyword |
| 6 | `print-library` | Category identifier |
| 7 | `vue-print` | Framework integration |
| 8 | `react-print` | Framework integration |
| 9 | `angular-print` | Framework integration |
| 10 | `typescript` | Language support |
| 11 | `batch-printing` | Feature highlight |
| 12 | `websocket-print` | Differentiation |
| 13 | `silent-print` | Unique feature |
| 14 | `desktop-print-client` | Differentiation |
| 15 | `document-printing` | Broader category |
| 16 | `print-automation` | Use case |
| 17 | `watermark-pdf` | Feature highlight |
| 18 | `frontend` | Development category |
| 19 | `browser-print` | Core functionality |
| 20 | `web-print-pdf` | Brand keyword |

## 📈 SEO Benefits

- Improve discoverability in GitHub search
- Appear in topic pages (e.g. github.com/topics/html-to-pdf)
- Align with npm `keywords` and `description` in `package.json`

## 🔗 Related Files

- `.github/repo-seo.config.json` — canonical About/topics config
- `scripts/set-github-repo-seo.ps1` — apply config via GitHub API
- `package.json` — npm keywords and description
- `README.md` / `README_CN.md` — primary documentation
- `CHANGELOG.md` — version history
