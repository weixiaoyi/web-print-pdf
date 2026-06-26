# web-print-pdf — Silent Web Printing SDK for JavaScript

<div align="center">
  <strong>
    <a href="README.md">🇺🇸 English</a> | 
    <a href="README_CN.md">🇨🇳 中文</a>
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

> 🖨️ **Silent browser printing via local WebSocket print agent** — Send HTML, PDF, and images from any web app directly to local printers **without the browser print dialog**. Requires the [Web Print Expert Client](https://webprintpdf.com/en/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=intro) ([中文下载](https://webprintpdf.com/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=intro)). Works with Vue, React, Angular, and vanilla JavaScript. Ideal for invoices, receipts, labels, and kiosk/POS workflows.

## 🎯 Overview

**web-print-pdf** is a JavaScript **silent printing SDK** that connects your web application to the **Web Print Expert Client** over WebSocket (`ws://127.0.0.1:16794`). It targets production workflows that need **no-dialog printing**, printer and paper selection, batch jobs, receipts, labels, and watermarks — not PDF file download (jsPDF) or server-side PDF generation (Puppeteer).

> **Not a PDF download library.** If users only need a PDF file in the browser, use jsPDF or html2pdf.js. Choose web-print-pdf when jobs must reach a **physical local printer** silently.

### Why web-print-pdf?

- **Silent by Default** — no browser print dialog when the client is running
- **Local Print Agent** — WebSocket bridge to desktop printers via Electron client
- **Framework Agnostic** — Vue, React, Angular, Svelte, Next.js, Nuxt, or vanilla JavaScript
- **Production Ready** — battle-tested in enterprise invoice, receipt, and label workflows
- **TypeScript Support** — full type definitions included
- **HTML/CSS First** — control print layout with familiar web technologies, no proprietary template language

## ✨ Features

- 🖨️ **Multiple Printing Methods**: HTML string, URL, Base64, images, and existing PDF files
- 📄 **HTML-to-Print Pipeline**: Renders HTML/CSS locally and sends output to the physical printer (not a PDF download tool)
- 🖼️ **Image Printing**: Support image URL and Base64 format printing
- 📦 **Batch Printing**: Support batch task processing
- 🔧 **Flexible Configuration**: Rich print and layout options — see [print options guide](https://webprintpdf.com/en/docs/print-options/?utm_source=npm&utm_medium=readme&utm_campaign=features)
- 🌐 **WebSocket Communication**: Real-time connection status monitoring
- 🔕 **Silent Printing**: Local client-based silent printing without browser print dialogs
- 🎨 **Custom Styling**: Support custom headers, footers, margins and client theme colors, titles, etc.
- 🚀 **Simple API Design**: API consistency, frontend developer friendly, low learning curve
- 🎯 **HTML/CSS Control**: Control print layout through HTML and CSS — same skills as your web UI
- ⚡ **Async Support**: Support complete Promise/async-await syntax while maintaining event listening mechanism

## 🔑 Use Cases

- **E-commerce** — [shipping labels & batch labels](https://webprintpdf.com/en/docs/ecommerce-shipping-label/?utm_source=npm&utm_medium=readme&utm_campaign=use-cases)
- **Business & Enterprise** — [ERP invoices & statements](https://webprintpdf.com/en/docs/invoice-erp-print/?utm_source=npm&utm_medium=readme&utm_campaign=use-cases), financial reports, payslips
- **Healthcare & Education** — [prescriptions & pharmacy labels](https://webprintpdf.com/en/docs/medical-prescription-print/?utm_source=npm&utm_medium=readme&utm_campaign=use-cases)
- **Logistics & WMS** — [remote label printing from server push](https://webprintpdf.com/en/docs/wms-remote-print/?utm_source=npm&utm_medium=readme&utm_campaign=use-cases)
- **Retail & POS** — [80mm thermal receipts](https://webprintpdf.com/en/docs/retail-pos-receipt/?utm_source=npm&utm_medium=readme&utm_campaign=use-cases)
- **General** — tickets, barcodes, [thermal receipts & waybills](https://webprintpdf.com/en/docs/thermal-receipt-print/?utm_source=npm&utm_medium=readme&utm_campaign=use-cases)

## 🔀 Choose the Right Tool

| Your goal | Best option | web-print-pdf? |
|-----------|-------------|----------------|
| Silent print to a **physical local printer**, no dialog | web-print-pdf + [Web Print Expert Client](https://webprintpdf.com/en/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=tool-table) | ✅ |
| User **downloads** a PDF in the browser | [jsPDF](https://webprintpdf.com/en/docs/jspdf-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=tool-table), html2pdf.js | ❌ |
| **Server-side** PDF file generation | [Puppeteer / Playwright](https://webprintpdf.com/en/docs/puppeteer-print-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=tool-table) | ❌ |
| Simple print with the **browser dialog** | [Print.js](https://webprintpdf.com/en/docs/printjs-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=tool-table) (print-js) | ❌ |
| Raw ESC/POS or certificate-based agent | QZ Tray, JSPrintManager | ⚠️ See FAQ |

## 📋 Requirements

- Modern browser with WebSocket support
- [Web Print Expert Client](https://webprintpdf.com/en/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=requirements) installed locally (Chinese/English UI)
- **Client platforms**: **Windows** 10/11 (exe), **Linux** x64 (deb — Ubuntu, Debian, Kylin, UOS, and other distros), **macOS** Intel & Apple Silicon (dmg). The same `web-print-pdf` API works on all three platforms.

## 🔗 Official Website Resources

> **Documentation languages:** English docs live under `/en/docs/…`; 中文文档在 `/docs/…`（无 `/en` 前缀）。每项均提供 **English · 中文** 双语链接。

Documentation hub: [English — webprintpdf.com/en/docs](https://webprintpdf.com/en/docs/?utm_source=npm&utm_medium=readme&utm_campaign=docs-hub) · [中文 — webprintpdf.com/docs](https://webprintpdf.com/docs/?utm_source=npm&utm_medium=readme&utm_campaign=docs-hub)

### 🧪 Online Demo Center

- [Online Demo Center — 25 runnable demos](https://webprintpdf.com/en/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=demos) · [中文](https://webprintpdf.com/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=demos)

### ⚙️ Advanced Configuration

- [Print options (`pdfOptions` & `printOptions`)](https://webprintpdf.com/en/docs/print-options/?utm_source=npm&utm_medium=readme&utm_campaign=advanced) · [中文](https://webprintpdf.com/docs/print-options/?utm_source=npm&utm_medium=readme&utm_campaign=advanced)
- [Frontend error handling](https://webprintpdf.com/en/docs/error-handling/?utm_source=npm&utm_medium=readme&utm_campaign=advanced) · [中文](https://webprintpdf.com/docs/error-handling/?utm_source=npm&utm_medium=readme&utm_campaign=advanced)
- [Printing authenticated URLs (cookies / headers)](https://webprintpdf.com/en/docs/auth-url-print/?utm_source=npm&utm_medium=readme&utm_campaign=advanced) · [中文](https://webprintpdf.com/docs/auth-url-print/?utm_source=npm&utm_medium=readme&utm_campaign=advanced)
- [Remote print configuration (WebSocket / HTTP)](https://webprintpdf.com/en/docs/remote-print/?utm_source=npm&utm_medium=readme&utm_campaign=advanced) · [中文](https://webprintpdf.com/docs/remote-print/?utm_source=npm&utm_medium=readme&utm_campaign=advanced)
- [printHtml API reference](https://webprintpdf.com/en/docs/api-printHtml/?utm_source=npm&utm_medium=readme&utm_campaign=advanced) · [中文](https://webprintpdf.com/docs/api-printHtml/?utm_source=npm&utm_medium=readme&utm_campaign=advanced)
- [batchPrint API reference](https://webprintpdf.com/en/docs/api-batchPrint/?utm_source=npm&utm_medium=readme&utm_campaign=advanced) · [中文](https://webprintpdf.com/docs/api-batchPrint/?utm_source=npm&utm_medium=readme&utm_campaign=advanced)
- [WebSocket connection troubleshooting](https://webprintpdf.com/en/docs/troubleshoot-websocket/?utm_source=npm&utm_medium=readme&utm_campaign=advanced) · [中文](https://webprintpdf.com/docs/troubleshoot-websocket/?utm_source=npm&utm_medium=readme&utm_campaign=advanced)

### ⚖️ Comparison & Selection

- [Lodop vs web-print-pdf](https://webprintpdf.com/en/docs/lodop-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=comparison) · [中文](https://webprintpdf.com/docs/lodop-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=comparison)
- [window.print alternatives & silent printing](https://webprintpdf.com/en/docs/window-print-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=comparison) · [中文](https://webprintpdf.com/docs/window-print-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=comparison)
- [hiprint vs web-print-pdf](https://webprintpdf.com/en/docs/hiprint-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=comparison) · [中文](https://webprintpdf.com/docs/hiprint-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=comparison)
- [Print.js vs web-print-pdf](https://webprintpdf.com/en/docs/printjs-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=comparison) · [中文](https://webprintpdf.com/docs/printjs-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=comparison)
- [jsPDF vs web-print-pdf](https://webprintpdf.com/en/docs/jspdf-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=comparison) · [中文](https://webprintpdf.com/docs/jspdf-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=comparison)
- [Puppeteer / Playwright vs web-print-pdf](https://webprintpdf.com/en/docs/puppeteer-print-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=comparison) · [中文](https://webprintpdf.com/docs/puppeteer-print-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=comparison)
- [C-Lodop & Chrome compatibility](https://webprintpdf.com/en/docs/clodop-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=comparison) · [中文](https://webprintpdf.com/docs/clodop-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=comparison)
- [Lodop parallel migration guide](https://webprintpdf.com/en/docs/lodop-migration/?utm_source=npm&utm_medium=readme&utm_campaign=comparison) · [中文](https://webprintpdf.com/docs/lodop-migration/?utm_source=npm&utm_medium=readme&utm_campaign=comparison)

### 🧩 Framework Integration

- [Vue silent printing](https://webprintpdf.com/en/docs/vue-silent-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework) · [中文](https://webprintpdf.com/docs/vue-silent-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework)
- [React silent printing](https://webprintpdf.com/en/docs/react-silent-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework) · [中文](https://webprintpdf.com/docs/react-silent-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework)
- [Next.js silent printing](https://webprintpdf.com/en/docs/nextjs-silent-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework) · [中文](https://webprintpdf.com/docs/nextjs-silent-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework)
- [Angular silent printing](https://webprintpdf.com/en/docs/angular-silent-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework) · [中文](https://webprintpdf.com/docs/angular-silent-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework)
- [UniApp H5 printing](https://webprintpdf.com/en/docs/uniapp-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework) · [中文](https://webprintpdf.com/docs/uniapp-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework)
- [Element Plus integration](https://webprintpdf.com/en/docs/element-plus-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework) · [中文](https://webprintpdf.com/docs/element-plus-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework)
- [Ant Design integration](https://webprintpdf.com/en/docs/ant-design-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework) · [中文](https://webprintpdf.com/docs/ant-design-print/?utm_source=npm&utm_medium=readme&utm_campaign=framework)

### 🏭 Scenario Guides

- [WMS remote shipping labels](https://webprintpdf.com/en/docs/wms-remote-print/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios) · [中文](https://webprintpdf.com/docs/wms-remote-print/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios)
- [Thermal receipts & express waybills](https://webprintpdf.com/en/docs/thermal-receipt-print/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios) · [中文](https://webprintpdf.com/docs/thermal-receipt-print/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios)
- [Medical prescriptions & pharmacy labels](https://webprintpdf.com/en/docs/medical-prescription-print/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios) · [中文](https://webprintpdf.com/docs/medical-prescription-print/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios)
- [ERP invoices & account statements](https://webprintpdf.com/en/docs/invoice-erp-print/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios) · [中文](https://webprintpdf.com/docs/invoice-erp-print/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios)
- [E-commerce shipping labels (100×150)](https://webprintpdf.com/en/docs/ecommerce-shipping-label/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios) · [中文](https://webprintpdf.com/docs/ecommerce-shipping-label/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios)
- [Retail POS 80mm thermal receipts](https://webprintpdf.com/en/docs/retail-pos-receipt/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios) · [中文](https://webprintpdf.com/docs/retail-pos-receipt/?utm_source=npm&utm_medium=readme&utm_campaign=scenarios)

### 📋 Customer Case Studies

- [Government xinchuang deployment](https://webprintpdf.com/en/docs/cases/government-xinchuang/?utm_source=npm&utm_medium=readme&utm_campaign=cases) · [中文](https://webprintpdf.com/docs/cases/government-xinchuang/?utm_source=npm&utm_medium=readme&utm_campaign=cases)
- [Logistics WMS label printing](https://webprintpdf.com/en/docs/cases/logistics-wms/?utm_source=npm&utm_medium=readme&utm_campaign=cases) · [中文](https://webprintpdf.com/docs/cases/logistics-wms/?utm_source=npm&utm_medium=readme&utm_campaign=cases)
- [Manufacturing ERP shop-floor printing](https://webprintpdf.com/en/docs/cases/manufacturing-erp/?utm_source=npm&utm_medium=readme&utm_campaign=cases) · [中文](https://webprintpdf.com/docs/cases/manufacturing-erp/?utm_source=npm&utm_medium=readme&utm_campaign=cases)

### 🖥️ Deployment Guides

- [Windows deployment](https://webprintpdf.com/en/docs/windows-deploy/?utm_source=npm&utm_medium=readme&utm_campaign=deploy) · [中文](https://webprintpdf.com/docs/windows-deploy/?utm_source=npm&utm_medium=readme&utm_campaign=deploy)
- [macOS deployment](https://webprintpdf.com/en/docs/mac-deploy/?utm_source=npm&utm_medium=readme&utm_campaign=deploy) · [中文](https://webprintpdf.com/docs/mac-deploy/?utm_source=npm&utm_medium=readme&utm_campaign=deploy)
- [Linux deployment](https://webprintpdf.com/en/docs/linux-deploy/?utm_source=npm&utm_medium=readme&utm_campaign=deploy) · [中文](https://webprintpdf.com/docs/linux-deploy/?utm_source=npm&utm_medium=readme&utm_campaign=deploy)
- [Kylin (银河麒麟) deployment](https://webprintpdf.com/en/docs/kylin-print/?utm_source=npm&utm_medium=readme&utm_campaign=deploy) · [中文](https://webprintpdf.com/docs/kylin-print/?utm_source=npm&utm_medium=readme&utm_campaign=deploy)
- [UOS (统信 UOS) deployment](https://webprintpdf.com/en/docs/uos-print/?utm_source=npm&utm_medium=readme&utm_campaign=deploy) · [中文](https://webprintpdf.com/docs/uos-print/?utm_source=npm&utm_medium=readme&utm_campaign=deploy)
- [Windows firewall troubleshooting](https://webprintpdf.com/en/docs/troubleshoot-windows-firewall/?utm_source=npm&utm_medium=readme&utm_campaign=deploy) · [中文](https://webprintpdf.com/docs/troubleshoot-windows-firewall/?utm_source=npm&utm_medium=readme&utm_campaign=deploy)

### 📦 Download & Repository

- [Official Website (EN)](https://webprintpdf.com/en/?utm_source=npm&utm_medium=readme&utm_campaign=home) · [中文官网](https://webprintpdf.com/?utm_source=npm&utm_medium=readme&utm_campaign=home)
- [Client Download (EN)](https://webprintpdf.com/en/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=download) · [客户端下载（中文）](https://webprintpdf.com/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=download)
- [Pricing (EN)](https://webprintpdf.com/en/price/?utm_source=npm&utm_medium=readme&utm_campaign=price) · [定价（中文）](https://webprintpdf.com/price/?utm_source=npm&utm_medium=readme&utm_campaign=price)
- [GitHub Repository](https://github.com/weixiaoyi/web-print-pdf)
- [npm Package](https://www.npmjs.com/package/web-print-pdf)

## 🚀 Quick Start

### Installation

Install via npm:
```bash
npm install web-print-pdf
```

Or using yarn:
```bash
yarn add web-print-pdf
```

Or using pnpm:
```bash
pnpm add web-print-pdf
```

> **Next steps:** Install the [Web Print Expert Client](https://webprintpdf.com/en/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=quickstart) ([中文下载](https://webprintpdf.com/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=quickstart) · Windows / Linux / macOS), then try the [online demo center](https://webprintpdf.com/en/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=quickstart) ([中文](https://webprintpdf.com/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=quickstart)) or read the [full documentation](https://webprintpdf.com/en/docs/?utm_source=npm&utm_medium=readme&utm_campaign=quickstart) ([中文](https://webprintpdf.com/docs/?utm_source=npm&utm_medium=readme&utm_campaign=quickstart)).

### Basic Usage Examples

#### Simple HTML silent print

```javascript
import webPrintPdf from 'web-print-pdf';

// Basic HTML printing — send HTML string to the local printer
const handlePrint = async () => {
    try {
        await webPrintPdf.printHtml('<div>Hello World!</div>');
        console.log('Print successful!');
    } catch (error) {
        console.error('Print failed:', error);
    }
};
```

#### Vue.js Integration Example

```vue
<template>
  <button @click="printInvoice">Print Invoice</button>
</template>

<script setup>
import webPrintPdf from 'web-print-pdf';

const printInvoice = async () => {
  const html = `
    <div style="padding: 20px;">
      <h1>Invoice #12345</h1>
      <p>Total: $99.99</p>
    </div>
  `;
  await webPrintPdf.printHtml(html);
};
</script>
```

#### React Integration Example

```jsx
import React from 'react';
import webPrintPdf from 'web-print-pdf';

function PrintButton() {
  const handlePrint = async () => {
    const html = `
      <div style="padding: 20px;">
        <h1>Report</h1>
        <p>Generated on ${new Date().toLocaleDateString()}</p>
      </div>
    `;
    await webPrintPdf.printHtml(html);
  };

  return <button onClick={handlePrint}>Print Report</button>;
}
```

#### Angular Integration Example

```typescript
import { Component } from '@angular/core';
import webPrintPdf from 'web-print-pdf';

@Component({
  selector: 'app-print',
  template: '<button (click)="printDocument()">Print Document</button>'
})
export class PrintComponent {
  async printDocument() {
    const html = '<h1>Document Title</h1><p>Content here...</p>';
    await webPrintPdf.printHtml(html);
  }
}
```

## 📖 API Documentation

### Main Methods

#### `printHtml(content, pdfOptions?, printOptions?, extraOptions?)`
Print HTML content

```javascript
const pdfOptions = {                // PDF property settings
    paperFormat: 'A4',              // Paper format
    landscape: false,               // Whether to print horizontally, default false, vertical
    margin: {                       // PDF paper margins
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
    },
    printBackground: true,          // Whether to print CSS background (background color, background image)
    watermark: {                    // Text watermark or image watermark
        text: "Watermark",
        ...
    },
    pageNumber: {                   // Page numbers
        format: '{{page}}/{{totalPage}}'
    },
    ...
};

const printOptions = {               // Print property settings
    paperFormat: 'A4',               // Paper format
    colorful: false,                 // Color
    duplexMode: "duplex",            // Single/double sided
    scaleMode: "shrink",             // shrink scaling, noscale original, fit auto-adjust
    ...
};

const extraOptions = {               // More additional properties
    requestTimeout: 15,              // Timeout in seconds
    cookies:{ key1:'value1',... },
    httpHeaders:{ key1:'value1',... },
    action: "preview",               // Print or preview behavior: "print", "preview"
    ...
};

await webPrintPdf.printHtml(
    '<h1>Hello World</h1><p>This is a test document</p>',
    pdfOptions,
    printOptions,
    extraOptions
);
```

#### `printHtmlByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
Print HTML page via URL

```javascript
await webPrintPdf.printHtmlByUrl(
    'https://webprintpdf.com',
    { paperFormat: 'A4', printBackground: true }
);
```

#### `printPdfByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
Print PDF file via URL

```javascript
await webPrintPdf.printPdfByUrl(
    'https://webprintpdf.com/api/fileCenter/webPrintExpert/fileCenterFileDownload/printTest.pdf',
    { paperFormat: 'A4' }
);
```

#### `printImageByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
Print image via URL

```javascript
await webPrintPdf.printImageByUrl(
    'https://webprintpdf.com/api/fileCenter/webPrintExpert/fileCenterFileDownload/printTest.png',
    { paperFormat: 'A4', printBackground: true }
);
```

#### `printHtmlByBase64(base64, pdfOptions?, printOptions?, extraOptions?)`
Print HTML content via Base64

```javascript
await webPrintPdf.printHtmlByBase64(
    'PGgxPkhlbGxvIFdvcmxkPC9oMT4=...', // html base64
    { paperFormat: 'A4' }
);
```

#### `printPdfByBase64(base64, pdfOptions?, printOptions?, extraOptions?)`
Print PDF file via Base64

```javascript
await webPrintPdf.printPdfByBase64(
    'JVBERi0xLjQKJcOkw7zDtsO...', // pdf base64
    { paperFormat: 'A4' }
);
```

#### `printImageByBase64(base64, pdfOptions?, printOptions?, extraOptions?)`
Print image via Base64

```javascript
await webPrintPdf.printImageByBase64(
    'iVBORw0KGgoAAAANSUhEUgAA...', // image base64
    { paperFormat: 'A4', printBackground: true }
);
```

#### `batchPrint(printTaskList, pdfOptions?, printOptions?, extraOptions?)`
Batch printing

```javascript
const printTasks = [
    {
        type: 'printHtml',
        content: '<h1>Document 1</h1>',
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
    { printerName: 'Default Printer',... }, // printOptions
    { requestTimeout: 15,... } // extraOptions
);
```

## 🔧 Configuration Options

### PDF Options (pdfOptions)

| Option | Type | Default | Description |
|:-----|:---|:------|:-----|
| `paperFormat` | string | 'A4' | Paper format. Supported fixed sizes: Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6. When set, takes priority over `width`/`height`. For non-standard sizes, use custom `width` and `height` instead (omit `paperFormat`). |
| `width` | string\|number | - | Paper width; accepts values with units px, in, cm, mm. Use with `height` for custom paper size; do not set `paperFormat` when using custom dimensions. |
| `height` | string\|number | - | Paper height; accepts values with units px, in, cm, mm. Use with `width` for custom paper size; do not set `paperFormat` when using custom dimensions. |
| `displayHeaderFooter` | boolean | false | Whether to display header and footer on each page. |
| `headerTemplate` | string | - | HTML template for the print header. Use special classes to inject dynamic values: `date` (formatted print date), `title` (document title), `url` (document location), `pageNumber`, `totalPages`. Example: `<span class="pageNumber"></span>/<span class="totalPages"></span>`. |
| `footerTemplate` | string | - | HTML template for the print footer; same class conventions as `headerTemplate`. |
| `landscape` | boolean | false | Paper orientation. `false` (default) = portrait; `true` = landscape. |
| `margin` | object | 0 | Page margins. Object with `top`, `right`, `bottom`, `left`; each value accepts px, in, cm, mm. Defaults to `0` on all sides. |
| `pageRanges` | Array<Object> | [] | Page ranges to print, e.g. `[{from:1,to:5},{from:6,to:6},{from:7,to:10}]`. Empty array (default) prints all pages. |
| `preferCSSPageSize` | boolean | false | When `true`, any CSS `@page` size declared in the document takes priority over `width`, `height`, and `paperFormat`. When `false` (default), content is scaled to fit the configured paper size. |
| `printBackground` | boolean | false | Whether to print background graphics, including CSS background colors and background images. |
| `watermark` | object | - | Text or image watermark. **Text:** `{ text, color, x, y, size, rows, cols, xSpace, ySpace, angle, opacity }`. **Image:** `{ base64, x, y, rows, cols, xSpace, ySpace, width, height, angle, opacity }`. For `x`/`y`, use a number or alignment keywords: `alignCenter`, `alignLeft`, `alignRight`, `alignTop`, `alignBottom`. |
| `pageNumber` | object | - | Page number overlay. Example: `{ start: 1, x, y, format: '{{page}}/{{totalPage}}', color, size, xSpace, ySpace, opacity }`. `x`/`y` support the same alignment keywords as `watermark`. |

### Print Options (printOptions)

| Option | Type | Default | Description |
|:-----|:---|:------|:-----|
| `paperFormat` | string | - | Paper size: A2, A3, A4, A5, A6, Letter, Legal, Tabloid, Ledger, Statement, plus any format supported by the selected printer. For printer-specific sizes (e.g. `"10x14"`, `"Envelope B6"`), call `utils.getPrinterPapers(printer)` where `printer` is an item from `utils.getPrinterList()` and pass the returned `name`. You can also preview available options in the client UI. If an unsupported value is given, the printer's default paper is used. |
| `colorful` | boolean | false | Color or monochrome printing. `false` (default) = monochrome; `true` = color. |
| `landscape` | boolean | false | Content orientation. `false` (default) = portrait. This controls content layout, **not** physical paper rotation — set paper rotation via the printer's default settings. |
| `printerName` | string | - | Target printer name as returned by `utils.getPrinterList()`. Omit to use the system default printer. |
| `pageRanges` | Array<Object> | [] | Page ranges to print, same format as pdfOptions `pageRanges`. Empty array (default) prints all pages. |
| `copies` | number | - | Number of copies to print. |
| `duplexMode` | string | 'simplex' | Duplex mode: `"simplex"` — single-sided (default); `"duplex"` — double-sided; `"duplexshort"` — flip on short edge; `"duplexlong"` — flip on long edge. |
| `scaleMode` | string | 'shrink' | Scaling behavior: `"noscale"` — original page size; `"shrink"` — shrink to printable area if needed (default); `"fit"` — adjust page to fill printable area. Set `extraOptions.action` to `"preview"` to compare modes visually. |
| `bin` | number\|string | - | Paper tray (bin) to print to — tray number or tray name, depending on the printer driver. |

### Extra Options (extraOptions)

| Option | Type | Default | Description |
|:-----|:---|:------|:-----|
| `devtool` | boolean | false | Open browser DevTools when rendering HTML (development only). Useful for debugging layout; only applies to the local Chrome and Edge PDF engines. |
| `requestTimeout` | number | 15 | Network timeout in seconds for HTTP/XHR requests when loading URLs (default `15`). Should be greater than or equal to any xhr timeout configured in the page being printed. |
| `cookies` | object | - | Cookie object sent with requests, e.g. `{ sessionId: 'abc123' }`. |
| `localStorages` | object | - | `localStorage` key-value pairs injected into the printed page, e.g. `{ theme: 'dark' }`. Every page also receives `{ '_printMode_': 'true' }` by default so page scripts can detect print mode and adjust UI. |
| `sessionStorages` | object | - | `sessionStorage` key-value pairs injected into the printed page, same usage as `localStorages`. |
| `httpHeaders` | object | - | Additional HTTP headers sent with every request, e.g. `{ Authorization: 'Bearer token' }`. **All header values must be strings.** |
| `action` | string | 'print' | Job behavior: `"print"` (default) — send directly to printer; `"preview"` — return a preview URL. The client determines how preview is displayed based on the returned address. |
| `[key]` | string | - | Any custom key-value pair. Custom keys are echoed back in the response together with `extraOptions`, useful for correlating requests in your application. |

## 🛠️ Utility Methods

### Connection Status Monitoring

```javascript
// Get connection status (optional, as each method will actively verify connection success)
const status = await webPrintPdf.utils.getConnectStatus();
console.log('Connection status:', status);
```

### Client Settings

```javascript
// Set client title
await webPrintPdf.utils.setTitle('Web Print PDF Client'); // Set null to restore
// or await webPrintPdf.utils.setTitle('<div>Web Print PDF Client</div>');

// Set theme color
await webPrintPdf.utils.setThemeColor('rgb(229,182,80)'); // Set null to restore

// Toggle tab visibility (5 tab pages total, can freely control show or hide)
await webPrintPdf.utils.switchTabsVisibility([
    {
        name:'BasicInfo', // 'BasicInfo', 'Printers', 'Logs', 'Run Example', 'ContactUs'
        visible: false ,  // true/false
    }
]); // Set null to restore

// Set "Contact Us" page content (supports complete control of this page)
await webPrintPdf.utils.setContactUsTabInnerHtml(
    '<h2>Contact Us</h2><p>Email: support@example.com</p>'
); // Set null to restore
```

### Get Printer List

```javascript
// Get all printers available on the client
const printerList = await webPrintPdf.utils.getPrinterList();
console.log('Printer list:', printerList);

// Return format example:
// [
//   { name: 'HP LaserJet Pro', driverName: 'HP LaserJet Pro PCL6' },
//   { name: 'Microsoft Print to PDF', driverName: 'Microsoft Print To PDF' }
// ]
```

### Get Printer Papers

```javascript
// Get all paper types supported by the specified printer
// printer: { name: "", driverName: "" } — an item from the getPrinterList result
const papers = await webPrintPdf.utils.getPrinterPapers({
    name: 'HP LaserJet Pro',
    driverName: 'HP LaserJet Pro PCL6'
});
console.log('Paper types:', papers);

// Return format example:
// [
//   { name: 'A4', width: 210, height: 296, unit: 'mm' },
//   { name: 'Letter', width: 216, height: 279, unit: 'mm' }
// ]
```

### Events

If you don't want to use async, you can respond through event listening

- Set response callback

  ```javascript
  webPrintPdf.utils.onResponse((response) => {
      console.log('Received response:', response);
  });
  ```

- Set error callback

  ```javascript
  webPrintPdf.utils.onError((error) => {
      console.error('Error occurred:', error);
  });
  ```

## 🌐 Supported Technologies

- **Client OS**: Windows 10/11, Linux (deb — Kylin, UOS, Ubuntu, Debian, etc.), macOS (Intel & Apple Silicon)
- **Frameworks**: Vue.js, React, Angular, Svelte, Next.js, Nuxt.js
- **Languages**: JavaScript (ES5+), TypeScript
- **Browsers**: Chrome, Firefox, Safari, Edge, Opera (WebSocket support required)
- **Module Systems**: ES Modules
- **Build Tools**: Webpack, Vite, Rollup, Parcel, esbuild

## ❓ Frequently Asked Questions (FAQ)

### Do I need a backend or extra software?
No backend is required — web-print-pdf runs entirely in the browser. After `npm install web-print-pdf`, each end user must install and run the [Web Print Expert Client](https://webprintpdf.com/en/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=faq) ([中文下载](https://webprintpdf.com/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=faq)) locally. The library connects at `ws://127.0.0.1:16794`; print requests fail if the client is not running. See the [Windows / Linux / macOS deployment guides](https://webprintpdf.com/en/docs/windows-deploy/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/windows-deploy/?utm_source=npm&utm_medium=readme&utm_campaign=faq).

### How is web-print-pdf different from Print.js or jsPDF?
**Print.js** uses the browser's native print dialog and cannot do silent printing, batch jobs, or direct printer control — see the [Print.js comparison](https://webprintpdf.com/en/docs/printjs-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/printjs-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=faq). **jsPDF** generates PDFs for download/preview but does not send jobs to a local printer — see the [jsPDF comparison](https://webprintpdf.com/en/docs/jspdf-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/jspdf-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=faq). **web-print-pdf** connects to Web Print Expert Client via WebSocket for silent printing, printer/paper selection, batch jobs, watermarks, and other production workflows.

### How is web-print-pdf different from QZ Tray or JSPrintManager?
All three are **local print agents** that receive jobs from the browser over a local connection. **QZ Tray** and **JSPrintManager** focus on raw device printing, certificates, and long-standing enterprise deployments. **web-print-pdf** ships as an **npm SDK** with Promise/async APIs, HTML/CSS layout, optional PDF conversion, batch printing, and watermarks — paired with the free [Web Print Expert Client](https://webprintpdf.com/en/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文下载](https://webprintpdf.com/downloadApp/?utm_source=npm&utm_medium=readme&utm_campaign=faq) (Electron, Chinese/English UI). For Lodop-style migrations, see [Lodop vs web-print-pdf](https://webprintpdf.com/en/docs/lodop-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/lodop-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=faq).

### Is this a PDF download library like jsPDF?
No. jsPDF and html2pdf.js produce PDF **files** for download or preview. web-print-pdf sends jobs to a **local printer** through the desktop client. It may convert HTML to PDF internally, but the primary outcome is **physical printed output**, not file export. Details: [jsPDF vs web-print-pdf](https://webprintpdf.com/en/docs/jspdf-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/jspdf-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=faq).

### When should I use html-to-pdf libraries instead?
Use **Puppeteer** or **Playwright** when you need server-side PDF **files** — [comparison guide](https://webprintpdf.com/en/docs/puppeteer-print-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/puppeteer-print-comparison/?utm_source=npm&utm_medium=readme&utm_campaign=faq). Use **jsPDF** or **html2pdf.js** when users should **download** a PDF. Use **web-print-pdf** when end users must **print silently** on a local printer — see [thermal receipts](https://webprintpdf.com/en/docs/thermal-receipt-print/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/thermal-receipt-print/?utm_source=npm&utm_medium=readme&utm_campaign=faq), [ERP invoices](https://webprintpdf.com/en/docs/invoice-erp-print/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/invoice-erp-print/?utm_source=npm&utm_medium=readme&utm_campaign=faq), or [WMS labels](https://webprintpdf.com/en/docs/wms-remote-print/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/wms-remote-print/?utm_source=npm&utm_medium=readme&utm_campaign=faq).

### Does it work with TypeScript?
Yes. Full TypeScript type definitions are included — no separate `@types` package needed.

### Can I print without showing a print dialog?
Yes. Silent printing is supported through the Web Print Expert Client — no browser print dialog is shown. Background: [window.print alternatives](https://webprintpdf.com/en/docs/window-print-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/window-print-alternative/?utm_source=npm&utm_medium=readme&utm_campaign=faq).

### What paper sizes are supported?
Standard sizes (A4, Letter, Legal, A3, A5, etc.) and custom dimensions via `width`/`height`. For printer-specific formats, use `utils.getPrinterPapers()`. Recipes: [print options guide](https://webprintpdf.com/en/docs/print-options/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/print-options/?utm_source=npm&utm_medium=readme&utm_campaign=faq).

### Can I add watermarks to printed documents?
Yes. Both text and image watermarks are supported via `pdfOptions.watermark` — position, opacity, rows/cols, and angle are configurable. Try the watermark demo in the [online demo center](https://webprintpdf.com/en/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=faq).

### Is batch printing supported?
Yes. Pass multiple tasks to `batchPrint()` to print HTML, URLs, Base64 content, images, or PDFs in one operation. See [batchPrint API reference](https://webprintpdf.com/en/docs/api-batchPrint/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/api-batchPrint/?utm_source=npm&utm_medium=readme&utm_campaign=faq) and [remote print configuration](https://webprintpdf.com/en/docs/remote-print/?utm_source=npm&utm_medium=readme&utm_campaign=faq) · [中文](https://webprintpdf.com/docs/remote-print/?utm_source=npm&utm_medium=readme&utm_campaign=faq).

### Does it support printing images and existing PDFs?
Yes. Use `printImageByUrl` / `printImageByBase64` and `printPdfByUrl` / `printPdfByBase64` in addition to HTML methods.

## 🏷️ Tags

**English:** silent print, silent printing, browser print, local print agent, WebSocket print, direct print, no dialog print, invoice printing, receipt printing, thermal print, POS printing, label printing, batch printing, print automation, JavaScript print library, Vue print, React print, TypeScript print, Electron print client, web printing SDK, html to pdf print

**中文:** 静默打印, 浏览器打印, 前端打印, 本地打印客户端, WebSocket打印, 无对话框打印, 发票打印, 小票打印, 热敏打印, POS打印, 标签打印, 批量打印, html转pdf打印

## 🌐 Community & Ecosystem

- **Tutorials & demos on the official site** — [Documentation hub (EN)](https://webprintpdf.com/en/docs/?utm_source=npm&utm_medium=readme&utm_campaign=ecosystem) · [文档中心（中文）](https://webprintpdf.com/docs/?utm_source=npm&utm_medium=readme&utm_campaign=ecosystem); [25 online demos (EN)](https://webprintpdf.com/en/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=ecosystem) · [在线样例（中文）](https://webprintpdf.com/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=ecosystem)
- **More code examples** — [.github/EXAMPLES.md](.github/EXAMPLES.md) (GitHub) complements the [online demo center](https://webprintpdf.com/en/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=ecosystem)
- **Share integrations** — publish tutorials (Dev.to, 掘金, CSDN) linking to this package and [webprintpdf.com (EN)](https://webprintpdf.com/en/?utm_source=npm&utm_medium=readme&utm_campaign=ecosystem) / [中文官网](https://webprintpdf.com/?utm_source=npm&utm_medium=readme&utm_campaign=ecosystem); open a [GitHub Discussion](https://github.com/weixiaoyi/web-print-pdf/discussions) or PR with your example
- **Awesome Lists** — if you maintain an awesome-javascript / awesome-vue list, consider adding [web-print-pdf](https://www.npmjs.com/package/web-print-pdf) under silent printing or local print agent categories
- **Issues & support** — [GitHub Issues](https://github.com/weixiaoyi/web-print-pdf/issues) for bugs; [pricing (EN)](https://webprintpdf.com/en/price/?utm_source=npm&utm_medium=readme&utm_campaign=ecosystem) · [定价（中文）](https://webprintpdf.com/price/?utm_source=npm&utm_medium=readme&utm_campaign=ecosystem)

## 🤝 Contributing

Welcome to submit Issues and Pull Requests! We appreciate contributions of all kinds:

- 🐛 Bug reports and fixes
- ✨ Feature requests and implementations
- 📖 Documentation improvements
- 🌍 Translations and internationalization
- 💡 Example code and tutorials

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## 📄 License

MIT License - See [LICENSE](https://github.com/weixiaoyi/web-print-pdf/blob/master/LICENSE) file for details

---

**Made with ❤️ for the JavaScript community** | [Report Bug](https://github.com/weixiaoyi/web-print-pdf/issues) | [Request Feature](https://github.com/weixiaoyi/web-print-pdf/issues) | [Docs (EN)](https://webprintpdf.com/en/docs/?utm_source=npm&utm_medium=readme&utm_campaign=footer) · [文档（中文）](https://webprintpdf.com/docs/?utm_source=npm&utm_medium=readme&utm_campaign=footer) | [Demos (EN)](https://webprintpdf.com/en/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=footer) · [样例（中文）](https://webprintpdf.com/docs/demos/?utm_source=npm&utm_medium=readme&utm_campaign=footer) | [Pricing (EN)](https://webprintpdf.com/en/price/?utm_source=npm&utm_medium=readme&utm_campaign=footer) · [定价（中文）](https://webprintpdf.com/price/?utm_source=npm&utm_medium=readme&utm_campaign=footer)