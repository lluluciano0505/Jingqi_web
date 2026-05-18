# Module 04 — Projects Section

## 目标
首页展示全部 7 个项目卡片，点击进入每个项目的独立详情页。

---

## Checklist

### 首页项目网格
- [ ] 创建 `components/ProjectCard.tsx`（单张项目卡片）
- [ ] 创建 `components/ProjectsGrid.tsx`（7 张卡片的网格容器）
- [ ] 在 `app/page.tsx` 中引入 `ProjectsGrid`

**ProjectCard 内容：**
- [ ] 封面图（`<Image>` 组件，来自 `public/images/projects/proj-N/`）
- [ ] 项目标题
- [ ] Tagline（一句话描述）
- [ ] 技能标签列表（小色块，来自 frontmatter `skills` 字段）
- [ ] 整张卡片可点击，跳转到 `/projects/[slug]`

**网格布局：**
- [ ] 桌面端：3 列
- [ ] 平板端：2 列
- [ ] 手机端：1 列
- [ ] DataTaxonomy（proj-5）排在第一位

### 项目详情页
- [ ] 创建 `app/projects/[slug]/page.tsx`
- [ ] 用 `generateStaticParams()` 预生成 7 个项目的静态路由
- [ ] 调用 `getProjectBySlug(slug)` 获取数据

**详情页内容：**
- [ ] 项目标题（大标题）
- [ ] Tagline
- [ ] 技能标签
- [ ] 封面图（宽屏展示）
- [ ] Markdown 正文渲染（用 `dangerouslySetInnerHTML` 或 MDX）
- [ ] 返回首页的导航链接（← Back）

### 动画
- [ ] 每张卡片 scroll 进入视口时触发淡入 + 向上滑动
- [ ] 使用 Framer Motion `whileInView` + `viewport={{ once: true }}`
- [ ] 卡片之间有错落延迟（stagger，每张延迟 0.05s）

### 图片处理
- [ ] proj-1 到 proj-4、proj-6、proj-7：封面图为 `thumbnail.png`
- [ ] proj-5：封面图为 `DataTaxonomy.png`
- [ ] proj-7 额外有 `thumbnail.svg`，优先使用 PNG
- [ ] 图片缺失时显示深蓝色渐变占位背景

### 验证
- [ ] 首页显示 7 张卡片，布局正确
- [ ] 点击任意卡片能跳转到对应详情页
- [ ] 详情页 markdown 内容正常渲染
- [ ] 详情页返回按钮有效
- [ ] 手机端卡片正常显示，无溢出
