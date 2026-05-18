# Project Progress

**网站：** Jingqi Lu — Personal Portfolio  
**技术栈：** Next.js 15 · Tailwind CSS · Framer Motion · Vercel

---

## 模块进度总览

| # | 模块 | 状态 | 详细任务 |
|---|------|------|---------|
| 01 | Project Skeleton & Global Setup | ✅ 已完成 | [tasks/01-setup.md](tasks/01-setup.md) |
| 02 | Content Layer（内容解析工具） | ✅ 已完成 | [tasks/02-content-layer.md](tasks/02-content-layer.md) |
| 03 | Hero Section | ✅ 已完成 | [tasks/03-hero.md](tasks/03-hero.md) |
| 04 | Projects Section | ✅ 已完成 | [tasks/04-projects.md](tasks/04-projects.md) |
| 05 | Experience Section（地图 + 时间线） | ✅ 已完成 | [tasks/05-experience.md](tasks/05-experience.md) |
| 06 | Blog Section | ✅ 已完成 | [tasks/06-blog.md](tasks/06-blog.md) |
| 07 | Footer | ✅ 已完成 | [tasks/07-footer.md](tasks/07-footer.md) |
| 08 | Deploy to Vercel | ⬜ 未开始 | [tasks/08-deploy.md](tasks/08-deploy.md) |

**图例：** ⬜ 未开始 · 🔄 进行中 · ✅ 已完成

---

## 依赖关系

```
01-setup
  └── 02-content-layer
        ├── 03-hero
        ├── 04-projects
        ├── 05-experience  （需额外安装 react-leaflet）
        ├── 06-blog
        └── 07-footer      （需额外安装 lucide-react）
              └── 08-deploy
```

> 01 和 02 必须先完成，03–07 可以并行推进，08 最后做。

---

## 更新记录

| 日期 | 变更 |
|------|------|
| 2026-05-18 | 需求文档完成，任务清单创建 |
