## Release v2.1.12 — 官网能力同步：模板设计器、AI 更懂打印、99 Demo

### Highlights

- README（中/英）同步官网新能力：可视化模板设计器、AI 更懂打印、在线 Demo 25→99
- **AI 更懂打印**定位明确：让 AI 真正理解本 SDK，从而接管接入、联调、排错等开发全流程（需要验证时也可直接出纸）
- 发版自动化落地：tag push 自动建 GitHub Release；master push 补齐历史上漏发的 tag

### Added

- README 入口：[`/designer`](https://webprintpdf.com/designer/) 可视化模板设计器（拖拽导出 HTML → `printHtml`）
- README 入口：[`/ai`](https://webprintpdf.com/ai/) AI 更懂打印导航页 + MCP 接入说明
- 在线样例中心文案：25 → **99** 个可运行 Demo
- `.github/workflows/release.yml`：tag push 用 `.github/RELEASE_v<version>.md` 自动建 Release；master push 补齐漏发 tag

### Changed

- AI / MCP 章节与优势点文案：主叙事改为「理解 SDK → 接管开发全流程」，出纸为附带验证能力
- `examples/README.md` 同步 Demo 数量，并补模板设计器 / AI 导航链接

### Install / upgrade

```bash
npm install web-print-pdf@2.1.12
```

**客户端：** [Web 打印专家](https://webprintpdf.com/downloadApp/)

**文档：** [中文](https://webprintpdf.com/docs/) · [English](https://webprintpdf.com/en/docs/)

**模板设计器：** [webprintpdf.com/designer](https://webprintpdf.com/designer/)

**AI 更懂打印：** [webprintpdf.com/ai](https://webprintpdf.com/ai/)

**Full changelog:** https://github.com/weixiaoyi/web-print-pdf/compare/v2.1.11...v2.1.12
