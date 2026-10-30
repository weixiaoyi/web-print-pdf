'use client';

import { useState } from 'react';

export default function Page() {
  const [logs, setLogs] = useState([]);
  const [busy, setBusy] = useState(false);

  function log(line) {
    setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${line}`, ...prev]);
  }

  async function print() {
    setBusy(true);
    try {
      // 关键点：SDK 依赖浏览器 WebSocket，用动态 import 只在点击时加载，
      // 避免在服务端渲染阶段求值（App Router 默认会在服务端预渲染客户端组件）。
      const { default: webPrintPdf } = await import('web-print-pdf');

      await webPrintPdf.printHtml(
        `<div style="padding:16px;font-family:system-ui">
           <h1>来自 Next.js App Router 的静默打印</h1>
           <p>渲染时间：${new Date().toLocaleString()}</p>
         </div>`,
        { paperFormat: 'A4', printBackground: true, margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' } },
        {},
      );
      log('打印任务已提交');
    } catch (error) {
      log(`打印失败：${error?.message ?? String(error)}`);
    } finally {
      setBusy(false);
    }
  }

  async function check() {
    try {
      const { default: webPrintPdf } = await import('web-print-pdf');
      const status = await webPrintPdf.utils.getConnectStatus();
      log(`连接状态：${JSON.stringify(status)}`);
    } catch (error) {
      log(`连接检查失败：${error?.message ?? String(error)}`);
    }
  }

  return (
    <main>
      <h1 style={{ fontSize: 20 }}>web-print-pdf · Next.js App Router 示例</h1>
      <p>先启动 Web 打印专家客户端，再点下面的按钮。</p>
      <p>
        <button onClick={check} style={{ marginRight: 8, padding: '8px 14px' }}>
          检查连接
        </button>
        <button onClick={print} disabled={busy} style={{ padding: '8px 14px' }}>
          {busy ? '打印中…' : '打印 HTML'}
        </button>
      </p>
      <ul style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13 }}>
        {logs.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </main>
  );
}
