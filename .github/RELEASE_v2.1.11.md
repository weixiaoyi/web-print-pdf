## Release v2.1.11 — SEO 基础设施：可运行示例、TL;DR、归因口径

### Highlights

- 新增 `examples/`：4 个 clone 即可运行的示例（vanilla-vite / vue-vite / react-vite / nextjs-app-router）
- README（中/英）新增「一句话说明（TL;DR）」摘要块，中英各一段自包含说明，便于搜索结果与 AI 摘要直接引用
- **归因口径**：README 内链 `utm_source` 由 `npm` 改为 `github`；npm 侧改用 `homepage` 的 `utm_source=npm`，两端流量不再混算
- 修掉 npm 页面上的语言切换死链（相对链接在 npmjs.com 上 404 → 绝对 GitHub URL）
- 发布流程补两把锁：`publish-release.ps1`（不再漏发 Release）、`check-seo-metadata.ps1` + 独立 CI

### Added

- `examples/`：4 个示例 + 索引 README；README 增加「可运行示例」表格并从「更多代码示例」链入
- `.github/scripts/check-seo-metadata.ps1`：校验 keywords↔topics 顺序、UTM 口径、TL;DR 与 examples 链接、当前版本 release notes 是否齐备
- `.github/scripts/publish-release.ps1`：从 `.github/RELEASE_v<version>.md` 创建 GitHub Release
- `.github/workflows/seo-metadata.yml`：独立 workflow，不依赖主构建矩阵

### Changed

- `package.json` `homepage` → `?utm_source=npm&utm_medium=package-page`
- `README.md` / `README_EN.md` 全部官网链接 `utm_source=npm` → `utm_source=github`
- README 语言切换链接改为绝对 GitHub URL
- 修正 `.github/SEO_GUIDE.md` 中与当前定位矛盾的旧文案（"HTML to PDF conversion"）与结构化数据示例

### Install / upgrade

```bash
npm install web-print-pdf@2.1.11
```

**客户端：** [Web 打印专家](https://webprintpdf.com/downloadApp/)

**文档：** [中文](https://webprintpdf.com/docs/) · [English](https://webprintpdf.com/en/docs/)

**Full changelog:** https://github.com/weixiaoyi/web-print-pdf/compare/v2.1.10...v2.1.11
