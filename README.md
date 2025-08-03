# web-print-pdf

[![npm version](https://img.shields.io/npm/v/web-print-pdf.svg)](https://www.npmjs.com/package/web-print-pdf)
[![license](https://img.shields.io/npm/l/web-print-pdf.svg)](https://github.com/weixiaoyi/web-print-pdf/blob/main/LICENSE)

一个强大的网页HTML打印库，支持将HTML内容转换为PDF并打印。需要配合专用的客户端软件使用，提供完整的Javascript 打印 Html 解决方案。

## ✨ 特性

- 🖨️ **多种打印方式**：支持HTML内容、URL、Base64等多种格式
- 📄 **PDF生成**：将HTML转换为高质量PDF文档
- 🖼️ **图片打印**：支持图片URL和Base64格式打印
- 📦 **批量打印**：支持批量任务处理
- 🔧 **灵活配置**：丰富的PDF和打印选项
- 🌐 **WebSocket通信**：实时连接状态监控
- 🎨 **自定义样式**：支持页眉页脚、边距等自定义设置以及客户端主题色、title等
- 🚀 **极简API设计**：API一致性，前端开发友好，学习成本低
- 🎯 **HTML/CSS控制**：通过HTML和CSS控制全部的PDF样式，无需额外学习
- ⚡ **异步支持**：支持完整的Promise/async-await语法，同时兼顾事件监听机制

## 📋 系统要求

- 现代浏览器支持（支持WebSocket）
- 需要安装 [Web打印专家客户端](http://webprintpdf.com/downloadApp/)

## 📱 客户端下载

本库需要配合 [Web打印专家客户端](http://webprintpdf.com/downloadApp/) 使用，客户端支持中英文界面。

## 🔗 相关链接

- [官方网站](http://webprintpdf.com/)
- [客户端下载](http://webprintpdf.com/downloadApp/)
- [GitHub仓库](https://github.com/weixiaoyi/web-print-pdf)
- [npm包](https://www.npmjs.com/package/web-print-pdf)

## 🚀 快速开始

### 安装

```bash
npm install web-print-pdf
```

### 基本使用

```javascript
import webPrintPdf from 'web-print-pdf';

// 基本HTML打印
const handlePrint = async () => {
    try {
        await webPrintPdf.printHtml('<div>Hello World!</div>');
        console.log('打印成功！');
    } catch (error) {
        console.error('打印失败:', error);
    }
};
```

## 📖 API 文档

### 主要方法

#### `printHtml(content, pdfOptions?, printOptions?, extraOptions?)`
打印HTML内容

```javascript
const pdfOptions = {                // pdf属性设置
    paperFormat: 'A4',              // 纸张格式
    landscape: false,               // 是否横向打印, 默认false, 纵向
    margin: {                       // pdf 纸张周围的间距
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
    },
    printBackground: true,          // 是否打印CSS背景(背景色、背景图片)
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
    scaleMode: "shrink",             //shrink缩放、 noscale 原始、 fit 自动调整
    ...
};

const extraOptions = {               // 更多额外属性
    requestTimeout: 15,              // 超时时间，单位秒
    cookies:{ key1:'value1',... },
    httpHeaders:{ key1:'value1',... },
    action: "preview",               // 行为打印或预览： "print"、"preview"
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
通过URL打印HTML页面

```javascript
await webPrintPdf.printHtmlByUrl(
    'http://webprintpdf.com',
    { paperFormat: 'A4', printBackground: true }
);
```

#### `printPdfByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
通过URL打印PDF文件

```javascript
await webPrintPdf.printPdfByUrl(
    'http://webprintpdf.com/api/fileCenter/webPrintExpert/fileCenterFileDownload/printTest.pdf',
    { paperFormat: 'A4' }
);
```

#### `printImageByUrl(url, pdfOptions?, printOptions?, extraOptions?)`
通过URL打印图片

```javascript
await webPrintPdf.printImageByUrl(
    'http://webprintpdf.com/api/fileCenter/webPrintExpert/fileCenterFileDownload/printTest.png',
    { paperFormat: 'A4', printBackground: true }
);
```

#### `printHtmlByBase64(base64, pdfOptions?, printOptions?, extraOptions?)`
通过Base64打印HTML内容

```javascript
await webPrintPdf.printHtmlByBase64(
    'PGgxPkhlbGxvIFdvcmxkPC9oMT4=...', // html base64
    { paperFormat: 'A4' }
);
```

#### `printPdfByBase64(base64, pdfOptions?, printOptions?, extraOptions?)`
通过Base64打印PDF文件

```javascript
await webPrintPdf.printPdfByBase64(
    'JVBERi0xLjQKJcOkw7zDtsO...', // pdf base64
    { paperFormat: 'A4' }
);
```

#### `printImageByBase64(base64, pdfOptions?, printOptions?, extraOptions?)`
通过Base64打印图片

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
        content: '<h1>文档1</h1>',
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
    { printer: 'Default Printer',... }, // printOptioons
    { requestTimeout: 15,... } // extraOptions
);
```

## 🔧 配置选项

### PDF选项 (pdfOptions)

| 选项 | 类型 | 默认值 | 描述 | 详细描述 |
|:-----|:---|:------|:-----|:-----|
| `paperFormat` | string | 'A4' | 纸张格式：Letter、Legal、Tabloid、Ledger、A0、A1、A2、A3、A4、A5、A6 | string (optional), Paper format. If set, takes priority over width or height options. Defaults to 'A4', Letter、Legal、Tabloid、Ledger、A0、A1、A2、A3、A4、A5、A6. （仅支持这些固定格式，其它格式可以通过 width,height 自定义，paperFormat 优先于自定义尺寸） |
| `width` | string\|number | - | 纸张宽度，支持单位：px、in、cm、mm | string \| number (optional) Paper width, accepts values labeled with units px、in、cm、mm. (注意自定义尺寸时，不需要设置 paperFormat) |
| `height` | string\|number | - | 纸张高度，支持单位：px、in、cm、mm | string \| number (optional), Paper height, accepts values labeled with units px、in、cm、mm. (注意自定义尺寸时，不需要设置 paperFormat) |
| `displayHeaderFooter` | boolean | false | 是否显示页眉页脚 | boolean (optional), Display header and footer. Defaults to false |
| `headerTemplate` | string | - | 页眉HTML模板，支持特殊class：date、title、url、pageNumber、totalPages | string (optional), HTML template for the print header, Should be valid HTML markup with following classes used to inject printing values into them: 'date': formatted print date; 'title': document title; 'url': document location; 'pageNumber': current page number; 'totalPages': total pages in the document. eg: <span class="pageNumber"><span/>. (模板头html字符串，支持插入特殊的class自动实现日期、页面、总页数等展示功能) |
| `footerTemplate` | string | - | 页脚HTML模板，格式同headerTemplate | string (optional), HTML template for the print footer. Should use the same format as the headerTemplate |
| `landscape` | boolean | false | 是否横向打印，默认false（纵向） | boolean (optional), Paper orientation. Defaults to false.(是否横向, 默认false, 纵向) |
| `margin` | object | 0 | 页边距，支持单位：px、in、cm、mm | Object (optional), Paper margins, defaults to none。top , right, bottom, left, accepts margin values labeled with units px、in、cm、mm. Defaults to 0 (pdf 四周的间距) |
| `pageRanges` | Array<Object> | [] | 打印页面范围，如：[{from:1,to:5},{from:6,to:6}] | Array<Object> (optional), Paper ranges to print, e.g., [{from:1,to:5},{from:6,to:6},{from:7,to:10}]. Defaults to the empty, which means print all pages .(打印页面范围, 默认全部) |
| `preferCSSPageSize` | boolean | false | 优先使用CSS @page尺寸 | boolean (optional), Give any CSS @page size declared in the page priority over what is declared in width and height or format options. Defaults to false, which will scale the content to fit the paper size |
| `printBackground` | boolean | false | 是否打印背景图形 | boolean (optional), Print background graphics. Defaults to false. (是否打印背景色) |
| `watermark` | object | - | 水印设置（文字或图片水印） | Object (optional), eg: text watermark: { text:"hello, this is watermark", color:'rgb(0,0,0)', x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', size: 20, rows: 4, cols:4, xSpace:20, ySpace:20, angle: 45, opacity:0.5  } or image watermark { base64: "", x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', rows: 4, cols:4, angle: 45, xSpace:20, ySpace:20, width: 100, height: 100, opacity:0.5  }. (文字水印或图片水印) |
| `pageNumber` | object | - | 页码设置 | Object (optional), eg: { start: 1, x: 200 \|'alignCenter'\|'alignLeft'\|'alignRight', y: 100 \|'alignCenter'\|'alignTop'\|'alignBottom', format: '{{page}}/{{totalPage}}', color:'rgb(0,0,0)',  size: 20', xSpace: 0, ySpace:0, opacity:1 }. （页码） |

### 打印选项 (printOptions)

| 选项 | 类型 | 默认值 | 描述 | 详细描述 |
|:-----|:---|:------|:-----|:-----|
| `paperFormat` | string | - | 纸张格式：A2、A3、A4、A5、A6、Letter、Legal、Tabloid、Ledger、Statement,等所选打印机支持的所有纸张格式 | string (optional), A2, A3, A4, A5, A6, Letter、Legal、Tabloid、Ledger, Statement, and it supports selecting one from the list of supported paper formats, which can be found on the preview page (除了这些固定格式，更多输入项取决于打印机支持的纸张格式，支持从打印支持的纸张格式列表里选择一个作为参数，如 "10x14"、"信封 B6" 等，如果输入了一个不支持的格式，实际打印格式取决于打印机默认的打印纸设置) |
| `colorful` | boolean | false | 彩色或黑白，默认false（黑白） | boolean (optional), Defaults to false. color or monochrome (彩色或黑白, 默认false, 黑白) |
| `landscape` | boolean | false | 是否横向，默认false（纵向） | boolean (optional), contents orientation, NOT the rotation of paper which must be pre-set by the choice of printer defaults. Defaults to false. (是否横向, 默认false, 纵向) |
| `printerName` | string | - | 指定打印机名称，默认缺省打印机 | string (optional), specify a printer. (指定打印机名字, 默认缺省打印机) |
| `pageRanges` | Array<Object> | [] | 打印页面范围，如：[{from:1,to:5},{from:6,to:6},{from:7,to:10}] | Array<Object> (optional), Paper ranges to print, e.g., [{from:1,to:5},{from:6,to:6},{from:7,to:10}]. Defaults to the empty, which means print all pages . (页码范围, 默认全部) |
| `copies` | number | - | 打印份数 | number(optional), Number of copies printed (打印份数) |
| `duplexMode` | string | 'simplex' | 单双面模式：simplex（单面）、duplex（双面）、duplexshort（沿短边双面）、duplexlong（沿长边双面） | enums string (optional), "simplex"（单面打印, 默认）,"duplex"（双面）,"duplexshort"（沿短边双面打印）, "duplexlong"（沿长边双面打印） |
| `scaleMode` | string | 'shrink' | 缩放模式：noscale（原始大小）、shrink（缩小至可打印区域）、fit（调整至可打印区域） | enums string (optional), noscale: 使用原始页面大小 , shrink：将页面缩小至可打印区域（如果需要） , fit：调整页面至可打印区域. (默认shrink), 具体差异可通过设置 extraOptions 的 action参数为 'preview' 查看 |
| `bin` | number\|string | - | 选择要打印到的纸盘 | num or name (optional), 选择要打印到的纸盘 |

### 额外选项 (extraOptions)

| 选项 | 类型 | 默认值 | 描述 | 详细描述 |
|:-----|:---|:------|:-----|:-----|
| `devtool` | boolean | false | 开发者工具，用于development调试HTML，仅对PDF引擎是本地的chrome和edge有用 | boolean (optional), use in development, it can be useAble when debug html. Defaults to false. (开发者工具用于 development 调试html，仅对PDF引擎是本地的 chrome 和 edge 有用) |
| `requestTimeout` | number | 15 | 网络超时时间（秒），默认15秒，应大于等于页面内的xhr timeout设置 | number (optional), request network timeout (http、xhr), default 15 (网络超时时间, 默认15秒。此参数应大于等于页面内的xhr timeout设置) |
| `cookies` | object | - | Cookie对象，如：{ key1:value1, key2:value2 } | Object (optional), cookie Object. eg: { key1:value1, key2:value2 } |
| `localStorages` | object | - | localStorage对象，如：{ key1:value1, key2:value2 }，所有页面都有默认的{ '_printMode_': 'true' } | Object (optional), localStorage Object. eg: { key1:value1, key2:value2 } , every page has a default localStorage key-value { '_printMode_' : 'true' }, to make difference in UI. 为了方便对打印区域做差异化，所有页面都有一个默认的 { '_printMode_' : 'true' } localstorage 值可取用 |
| `sessionStorages` | object | - | sessionStorage对象，如：{ key1:value1, key2:value2 } | Object (optional), sessionStorage Object. eg: { key1:value1, key2:value2 } |
| `httpHeaders` | object | - | HTTP请求头设置，如：{ Authorization: 'string' }，所有header值必须是字符串 | Object (optional), An object containing additional HTTP headers to be sent with every request. eg:{ Authorization: 'string' }, All header values must be strings. 请求头设置 {key,value} |
| `action` | string | 'print' | 行为：print（打印）、preview（预览），默认print | enums string (optional), "print"、"preview"，default 'print'. The client can decide the preview behavior based on the returned preview address. (行为：打印或预览，默认打印，客户端可根据返回的预览地址，自行决定预览行为) |
| `[key]` | string | - | 可添加任意key-value，会原样跟extraOptions返回 | (optional), any key-value you want to add. it may be useAble when extraOptions returned (可以添加任何想添加的 key:value, 会原样跟 extraOptions 返回) |

## 🛠️ 工具方法

### 连接状态监控

```javascript
// 获取连接状态 (可用可不用，因为每个方法都会主动校验是否链接成功)
const status = await webPrintPdf.utils.getConnectStatus();
console.log('连接状态:', status);
```

### 客户端设置

```javascript
// 设置客户端标题
await webPrintPdf.utils.setTitle('Web Print PDF Client'); // 设置null恢复
// or await webPrintPdf.utils.setTitle(<div>Web Print PDF Client</div>);

// 设置主题色
await webPrintPdf.utils.setThemeColor('rgb(229,182,80)'); // 设置null恢复

// 切换标签页可见性 （共5个tab页面，可自由控制显示或隐藏）
await webPrintPdf.utils.switchTabsVisibility([
    {
        name:'BasicInfo', // 'BasicInfo', 'Printers', 'Logs', 'Run Example', 'ContactUs'
        visible: false ,  // true/false
    }
]); // 设置null恢复

// 设置“联系我们”页面内容（支持完全控制此页面）
await webPrintPdf.utils.setContactUsTabInnerHtml(
    '<h2>联系我们</h2><p>邮箱: support@example.com</p>'
); // 设置null恢复
```

### 事件

如果不想使用异步，可通过事件监听响应

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

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 [LICENSE](https://github.com/weixiaoyi/web-print-pdf/blob/main/LICENSE) 文件
