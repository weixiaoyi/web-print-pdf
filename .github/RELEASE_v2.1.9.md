## Release v2.1.9 — 中文主文档 & 行业 SEO

### Highlights

- 主 README 改为中文；英文文档移至 `README_EN.md`
- 缩短转化路径：环境要求 → 选型表 → 快速开始前置
- 行业 SEO 关键词按流量排序：静默打印 → Lodop/C-Lodop/clodop/hiprint/window.print → Vue+热敏/小票/面单/发票 → 技术形态；溢出含 electron-hiprint、qz-tray、chrome-print
- 文档补充 `printOptions.sharp`（**仅热敏打印机**）
- npm `homepage` → 中文文档站；`description` 强化 Lodop 替代定位

### Added

- `printOptions.sharp` 字段说明（仅热敏打印机开启锐化/抗锯齿）

### Changed

- `README.md`（中文）/ `README_EN.md`（英文）语言拆分，正文不再双语混排；转化路径缩短
- 关键词去掉 `html-to-pdf`、`watermark-pdf` 等误导词；`clodop` 进入 Topics 前 20
- `homepage` → `https://webprintpdf.com/docs/`
- `githubDescription` / npm `description` 强调 Lodop/C-Lodop/hiprint 替代定位

### Install / upgrade

```bash
npm install web-print-pdf@2.1.9
```

**客户端：** [Web 打印专家](https://webprintpdf.com/downloadApp/)

**文档：** [中文](https://webprintpdf.com/docs/) · [English](https://webprintpdf.com/en/docs/)

**GitHub Topics：** 发布后请在仓库 About 中手动更新为 `.github/GITHUB_TOPICS.md` 中的前 20 个

**Full changelog:** https://github.com/weixiaoyi/web-print-pdf/compare/v2.1.8...v2.1.9
