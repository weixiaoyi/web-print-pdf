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

> 🖨️ **Powerful JavaScript HTML to PDF Printing Library** - Convert HTML to PDF, print web pages, images, and documents via WebSocket. Requires [Web Print Expert Client](http://webprintpdf.com/downloadApp/) for silent/local printing. Works with Vue, React, Angular, and all modern JavaScript frameworks.

## 🎯 Overview

**web-print-pdf** is a comprehensive JavaScript printing library that enables web applications to convert HTML content to high-quality PDF documents and send print jobs to local printers through the Web Print Expert Client. Perfect for invoice printing, report generation, document management systems, and any web application requiring silent printing and production-grade print control.

### 🌟 Why Choose web-print-pdf?

- **Zero Configuration** - Works out of the box with sensible defaults
- **Framework Agnostic** - Compatible with Vue.js, React, Angular, Svelte, and vanilla JavaScript
- **Production Ready** - Battle-tested in enterprise applications
- **TypeScript Support** - Full type definitions included
- **Active Development** - Regular updates and community support

## 🔑 Key Use Cases

- 📄 **Invoice & Receipt Printing** - Generate professional invoices with custom styling
- 📊 **Report Generation** - Create detailed business reports and analytics documents
- 🏷️ **Label & Barcode Printing** - Print shipping labels, product labels, and barcodes
- 📋 **Form Printing** - Print filled forms, contracts, and legal documents
- 🎫 **Ticket Generation** - Create event tickets, boarding passes, and vouchers
- 📈 **Dashboard Export** - Export dashboard data and charts to PDF

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

## 📋 System Requirements

- Modern browser support (WebSocket support)
- Need to install [Web Print Expert Client](http://webprintpdf.com/downloadApp/)

## 📱 Client Download

This library requires the [Web Print Expert Client](http://webprintpdf.com/downloadApp/) to work, supporting Chinese and English interfaces.

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

| Option | Type | Default | Description | Detailed Description |
|:-----|:---|:------|:-----|:-----|
| `paperFormat` | string | 'A4' | Paper format: Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6 | string (optional), Paper format. If set, takes priority over width or height options. Defaults to 'A4', Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6. (Only these fixed formats are supported, other formats can be customized through width, height, paperFormat takes priority over custom sizes) |
| `width` | string\|number | - | Paper width, supports units: px, in, cm, mm | string \| number (optional) Paper width, accepts values labeled with units px, in, cm, mm. (Note: when using custom sizes, you don't need to set paperFormat) |
| `height` | string\|number | - | Paper height, supports units: px, in, cm, mm | string \| number (optional), Paper height, accepts values labeled with units px, in, cm, mm. (Note: when using custom sizes, you don't need to set paperFormat) |
| `displayHeaderFooter` | boolean | false | Whether to display header and footer | boolean (optional), Display header and footer. Defaults to false |
| `headerTemplate` | string | - | Header HTML template, supports special classes: date, title, url, pageNumber, totalPages | string (optional), HTML template for the print header, Should be valid HTML markup with following classes used to inject printing values into them: 'date': formatted print date; 'title': document title; 'url': document location; 'pageNumber': current page number; 'totalPages': total pages in the document. eg: <span class="pageNumber"></span>. (Header template html string, supports inserting special classes to automatically implement date, page, total pages and other display functions) |
| `footerTemplate` | string | - | Footer HTML template, same format as headerTemplate | string (optional), HTML template for the print footer. Should use the same format as the headerTemplate |
| `landscape` | boolean | false | Whether to print horizontally, default false (vertical) | boolean (optional), Paper orientation. Defaults to false.(Whether horizontal, default false, vertical) |
| `margin` | object | 0 | Page margins, supports units: px, in, cm, mm | Object (optional), Paper margins, defaults to none. top, right, bottom, left, accepts margin values labeled with units px, in, cm, mm. Defaults to 0 (pdf margins) |
| `pageRanges` | Array<Object> | [] | Print page ranges, e.g.: [{from:1,to:5},{from:6,to:6}] | Array<Object> (optional), Paper ranges to print, e.g., [{from:1,to:5},{from:6,to:6},{from:7,to:10}]. Defaults to the empty, which means print all pages. (Print page ranges, default all) |
| `preferCSSPageSize` | boolean | false | Prioritize CSS @page size | boolean (optional), Give any CSS @page size declared in the page priority over what is declared in width and height or format options. Defaults to false, which will scale the content to fit the paper size |
| `printBackground` | boolean | false | Whether to print background graphics | boolean (optional), Print background graphics. Defaults to false. (Whether to print background color) |
| `watermark` | object | - | Watermark settings (text or image watermark) | Object (optional), eg: text watermark: { text:"hello, this is watermark", color:'rgb(0,0,0)', x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', size: 20, rows: 4, cols:4, xSpace:20, ySpace:20, angle: 45, opacity:0.5  } or image watermark { base64: "", x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', rows: 4, cols:4, angle: 45, xSpace:20, ySpace:20, width: 100, height: 100, opacity:0.5  }. (Text watermark or image watermark) |
| `pageNumber` | object | - | Page number settings | Object (optional), eg: { start: 1, x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', format: '{{page}}/{{totalPage}}', color:'rgb(0,0,0)', size: 20, xSpace: 0, ySpace:0, opacity:1 }. (Page numbers) |

### Print Options (printOptions)

| Option | Type | Default | Description | Detailed Description |
|:-----|:---|:------|:-----|:-----|
| `paperFormat` | string | - | Paper format: A2, A3, A4, A5, A6, Letter, Legal, Tabloid, Ledger, Statement, and all paper formats supported by the selected printer | string (optional), A2, A3, A4, A5, A6, Letter, Legal, Tabloid, Ledger, Statement. For printer-specific formats, use `utils.getPrinterPapers(printer)` (printer from `utils.getPrinterList()`) to get the supported `name` list dynamically, e.g. "10x14", "Envelope B6". You can also preview available options in the client. If an unsupported format is entered, the actual print format depends on the printer's default paper settings |
| `colorful` | boolean | false | Color or monochrome, default false (monochrome) | boolean (optional), Defaults to false. color or monochrome (Color or monochrome, default false, monochrome) |
| `landscape` | boolean | false | Whether horizontal, default false (vertical) | boolean (optional), contents orientation, NOT the rotation of paper which must be pre-set by the choice of printer defaults. Defaults to false. (Whether horizontal, default false, vertical) |
| `printerName` | string | - | Specify printer name, default default printer | string (optional), specify a printer. (Specify printer name, default default printer) |
| `pageRanges` | Array<Object> | [] | Print page ranges, e.g.: [{from:1,to:5},{from:6,to:6},{from:7,to:10}] | Array<Object> (optional), Paper ranges to print, e.g., [{from:1,to:5},{from:6,to:6},{from:7,to:10}]. Defaults to the empty, which means print all pages. (Page ranges, default all) |
| `copies` | number | - | Number of copies | number(optional), Number of copies printed (Number of copies) |
| `duplexMode` | string | 'simplex' | Single/double sided mode: simplex (single sided), duplex (double sided), duplexshort (double sided along short edge), duplexlong (double sided along long edge) | enums string (optional), "simplex" (single sided printing, default), "duplex" (double sided), "duplexshort" (double sided printing along short edge), "duplexlong" (double sided printing along long edge) |
| `scaleMode` | string | 'shrink' | Scaling mode: noscale (original size), shrink (shrink to printable area), fit (adjust to printable area) | enums string (optional), noscale: use original page size, shrink: shrink page to printable area (if needed), fit: adjust page to printable area. (default shrink), specific differences can be viewed by setting the action parameter of extraOptions to 'preview' |
| `bin` | number\|string | - | Select the paper tray to print to | num or name (optional), select the paper tray to print to |

### Extra Options (extraOptions)

| Option | Type | Default | Description | Detailed Description |
|:-----|:---|:------|:-----|:-----|
| `devtool` | boolean | false | Developer tools for development debugging HTML, only useful for local chrome and edge PDF engines | boolean (optional), use in development, it can be usable when debugging html. Defaults to false. (Developer tools for development debugging html, only useful for local chrome and edge PDF engines) |
| `requestTimeout` | number | 15 | Network timeout (seconds), default 15 seconds, should be greater than or equal to the xhr timeout setting in the page | number (optional), request network timeout (http, xhr), default 15 (Network timeout, default 15 seconds. This parameter should be greater than or equal to the xhr timeout setting in the page) |
| `cookies` | object | - | Cookie object, e.g.: { key1:value1, key2:value2 } | Object (optional), cookie Object. eg: { key1:value1, key2:value2 } |
| `localStorages` | object | - | localStorage object, e.g.: { key1:value1, key2:value2 }, all pages have default { '_printMode_': 'true' } | Object (optional), localStorage Object. eg: { key1:value1, key2:value2 }, every page has a default localStorage key-value { '_printMode_' : 'true' }, to make difference in UI. For convenience in differentiating print areas, all pages have a default { '_printMode_' : 'true' } localStorage value available |
| `sessionStorages` | object | - | sessionStorage object, e.g.: { key1:value1, key2:value2 } | Object (optional), sessionStorage Object. eg: { key1:value1, key2:value2 } |
| `httpHeaders` | object | - | HTTP request header settings, e.g.: { Authorization: 'string' }, all header values must be strings | Object (optional), An object containing additional HTTP headers to be sent with every request. eg:{ Authorization: 'string' }, All header values must be strings. Request header settings {key,value} |
| `action` | string | 'print' | Behavior: print (print), preview (preview), default print | enums string (optional), "print", "preview", default 'print'. The client can decide the preview behavior based on the returned preview address. (Behavior: print or preview, default print, client can decide preview behavior based on returned preview address) |
| `[key]` | string | - | Can add any key-value, will be returned as-is with extraOptions | (optional), any key-value you want to add. It may be useful when extraOptions is returned (Can add any key:value, will be returned as-is with extraOptions) |

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
``` javascript
webPrintPdf.utils.onResponse((response) => {
    console.log('Received response:', response);
});
```

- Set error callback
``` javascript
webPrintPdf.utils.onError((error) => {
    console.error('Error occurred:', error);
});
```

## 💡 Common Use Cases & Solutions

All scenarios below support silent printing, batch jobs, and local printer control via the [Web Print Expert Client](http://webprintpdf.com/downloadApp/).

### E-commerce Applications
- **Order Invoices**: Generate printable invoices for customer orders
- **Shipping Labels**: Create shipping labels with barcodes
- **Packing Slips**: Print order details for warehouse fulfillment

### Business & Enterprise
- **Financial Reports**: Export financial statements and balance sheets
- **Business Analytics**: Print dashboard reports and KPI summaries
- **Employee Documents**: Generate payslips, contracts, and certificates

### Healthcare & Education
- **Medical Records**: Print patient records and prescriptions
- **Lab Reports**: Generate test results and medical reports
- **Student Certificates**: Create diplomas and achievement certificates

### Legal & Government
- **Contracts**: Print legal documents with proper formatting
- **Forms**: Generate government forms and applications
- **Certificates**: Create official certificates and licenses

## 🌐 Supported Technologies

- **Frameworks**: Vue.js, React, Angular, Svelte, Next.js, Nuxt.js
- **Languages**: JavaScript (ES5+), TypeScript
- **Browsers**: Chrome, Firefox, Safari, Edge, Opera (WebSocket support required)
- **Module Systems**: ES Modules
- **Build Tools**: Webpack, Vite, Rollup, Parcel, esbuild

## ❓ Frequently Asked Questions (FAQ)

### Can I use this library without a backend?
No backend server is required — web-print-pdf runs in the browser. However, each user must install and run the [Web Print Expert Client](http://webprintpdf.com/downloadApp/) on their machine for printing to work.

### Does it work with TypeScript?
Absolutely! Full TypeScript type definitions are included in the package.

### Can I print without showing a print dialog?
Yes, silent printing is supported through the client application settings.

### What paper sizes are supported?
All standard paper sizes including A4, Letter, Legal, A3, A5, and custom sizes are supported.

### Can I add watermarks to printed documents?
Yes, both text and image watermarks are supported with customizable positioning and opacity.

### Is batch printing supported?
Yes, you can print multiple documents in a single operation using the `batchPrint()` method.

### Does it support printing images and existing PDFs?
Yes, the library supports printing HTML, images (URL or Base64), and PDF files (URL or Base64).

### How is web-print-pdf different from Print.js or jsPDF?
**Print.js** triggers the browser's native print dialog and runs entirely in the browser — it cannot do silent printing, batch jobs, or direct control of physical printers. **jsPDF** generates PDF files in JavaScript for download or preview; it does not send jobs to a local printer. **web-print-pdf** connects to the [Web Print Expert Client](http://webprintpdf.com/downloadApp/) via WebSocket, enabling silent printing, printer/paper selection, batch printing, watermarks, and other production-grade print workflows.

### Do I need to install anything besides npm install?
Yes. After `npm install web-print-pdf`, each end user must also install and run the [Web Print Expert Client](http://webprintpdf.com/downloadApp/) on their machine. The library communicates with the client at `ws://127.0.0.1:16794` — if the client is not running, print requests will fail.

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