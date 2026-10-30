# 可运行示例 / Runnable examples

四个示例都是「clone → 装依赖 → 起 dev server」即可跑，代码里只调用 npm 包 `web-print-pdf` 的公开 API，没有任何私货。

> **运行前必须先启动 [Web 打印专家客户端](https://webprintpdf.com/downloadApp/?utm_source=github&utm_medium=examples&utm_campaign=examples)。**
> SDK 通过 `ws://127.0.0.1:16794` 连接本机客户端；客户端没起来时所有打印调用都会 reject（错误信息类似 `client websocket has not been connected`）。

| 目录 | 技术栈 | 演示内容 |
|:-----|:-------|:---------|
| [`vanilla-vite`](./vanilla-vite) | 原生 JS + Vite | 连接状态、`printHtml`、`printHtmlByUrl`、`batchPrint` |
| [`vue-vite`](./vue-vite) | Vue 3 + Vite | 组合式 API 打印发票、`action: 'preview'` 预览 |
| [`react-vite`](./react-vite) | React 18 + Vite | 自定义 Hook 封装、批量打印面单 |
| [`nextjs-app-router`](./nextjs-app-router) | Next.js 14 App Router | 客户端组件内动态导入 SDK |

## 快速开始

```bash
cd examples/vue-vite
npm install
npm run dev
```

其余示例同理，把 `vue-vite` 换成对应目录即可。

## 用本地源码调试

示例默认依赖 npm 上的 `web-print-pdf`。如果你正在改本仓库源码：

```bash
# 1. 在仓库根目录构建
npm install
npm run build

# 2. 在示例目录，把依赖指向本地包
npm install ../../
```

## 常见问题

- **打印报 `client websocket has not been connected`**：客户端没启动，或本机端口被防火墙拦截 — 见 [WebSocket 连接排障](https://webprintpdf.com/docs/troubleshoot-websocket/?utm_source=github&utm_medium=examples&utm_campaign=examples)。
- **promise 成功但没出纸**：检查客户端里选中的默认打印机与纸张；热敏小票请把纸张设成自定义宽度（如 80mm）并开启 `printOptions.sharp`。
- **只想预览不想出纸**：传 `extraOptions: { action: 'preview' }`，返回值里带预览地址。
- **`ws://127.0.0.1` 被浏览器拦截**：从 `https://` 页面连接 `ws://` 需要客户端版本支持，本地开发请用 `http://localhost` 起 dev server。

## 相关链接

- 文档中心：[webprintpdf.com/docs](https://webprintpdf.com/docs/?utm_source=github&utm_medium=examples&utm_campaign=examples)
- 25 个在线样例：[webprintpdf.com/docs/demos](https://webprintpdf.com/docs/demos/?utm_source=github&utm_medium=examples&utm_campaign=examples)
- 打印参数详解：[print-options](https://webprintpdf.com/docs/print-options/?utm_source=github&utm_medium=examples&utm_campaign=examples)
- 更多代码片段：[../.github/EXAMPLES.md](../.github/EXAMPLES.md)
