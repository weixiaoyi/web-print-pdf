# web-print-pdf

[![npm version](https://img.shields.io/npm/v/web-print-pdf.svg)](https://www.npmjs.com/package/web-print-pdf)
[![license](https://img.shields.io/npm/l/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/network)
[![GitHub issues](https://img.shields.io/github/issues/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/weixiaoyi/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/pulls)
[![npm downloads](https://img.shields.io/npm/dm/web-print-pdf.svg)](https://www.npmjs.com/package/web-print-pdf)

<div align="right">
  <a href="README.md">🇨🇳 中文</a> | 
  <a href="README_EN.md">🇺🇸 English</a>
</div>

> 🖨️ **Powerful Web HTML Printing Library** - Support HTML to PDF conversion, batch printing, WebSocket communication, providing complete printing solutions for web applications

A powerful web HTML printing library that supports converting HTML content to PDF and printing. Requires a dedicated client software to work, providing a complete Javascript HTML printing solution.

## ✨ Features

- 🖨️ **Multiple Printing Methods**: Support HTML content, URL, Base64 and other formats
- 📄 **PDF Generation**: Convert HTML to high-quality PDF documents
- 🖼️ **Image Printing**: Support image URL and Base64 format printing
- 📦 **Batch Printing**: Support batch task processing
- 🔧 **Flexible Configuration**: Rich PDF and printing options
- 🌐 **WebSocket Communication**: Real-time connection status monitoring
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

```bash
npm install web-print-pdf
```

### Basic Usage

```javascript
import webPrintPdf from 'web-print-pdf';

// Basic HTML printing
const handlePrint = async () => {
    try {
        await webPrintPdf.printHtml('<div>Hello World!</div>');
        console.log('Print successful!');
    } catch (error) {
        console.error('Print failed:', error);
    }
};
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
    { printer: 'Default Printer',... }, // printOptions
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
| `headerTemplate` | string | - | Header HTML template, supports special classes: date, title, url, pageNumber, totalPages | string (optional), HTML template for the print header, Should be valid HTML markup with following classes used to inject printing values into them: 'date': formatted print date; 'title': document title; 'url': document location; 'pageNumber': current page number; 'totalPages': total pages in the document. eg: <span class="pageNumber"><span/>. (Header template html string, supports inserting special classes to automatically implement date, page, total pages and other display functions) |
| `footerTemplate` | string | - | Footer HTML template, same format as headerTemplate | string (optional), HTML template for the print footer. Should use the same format as the headerTemplate |
| `landscape` | boolean | false | Whether to print horizontally, default false (vertical) | boolean (optional), Paper orientation. Defaults to false.(Whether horizontal, default false, vertical) |
| `margin` | object | 0 | Page margins, supports units: px, in, cm, mm | Object (optional), Paper margins, defaults to none. top, right, bottom, left, accepts margin values labeled with units px, in, cm, mm. Defaults to 0 (pdf margins) |
| `pageRanges` | Array<Object> | [] | Print page ranges, e.g.: [{from:1,to:5},{from:6,to:6}] | Array<Object> (optional), Paper ranges to print, e.g., [{from:1,to:5},{from:6,to:6},{from:7,to:10}]. Defaults to the empty, which means print all pages. (Print page ranges, default all) |
| `preferCSSPageSize` | boolean | false | Prioritize CSS @page size | boolean (optional), Give any CSS @page size declared in the page priority over what is declared in width and height or format options. Defaults to false, which will scale the content to fit the paper size |
| `printBackground` | boolean | false | Whether to print background graphics | boolean (optional), Print background graphics. Defaults to false. (Whether to print background color) |
| `watermark` | object | - | Watermark settings (text or image watermark) | Object (optional), eg: text watermark: { text:"hello, this is watermark", color:'rgb(0,0,0)', x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', size: 20, rows: 4, cols:4, xSpace:20, ySpace:20, angle: 45, opacity:0.5  } or image watermark { base64: "", x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', rows: 4, cols:4, angle: 45, xSpace:20, ySpace:20, width: 100, height: 100, opacity:0.5  }. (Text watermark or image watermark) |
| `pageNumber` | object | - | Page number settings | Object (optional), eg: { start: 1, x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', format: '{{page}}/{{totalPage}}', color:'rgb(0,0,0)',  size: 20', xSpace: 0, ySpace:0, opacity:1 }. (Page numbers) |

### Print Options (printOptions)

| Option | Type | Default | Description | Detailed Description |
|:-----|:---|:------|:-----|:-----|
| `paperFormat` | string | - | Paper format: A2, A3, A4, A5, A6, Letter, Legal, Tabloid, Ledger, Statement, and all paper formats supported by the selected printer | string (optional), A2, A3, A4, A5, A6, Letter, Legal, Tabloid, Ledger, Statement, and it supports selecting one from the list of supported paper formats, which can be found on the preview page (Besides these fixed formats, more input items depend on the paper formats supported by the printer, support selecting one from the list of supported paper formats as a parameter, such as "10x14", "Envelope B6", etc. If an unsupported format is entered, the actual print format depends on the printer's default paper settings) |
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
| `devtool` | boolean | false | Developer tools for development debugging HTML, only useful for local chrome and edge PDF engines | boolean (optional), use in development, it can be useAble when debug html. Defaults to false. (Developer tools for development debugging html, only useful for local chrome and edge PDF engines) |
| `requestTimeout` | number | 15 | Network timeout (seconds), default 15 seconds, should be greater than or equal to the xhr timeout setting in the page | number (optional), request network timeout (http, xhr), default 15 (Network timeout, default 15 seconds. This parameter should be greater than or equal to the xhr timeout setting in the page) |
| `cookies` | object | - | Cookie object, e.g.: { key1:value1, key2:value2 } | Object (optional), cookie Object. eg: { key1:value1, key2:value2 } |
| `localStorages` | object | - | localStorage object, e.g.: { key1:value1, key2:value2 }, all pages have default { '_printMode_': 'true' } | Object (optional), localStorage Object. eg: { key1:value1, key2:value2 }, every page has a default localStorage key-value { '_printMode_' : 'true' }, to make difference in UI. For convenience in differentiating print areas, all pages have a default { '_printMode_' : 'true' } localStorage value available |
| `sessionStorages` | object | - | sessionStorage object, e.g.: { key1:value1, key2:value2 } | Object (optional), sessionStorage Object. eg: { key1:value1, key2:value2 } |
| `httpHeaders` | object | - | HTTP request header settings, e.g.: { Authorization: 'string' }, all header values must be strings | Object (optional), An object containing additional HTTP headers to be sent with every request. eg:{ Authorization: 'string' }, All header values must be strings. Request header settings {key,value} |
| `action` | string | 'print' | Behavior: print (print), preview (preview), default print | enums string (optional), "print", "preview", default 'print'. The client can decide the preview behavior based on the returned preview address. (Behavior: print or preview, default print, client can decide preview behavior based on returned preview address) |
| `[key]` | string | - | Can add any key-value, will be returned as-is with extraOptions | (optional), any key-value you want to add. it may be useAble when extraOptions returned (Can add any key:value, will be returned as-is with extraOptions) |

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
// or await webPrintPdf.utils.setTitle(<div>Web Print PDF Client</div>);

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

## 🤝 Contributing

Welcome to submit Issues and Pull Requests!

## 📄 License

MIT License - See [LICENSE](https://github.com/weixiaoyi/web-print-pdf/blob/main/LICENSE) file for details 