import { defineNavbarConfig } from "vuepress-theme-hope";

export const zh = defineNavbarConfig([
  "/zh/",
  "/zh/home",
  { text: "使用指南", icon: "creative", link: "/zh/guide/" },
  {
    text: "使用示例",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "表格",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "表格配置项", icon: "edit", link: "article0" },
          { text: "表格初始化", icon: "edit", link: "article1" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
