# Security Policy

## 🔒 Supported Versions

我们支持以下版本的安全更新：

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | :white_check_mark: |
| 1.x.x   | :x:                |
| < 1.0   | :x:                |

## 🐛 Reporting a Vulnerability

如果您发现安全漏洞，请**不要**公开披露。请通过以下方式报告：

### 报告方式

1. **邮件联系** (推荐)
   - 发送邮件至：[联系邮箱]
   - 主题：[Security] web-print-pdf vulnerability report
   - 包含详细的漏洞描述和重现步骤

2. **私密 Issue**
   - 如果 GitHub 启用了私密漏洞报告功能，可以使用该功能

### 报告内容应包括

- 漏洞类型和严重程度
- 详细的重现步骤
- 受影响的版本
- 可能的影响范围
- 建议的修复方案（如果有）
- 您的联系方式

## 📋 处理流程

1. **确认收到** - 我们会在 48 小时内确认收到您的报告
2. **评估漏洞** - 评估漏洞的严重性和影响范围（3-5 个工作日）
3. **开发补丁** - 开发和测试安全补丁
4. **发布修复** - 发布包含修复的新版本
5. **披露通知** - 在合适的时间公开披露（与报告者协商）

## 🛡️ 安全最佳实践

使用 web-print-pdf 时，请遵循以下安全最佳实践：

### 1. 输入验证
```javascript
// 对用户输入的 HTML 内容进行验证和清理
import DOMPurify from 'dompurify';

const cleanHtml = DOMPurify.sanitize(userInput);
await webPrintPdf.printHtml(cleanHtml);
```

### 2. URL 验证
```javascript
// 验证 URL 来源
const allowedDomains = ['yourdomain.com'];
const url = new URL(printUrl);
if (!allowedDomains.includes(url.hostname)) {
    throw new Error('Invalid URL');
}
```

### 3. 客户端安全
- 确保客户端软件来自官方渠道下载
- 定期更新到最新版本
- 配置适当的网络访问权限

### 4. 敏感数据处理
- 不要在打印内容中包含敏感的未加密数据
- 使用 HTTPS 传输打印数据
- 考虑使用 watermark 标记敏感文档

## 🔐 已知安全注意事项

1. **客户端依赖** - 本库需要安装客户端软件，请确保从官方渠道下载
2. **WebSocket 连接** - 使用本地 WebSocket 连接，请确保防火墙配置正确
3. **HTML 内容** - 打印的 HTML 内容会被执行，请注意内容安全

## 📞 联系方式

- 安全问题邮箱：[待补充]
- 官方网站：https://webprintpdf.com/
- GitHub Issues：https://github.com/weixiaoyi/web-print-pdf/issues（仅用于非安全问题）

## 🙏 致谢

我们感谢所有负责任地披露安全漏洞的研究人员和用户。

---

最后更新：2025-10-01

