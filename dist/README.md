# web-print-pdf - HTML to PDF Printing Library for JavaScript

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

> 🖨️ **Powerful JavaScript HTML to PDF Printing Library** — Convert HTML to PDF and print web pages, images, and documents via WebSocket. Requires Web Print Expert Client for silent/local printing. Works with Vue, React, Angular, and all modern JavaScript frameworks.

## 🎯 Overview

**web-print-pdf** is a JavaScript printing library that enables web applications to convert HTML into high-quality PDF documents and send print jobs to local printers through the Web Print Expert Client — no backend server required. It is well suited for invoice printing, report generation, document management, and any web app that needs silent printing with production-grade control over printers, paper, and layout.

### Why web-print-pdf?

- **Zero Configuration** — works out of the box with sensible defaults
- **Framework Agnostic** — Vue, React, Angular, Svelte, or vanilla JavaScript
- **Production Ready** — battle-tested in enterprise applications
- **TypeScript Support** — full type definitions included
- **HTML/CSS First** — control PDF styling with familiar web technologies, no proprietary template language

## ✨ Features

- 🖨️ **Multiple Printing Methods**: Support HTML content, URL, Base64 and other formats
- 📄 **PDF Generation**: Convert HTML to high-quality PDF documents
- 🖼️ **Image Printing**: Support image URL and Base64 format printing
- 📦 **Batch Printing**: Support batch task processing
- 🔧 **Flexible Configuration**: Rich PDF and printing options
- 🌐 **WebSocket Communication**: Real-time connection status monitoring
- 🔕 **Silent Printing**: Local client-based silent printing without browser print dialogs
- 🎨 **Custom Styling**: Support custom headers, footers, margins and client theme colors, titles, etc.
- 🚀 **Simple API Design**: API consistency, frontend developer friendly, low learning curve
- 🎯 **HTML/CSS Control**: Control all PDF styles through HTML and CSS, no additional learning required
- ⚡ **Async Support**: Support complete Promise/async-await syntax while maintaining event listening mechanism

## 🔑 Use Cases

- **E-commerce** — order invoices, shipping labels, packing slips
- **Business & Enterprise** — financial reports, dashboard exports, payslips and contracts
- **Healthcare & Education** — medical records, lab reports, certificates
- **Legal & Government** — contracts, forms, official licenses
- **General** — tickets, barcodes, form printing

## 📋 Requirements

- Modern browser with WebSocket support
- [Web Print Expert Client](http://webprintpdf.com/downloadApp/) installed locally (Chinese/English UI)

## 🔗 Related Links

- [Official Website](http://webprintpdf.com/)
- [Client Download](http://webprintpdf.com/downloadApp/)
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

### Basic Usage Examples

#### Simple HTML to PDF Printing

```javascript
import webPrintPdf from 'web-print-pdf';

// Basic HTML printing - Convert any HTML string to PDF
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
    'http://webprintpdf.com',
    { paperFormat: 'A4', printBackground: true }
);
```

#### `printPdfByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
Print PDF file via URL

```javascript
await webPrintPdf.printPdfByUrl(
    'http://webprintpdf.com/api/fileCenter/webPrintExpert/fileCenterFileDownload/printTest.pdf',
    { paperFormat: 'A4' }
);
```

#### `printImageByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
Print image via URL

```javascript
await webPrintPdf.printImageByUrl(
    'http://webprintpdf.com/api/fileCenter/webPrintExpert/fileCenterFileDownload/printTest.png',
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

- **Frameworks**: Vue.js, React, Angular, Svelte, Next.js, Nuxt.js
- **Languages**: JavaScript (ES5+), TypeScript
- **Browsers**: Chrome, Firefox, Safari, Edge, Opera (WebSocket support required)
- **Module Systems**: ES Modules
- **Build Tools**: Webpack, Vite, Rollup, Parcel, esbuild

## ❓ Frequently Asked Questions (FAQ)

### Do I need a backend or extra software?
No backend is required — web-print-pdf runs entirely in the browser. After `npm install web-print-pdf`, each end user must install and run the [Web Print Expert Client](http://webprintpdf.com/downloadApp/) locally. The library connects at `ws://127.0.0.1:16794`; print requests fail if the client is not running.

### How is web-print-pdf different from Print.js or jsPDF?
**Print.js** uses the browser's native print dialog and cannot do silent printing, batch jobs, or direct printer control. **jsPDF** generates PDFs for download/preview but does not send jobs to a local printer. **web-print-pdf** connects to Web Print Expert Client via WebSocket for silent printing, printer/paper selection, batch jobs, watermarks, and other production workflows.

### Does it work with TypeScript?
Yes. Full TypeScript type definitions are included — no separate `@types` package needed.

### Can I print without showing a print dialog?
Yes. Silent printing is supported through the Web Print Expert Client — no browser print dialog is shown.

### What paper sizes are supported?
Standard sizes (A4, Letter, Legal, A3, A5, etc.) and custom dimensions via `width`/`height`. For printer-specific formats, use `utils.getPrinterPapers()`.

### Can I add watermarks to printed documents?
Yes. Both text and image watermarks are supported via `pdfOptions.watermark` — position, opacity, rows/cols, and angle are configurable.

### Is batch printing supported?
Yes. Pass multiple tasks to `batchPrint()` to print HTML, URLs, Base64 content, images, or PDFs in one operation.

### Does it support printing images and existing PDFs?
Yes. Use `printImageByUrl` / `printImageByBase64` and `printPdfByUrl` / `printPdfByBase64` in addition to HTML methods.

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

**Made with ❤️ for the JavaScript community** | [Report Bug](https://github.com/weixiaoyi/web-print-pdf/issues) | [Request Feature](https://github.com/weixiaoyi/web-print-pdf/issues) | [Documentation](http://webprintpdf.com/)