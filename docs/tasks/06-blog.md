# Module 06 — Blog Section

## 目标
首页底部展示 2 篇文章的预览卡片，点击进入每篇文章的独立页面。

---

## Checklist

### 首页博客预览
- [ ] 创建 `components/BlogCard.tsx`（单张文章预览卡片）
- [ ] 创建 `components/BlogSection.tsx`（2 张卡片的容器）
- [ ] 在 `app/page.tsx` 中引入 `BlogSection`

**BlogCard 内容：**
- [ ] 文章缩略图（来自 `public/images/posts/` 对应目录）
- [ ] 文章标题
- [ ] 发布日期（格式：`November 2025`）
- [ ] 文章简短摘要（取 frontmatter 中的 `description` 或正文首段）
- [ ] 整张卡片可点击，跳转到 `/posts/[slug]`

**现有 2 篇文章对应缩略图：**
- `30-day-map-challenge` → `public/images/posts/30daymapchallenge/thumbnail.png`
- `who-gets-a-place-after-dark` → 无缩略图，使用深蓝渐变占位背景

### 博客文章详情页
- [ ] 创建 `app/posts/[slug]/page.tsx`
- [ ] 用 `generateStaticParams()` 预生成 2 篇文章的静态路由
- [ ] 调用 `getPostBySlug(slug)` 获取数据

**文章页内容：**
- [ ] 文章标题（大标题）
- [ ] 发布日期
- [ ] 缩略图（如有）
- [ ] Markdown 正文渲染
- [ ] 返回首页的导航链接（← Back）

**文章 slug 对应关系：**
- `2025-11-01-30-day-map-challenge.md` → slug: `30-day-map-challenge`
- `2025-12-01-who-gets-a-place-after-dark.md` → slug: `who-gets-a-place-after-dark`

### 动画
- [ ] 2 张卡片 scroll 进入时淡入（stagger 效果）

### 验证
- [ ] 首页显示 2 张博客卡片
- [ ] 点击卡片跳转到对应文章页
- [ ] 文章页 markdown 内容正常渲染
- [ ] 无缩略图时占位背景正常显示
