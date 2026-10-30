import { useCallback, useState } from 'react';
import webPrintPdf from 'web-print-pdf';

/**
 * 把「连接检查 + 打印 + 日志」收敛成一个 Hook，
 * 业务组件里只关心「打印什么」，不关心 WebSocket 细节。
 */
export function useWebPrint() {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('未检查');
  const [logs, setLogs] = useState([]);

  const log = useCallback((message, detail) => {
    const suffix = detail === undefined ? '' : ` ${JSON.stringify(detail)}`;
    setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${message}${suffix}`, ...prev]);
  }, []);

  const run = useCallback(
    async (label, task) => {
      setBusy(true);
      try {
        await task();
        log(`${label} 成功`);
      } catch (error) {
        log(`${label} 失败：${error?.message ?? String(error)}`);
      } finally {
        setBusy(false);
      }
    },
    [log],
  );

  const checkStatus = useCallback(() => {
    return run('检查连接', async () => {
      const result = await webPrintPdf.utils.getConnectStatus();
      setStatus(JSON.stringify(result));
    });
  }, [run]);

  const printReceipt = useCallback(() => {
    return run('打印小票', () =>
      webPrintPdf.printHtml(
        `<div style="font-family:ui-monospace,monospace;width:72mm;padding:4mm">
           <h3 style="text-align:center;margin:0 0 4mm">示例小票</h3>
           <p style="margin:0">单号：R-0001</p>
           <p style="margin:0">时间：${new Date().toLocaleString()}</p>
           <hr />
           <p style="margin:0;display:flex;justify-content:space-between"><span>静默打印服务</span><span>¥ 99.00</span></p>
           <p style="text-align:center;margin-top:4mm">谢谢惠顾</p>
         </div>`,
        { width: '80mm', printBackground: true, margin: { top: '0', bottom: '0', left: '0', right: '0' } },
        { sharp: true },
      ),
    );
  }, [run]);

  const printLabels = useCallback(() => {
    const tasks = [1, 2, 3].map((index) => ({
      type: 'printHtml',
      content: `<div style="padding:8mm;font-family:system-ui">
                  <h3 style="margin:0 0 4mm">面单 LAB-00${index}</h3>
                  <p style="margin:0">示例快递面单 100×150mm</p>
                  <p style="margin:0">第 ${index} / 3 张</p>
                </div>`,
      pdfOptions: { width: '100mm', height: '150mm', printBackground: true },
    }));

    return run('批量打印 3 张面单', () => webPrintPdf.batchPrint(tasks, {}, {}, { requestTimeout: 20 }));
  }, [run]);

  return { busy, status, logs, checkStatus, printReceipt, printLabels };
}

export default function App() {
  const { busy, status, logs, checkStatus, printReceipt, printLabels } = useWebPrint();

  return (
    <main style={{ maxWidth: 760, margin: '40px auto', padding: '0 16px', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 20 }}>web-print-pdf · React 18 示例</h1>
      <p>
        连接状态：<strong>{status}</strong>
      </p>
      <p>
        <button onClick={checkStatus} style={{ marginRight: 8, padding: '8px 14px' }}>
          检查连接
        </button>
        <button onClick={printReceipt} disabled={busy} style={{ marginRight: 8, padding: '8px 14px' }}>
          {busy ? '打印中…' : '打印 80mm 小票'}
        </button>
        <button onClick={printLabels} disabled={busy} style={{ padding: '8px 14px' }}>
          批量打印 3 张面单
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
