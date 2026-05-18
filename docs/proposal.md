# Portfolio Website — Requirements & Design Proposal

**Owner:** Jingqi Lu  
**Last updated:** 2026-05-18  
**Status:** Confirmed ✅

---

## 1. 项目目标

为 Jingqi Lu（AI & Geospatial ML Engineer）搭建一个个人作品集网站，用于求职展示。目标受众是英语母语的招聘方和技术评审。

网站核心诉求：**让浏览者在 3 分钟内看懂 Jingqi 是谁、做过什么、能做什么。**

---

## 2. 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | Next.js 15（App Router） |
| 样式 | Tailwind CSS 3.4 |
| 动画 | Framer Motion 12 |
| 内容解析 | gray-matter · js-yaml · remark |
| 部署 | Vercel |
| 语言 | TypeScript |

---

## 3. 设计方向

- **风格：** 亮色系、干净、留白充足，偏学术/专业感
- **配色：** 白/浅灰底，深色文字，点缀色深蓝（`#1e3a5f`）
- **字体：** 无衬线，干净易读（如 Inter 或 Geist）
- **动画：** scroll 触发的 fade-in + slide-up，克制不花哨
- **网站语言：** 纯英文

---

## 4. 页面结构与路由

```
/                      ← 首页（单页滚动，含全部主要板块）
/projects/[slug]       ← 每个项目的详情页
/posts/[slug]          ← 每篇博客文章页
```

首页按顺序排列以下板块：

```
Hero → Projects → Experience → Blog → Footer
```

---

## 5. 各板块详细需求

### 5.1 Hero

**位置：** 首页最顶部，全屏或近全屏高度

**内容：**
- 姓名：**Jingqi Lu**
- 职位标题：**AI & Geospatial ML Engineer**
- 个人介绍（需重写，见下方说明）
- 按钮：Download CV（链接到 `/public/files/CV_Jingqi.pdf`）
- 可选：GitHub / LinkedIn / Email 图标快捷链接

**Hero 文案（已确认）：**

> I'm Jingqi — I build AI systems that help people find what they're looking for in messy, unstructured data.
> Currently at Henning Larsen (Copenhagen) and UPenn, I work at the intersection of large language models, geospatial data, and urban systems.
> Open to AI/ML engineering roles in urban tech, data infrastructure, or applied AI.

---

### 5.2 Projects

**位置：** Hero 下方

**展示方式：** 全部 7 个项目卡片，网格排列

**每张卡片包含：**
- 项目缩略图（来自 `public/images/projects/proj-N/`）
- 项目标题
- Tagline（一句话描述，来自 md 文件 frontmatter）
- 技能标签（`skills` 字段）
- 点击进入详情页

**项目顺序（建议，可调整）：**

| 顺序 | 项目 | 重要程度 |
|------|------|---------|
| 1 | DataTaxonomy (proj-5) | ⭐ 最重要，首位展示 |
| 2 | LSTM Spatial Flow (proj-4) | 深度学习 |
| 3 | Vision × Earth Observation (proj-6) | CV/遥感 |
| 4 | Philadelphia Housing Price (proj-1) | 空间分析 |
| 5 | Philadelphia Fire Alarms (proj-2) | ML |
| 6 | Geolife Daily Mobility (proj-3) | 轨迹分析 |
| 7 | Gym Network Report (proj-7) | 网络分析 |

**项目详情页 `/projects/[slug]`：**
- 渲染 `content/projects/proj-N.md` 的正文内容
- 标题 + 技能标签
- 返回首页的导航

> 封面图：`public/images/projects/proj-5/DataTaxonomy.png` ✅

---

### 5.3 Experience

**位置：** Projects 下方

**两部分并排或上下布局：**

**A. 时间线**
数据来源：`content/data/experience.yml`

按时间倒序，分两组展示：
- **Education**：UCL、University of Amsterdam、UPenn MUSA
- **Experience**：Henning Larsen、UPenn RA、Hisense Cold Chain、New Oriental

每条目显示：机构名、角色、时间段、摘要、标签

**B. 地图**
技术方案：react-leaflet（需额外安装）
标记的城市（来自 experience.yml 的经纬度）：
- 伦敦（UCL）
- 阿姆斯特丹（UvA Exchange）
- 费城（UPenn）
- 哥本哈根（Henning Larsen）
- 青岛（Hisense）
- 合肥（New Oriental）

交互：点击地图标记 → 高亮对应的时间线条目

**布局：地图在上，时间线在下。** ✅

---

### 5.4 Blog

**位置：** Experience 下方

**首页展示：** 2 篇文章的预览卡片（嵌入首页）

**每张卡片包含：**
- 文章标题
- 发布日期
- 缩略图（来自 `public/images/posts/`）
- 简短摘要

**点击进入单篇文章页 `/posts/[slug]`：**
- 渲染 `content/posts/*.md` 全文
- 文章标题 + 日期
- 返回导航

---

### 5.5 Footer

**内容：**
- 姓名 + 版权信息
- 三个图标链接：
  - GitHub → `https://github.com/lluluciano0505`
  - LinkedIn → `https://www.linkedin.com/in/jingqi-lu-04a910266`
  - Email → `mailto:lluluciano0505@gmail.com`

---

## 6. 内容文件映射

```
内容文件                              → 网站用途
─────────────────────────────────────────────────
content/data/settings.yml            → Hero 文案、社交链接、导航
content/data/experience.yml          → Experience 板块数据
content/projects/proj-1~7.md         → Projects 卡片 + 详情页
content/posts/*.md                   → Blog 卡片 + 文章页
content/pages/about.md               → （暂不做独立 About 页）

public/images/projects/proj-N/       → 项目卡片封面图
public/images/posts/                 → Blog 缩略图
public/files/CV_Jingqi.pdf           → CV 下载
```

---

## 7. 设计决策记录

| # | 问题 | 决定 |
|---|------|------|
| 1 | Hero 文案 | 使用文档草稿原文 ✅ |
| 2 | proj-5 封面图 | DataTaxonomy.png ✅ |
| 3 | Experience 布局 | 地图在上，时间线在下 ✅ |
| 4 | 主题点缀色 | 深蓝 `#1e3a5f` ✅ |

---

## 8. 不在本期范围内

- About 独立页面（首页 Hero 已包含自我介绍）
- 联系表单（只用 Footer 图标链接）
- 中文版本
- 评论功能
- 搜索功能
