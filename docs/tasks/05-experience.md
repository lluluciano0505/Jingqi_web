# Module 05 — Experience Section

## 目标
展示 Jingqi 的教育和工作经历：地图在上（城市标记）+ 时间线在下（详情条目）。

---

## Checklist

### 依赖安装
- [ ] 安装 `react-leaflet` 和 `leaflet`：`npm install react-leaflet leaflet`
- [ ] 安装类型定义：`npm install -D @types/leaflet`
- [ ] 在 `app/globals.css` 中引入 leaflet 样式：`@import 'leaflet/dist/leaflet.css'`

### 地图组件
- [ ] 创建 `components/ExperienceMap.tsx`
- [ ] 因 Leaflet 不支持 SSR，用 `dynamic(() => import(...), { ssr: false })` 动态引入
- [ ] 地图初始视角：欧洲为中心（center `[50, 10]`，zoom `3`）
- [ ] 底图：OpenStreetMap tile layer
- [ ] 为以下 7 个城市添加标记（数据来自 `experience.yml` 的经纬度）：
  - 伦敦（UCL）
  - 阿姆斯特丹（UvA）
  - 费城（UPenn × 2 条）
  - 哥本哈根（Henning Larsen）
  - 青岛（Hisense）
  - 合肥（New Oriental）
- [ ] 标记使用自定义图标（深蓝色圆点，与主题色一致）
- [ ] 点击标记时，页面自动滚动到时间线中对应的条目，并高亮该条目

### 时间线组件
- [ ] 创建 `components/ExperienceTimeline.tsx`
- [ ] 数据来源：`getExperience()` 返回的 7 条条目
- [ ] 分两组展示：**Education**（3 条）和 **Experience**（4 条）
- [ ] 每条条目显示：
  - 机构名称（加粗）
  - 角色/学位
  - 时间段（右对齐或灰色小字）
  - 城市 + 国家
  - 摘要（summary）
  - 详情要点（details，展开/折叠，默认收起）
  - 技能标签（tags）
- [ ] 被地图标记点击时，对应条目高亮（深蓝色左边框 + 背景微变色）

### 整体板块
- [ ] 创建 `components/ExperienceSection.tsx`，组合地图 + 时间线
- [ ] 板块标题：**Experience**
- [ ] 布局：地图上方（固定高度约 `400px`），时间线下方

### 动画
- [ ] 时间线每条条目 scroll 进入时从左侧淡入
- [ ] 地图区域 scroll 进入时整体淡入

### 验证
- [ ] 地图正确加载，7 个城市标记位置准确
- [ ] 点击地图标记，对应时间线条目高亮
- [ ] 时间线教育和工作经历分组正确
- [ ] 详情要点展开/折叠正常工作
- [ ] 手机端地图不超出屏幕宽度
