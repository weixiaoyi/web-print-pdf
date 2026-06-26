# 使用示例集合

本文档提供了 web-print-pdf 在各种实际场景中的使用示例。

## 📋 目录

- [基础示例](#基础示例)
- [Vue.js 示例](#vuejs-示例)
- [React 示例](#react-示例)
- [Angular 示例](#angular-示例)
- [高级功能](#高级功能)
- [实际应用场景](#实际应用场景)

## 基础示例

### 简单的 HTML 打印

```javascript
import webPrintPdf from 'web-print-pdf';

async function simplePrint() {
    await webPrintPdf.printHtml('<h1>Hello World</h1>');
}
```

### 带样式的打印

```javascript
const html = `
    <style>
        .invoice { 
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        .header { 
            color: #333;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
        }
    </style>
    <div class="invoice">
        <div class="header">
            <h1>发票</h1>
            <p>发票编号: INV-2025-001</p>
        </div>
        <div class="content">
            <p>客户名称: 张三</p>
            <p>总金额: ¥1,999.00</p>
        </div>
    </div>
`;

await webPrintPdf.printHtml(html, {
    paperFormat: 'A4',
    printBackground: true,
    margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
    }
});
```

## Vue.js 示例

### Vue 3 Composition API

```vue
<template>
  <div class="print-demo">
    <button @click="printInvoice" :disabled="isPrinting">
      {{ isPrinting ? '打印中...' : '打印发票' }}
    </button>
    
    <div ref="printArea" style="display: none;">
      <h1>发票详情</h1>
      <table>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import webPrintPdf from 'web-print-pdf';

const isPrinting = ref(false);
const printArea = ref(null);
const items = ref([
  { id: 1, name: '商品A', price: '¥100' },
  { id: 2, name: '商品B', price: '¥200' }
]);

const printInvoice = async () => {
  isPrinting.value = true;
  try {
    await webPrintPdf.printHtml(printArea.value.innerHTML, {
      paperFormat: 'A4',
      printBackground: true
    });
    console.log('打印成功');
  } catch (error) {
    console.error('打印失败:', error);
  } finally {
    isPrinting.value = false;
  }
};
</script>
```

### Vue 2 Options API

```vue
<template>
  <div>
    <button @click="handlePrint">打印</button>
  </div>
</template>

<script>
import webPrintPdf from 'web-print-pdf';

export default {
  data() {
    return {
      document: {
        title: '月度报表',
        date: new Date().toLocaleDateString(),
        content: '这是报表内容...'
      }
    };
  },
  methods: {
    async handlePrint() {
      const html = `
        <div style="padding: 20px;">
          <h1>${this.document.title}</h1>
          <p>日期: ${this.document.date}</p>
          <div>${this.document.content}</div>
        </div>
      `;
      
      await webPrintPdf.printHtml(html);
    }
  }
};
</script>
```

## React 示例

### 函数组件 with Hooks

```jsx
import React, { useState, useRef } from 'react';
import webPrintPdf from 'web-print-pdf';

function PrintComponent() {
  const [isPrinting, setIsPrinting] = useState(false);
  const printRef = useRef(null);

  const handlePrint = async () => {
    setIsPrinting(true);
    try {
      await webPrintPdf.printHtml(printRef.current.innerHTML, {
        paperFormat: 'A4',
        landscape: false,
        printBackground: true
      });
      alert('打印成功！');
    } catch (error) {
      alert('打印失败：' + error.message);
    } finally {
      setIsPrinting(false);
    }
  };

  return (
    <div>
      <button onClick={handlePrint} disabled={isPrinting}>
        {isPrinting ? '打印中...' : '打印文档'}
      </button>
      
      <div ref={printRef} style={{ display: 'none' }}>
        <h1>这是要打印的内容</h1>
        <p>打印时间: {new Date().toLocaleString()}</p>
      </div>
    </div>
  );
}

export default PrintComponent;
```

### 类组件

```jsx
import React, { Component } from 'react';
import webPrintPdf from 'web-print-pdf';

class InvoicePrint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      printing: false
    };
  }

  printInvoice = async () => {
    this.setState({ printing: true });
    
    const { invoice } = this.props;
    const html = `
      <div style="padding: 30px;">
        <h1>发票 #${invoice.number}</h1>
        <p>客户: ${invoice.customer}</p>
        <p>金额: ${invoice.amount}</p>
      </div>
    `;

    try {
      await webPrintPdf.printHtml(html, {
        paperFormat: 'A4',
        watermark: {
          text: '已付款',
          color: 'rgba(0,0,0,0.1)',
          angle: 45
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ printing: false });
    }
  };

  render() {
    return (
      <button 
        onClick={this.printInvoice}
        disabled={this.state.printing}
      >
        打印发票
      </button>
    );
  }
}

export default InvoicePrint;
```

## Angular 示例

### 组件示例

```typescript
import { Component } from '@angular/core';
import webPrintPdf from 'web-print-pdf';

@Component({
  selector: 'app-print',
  template: `
    <div>
      <button 
        (click)="handlePrint()" 
        [disabled]="isPrinting"
      >
        {{ isPrinting ? '打印中...' : '打印文档' }}
      </button>
      
      <div #printContent style="display: none;">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
      </div>
    </div>
  `
})
export class PrintComponent {
  isPrinting = false;
  title = '测试文档';
  content = '这是文档内容';

  async handlePrint() {
    this.isPrinting = true;
    
    try {
      const html = `
        <div style="padding: 20px;">
          <h1>${this.title}</h1>
          <p>${this.content}</p>
        </div>
      `;
      
      await webPrintPdf.printHtml(html, {
        paperFormat: 'A4',
        printBackground: true
      });
      
      console.log('打印成功');
    } catch (error) {
      console.error('打印失败:', error);
    } finally {
      this.isPrinting = false;
    }
  }
}
```

### 服务封装

```typescript
import { Injectable } from '@angular/core';
import webPrintPdf from 'web-print-pdf';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  async printDocument(html: string, options = {}) {
    const defaultOptions = {
      paperFormat: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
      }
    };

    return await webPrintPdf.printHtml(html, {
      ...defaultOptions,
      ...options
    });
  }

  async printInvoice(invoiceData: any) {
    const html = this.generateInvoiceHtml(invoiceData);
    return await this.printDocument(html, {
      watermark: {
        text: invoiceData.isPaid ? '已付款' : '未付款',
        color: 'rgba(0,0,0,0.1)'
      }
    });
  }

  private generateInvoiceHtml(data: any): string {
    return `
      <div class="invoice">
        <h1>发票 #${data.number}</h1>
        <p>客户: ${data.customer}</p>
        <p>金额: ${data.amount}</p>
      </div>
    `;
  }
}
```

## 高级功能

### 添加水印

```javascript
await webPrintPdf.printHtml(html, {
  watermark: {
    text: '机密文件',
    color: 'rgba(255,0,0,0.2)',
    x: 'alignCenter',
    y: 'alignCenter',
    size: 48,
    angle: 45,
    opacity: 0.3,
    rows: 3,
    cols: 3
  }
});
```

### 添加页码

```javascript
await webPrintPdf.printHtml(html, {
  pageNumber: {
    format: '第 {{page}} 页 / 共 {{totalPage}} 页',
    x: 'alignCenter',
    y: 'alignBottom',
    size: 12,
    color: 'rgb(100,100,100)',
    ySpace: 10
  }
});
```

### 批量打印

```javascript
const tasks = [
  {
    type: 'printHtml',
    content: '<h1>文档1</h1>'
  },
  {
    type: 'printHtmlByUrl',
    url: 'https://example.com/doc2'
  },
  {
    type: 'printPdfByUrl',
    url: 'https://example.com/doc3.pdf'
  }
];

await webPrintPdf.batchPrint(tasks, {
  paperFormat: 'A4'
});
```

### 双面打印

```javascript
await webPrintPdf.printHtml(html, {}, {
  duplexMode: 'duplex',  // 双面打印
  colorful: true         // 彩色打印
});
```

## 实际应用场景

### 电商订单打印

```javascript
async function printOrder(order) {
  const html = `
    <style>
      .order { font-family: Arial; padding: 20px; }
      .header { border-bottom: 2px solid #000; margin-bottom: 20px; }
      .items { margin: 20px 0; }
      .total { font-size: 18px; font-weight: bold; }
    </style>
    <div class="order">
      <div class="header">
        <h1>订单详情</h1>
        <p>订单号: ${order.id}</p>
        <p>日期: ${order.date}</p>
      </div>
      <div class="items">
        ${order.items.map(item => `
          <div>${item.name} x ${item.quantity} = ¥${item.price}</div>
        `).join('')}
      </div>
      <div class="total">
        总计: ¥${order.total}
      </div>
    </div>
  `;

  await webPrintPdf.printHtml(html, {
    paperFormat: 'A4',
    printBackground: true
  });
}
```

### 学生成绩单

```javascript
async function printTranscript(student) {
  const html = `
    <style>
      table { width: 100%; border-collapse: collapse; }
      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
      th { background-color: #4CAF50; color: white; }
    </style>
    <div style="padding: 30px;">
      <h1>${student.name} 的成绩单</h1>
      <p>学号: ${student.id}</p>
      <table>
        <tr>
          <th>科目</th>
          <th>成绩</th>
          <th>学分</th>
        </tr>
        ${student.grades.map(g => `
          <tr>
            <td>${g.subject}</td>
            <td>${g.score}</td>
            <td>${g.credit}</td>
          </tr>
        `).join('')}
      </table>
      <p style="margin-top: 20px;">平均分: ${student.average}</p>
    </div>
  `;

  await webPrintPdf.printHtml(html, {
    paperFormat: 'A4',
    watermark: {
      text: '官方成绩单',
      opacity: 0.1
    },
    pageNumber: {
      format: '第 {{page}} 页'
    }
  });
}
```

### 物流标签

```javascript
async function printShippingLabel(shipment) {
  const html = `
    <style>
      .label {
        width: 10cm;
        height: 15cm;
        padding: 10px;
        font-family: Arial;
      }
      .barcode { font-size: 24px; letter-spacing: 2px; }
    </style>
    <div class="label">
      <h2>收件人信息</h2>
      <p><strong>${shipment.recipient.name}</strong></p>
      <p>${shipment.recipient.address}</p>
      <p>电话: ${shipment.recipient.phone}</p>
      
      <h2>寄件人信息</h2>
      <p>${shipment.sender.name}</p>
      <p>${shipment.sender.address}</p>
      
      <div class="barcode">
        ${shipment.trackingNumber}
      </div>
    </div>
  `;

  await webPrintPdf.printHtml(html, {
    width: '10cm',
    height: '15cm',
    printBackground: true
  });
}
```

## 📚 更多资源

> 官网文档：**中文** `/docs/…` · **English** `/en/docs/…`

### 本仓库

- [完整 API 文档（中文）](../README_CN.md#api-文档)
- [配置选项详解（中文）](../README_CN.md#配置选项)
- [常见问题（中文）](../README_CN.md#常见问题-faq)
- [English README](../README.md)

### 官网 — 样例与进阶

- [文档中心（中文）](https://webprintpdf.com/docs/?utm_source=github&utm_medium=examples&utm_campaign=docs-hub) · [Documentation hub (EN)](https://webprintpdf.com/en/docs/?utm_source=github&utm_medium=examples&utm_campaign=docs-hub)
- [在线样例中心](https://webprintpdf.com/docs/demos/?utm_source=github&utm_medium=examples&utm_campaign=demos) · [Live demos (EN)](https://webprintpdf.com/en/docs/demos/?utm_source=github&utm_medium=examples&utm_campaign=demos)
- [打印参数详解](https://webprintpdf.com/docs/print-options/?utm_source=github&utm_medium=examples&utm_campaign=advanced) · [Print options (EN)](https://webprintpdf.com/en/docs/print-options/?utm_source=github&utm_medium=examples&utm_campaign=advanced)
- [前端错误处理标准](https://webprintpdf.com/docs/error-handling/?utm_source=github&utm_medium=examples&utm_campaign=advanced) · [Error handling (EN)](https://webprintpdf.com/en/docs/error-handling/?utm_source=github&utm_medium=examples&utm_campaign=advanced)
- [远程打印配置](https://webprintpdf.com/docs/remote-print/?utm_source=github&utm_medium=examples&utm_campaign=advanced) · [Remote print (EN)](https://webprintpdf.com/en/docs/remote-print/?utm_source=github&utm_medium=examples&utm_campaign=advanced)
- [printHtml API 参考](https://webprintpdf.com/docs/api-printHtml/?utm_source=github&utm_medium=examples&utm_campaign=advanced) · [printHtml API (EN)](https://webprintpdf.com/en/docs/api-printHtml/?utm_source=github&utm_medium=examples&utm_campaign=advanced)
- [batchPrint API 参考](https://webprintpdf.com/docs/api-batchPrint/?utm_source=github&utm_medium=examples&utm_campaign=advanced) · [batchPrint API (EN)](https://webprintpdf.com/en/docs/api-batchPrint/?utm_source=github&utm_medium=examples&utm_campaign=advanced)

### 官网 — 选型对比

- [Print.js 与 web-print-pdf 对比](https://webprintpdf.com/docs/printjs-comparison/?utm_source=github&utm_medium=examples&utm_campaign=comparison) · [Print.js comparison (EN)](https://webprintpdf.com/en/docs/printjs-comparison/?utm_source=github&utm_medium=examples&utm_campaign=comparison)
- [jsPDF 与 web-print-pdf 对比](https://webprintpdf.com/docs/jspdf-comparison/?utm_source=github&utm_medium=examples&utm_campaign=comparison) · [jsPDF comparison (EN)](https://webprintpdf.com/en/docs/jspdf-comparison/?utm_source=github&utm_medium=examples&utm_campaign=comparison)
- [Lodop 与 web-print-pdf 选型](https://webprintpdf.com/docs/lodop-alternative/?utm_source=github&utm_medium=examples&utm_campaign=comparison) · [Lodop guide (EN)](https://webprintpdf.com/en/docs/lodop-alternative/?utm_source=github&utm_medium=examples&utm_campaign=comparison)
- [Puppeteer / Playwright 对比](https://webprintpdf.com/docs/puppeteer-print-comparison/?utm_source=github&utm_medium=examples&utm_campaign=comparison) · [Puppeteer guide (EN)](https://webprintpdf.com/en/docs/puppeteer-print-comparison/?utm_source=github&utm_medium=examples&utm_campaign=comparison)

### 官网 — 框架与场景

- [Vue 静默打印](https://webprintpdf.com/docs/vue-silent-print/?utm_source=github&utm_medium=examples&utm_campaign=framework) · [Vue silent print (EN)](https://webprintpdf.com/en/docs/vue-silent-print/?utm_source=github&utm_medium=examples&utm_campaign=framework)
- [React 静默打印](https://webprintpdf.com/docs/react-silent-print/?utm_source=github&utm_medium=examples&utm_campaign=framework) · [React silent print (EN)](https://webprintpdf.com/en/docs/react-silent-print/?utm_source=github&utm_medium=examples&utm_campaign=framework)
- [热敏小票与快递面单](https://webprintpdf.com/docs/thermal-receipt-print/?utm_source=github&utm_medium=examples&utm_campaign=scenarios) · [Thermal receipts (EN)](https://webprintpdf.com/en/docs/thermal-receipt-print/?utm_source=github&utm_medium=examples&utm_campaign=scenarios)
- [WMS 远程面单打印](https://webprintpdf.com/docs/wms-remote-print/?utm_source=github&utm_medium=examples&utm_campaign=scenarios) · [WMS remote labels (EN)](https://webprintpdf.com/en/docs/wms-remote-print/?utm_source=github&utm_medium=examples&utm_campaign=scenarios)
- [ERP 发票与对账单](https://webprintpdf.com/docs/invoice-erp-print/?utm_source=github&utm_medium=examples&utm_campaign=scenarios) · [ERP invoices (EN)](https://webprintpdf.com/en/docs/invoice-erp-print/?utm_source=github&utm_medium=examples&utm_campaign=scenarios)

### 官网 — 部署与下载

- [Windows 部署指南](https://webprintpdf.com/docs/windows-deploy/?utm_source=github&utm_medium=examples&utm_campaign=deploy) · [Windows deploy (EN)](https://webprintpdf.com/en/docs/windows-deploy/?utm_source=github&utm_medium=examples&utm_campaign=deploy)
- [Linux 部署指南](https://webprintpdf.com/docs/linux-deploy/?utm_source=github&utm_medium=examples&utm_campaign=deploy) · [Linux deploy (EN)](https://webprintpdf.com/en/docs/linux-deploy/?utm_source=github&utm_medium=examples&utm_campaign=deploy)
- [macOS 部署指南](https://webprintpdf.com/docs/mac-deploy/?utm_source=github&utm_medium=examples&utm_campaign=deploy) · [macOS deploy (EN)](https://webprintpdf.com/en/docs/mac-deploy/?utm_source=github&utm_medium=examples&utm_campaign=deploy)
- [客户端下载（中文）](https://webprintpdf.com/downloadApp/?utm_source=github&utm_medium=examples&utm_campaign=download) · [Client download (EN)](https://webprintpdf.com/en/downloadApp/?utm_source=github&utm_medium=examples&utm_campaign=download)
- [定价与授权（中文）](https://webprintpdf.com/price/?utm_source=github&utm_medium=examples&utm_campaign=price) · [Pricing (EN)](https://webprintpdf.com/en/price/?utm_source=github&utm_medium=examples&utm_campaign=price)

---

**贡献示例**

如果您有好的使用示例，欢迎提交 Pull Request 添加到本文档！

