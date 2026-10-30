import webPrintPdf from 'web-print-pdf';

const statusEl = document.getElementById('status');
const logEl = document.getElementById('log');

function log(message, detail) {
  const time = new Date().toLocaleTimeString();
  const suffix = detail === undefined ? '' : `\n${JSON.stringify(detail, null, 2)}`;
  logEl.textContent = `[${time}] ${message}${suffix}\n\n${logEl.textContent}`;
}

async function checkStatus() {
  try {
    const status = await webPrintPdf.utils.getConnectStatus();
    statusEl.textContent = JSON.stringify(status);
    log('getConnectStatus 成功', status);
  } catch (error) {
    statusEl.textContent = '未连接';
    log('getConnectStatus 失败：客户端没有启动？', error?.message ?? String(error));
  }
}

async function printHtml() {
  try {
    await webPrintPdf.printHtml(
      `<h1>测试打印</h1>
       <p>来自 web-print-pdf 原生 JS 示例</p>
       <p>时间：${new Date().toLocaleString()}</p>`,
      {
        paperFormat: 'A4',
        printBackground: true,
        margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' },
      },
      // printOptions 省略 printerName 时，使用客户端的默认打印机
      {},
    );
    log('printHtml 成功，任务已提交');
  } catch (error) {
    log('printHtml 失败', error?.message ?? String(error));
  }
}

async function printUrl() {
  try {
    await webPrintPdf.printHtmlByUrl('https://example.com', { paperFormat: 'A4' });
    log('printHtmlByUrl 成功，任务已提交');
  } catch (error) {
    log('printHtmlByUrl 失败', error?.message ?? String(error));
  }
}

async function batchPrint() {
  try {
    await webPrintPdf.batchPrint(
      [
        { type: 'printHtml', content: '<h1>批量任务 1</h1><p>第一张</p>' },
        { type: 'printHtml', content: '<h1>批量任务 2</h1><p>第二张</p>' },
      ],
      { paperFormat: 'A4' },
    );
    log('batchPrint 成功，2 个任务已提交');
  } catch (error) {
    log('batchPrint 失败', error?.message ?? String(error));
  }
}

document.getElementById('check').addEventListener('click', checkStatus);
document.getElementById('html').addEventListener('click', printHtml);
document.getElementById('url').addEventListener('click', printUrl);
document.getElementById('batch').addEventListener('click', batchPrint);

log('页面已就绪：请先启动 Web 打印专家客户端，再点上面的按钮。');
