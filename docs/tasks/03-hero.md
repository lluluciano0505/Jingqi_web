# Module 03 — Hero Section

## 目标
首页最顶部的全屏介绍区域，访客打开网站第一眼看到的内容。

---

## Checklist

### 组件创建
- [ ] 创建 `components/Hero.tsx`
- [ ] 在 `app/page.tsx` 中引入并渲染

### 内容
- [ ] 显示姓名：**Jingqi Lu**（大标题）
- [ ] 显示职位：**AI & Geospatial ML Engineer**（副标题）
- [ ] 显示三段介绍文字（从 `settings.yml` 的 `intro_text` 读取）：
  > I'm Jingqi — I build AI systems that help people find what they're looking for in messy, unstructured data.
  > Currently at Henning Larsen (Copenhagen) and UPenn, I work at the intersection of large language models, geospatial data, and urban systems.
  > Open to AI/ML engineering roles in urban tech, data infrastructure, or applied AI.
- [ ] CV 下载按钮（链接到 `/files/CV_Jingqi.pdf`，`target="_blank"`）
- [ ] 三个社交图标：GitHub / LinkedIn / Email（从 `settings.yml` 读取链接）

### 视觉
- [ ] 页面高度：至少 `100vh` 或接近全屏
- [ ] 内容垂直居中或偏上居中
- [ ] 姓名使用大字号（≥ 4xl）
- [ ] 点缀色（深蓝 `#1e3a5f`）应用在职位标题或装饰元素上

### 动画（Framer Motion）
- [ ] 姓名：进入时从下向上淡入（`y: 20 → 0`，`opacity: 0 → 1`）
- [ ] 副标题：延迟 0.1s 后同样动画
- [ ] 介绍文字：延迟 0.2s 后淡入
- [ ] 按钮和图标：延迟 0.3s 后淡入

### 验证
- [ ] 在浏览器中查看，文字内容正确显示
- [ ] CV 下载按钮点击后能下载 PDF
- [ ] 社交图标链接正确跳转
- [ ] 动画流畅，不卡顿
