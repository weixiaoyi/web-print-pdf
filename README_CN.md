# web-print-pdf - JavaScript HTML 转 PDF 打印库

<div align="center">
  <strong>
    <a href="README_CN.md">🇨🇳 中文</a> | 
    <a href="README.md">🇺🇸 English</a>
  </strong>
</div>

<br>

[![npm version](https://img.shields.io/npm/v/web-print-pdf.svg)](https://www.npmjs.com/package/web-print-pdf)
[![license](https://img.shields.io/npm/l/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/network)
[![GitHub issues](https://img.shields.io/github/issues/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/pulls)
[![npm downloads](https://img.shields.io/npm/dm/web-print-pdf.svg)](https://www.npmjs.com/package/web-print-pdf)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Framework Agnostic](https://img.shields.io/badge/Framework-Agnostic-green.svg)](https://github.com/weixiaoyi/web-print-pdf)

> 🖨️ **强大的 JavaScript HTML 转 PDF 打印库** — 将 HTML 转换为 PDF，打印网页、图片和文档，支持 WebSocket。需安装 Web 打印专家客户端实现静默/本地打印。可与 Vue、React、Angular 和所有现代 JavaScript 框架无缝集成。

## 🎯 概述

**web-print-pdf** 是一个 JavaScript 打印库，使 Web 应用能将 HTML 转换为高质量 PDF，并通过 Web 打印专家客户端将任务发送到本地打印机 — 无需自建后端服务。适用于发票打印、报表生成、文档管理，以及任何需要静默打印、并对打印机、纸张和版式有精细控制的生产场景。

### 为什么选择 web-print-pdf？

- **零配置** — 开箱即用，默认参数合理
- **框架无关** — 支持 Vue、React、Angular、Svelte 或原生 JavaScript
- **生产就绪** — 已在企业级应用中广泛验证
- **TypeScript 支持** — 内置完整类型定义
- **HTML/CSS 优先** — 用熟悉的 Web 技术控制 PDF 样式，无需学习专有模板语法

## ✨ 特性

- 🖨️ **多种打印方式**：支持 HTML 内容、URL、Base64 等多种格式
- 📄 **PDF 生成**：将 HTML 转换为高质量的 PDF 文档
- 🖼️ **图片打印**：支持图片 URL 和 Base64 格式打印
- 📦 **批量打印**：支持批量任务处理
- 🔧 **灵活配置**：丰富的 PDF 和打印选项
- 🌐 **WebSocket 通信**：实时连接状态监控
- 🔕 **静默打印**：通过本地客户端实现静默打印，无需浏览器打印对话框
- 🎨 **自定义样式**：支持自定义页眉、页脚、边距以及客户端主题色、标题等
- 🚀 **简洁的 API 设计**：API 一致性，前端开发友好，学习成本低
- 🎯 **HTML/CSS 控制**：通过 HTML 和 CSS 控制所有 PDF 样式，无需额外学习
- ⚡ **异步支持**：完全支持 Promise/async-await 语法，同时保留事件监听机制

## 🔑 应用场景

- **电子商务** — 订单发票、运输标签、装箱单
- **商业与企业** — 财务报表、仪表板导出、工资单与合同
- **医疗与教育** — 病历、检验报告、证书
- **法律与政府** — 合同、表单、官方证照
- **通用** — 票据、条形码、表单打印

## 📋 环境要求

- 支持 WebSocket 的现代浏览器
- 本机安装 [Web 打印专家客户端](http://webprintpdf.com/downloadApp/)（支持中英文界面）

## 🔗 相关链接

- [官方网站](http://webprintpdf.com/)
- [客户端下载](http://webprintpdf.com/downloadApp/)
- [GitHub 仓库](https://github.com/weixiaoyi/web-print-pdf)
- [npm 包](https://www.npmjs.com/package/web-print-pdf)

## 🚀 快速开始

### 安装

通过 npm 安装：
```bash
npm install web-print-pdf
```

或使用 yarn：
```bash
yarn add web-print-pdf
```

或使用 pnpm：
```bash
pnpm add web-print-pdf
```

### 基本使用示例

#### 简单的 HTML 转 PDF 打印

```javascript
import webPrintPdf from 'web-print-pdf';

// 基本 HTML 打印 - 将任何 HTML 字符串转换为 PDF
const handlePrint = async () => {
    try {
        await webPrintPdf.printHtml('<div>Hello World!</div>');
        console.log('打印成功！');
    } catch (error) {
        console.error('打印失败:', error);
    }
};
```

#### Vue.js 集成示例

```vue
<template>
  <button @click="printInvoice">打印发票</button>
</template>

<script setup>
import webPrintPdf from 'web-print-pdf';

const printInvoice = async () => {
  const html = `
    <div style="padding: 20px;">
      <h1>发票 #12345</h1>
      <p>总计: $99.99</p>
    </div>
  `;
  await webPrintPdf.printHtml(html);
};
</script>
```

#### React 集成示例

```jsx
import React from 'react';
import webPrintPdf from 'web-print-pdf';

function PrintButton() {
  const handlePrint = async () => {
    const html = `
      <div style="padding: 20px;">
        <h1>报表</h1>
        <p>生成日期 ${new Date().toLocaleDateString()}</p>
      </div>
    `;
    await webPrintPdf.printHtml(html);
  };

  return <button onClick={handlePrint}>打印报表</button>;
}
```

#### Angular 集成示例

```typescript
import { Component } from '@angular/core';
import webPrintPdf from 'web-print-pdf';

@Component({
  selector: 'app-print',
  template: '<button (click)="printDocument()">打印文档</button>'
})
export class PrintComponent {
  async printDocument() {
    const html = '<h1>文档标题</h1><p>内容在这里...</p>';
    await webPrintPdf.printHtml(html);
  }
}
```

## 📖 API 文档

### 主要方法

#### `printHtml(content, pdfOptions?, printOptions?, extraOptions?)`
打印 HTML 内容

```javascript
const pdfOptions = {                // PDF 属性设置
    paperFormat: 'A4',              // 纸张格式
    landscape: false,               // 是否横向打印，默认 false，纵向
    margin: {                       // PDF 纸张边距
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
    },
    printBackground: true,          // 是否打印 CSS 背景（背景色、背景图片）
    watermark: {                    // 文本水印或图片水印
        text: "水印",
        ...
    },
    pageNumber: {                   // 页码
        format: '{{page}}/{{totalPage}}'
    },
    ...
};

const printOptions = {               // 打印属性设置
    paperFormat: 'A4',               // 纸张格式
    colorful: false,                 // 彩色
    duplexMode: "duplex",            // 单双面
    scaleMode: "shrink",             // shrink 缩放、noscale 原始、fit 自动调整
    ...
};

const extraOptions = {               // 更多额外属性
    requestTimeout: 15,              // 超时时间，单位秒
    cookies:{ key1:'value1',... },
    httpHeaders:{ key1:'value1',... },
    action: "preview",               // 打印或预览行为："print"、"preview"
    ...
};

await webPrintPdf.printHtml(
    '<h1>Hello World</h1><p>这是一个测试文档</p>',
    pdfOptions,
    printOptions,
    extraOptions
);
```

#### `printHtmlByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
通过 URL 打印 HTML 页面

```javascript
await webPrintPdf.printHtmlByUrl(
    'http://webprintpdf.com',
    { paperFormat: 'A4', printBackground: true }
);
```

#### `printPdfByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
通过 URL 打印 PDF 文件

```javascript
await webPrintPdf.printPdfByUrl(
    'http://webprintpdf.com/api/fileCenter/webPrintExpert/fileCenterFileDownload/printTest.pdf',
    { paperFormat: 'A4' }
);
```

#### `printImageByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
通过 URL 打印图片

```javascript
await webPrintPdf.printImageByUrl(
    'http://webprintpdf.com/api/fileCenter/webPrintExpert/fileCenterFileDownload/printTest.png',
    { paperFormat: 'A4', printBackground: true }
);
```

#### `printHtmlByBase64(base64, pdfOptions?, printOptions?, extraOptions?)`
通过 Base64 打印 HTML 内容

```javascript
await webPrintPdf.printHtmlByBase64(
    'PGgxPkhlbGxvIFdvcmxkPC9oMT4=...', // html base64
    { paperFormat: 'A4' }
);
```

#### `printPdfByBase64(base64, pdfOptions?, printOptions?, extraOptions?)`
通过 Base64 打印 PDF 文件

```javascript
await webPrintPdf.printPdfByBase64(
    'JVBERi0xLjQKJcOkw7zDtsO...', // pdf base64
    { paperFormat: 'A4' }
);
```

#### `printImageByBase64(base64, pdfOptions?, printOptions?, extraOptions?)`
通过 Base64 打印图片

```javascript
await webPrintPdf.printImageByBase64(
    'iVBORw0KGgoAAAANSUhEUgAA...', // image base64
    { paperFormat: 'A4', printBackground: true }
);
```

#### `batchPrint(printTaskList, pdfOptions?, printOptions?, extraOptions?)`
批量打印

```javascript
const printTasks = [
    {
        type: 'printHtml',
        content: '<h1>文档 1</h1>',
        pdfOptions: { ... },
        printOptions: { ... },
        extraOptions: { ... }
    },
    {
        type: 'printHtmlByUrl',
        url: 'https://example.com/page1',
        pdfOptions: { paperFormat: 'A4', landscape: true }
    },
    {
        type: 'printHtmlByBase64',
        ...
    },
    {
        type: 'printPdfByUrl',
        ...
    },
    {
        type: 'printPdfByBase64',
        ...
    },
    {
        type: 'printImageByUrl',
        ...
    },
    {
        type: 'printImageByBase64',
        ...
    },
];

await webPrintPdf.batchPrint(
    printTasks,
    { paperFormat: 'A4',... }, // pdfOptions
    { printerName: 'Default Printer',... }, // 打印选项 printOptions
    { requestTimeout: 15,... } // extraOptions
);
```

## 🔧 配置选项

### PDF 选项 (pdfOptions)

| 选项 | 类型 | 默认值 | 描述 |
|:-----|:---|:------|:-----|
| `paperFormat` | string | 'A4' | 纸张格式。支持的固定尺寸：Letter、Legal、Tabloid、Ledger、A0、A1、A2、A3、A4、A5、A6。设置后优先于 `width`/`height`；非标准尺寸请用自定义 `width` 和 `height`（此时不要设置 `paperFormat`）。 |
| `width` | string\|number | - | 纸张宽度，支持单位 px、in、cm、mm。与 `height` 配合使用自定义尺寸；使用自定义尺寸时不要设置 `paperFormat`。 |
| `height` | string\|number | - | 纸张高度，支持单位 px、in、cm、mm。与 `width` 配合使用自定义尺寸；使用自定义尺寸时不要设置 `paperFormat`。 |
| `displayHeaderFooter` | boolean | false | 是否在每页显示页眉和页脚。 |
| `headerTemplate` | string | - | 页眉 HTML 模板。可用特殊 class 注入动态值：`date`（格式化打印日期）、`title`（文档标题）、`url`（文档地址）、`pageNumber`（当前页码）、`totalPages`（总页数）。示例：`<span class="pageNumber"></span>/<span class="totalPages"></span>`。 |
| `footerTemplate` | string | - | 页脚 HTML 模板，class 用法与 `headerTemplate` 相同。 |
| `landscape` | boolean | false | 纸张方向。`false`（默认）为纵向；`true` 为横向。 |
| `margin` | object | 0 | 页边距。对象含 `top`、`right`、`bottom`、`left`，值支持 px、in、cm、mm。默认四边均为 `0`。 |
| `pageRanges` | Array<Object> | [] | 打印页面范围，如 `[{from:1,to:5},{from:6,to:6},{from:7,to:10}]`。空数组（默认）表示打印全部页面。 |
| `preferCSSPageSize` | boolean | false | 为 `true` 时，文档中 CSS `@page` 声明的尺寸优先于 `width`、`height`、`paperFormat`。为 `false`（默认）时，内容会缩放以适应配置的纸张尺寸。 |
| `printBackground` | boolean | false | 是否打印背景图形，包括 CSS 背景色和背景图片。 |
| `watermark` | object | - | 文本或图片水印。**文本：** `{ text, color, x, y, size, rows, cols, xSpace, ySpace, angle, opacity }`。**图片：** `{ base64, x, y, rows, cols, xSpace, ySpace, width, height, angle, opacity }`。`x`/`y` 可为数值或对齐关键字：`alignCenter`、`alignLeft`、`alignRight`、`alignTop`、`alignBottom`。 |
| `pageNumber` | object | - | 页码叠加。示例：`{ start: 1, x, y, format: '{{page}}/{{totalPage}}', color, size, xSpace, ySpace, opacity }`。`x`/`y` 支持与 `watermark` 相同的对齐关键字。 |

### 打印选项 (printOptions)

| 选项 | 类型 | 默认值 | 描述 |
|:-----|:---|:------|:-----|
| `paperFormat` | string | - | 纸张尺寸：A2、A3、A4、A5、A6、Letter、Legal、Tabloid、Ledger、Statement，以及所选打印机支持的其他格式。打印机特有尺寸（如 `"10x14"`、`"信封 B6"`）请调用 `utils.getPrinterPapers(printer)`（`printer` 为 `utils.getPrinterList()` 返回项），使用结果中的 `name` 作为参数。也可在客户端界面预览可选列表。若传入不支持的值，将使用打印机默认纸张。 |
| `colorful` | boolean | false | 彩色或黑白打印。`false`（默认）为黑白；`true` 为彩色。 |
| `landscape` | boolean | false | 内容方向。`false`（默认）为纵向。此选项控制内容排版，**不**旋转物理纸张——纸张旋转请在打印机默认设置中配置。 |
| `printerName` | string | - | 目标打印机名称（与 `utils.getPrinterList()` 返回值一致）。省略则使用系统默认打印机。 |
| `pageRanges` | Array<Object> | [] | 打印页面范围，格式同 pdfOptions 的 `pageRanges`。空数组（默认）表示打印全部页面。 |
| `copies` | number | - | 打印份数。 |
| `duplexMode` | string | 'simplex' | 单双面模式：`"simplex"` — 单面（默认）；`"duplex"` — 双面；`"duplexshort"` — 沿短边翻转；`"duplexlong"` — 沿长边翻转。 |
| `scaleMode` | string | 'shrink' | 缩放模式：`"noscale"` — 原始页面大小；`"shrink"` — 必要时缩小至可打印区域（默认）；`"fit"` — 调整页面以填满可打印区域。将 `extraOptions.action` 设为 `"preview"` 可直观对比各模式效果。 |
| `bin` | number\|string | - | 纸盘（进纸托盘），可为托盘编号或名称，取决于打印机驱动。 |

### 额外选项 (extraOptions)

| 选项 | 类型 | 默认值 | 描述 |
|:-----|:---|:------|:-----|
| `devtool` | boolean | false | 渲染 HTML 时打开浏览器 DevTools（仅开发调试用）。仅对本地 Chrome 和 Edge PDF 引擎有效。 |
| `requestTimeout` | number | 15 | 加载 URL 时 HTTP/XHR 请求的网络超时（秒），默认 `15`。应大于或等于被打印页面中配置的 xhr 超时时间。 |
| `cookies` | object | - | 随请求发送的 Cookie 对象，如 `{ sessionId: 'abc123' }`。 |
| `localStorages` | object | - | 注入到被打印页面的 `localStorage` 键值对，如 `{ theme: 'dark' }`。每页还会默认注入 `{ '_printMode_': 'true' }`，便于页面脚本识别打印模式并调整 UI。 |
| `sessionStorages` | object | - | 注入到被打印页面的 `sessionStorage` 键值对，用法同 `localStorages`。 |
| `httpHeaders` | object | - | 每个请求附加的 HTTP 头，如 `{ Authorization: 'Bearer token' }`。**所有 header 值必须是字符串。** |
| `action` | string | 'print' | 任务行为：`"print"`（默认）— 直接打印；`"preview"` — 返回预览地址。客户端根据返回的预览地址决定如何展示预览。 |
| `[key]` | string | - | 任意自定义键值对。自定义字段会随响应中的 `extraOptions` 原样返回，便于在应用中关联请求。 |

## 🛠️ 工具方法

### 连接状态监控

```javascript
// 获取连接状态（可选，因为每个方法都会主动验证连接成功）
const status = await webPrintPdf.utils.getConnectStatus();
console.log('连接状态:', status);
```

### 客户端设置

```javascript
// 设置客户端标题
await webPrintPdf.utils.setTitle('Web Print PDF Client'); // 设置 null 以恢复
// 或 await webPrintPdf.utils.setTitle('<div>Web Print PDF Client</div>');

// 设置主题色
await webPrintPdf.utils.setThemeColor('rgb(229,182,80)'); // 设置 null 以恢复

// 切换标签页可见性（共 5 个标签页，可以自由控制显示或隐藏）
await webPrintPdf.utils.switchTabsVisibility([
    {
        name:'BasicInfo', // 'BasicInfo', 'Printers', 'Logs', 'Run Example', 'ContactUs'
        visible: false ,  // true/false
    }
]); // 设置 null 以恢复

// 设置"联系我们"页面内容（支持完全控制此页面）
await webPrintPdf.utils.setContactUsTabInnerHtml(
    '<h2>联系我们</h2><p>邮箱: support@example.com</p>'
); // 设置 null 以恢复
```

### 获取打印机列表

```javascript
// 获取客户端所有可用打印机
const printerList = await webPrintPdf.utils.getPrinterList();
console.log('打印机列表:', printerList);

// 返回格式示例：
// [
//   { name: 'HP LaserJet Pro', driverName: 'HP LaserJet Pro PCL6' },
//   { name: 'Microsoft Print to PDF', driverName: 'Microsoft Print To PDF' }
// ]
```

### 获取打印机纸张

```javascript
// 获取指定打印机支持的所有纸张类型
// printer: { name: "", driverName: "" } — getPrinterList 返回结果中的一项
const papers = await webPrintPdf.utils.getPrinterPapers({
    name: 'HP LaserJet Pro',
    driverName: 'HP LaserJet Pro PCL6'
});
console.log('纸张类型:', papers);

// 返回格式示例：
// [
//   { name: 'A4', width: 210, height: 296, unit: 'mm' },
//   { name: 'Letter', width: 216, height: 279, unit: 'mm' }
// ]
```

### 事件

如果不想使用 async，可以通过事件监听响应

- 设置响应回调

  ```javascript
  webPrintPdf.utils.onResponse((response) => {
      console.log('收到响应:', response);
  });
  ```

- 设置错误回调

  ```javascript
  webPrintPdf.utils.onError((error) => {
      console.error('发生错误:', error);
  });
  ```

## 🌐 支持的技术

- **框架**：Vue.js、React、Angular、Svelte、Next.js、Nuxt.js
- **语言**：JavaScript (ES5+)、TypeScript
- **浏览器**：Chrome、Firefox、Safari、Edge、Opera（需要 WebSocket 支持）
- **模块系统**：ES Modules
- **构建工具**：Webpack、Vite、Rollup、Parcel、esbuild

## ❓ 常见问题 (FAQ)

### 需要后端或其他软件吗？
不需要后端 — web-print-pdf 完全在浏览器中运行。执行 `npm install web-print-pdf` 后，每位终端用户须在本机安装并运行 [Web 打印专家客户端](http://webprintpdf.com/downloadApp/)。库通过 `ws://127.0.0.1:16794` 连接客户端；客户端未启动时打印请求会失败。

### web-print-pdf 和 Print.js、jsPDF 有什么区别？
**Print.js** 调用浏览器原生打印对话框，无法实现静默打印、批量任务或对物理打印机的精细控制。**jsPDF** 在 JavaScript 中生成 PDF 供下载或预览，不会将任务发送到本地打印机。**web-print-pdf** 通过 WebSocket 连接 Web 打印专家客户端，支持静默打印、选择打印机/纸张、批量打印、水印等企业级打印能力。

### 支持 TypeScript 吗？
支持。包内包含完整类型定义，无需单独安装 `@types` 包。

### 可以不弹出打印对话框吗？
可以。通过 Web 打印专家客户端实现静默打印，不会弹出浏览器打印对话框。

### 支持哪些纸张尺寸？
支持 A4、Letter、Legal、A3、A5 等标准尺寸，也可通过 `width`/`height` 自定义。打印机特有格式可用 `utils.getPrinterPapers()` 查询。

### 可以添加水印吗？
可以。通过 `pdfOptions.watermark` 配置文本或图片水印，支持位置、透明度、行列数和角度等。

### 支持批量打印吗？
支持。向 `batchPrint()` 传入多个任务，可一次打印 HTML、URL、Base64、图片或 PDF。

### 支持打印图片和已有 PDF 吗？
支持。除 HTML 方法外，还可使用 `printImageByUrl` / `printImageByBase64` 和 `printPdfByUrl` / `printPdfByBase64`。

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！我们欢迎各种形式的贡献：

- 🐛 错误报告和修复
- ✨ 功能请求和实现
- 📖 文档改进
- 🌍 翻译和国际化
- 💡 示例代码和教程

详细的贡献指南请参见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 📄 许可证

MIT License - 详见 [LICENSE](https://github.com/weixiaoyi/web-print-pdf/blob/master/LICENSE) 文件

---

**用 ❤️ 为 JavaScript 社区制作** | [报告错误](https://github.com/weixiaoyi/web-print-pdf/issues) | [请求功能](https://github.com/weixiaoyi/web-print-pdf/issues) | [文档](http://webprintpdf.com/)
