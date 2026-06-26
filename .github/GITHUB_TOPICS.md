# GitHub Repository Topics Configuration

Canonical SEO settings: `package.json` → `githubDescription`（About 描述）、`.github/repo-seo.config.json`（Topics）。

在 GitHub 仓库 **About**（⚙️）中手动配置。

## 📝 Repository Description

GitHub About description max **350 characters**; keep it short (~120) for search display.

```
Silent browser printing via WebSocket local print agent. HTML/PDF to printer without dialog. Web Print Expert Client. Vue, React.
```

（与 `package.json` 的 `githubDescription` 字段保持一致）

## 🌐 Website

```
https://webprintpdf.com/
```

## 🔍 Recommended Topics (Max 20)

Copy-paste for GitHub About → Topics:

```
silent-print, silent-printing, websocket-print, print-agent, local-print-client, desktop-print-client, browser-print, direct-print, javascript-print, web-printing, print-library, invoice-printing, label-printing, receipt-printing, thermal-print, pos-printing, batch-printing, print-automation, watermark-pdf, web-print-pdf
```

| # | Topic | Purpose |
|---|-------|---------|
| 1 | `silent-print` | Core differentiator |
| 2 | `silent-printing` | Natural search phrase |
| 3 | `websocket-print` | Architecture keyword |
| 4 | `print-agent` | Industry category (local print agent) |
| 5 | `local-print-client` | Requires desktop client |
| 6 | `desktop-print-client` | Electron client pairing |
| 7 | `browser-print` | Browser-side SDK category |
| 8 | `direct-print` | No-dialog user intent |
| 9 | `javascript-print` | Language-specific |
| 10 | `web-printing` | Core functionality |
| 11 | `print-library` | Category identifier |
| 12 | `invoice-printing` | High-intent use case |
| 13 | `label-printing` | Shipping/warehouse use case |
| 14 | `receipt-printing` | POS/receipt use case |
| 15 | `thermal-print` | Thermal printer workflows |
| 16 | `pos-printing` | Retail/restaurant intent |
| 17 | `batch-printing` | Enterprise feature |
| 18 | `print-automation` | Production workflows |
| 19 | `watermark-pdf` | Feature long-tail |
| 20 | `web-print-pdf` | Brand keyword |

### npm-only keywords (not GitHub Topics)

```
html-to-pdf, typescript-print, vue-print, react-print, frontend-print, printer-api, electron-print
```

## 📈 SEO Benefits

- Improve discoverability in GitHub search for **silent printing** and **print agent** queries
- Appear in topic pages (e.g. github.com/topics/silent-printing)
- Align with the first 20 npm `keywords` in `package.json` (7 npm-only extras follow; see `repo-seo.config.json` → `npmOnlyKeywords`)

## 🔗 Related Files

- `package.json` — `githubDescription`（GitHub About）、`description`（npm）、keywords
- `.github/repo-seo.config.json` — Topics 列表
- `README.md` / `README_CN.md` — primary documentation
- `CHANGELOG.md` — version history
