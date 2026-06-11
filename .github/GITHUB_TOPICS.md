# GitHub Repository Topics Configuration

Canonical SEO settings: `package.json` → `githubDescription`（About 描述）、`.github/repo-seo.config.json`（Topics）。

在 GitHub 仓库 **About**（⚙️）中手动配置。

## 📝 Repository Description

GitHub About description max **350 characters**; keep it short (~120) for search display.

```
JavaScript HTML-to-PDF printing via WebSocket. Silent/local print with Web Print Expert Client. Vue, React, Angular.
```

（与 `package.json` 的 `githubDescription` 字段保持一致）

## 🌐 Website

```
http://webprintpdf.com/
```

## 🔍 Recommended Topics (Max 20)

Copy-paste for GitHub About → Topics:

```
html-to-pdf, pdf-generator, javascript-print, web-printing, pdf-converter, print-library, vue-print, react-print, angular-print, typescript-print, batch-printing, websocket-print, silent-print, desktop-print-client, document-printing, print-automation, watermark-pdf, frontend-print, html-print, web-print-pdf
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
| 10 | `typescript-print` | Language support |
| 11 | `batch-printing` | Feature highlight |
| 12 | `websocket-print` | Differentiation |
| 13 | `silent-print` | Unique feature |
| 14 | `desktop-print-client` | Differentiation |
| 15 | `document-printing` | Broader category |
| 16 | `print-automation` | Use case |
| 17 | `watermark-pdf` | Feature highlight |
| 18 | `frontend-print` | Development category |
| 19 | `html-print` | HTML content printing |
| 20 | `web-print-pdf` | Brand keyword |

## 📈 SEO Benefits

- Improve discoverability in GitHub search
- Appear in topic pages (e.g. github.com/topics/html-to-pdf)
- Align with the first 20 npm `keywords` in `package.json` (8 npm-only extras follow; see `repo-seo.config.json` → `npmOnlyKeywords`)

## 🔗 Related Files

- `package.json` — `githubDescription`（GitHub About）、`description`（npm）、keywords
- `.github/repo-seo.config.json` — Topics 列表
- `README.md` / `README_CN.md` — primary documentation
- `CHANGELOG.md` — version history
