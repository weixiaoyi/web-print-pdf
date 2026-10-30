## Release v2.1.10 — AI 打印 / MCP 生态入口

### Highlights

- 主 README 与英文 README 新增「AI 智能体 / MCP 集成」章节，说明配套 MCP Server `mcp-web-print-pdf`
- 官网资源区新增「AI 打印与 MCP 接入」专题入口（中英文对应页，带 UTM）
- 「📦 下载与仓库」补齐 `mcp-web-print-pdf` 的 npm 链接
- **纯文档更新，无 API 变更**：`2.1.9` 可无缝升级，无需改代码

### Added

- `mcp-web-print-pdf` 最小接入示例（所有 MCP 宿主通用）：

  ```json
  { "mcpServers": { "webprint": { "command": "npx", "args": ["-y", "mcp-web-print-pdf"] } } }
  ```

- 官网专题链接：中文 [AI 打印与 MCP 接入](https://webprintpdf.com/docs/mcp-print/) · English [AI printing & MCP](https://webprintpdf.com/en/docs/mcp-print/)
- MCP Server 的 npm / GitHub 双入口（`mcp-web-print-pdf@0.2.x`，MIT）

### Changed

- `README.md` / `README_EN.md`：新增 `🤖 AI 智能体 / MCP 集成` 章节（位于「支持的技术」与「FAQ」之间）
- `README.md` / `README_EN.md`：官网资源区新增 `🤖 AI 打印与 MCP 接入` 子区块，与框架专题、场景专题并列
- 文档口径明确：MCP 只是给客户端已有的本机端口再加一个客户端，`web-print-pdf` 的浏览器 API 与用法完全不变
- UTM 新增 `utm_campaign=mcp`，与既有 campaign 命名（`framework` / `scenarios` / `advanced` 等）一致
- `dist/README*.md`、`dist/CHANGELOG.md` 与源码树同步（构建时会再次复制，保持一致）

### Install / upgrade

```bash
npm install web-print-pdf@2.1.10
```

**客户端：** [Web 打印专家](https://webprintpdf.com/downloadApp/)

**文档：** [中文](https://webprintpdf.com/docs/) · [English](https://webprintpdf.com/en/docs/)

**Full changelog:** https://github.com/weixiaoyi/web-print-pdf/compare/v2.1.9...v2.1.10
