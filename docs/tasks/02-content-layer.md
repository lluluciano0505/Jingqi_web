# Module 02 — Content Layer（内容解析工具）

## 目标
在 `lib/` 目录下封装所有读取内容文件的工具函数，让各页面组件可以直接调用，无需关心文件读取细节。

---

## Checklist

### 类型定义
- [ ] 创建 `lib/types.ts`，定义以下 TypeScript 接口：
  - `Project`（id, title, tagline, skills, thumbnail, slug, content）
  - `Post`（slug, title, date, thumbnail, summary, content）
  - `ExperienceEntry`（institution, role, section, period, city, latitude, longitude, summary, details, tags）
  - `SiteSettings`（intro_title, intro_text, social, resume）

### 项目内容解析
- [ ] 创建 `lib/projects.ts`
- [ ] `getAllProjects()`：读取 `content/projects/*.md`，用 gray-matter 解析 frontmatter，返回 `Project[]`
- [ ] `getProjectBySlug(slug)`：返回单个项目的完整数据（含 markdown body 转 HTML）
- [ ] 确认 slug 规则：文件名去掉 `.md`（如 `proj-1`）

### 博客内容解析
- [ ] 创建 `lib/posts.ts`
- [ ] `getAllPosts()`：读取 `content/posts/*.md`，解析 frontmatter，按日期倒序排列，返回 `Post[]`
- [ ] `getPostBySlug(slug)`：返回单篇文章完整数据（含 markdown body 转 HTML）

### 经历数据解析
- [ ] 创建 `lib/experience.ts`
- [ ] `getExperience()`：读取 `content/data/experience.yml`，用 js-yaml 解析，返回 `ExperienceEntry[]`
- [ ] 按 `section` 字段分组：`Education` 和 `Experience` 两组

### 站点配置解析
- [ ] 创建 `lib/settings.ts`
- [ ] `getSettings()`：读取 `content/data/settings.yml`，返回 `SiteSettings`

### Markdown 渲染
- [ ] 创建 `lib/markdown.ts`
- [ ] `markdownToHtml(markdown: string)`：用 remark + remark-gfm + remark-html 将 markdown 字符串转为 HTML 字符串

### 验证
- [ ] 在 `app/page.tsx` 中临时调用 `getAllProjects()`，console.log 确认返回 7 条数据
- [ ] 调用 `getExperience()`，确认返回 7 条经历条目
