# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.11] - 2026-10-30

### Added
- `examples/`：4 个 clone 即可运行的示例（`vanilla-vite` / `vue-vite` / `react-vite` / `nextjs-app-router`），README 新增「可运行示例」表格，并从「更多代码示例」链入
- README（中/英）新增「一句话说明（TL;DR）」摘要块：中英各一段自包含说明，便于搜索结果页与 AI 摘要直接引用
- `.github/scripts/check-seo-metadata.ps1`：校验 keywords↔topics 一致性、UTM 归因口径、TL;DR/examples 链接、版本 release notes 齐备
- `.github/scripts/publish-release.ps1`：从 `.github/RELEASE_v<version>.md` 创建 GitHub Release，避免「发了 npm 没发 Release」

### Changed
- **归因口径**：README 内链 `utm_source` 由 `npm` 改为 `github`（README 主要在 GitHub 被阅读）；npm 侧改用 `homepage` 的 `utm_source=npm` 单独标记，两类流量不再混在一起
- `package.json` `homepage` 增加 `utm_source=npm&utm_medium=package-page`
- README 语言切换链接改为绝对 GitHub URL：npm 页面上相对链接会 404，国际访客点「English」原本是死链
- `dist/README*.md` 是 `npm run build` 的产物（`prepublishOnly` 会自动执行），本次未手改，发版时自动同步

## [2.1.10] - 2026-10-30

### Added
- README（中/英）新增「🤖 AI 智能体 / MCP 集成」章节：配套 MCP Server `mcp-web-print-pdf` 的定位说明、`npx -y mcp-web-print-pdf` 配置示例，以及 npm / GitHub 双入口
- README 官网资源新增「AI 打印与 MCP 接入」专题入口（中文 `/docs/mcp-print/`、英文 `/en/docs/mcp-print/`，带 UTM 追踪）
- `README_EN.md` 同步：`AI Agents / MCP Integration` 章节 + `AI Printing & MCP` 专题入口

### Changed
- README「📦 下载与仓库」补充 `mcp-web-print-pdf` npm 链接，补齐 AI 场景的生态入口
- 文档口径明确：MCP 只是给客户端已有的本机端口再加一个客户端，`web-print-pdf` 的浏览器 API 与用法完全不变
- 新增 `utm_campaign=mcp`，与既有 campaign 命名（framework / scenarios / advanced 等）保持一致

## [2.1.9] - 2026-09-10

### Added
- `printOptions.sharp` documented (thermal printers only: enable sharpening / anti-alias)

### Changed
- Primary README is now Chinese (`README.md`); English moved to `README_EN.md` (formerly `README_CN.md` / English `README.md`)
- README conversion path shortened: Requirements → tool table → Quick Start moved up; official resource link farm moved below FAQ; install section trimmed to a minimal `printHtml` example first
- README language separation: Chinese README keeps Chinese-only copy and `/docs` links; English README keeps English-only copy and `/en/docs` links (language switcher at top only)
- SEO keywords traffic-ranked for CN market: silent-print → Lodop/C-Lodop/clodop/hiprint/window-print → Vue + thermal/receipt/label/shipping/invoice → agent tech → React; overflow adds electron-hiprint, qz-tray, chrome-print
- npm `description` / `githubDescription` lead with Lodop alternative + silent printing + scenario terms
- npm `homepage` points to Chinese docs (`https://webprintpdf.com/docs/`)
- npm `githubDescription` emphasizes Lodop/hiprint alternative positioning

## [2.1.8] - 2026-06-26

### Changed
- SEO overhaul: keywords repositioned from html-to-pdf red ocean to silent printing / local print agent category
- npm `description` and `githubDescription` lead with silent browser printing positioning
- npm `homepage` points to `https://webprintpdf.com/en/docs/`
- README / README_CN: new H1, tool comparison table, QZ Tray/JSPrintManager FAQ, Tags section, https links
- README: official website resource links (demos, comparisons, frameworks, advanced config, deployment guides); cross-platform client support (Windows/Linux/macOS)
- README: scenario guides, customer cases, pricing link; FAQ deep-links to official articles; UTM on all marketing links
- README: Features aligned with silent-print positioning; Community & Ecosystem section
- README / README_CN: bilingual official doc links (English `/en/docs/…` · 中文 `/docs/…`); English README defaults to EN URLs
- README: FAQ bilingual doc links, bilingual footer pricing, silent-print quick-start titles
- GitHub EXAMPLES.md expanded with bilingual official site link matrix
- GitHub SEO docs and `repo-seo.config.json` aligned with new keyword strategy

## [2.1.7] - 2026-06-12

### Changed
- README: trimmed duplicate sections; restored overview, FAQ, and detailed configuration option docs
- npm keyword: replaced `browser-print` with `html-print` (GitHub Topics aligned)
- Consolidated GitHub SEO docs (`TOPICS.md` removed, `SEO_IMPROVEMENTS.md` shortened to index)

## [2.1.6] - 2026-06-11

### Changed
- Aligned npm keywords with GitHub Topics: first 20 entries match exactly; 7 npm-only extras documented in `repo-seo.config.json`
- Fixed topic naming consistency (`typescript-print`, `frontend-print`) across `package.json` and GitHub SEO config
- Updated GitHub SEO guides for v2.1.6 release

## [2.1.5] - 2026-06-10

### Added
- `utils.getPrinterList()` — retrieve available printers on the client
- `utils.getPrinterPapers(printer)` — retrieve supported paper types for a specified printer
- GitHub SEO config (`.github/repo-seo.config.json`, `package.json` → `githubDescription`)

### Changed
- Refined npm keywords: removed misleading terms (`node-print`, `browser-automation`, `electron-print`), strengthened differentiation (`websocket-print`, `silent-print`, `desktop-print-client`)
- Updated npm description and FAQ with differentiation vs Print.js/jsPDF and local client requirements
- Enhanced README documentation (utility methods, configuration fixes, overview alignment)
- Unified GitHub SEO guides and topic recommendations
- Trimmed marketing/SEO sections from README

## [2.1.4] - 2025-11-11

### Added
- `_printByRawMessage()` — send raw WebSocket print messages for advanced use cases
- Bilingual documentation (`README.md`, `README_CN.md`)
- GitHub Actions CI workflow, issue and PR templates
- Comprehensive SEO guides and repository setup docs (`.github/`)

### Changed
- Major README documentation overhaul
- Improved `package.json` metadata and keywords
- Replaced separate English README with bilingual doc structure

## [2.1.2] - 2025-08-04

### Changed
- Version bump and maintenance updates

## [2.1.1] - 2025-08-04

### Changed
- Version bump and maintenance updates

## [2.0.0] - 2025-07-28

### Added
- Support for multiple printing formats (HTML, URL, Base64)
- Batch printing functionality
- WebSocket communication
- Client customization features (`setTitle`, `setThemeColor`, `switchTabsVisibility`, `setContactUsTabInnerHtml`)
- Utility methods (`getConnectStatus`, `onResponse`, `onError`)
- Comprehensive configuration options (pdfOptions, printOptions, extraOptions)

### Changed
- Major API redesign for better usability
- Enhanced error handling
- Improved documentation

### Fixed
- Various bug fixes and improvements

## [1.0.0] - 2023-XX-XX

### Added
- Initial release
- Basic HTML to PDF printing functionality
- Core printing features

---

## How to Update This Changelog

1. Add new entries under `[Unreleased]` for upcoming changes
2. When releasing a new version:
   - Move `[Unreleased]` content to a new version section
   - Update the version number and date
   - Add a new `[Unreleased]` section at the top

## Categories

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities
