# Module 08 — Deploy to Vercel

## 目标
将网站部署到 Vercel，通过公开 URL 可以访问。

---

## Checklist

### 代码准备
- [ ] 运行 `npm run build`，确认本地构建零报错
- [ ] 运行 `npm run lint`，确认无 ESLint 错误
- [ ] 检查所有图片路径正确（`public/images/` 下的文件可被访问）
- [ ] 检查 CV PDF 路径正确（`public/files/CV_Jingqi.pdf`）

### GitHub 仓库
- [ ] 确认代码已推送到 GitHub 仓库（`Jingqi_web`）
- [ ] 确认 `.gitignore` 包含 `node_modules/` 和 `.next/`
- [ ] 确认 `next-env.d.ts` 在 `.gitignore` 中（Next.js 自动生成，不应提交）

### Vercel 部署
- [ ] 登录 Vercel（vercel.com），连接 GitHub 账号
- [ ] 导入 `Jingqi_web` 仓库
- [ ] Framework Preset 选择 **Next.js**（Vercel 应自动识别）
- [ ] 点击 Deploy，等待构建完成
- [ ] 获取 Vercel 分配的默认域名（如 `jingqi-web.vercel.app`）

### 自定义域名（可选，后续处理）
- [ ] 如有自定义域名，在 Vercel Project Settings → Domains 中添加

### 验证
- [ ] 通过 Vercel URL 访问网站，首页正常加载
- [ ] 各板块内容（Hero / Projects / Experience / Blog / Footer）正常显示
- [ ] 项目详情页可以访问（`/projects/proj-5`）
- [ ] 文章页可以访问（`/posts/who-gets-a-place-after-dark`）
- [ ] CV 下载按钮有效
- [ ] 手机端浏览正常
