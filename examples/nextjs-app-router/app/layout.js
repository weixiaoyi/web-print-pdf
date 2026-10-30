export const metadata = {
  title: 'web-print-pdf · Next.js App Router 示例',
  description: '在 Next.js 客户端组件里静默打印 HTML，无需浏览器打印对话框。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body
        style={{
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
          maxWidth: 760,
          margin: '40px auto',
          padding: '0 16px',
          lineHeight: 1.6,
        }}
      >
        {children}
      </body>
    </html>
  );
}
