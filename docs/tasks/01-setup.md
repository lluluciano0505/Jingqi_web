# Module 01 — Project Skeleton & Global Setup

## 目标
搭建 Next.js App Router 的骨架目录，配置全局样式、字体、主题色，确保 `npm run dev` 能跑起来。

---

## Checklist

### 目录结构
- [ ] 创建 `app/` 目录
- [ ] 创建 `app/layout.tsx`（根布局，含 `<html>` `<body>`、字体引入）
- [ ] 创建 `app/page.tsx`（首页入口，暂时只放占位内容）
- [ ] 创建 `app/globals.css`（引入 Tailwind 三行 directive）
- [ ] 创建 `components/` 目录（存放所有可复用组件）
- [ ] 创建 `lib/` 目录（存放内容解析工具函数）

### 样式与主题
- [ ] 在 `tailwind.config.ts` 中注册自定义颜色：
  - 主色 `brand`: `#1e3a5f`（深蓝）
  - 辅色根据需要扩展
- [ ] 在 `app/globals.css` 中设置全局基础样式（body 背景色、默认字体颜色）
- [ ] 引入 Google Fonts 或 Next.js 内置字体（Inter）

### 导航栏
- [ ] 创建 `components/Navbar.tsx`
- [ ] 包含：网站名/Logo、右侧导航链接（Projects / Experience / Blog）、CV 下载按钮
- [ ] 滚动时导航栏固定在顶部（sticky）
- [ ] 移动端折叠菜单（hamburger）

### 验证
- [ ] 运行 `npm run dev`，浏览器可以打开 `localhost:3000`
- [ ] 运行 `npm run build`，构建无报错
- [ ] 运行 `npm run lint`，无 ESLint 错误
