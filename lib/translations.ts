export type Locale = "en" | "zh";

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      blog: "Blog",
      cv: "CV",
      downloadCv: "Download CV",
      toggleMenu: "Toggle menu",
    },
    sections: {
      projects: {
        title: "Projects",
        groups: {
          AI: "AI",
          ML: "Machine Learning",
          Analytics: "Data Analysis",
        },
      },
      experience: {
        title: "Experience",
        subtitle: "Education and professional journey.",
        education: "Education",
        work: "Experience",
        showDetails: "Show details ↓",
        showLess: "Show less ↑",
      },
      blog: {
        title: "Blog & Creation",
        subtitle: "Writing, maps, and spatial explorations.",
      },
    },
    hero: {
      downloadCv: "Download CV",
    },
    page: {
      back: "← Back",
    },
  },
  zh: {
    nav: {
      projects: "项目",
      experience: "经历",
      blog: "博客",
      cv: "简历",
      downloadCv: "下载简历",
      toggleMenu: "切换菜单",
    },
    sections: {
      projects: {
        title: "项目",
        groups: {
          AI: "AI",
          ML: "机器学习",
          Analytics: "数据分析",
        },
      },
      experience: {
        title: "经历",
        subtitle: "教育背景与职业历程。",
        education: "教育",
        work: "工作经历",
        showDetails: "展开详情 ↓",
        showLess: "收起 ↑",
      },
      blog: {
        title: "博客与创作",
        subtitle: "文章、地图与空间探索。",
      },
    },
    hero: {
      downloadCv: "下载简历",
    },
    page: {
      back: "← 返回",
    },
  },
} as const;
