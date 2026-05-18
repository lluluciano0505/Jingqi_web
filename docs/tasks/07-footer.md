# Module 07 — Footer

## 目标
页面最底部的页脚，简洁展示版权信息和社交链接图标。

---

## Checklist

### 组件创建
- [ ] 创建 `components/Footer.tsx`
- [ ] 在 `app/layout.tsx` 中引入（全站通用）

### 内容
- [ ] 左侧或居中：版权文字 `© 2026 Jingqi Lu`
- [ ] 右侧或居中：三个图标链接
  - GitHub 图标 → `https://github.com/lluluciano0505`
  - LinkedIn 图标 → `https://www.linkedin.com/in/jingqi-lu-04a910266`
  - Email 图标 → `mailto:lluluciano0505@gmail.com`
- [ ] 图标使用 SVG 内联或图标库（推荐 `lucide-react`）

### 样式
- [ ] 背景色：与主内容区有轻微区分（浅灰或深蓝 `#1e3a5f`）
- [ ] 图标 hover 时变为深蓝色（或根据背景色决定）
- [ ] 外部链接均加 `target="_blank" rel="noopener noreferrer"`

### 安装依赖
- [ ] 安装图标库：`npm install lucide-react`

### 验证
- [ ] Footer 在所有页面底部正常显示
- [ ] 三个图标链接跳转正确
- [ ] 手机端 Footer 排列正常
