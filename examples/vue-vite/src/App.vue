<script setup>
import { ref } from 'vue';
import webPrintPdf from 'web-print-pdf';

const status = ref('未检查');
const logs = ref([]);
const busy = ref(false);

function log(message, detail) {
  const suffix = detail === undefined ? '' : ` ${JSON.stringify(detail)}`;
  logs.value.unshift(`[${new Date().toLocaleTimeString()}] ${message}${suffix}`);
}

async function checkStatus() {
  try {
    status.value = JSON.stringify(await webPrintPdf.utils.getConnectStatus());
    log('连接检查完成');
  } catch (error) {
    status.value = '未连接（客户端没启动？）';
    log('连接检查失败', error?.message ?? String(error));
  }
}

function invoiceHtml(no) {
  return `
    <div style="padding:16px;font-family:system-ui,sans-serif">
      <h2 style="margin:0 0 8px">销售发票 ${no}</h2>
      <p style="color:#666;margin:0 0 16px">开票日期：${new Date().toLocaleDateString()}</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr>
          <th align="left" style="border-bottom:1px solid #ddd;padding:6px 0">项目</th>
          <th align="right" style="border-bottom:1px solid #ddd;padding:6px 0">金额</th>
        </tr>
        <tr><td style="padding:6px 0">静默打印服务（年）</td><td align="right">¥ 99.00</td></tr>
        <tr><td style="padding:6px 0">客户端授权</td><td align="right">¥ 0.00</td></tr>
        <tr>
          <td align="right" style="padding:6px 0"><strong>合计</strong></td>
          <td align="right"><strong>¥ 99.00</strong></td>
        </tr>
      </table>
    </div>`;
}

async function printInvoice() {
  busy.value = true;
  try {
    await webPrintPdf.printHtml(
      invoiceHtml('INV-001'),
      {
        paperFormat: 'A4',
        printBackground: true,
        margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
        pageNumber: { format: '第 {{page}} / {{totalPage}} 页', size: 9 },
      },
      // printOptions 不传 printerName 时使用客户端默认打印机
      {},
    );
    log('发票打印任务已提交');
  } catch (error) {
    log('打印失败', error?.message ?? String(error));
  } finally {
    busy.value = false;
  }
}

async function previewInvoice() {
  try {
    const response = await webPrintPdf.printHtml(
      invoiceHtml('INV-002'),
      { paperFormat: 'A4', printBackground: true },
      {},
      { action: 'preview' },
    );
    log('预览已生成', response);
  } catch (error) {
    log('预览失败', error?.message ?? String(error));
  }
}
</script>

<template>
  <main>
    <h1>web-print-pdf · Vue 3 示例</h1>
    <p>连接状态：<strong>{{ status }}</strong></p>
    <p>
      <button @click="checkStatus">检查连接</button>
      <button :disabled="busy" @click="printInvoice">{{ busy ? '打印中…' : '打印发票' }}</button>
      <button @click="previewInvoice">生成预览（不出纸）</button>
    </p>
    <ul>
      <li v-for="(line, index) in logs" :key="index">{{ line }}</li>
    </ul>
  </main>
</template>

<style>
body {
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
}
main {
  max-width: 760px;
  margin: 40px auto;
  padding: 0 16px;
  line-height: 1.6;
}
h1 {
  font-size: 20px;
}
button {
  margin: 4px 8px 4px 0;
  padding: 8px 14px;
  cursor: pointer;
}
li {
  font-family: ui-monospace, monospace;
  font-size: 13px;
}
</style>
