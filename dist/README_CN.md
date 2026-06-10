# web-print-pdf - JavaScript HTML 转 PDF 打印库

<div align="center">
  <strong>
    <a href="README_CN.md">🇨🇳 中文</a> | 
    <a href="README.md">🇺🇸 English</a>
  </strong>
</div>

<br>

[![npm version](https://img.shields.io/npm/v/web-print-pdf.svg)](https://www.npmjs.com/package/web-print-pdf)
[![license](https://img.shields.io/npm/l/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/network)
[![GitHub issues](https://img.shields.io/github/issues/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/pulls)
[![npm downloads](https://img.shields.io/npm/dm/web-print-pdf.svg)](https://www.npmjs.com/package/web-print-pdf)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Framework Agnostic](https://img.shields.io/badge/Framework-Agnostic-green.svg)](https://github.com/weixiaoyi/web-print-pdf)

> 🖨️ **强大的 JavaScript HTML 转 PDF 打印库** - 将 HTML 转换为 PDF，打印网页、图片和文档，支持 WebSocket。需安装 [Web 打印专家客户端](http://webprintpdf.com/downloadApp/) 实现静默/本地打印。可与 Vue、React、Angular 和所有现代 JavaScript 框架无缝集成。

## 🎯 概述

**web-print-pdf** 是一个全面的 JavaScript 打印库，使 Web 应用能够将 HTML 内容转换为高质量的 PDF 文档，并通过 Web 打印专家客户端将打印任务发送到本地打印机。非常适合需要静默打印和生产级打印控制的发票打印、报表生成、文档管理系统等 Web 应用。

### 🌟 为什么选择 web-print-pdf？

- **零配置** - 开箱即用，具有合理的默认设置
- **框架无关** - 兼容 Vue.js、React、Angular、Svelte 和原生 JavaScript
- **生产就绪** - 在企业应用中经过实战测试
- **TypeScript 支持** - 包含完整的类型定义
- **积极开发** - 定期更新和社区支持

## 🔑 主要应用场景

- 📄 **发票和收据打印** - 生成具有自定义样式的专业发票
- 📊 **报表生成** - 创建详细的业务报表和分析文档
- 🏷️ **标签和条形码打印** - 打印运输标签、产品标签和条形码
- 📋 **表单打印** - 打印填写的表单、合同和法律文件
- 🎫 **票据生成** - 创建活动门票、登机牌和优惠券
- 📈 **仪表板导出** - 将仪表板数据和图表导出为 PDF

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

## 📋 系统要求

- 现代浏览器支持（需要 WebSocket 支持）
- 需要安装 [Web 打印专家客户端](http://webprintpdf.com/downloadApp/)

## 📱 客户端下载

本库需要配合 [Web 打印专家客户端](http://webprintpdf.com/downloadApp/) 使用，客户端支持中英文界面。

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

| 选项 | 类型 | 默认值 | 描述 | 详细描述 |
|:-----|:---|:------|:-----|:-----|
| `paperFormat` | string | 'A4' | 纸张格式：Letter、Legal、Tabloid、Ledger、A0、A1、A2、A3、A4、A5、A6 | string (可选)，纸张格式。如果设置，优先于 width 或 height 选项。默认为 'A4'，Letter、Legal、Tabloid、Ledger、A0、A1、A2、A3、A4、A5、A6。（仅支持这些固定格式，其他格式可以通过 width、height 自定义，paperFormat 优先于自定义尺寸） |
| `width` | string\|number | - | 纸张宽度，支持单位：px、in、cm、mm | string \| number (可选) 纸张宽度，接受带单位的值 px、in、cm、mm。（注意：使用自定义尺寸时，不需要设置 paperFormat） |
| `height` | string\|number | - | 纸张高度，支持单位：px、in、cm、mm | string \| number (可选)，纸张高度，接受带单位的值 px、in、cm、mm。（注意：使用自定义尺寸时，不需要设置 paperFormat） |
| `displayHeaderFooter` | boolean | false | 是否显示页眉页脚 | boolean (可选)，显示页眉和页脚。默认为 false |
| `headerTemplate` | string | - | 页眉 HTML 模板，支持特殊类：date、title、url、pageNumber、totalPages | string (可选)，打印页眉的 HTML 模板，应该是有效的 HTML 标记，使用以下类来注入打印值：'date'：格式化的打印日期；'title'：文档标题；'url'：文档位置；'pageNumber'：当前页码；'totalPages'：文档总页数。例如：<span class="pageNumber"></span>。（页眉模板 html 字符串，支持插入特殊类自动实现日期、页面、总页数等显示功能） |
| `footerTemplate` | string | - | 页脚 HTML 模板，格式与 headerTemplate 相同 | string (可选)，打印页脚的 HTML 模板。应使用与 headerTemplate 相同的格式 |
| `landscape` | boolean | false | 是否横向打印，默认 false（纵向） | boolean (可选)，纸张方向。默认为 false。（是否横向，默认 false，纵向） |
| `margin` | object | 0 | 页边距，支持单位：px、in、cm、mm | Object (可选)，纸张边距，默认为无。top、right、bottom、left，接受带单位的边距值 px、in、cm、mm。默认为 0（pdf 边距） |
| `pageRanges` | Array<Object> | [] | 打印页面范围，例如：[{from:1,to:5},{from:6,to:6}] | Array<Object> (可选)，要打印的纸张范围，例如，[{from:1,to:5},{from:6,to:6},{from:7,to:10}]。默认为空，表示打印所有页面。（打印页面范围，默认全部） |
| `preferCSSPageSize` | boolean | false | 优先使用 CSS @page 尺寸 | boolean (可选)，优先使用页面中声明的任何 CSS @page 尺寸，而不是 width、height 或 format 选项中声明的尺寸。默认为 false，将缩放内容以适合纸张尺寸 |
| `printBackground` | boolean | false | 是否打印背景图形 | boolean (可选)，打印背景图形。默认为 false。（是否打印背景色） |
| `watermark` | object | - | 水印设置（文本或图片水印） | Object (可选)，例如：文本水印：{ text:"hello, this is watermark", color:'rgb(0,0,0)', x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', size: 20, rows: 4, cols:4, xSpace:20, ySpace:20, angle: 45, opacity:0.5  } 或图片水印 { base64: "", x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', rows: 4, cols:4, angle: 45, xSpace:20, ySpace:20, width: 100, height: 100, opacity:0.5  }。（文本水印或图片水印） |
| `pageNumber` | object | - | 页码设置 | Object (可选)，例如：{ start: 1, x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', format: '{{page}}/{{totalPage}}', color:'rgb(0,0,0)', size: 20, xSpace: 0, ySpace:0, opacity:1 }。（页码） |

### 打印选项 (printOptions)

| 选项 | 类型 | 默认值 | 描述 | 详细描述 |
|:-----|:---|:------|:-----|:-----|
| `paperFormat` | string | - | 纸张格式：A2、A3、A4、A5、A6、Letter、Legal、Tabloid、Ledger、Statement，以及所选打印机支持的所有纸张格式 | string (可选)，A2、A3、A4、A5、A6、Letter、Legal、Tabloid、Ledger、Statement。打印机特有格式可通过 `utils.getPrinterPapers(printer)` 动态获取（`printer` 来自 `utils.getPrinterList()` 返回项），使用返回结果中的 `name` 作为参数，例如 "10x14"、"信封 B6"。也可在客户端预览页查看可选列表。如果输入不支持的格式，实际打印格式取决于打印机的默认纸张设置 |
| `colorful` | boolean | false | 彩色或黑白，默认 false（黑白） | boolean (可选)，默认为 false。彩色或黑白（彩色或黑白，默认 false，黑白） |
| `landscape` | boolean | false | 是否横向，默认 false（纵向） | boolean (可选)，内容方向，而不是纸张的旋转，必须通过打印机默认设置预先设置。默认为 false。（是否横向，默认 false，纵向） |
| `printerName` | string | - | 指定打印机名称，默认为默认打印机 | string (可选)，指定打印机。（指定打印机名称，默认为默认打印机） |
| `pageRanges` | Array<Object> | [] | 打印页面范围，例如：[{from:1,to:5},{from:6,to:6},{from:7,to:10}] | Array<Object> (可选)，要打印的纸张范围，例如，[{from:1,to:5},{from:6,to:6},{from:7,to:10}]。默认为空，表示打印所有页面。（页面范围，默认全部） |
| `copies` | number | - | 打印份数 | number(可选)，打印的份数（打印份数） |
| `duplexMode` | string | 'simplex' | 单双面模式：simplex（单面）、duplex（双面）、duplexshort（沿短边双面）、duplexlong（沿长边双面） | enums string (可选)，"simplex"（单面打印，默认）、"duplex"（双面）、"duplexshort"（沿短边双面打印）、"duplexlong"（沿长边双面打印） |
| `scaleMode` | string | 'shrink' | 缩放模式：noscale（原始大小）、shrink（缩小至可打印区域）、fit（调整至可打印区域） | enums string (可选)，noscale：使用原始页面大小，shrink：将页面缩小至可打印区域（如果需要），fit：调整页面至可打印区域。（默认 shrink），具体差异可以通过将 extraOptions 的 action 参数设置为 'preview' 查看 |
| `bin` | number\|string | - | 选择要打印到的纸盘 | num or name (可选)，选择要打印到的纸盘 |

### 额外选项 (extraOptions)

| 选项 | 类型 | 默认值 | 描述 | 详细描述 |
|:-----|:---|:------|:-----|:-----|
| `devtool` | boolean | false | 开发者工具，用于开发调试 HTML，仅对本地 chrome 和 edge PDF 引擎有用 | boolean (可选)，在开发中使用，调试 html 时可用。默认为 false。（开发者工具用于开发调试 html，仅对本地 chrome 和 edge PDF 引擎有用） |
| `requestTimeout` | number | 15 | 网络超时（秒），默认 15 秒，应大于或等于页面中的 xhr 超时设置 | number (可选)，请求网络超时（http、xhr），默认 15（网络超时，默认 15 秒。此参数应大于或等于页面中的 xhr 超时设置） |
| `cookies` | object | - | Cookie 对象，例如：{ key1:value1, key2:value2 } | Object (可选)，cookie 对象。例如：{ key1:value1, key2:value2 } |
| `localStorages` | object | - | localStorage 对象，例如：{ key1:value1, key2:value2 }，所有页面都有默认的 { '_printMode_': 'true' } | Object (可选)，localStorage 对象。例如：{ key1:value1, key2:value2 }，每个页面都有一个默认的 localStorage 键值对 { '_printMode_' : 'true' }，用于在 UI 中进行区分。为了方便区分打印区域，所有页面都有一个默认的 { '_printMode_' : 'true' } localStorage 值可用 |
| `sessionStorages` | object | - | sessionStorage 对象，例如：{ key1:value1, key2:value2 } | Object (可选)，sessionStorage 对象。例如：{ key1:value1, key2:value2 } |
| `httpHeaders` | object | - | HTTP 请求头设置，例如：{ Authorization: 'string' }，所有 header 值必须是字符串 | Object (可选)，包含每个请求要发送的额外 HTTP 头的对象。例如：{ Authorization: 'string' }，所有 header 值必须是字符串。请求头设置 {key,value} |
| `action` | string | 'print' | 行为：print（打印）、preview（预览），默认 print | enums string (可选)，"print"、"preview"，默认 'print'。客户端可以根据返回的预览地址决定预览行为。（行为：打印或预览，默认打印，客户端可以根据返回的预览地址决定预览行为） |
| `[key]` | string | - | 可以添加任意键值对，将与 extraOptions 一起原样返回 | (可选)，您想添加的任何键值对。当 extraOptions 返回时可能有用（可以添加任何想添加的 key:value，将与 extraOptions 一起原样返回） |

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
``` javascript
webPrintPdf.utils.onResponse((response) => {
    console.log('收到响应:', response);
});
```

- 设置错误回调
``` javascript
webPrintPdf.utils.onError((error) => {
    console.error('发生错误:', error);
});
```

## 💡 常见应用场景与解决方案

以下场景均支持通过 [Web 打印专家客户端](http://webprintpdf.com/downloadApp/) 实现静默打印、批量任务和本地打印机控制。

### 电子商务应用
- **订单发票**：为客户订单生成可打印的发票
- **运输标签**：创建带条形码的运输标签
- **装箱单**：打印仓库履行的订单详情

### 商业与企业
- **财务报表**：导出财务报表和资产负债表
- **业务分析**：打印仪表板报表和 KPI 摘要
- **员工文档**：生成工资单、合同和证书

### 医疗保健与教育
- **医疗记录**：打印患者记录和处方
- **实验报告**：生成测试结果和医疗报告
- **学生证书**：创建文凭和成就证书

### 法律与政府
- **合同**：打印格式正确的法律文档
- **表单**：生成政府表单和申请
- **证书**：创建官方证书和许可证

## 🌐 支持的技术

- **框架**：Vue.js、React、Angular、Svelte、Next.js、Nuxt.js
- **语言**：JavaScript (ES5+)、TypeScript
- **浏览器**：Chrome、Firefox、Safari、Edge、Opera（需要 WebSocket 支持）
- **模块系统**：ES Modules
- **构建工具**：Webpack、Vite、Rollup、Parcel、esbuild

## ❓ 常见问题 (FAQ)

### 我可以在没有后端的情况下使用这个库吗？
无需自建后端服务——web-print-pdf 在浏览器中运行。但每位用户必须在本机安装并运行 [Web 打印专家客户端](http://webprintpdf.com/downloadApp/)，打印功能才能正常工作。

### 它可以与 TypeScript 一起使用吗？
当然可以！包中包含完整的 TypeScript 类型定义。

### 我可以在不显示打印对话框的情况下打印吗？
可以，通过客户端应用设置支持静默打印。

### 支持哪些纸张尺寸？
支持所有标准纸张尺寸，包括 A4、Letter、Legal、A3、A5 和自定义尺寸。

### 我可以在打印的文档中添加水印吗？
可以，支持文本和图片水印，具有可自定义的位置和不透明度。

### 支持批量打印吗？
可以，您可以使用 `batchPrint()` 方法在单个操作中打印多个文档。

### 它支持打印图片和现有的 PDF 吗？
可以，该库支持打印 HTML、图片（URL 或 Base64）和 PDF 文件（URL 或 Base64）。

### web-print-pdf 和 Print.js、jsPDF 有什么区别？
**Print.js** 调用浏览器原生打印对话框，完全在浏览器内运行，无法实现静默打印、批量任务或对物理打印机的精细控制。**jsPDF** 在 JavaScript 中生成 PDF 文件供下载或预览，不会将任务发送到本地打印机。**web-print-pdf** 通过 WebSocket 连接 [Web 打印专家客户端](http://webprintpdf.com/downloadApp/)，支持静默打印、选择打印机/纸张、批量打印、水印等企业级打印能力。

### 除了 npm install，还需要安装什么吗？
需要。执行 `npm install web-print-pdf` 之后，每位终端用户还需在本机安装并运行 [Web 打印专家客户端](http://webprintpdf.com/downloadApp/)。库通过 `ws://127.0.0.1:16794` 与客户端通信——若客户端未启动，打印请求将失败。

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！我们欢迎各种形式的贡献：

- 🐛 错误报告和修复
- ✨ 功能请求和实现
- 📖 文档改进
- 🌍 翻译和国际化
- 💡 示例代码和教程

详细的贡献指南请参见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 📄 许可证

MIT License - 详见 [LICENSE](https://github.com/weixiaoyi/web-print-pdf/blob/main/LICENSE) 文件

---

**用 ❤️ 为 JavaScript 社区制作** | [报告错误](https://github.com/weixiaoyi/web-print-pdf/issues) | [请求功能](https://github.com/weixiaoyi/web-print-pdf/issues) | [文档](http://webprintpdf.com/)
