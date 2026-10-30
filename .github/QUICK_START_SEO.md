# 🚀 GitHub SEO 快速配置（5分钟完成）

本指南帮助你快速完成最重要的 SEO 配置，提升仓库可见度。

## ⚡ 第一步：配置仓库 About（2分钟）

1. 进入仓库首页：https://github.com/weixiaoyi/web-print-pdf
2. 点击右侧 **About** 旁边的 ⚙️ 图标
3. 填入以下信息：

### Description（描述）

> GitHub About 描述上限 **350 字符**，建议控制在 **120 字符以内**，避免展示被截断。

```
Silent browser printing. Lodop/C-Lodop/hiprint alternative. No print dialog. Vue/React. Receipts, thermal labels, invoices.
```

（本地维护位置：`package.json` → `githubDescription`）

### Website（网站）
```
https://webprintpdf.com/
```

### Topics（标签）- 复制粘贴以下内容
```
silent-print, silent-printing, no-print-dialog, lodop, c-lodop, clodop, lodop-alternative, hiprint, window-print, vue-print, thermal-print, receipt-printing, label-printing, shipping-label, invoice-printing, pos-printing, print-agent, browser-print, websocket-print, react-print
```

4. 点击 **Save changes**

## ⚡ 第二步：启用 Discussions（1分钟）

1. 点击仓库顶部的 **Settings**
2. 左侧菜单找到 **Features**
3. 勾选 ✅ **Discussions**
4. 点击 **Set up discussions**

## ⚡ 第三步：发 GitHub Release（一条命令）

发版后 npm 上已经是新版本，但 GitHub Release 要单独发 —— 这个仓库曾漏发过，所以改成脚本：

```powershell
$env:GH_TOKEN = 'ghp_...'   # PAT with repo scope
pwsh -File .github/scripts/publish-release.ps1 -Version 2.1.10
```

先加 `-DryRun` 可只预览 payload。Notes 文件约定 `.github/RELEASE_v<version>.md`（`v2.1.10` 已写好、待补发）。

手工兜底：Releases → **Create a new release** → tag `v2.1.10` → 粘贴同一份 notes → 勾选 **Set as the latest release** → **Publish release**。

## ✅ 完成！

恭喜！你已经完成了最重要的 SEO 配置。

### 🎯 预期效果

- ✅ GitHub 搜索排名提升
- ✅ npm 包页面展示优化
- ✅ 更容易被开发者发现
- ✅ 社区讨论功能开启

### 📈 下一步（可选）

查看完整的优化指南：
- [详细配置指南](.github/REPOSITORY_SETUP.md)
- [SEO 配置索引](.github/SEO_IMPROVEMENTS.md)
- [使用示例集合](.github/EXAMPLES.md)

### 📊 效果监控

1-2 周后检查：
- GitHub Insights → Traffic
- npm 下载量统计
- GitHub Stars 增长

---

**需要帮助？** 在 [Discussions](https://github.com/weixiaoyi/web-print-pdf/discussions) 中提问

