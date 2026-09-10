# GitHub Repository Topics & Keyword Traffic Strategy

> **关键词是核心流量入口。** 维护时以 `package.json` → `keywords` 为准；本文件与 `.github/repo-seo.config.json` 必须与之顺序一致。

Canonical sources:
- npm：`package.json` → `description` + `keywords`（**顺序有权重**）
- GitHub About：`githubDescription` + Topics（= keywords 前 20）

## 📝 Repository Description

```
Silent browser printing. Lodop/C-Lodop/hiprint alternative. No print dialog. Vue/React. Receipts, thermal labels, invoices.
```

## 🌐 Website

```
https://webprintpdf.com/
```

## 🎯 Traffic-first keyword order

| 优先级 | 层级 | 为什么 |
|--------|------|--------|
| 1 | 品类 | 静默打印身份：`silent-print` / `silent-printing` / `no-print-dialog` |
| 2 | 国内主竞品 | **最大转化流量**：`lodop` / `c-lodop` / `clodop` / `lodop-alternative` / `hiprint` / `window-print` |
| 3 | 场景 + Vue | 国内前端主栈 + 小票/热敏/面单/发票/POS |
| 4 | 技术形态 | `print-agent` / `browser-print` / `websocket-print` |
| 5 | React | 国际/次主栈 |
| 6 | 溢出 | 次要竞品、次要框架、泛词 |

**刻意提升：** `clodop`（国内高频拼写）进 Topics；`vue-print`、热敏/小票/面单场景前移。  
**刻意后移：** `web-printing`、`batch-printing`（泛/功能弱意图）到溢出。

## 🔍 Topics（前 20，Copy-paste）

```
silent-print, silent-printing, no-print-dialog, lodop, c-lodop, clodop, lodop-alternative, hiprint, window-print, vue-print, thermal-print, receipt-printing, label-printing, shipping-label, invoice-printing, pos-printing, print-agent, browser-print, websocket-print, react-print
```

| # | Keyword | Tier |
|---|---------|------|
| 1 | `silent-print` | 品类 |
| 2 | `silent-printing` | 品类 |
| 3 | `no-print-dialog` | 品类 |
| 4 | `lodop` | 竞品流量 |
| 5 | `c-lodop` | 竞品流量 |
| 6 | `clodop` | 竞品拼写（国内） |
| 7 | `lodop-alternative` | 替代意图 |
| 8 | `hiprint` | 竞品流量 |
| 9 | `window-print` | 痛点流量 |
| 10 | `vue-print` | 国内主框架 |
| 11 | `thermal-print` | 热敏场景 |
| 12 | `receipt-printing` | 小票 |
| 13 | `label-printing` | 标签 |
| 14 | `shipping-label` | 面单 |
| 15 | `invoice-printing` | 发票 |
| 16 | `pos-printing` | POS |
| 17 | `print-agent` | 技术品类 |
| 18 | `browser-print` | 技术品类 |
| 19 | `websocket-print` | 技术路径 |
| 20 | `react-print` | 框架 |

### npm-only（keywords[20..]）

```
web-printing, batch-printing, electron-hiprint, qz-tray, print-js, jsprintmanager, uniapp-print, angular-print, nextjs-print, chrome-print
```

| Keyword | 依据 |
|---------|------|
| `electron-hiprint` | 国内 hiprint 生态常见检索 |
| `qz-tray` / `jsprintmanager` / `print-js` | 国际竞品对比 |
| `chrome-print` | Chrome 静默/C-Lodop 相关检索 |
| `uniapp-print` / `angular-print` / `nextjs-print` | 有官方文档的次流量框架 |
| `web-printing` / `batch-printing` | 保留覆盖，但不占 Topics |

## ✅ 发版检查

1. `package.json` keywords 顺序 = 本文件列表  
2. `repo-seo.config.json` topics / npmOnly 与 keywords 切片一致  
3. npm `description` 含 Lodop / silent / 场景词（站内搜索会扫 description）  
4. GitHub About Topics 用前 20（或跑 `scripts/update-github-about.ps1`）  
5. **不要**加 `html-to-pdf` / `watermark-pdf` 等误导词

## 🔗 Related

- `package.json`
- `.github/repo-seo.config.json`
- `.github/scripts/update-github-about.ps1`
- `README.md` / `README_EN.md` 标签区
