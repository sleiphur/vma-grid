import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: process.env.BUILD_WEB === 'true' ? '/' : '/vma-grid/',

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Vma-Grid",
      description: "A grid library based on Vue3 Typescript",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Vma-Grid",
      description: "一个基于Vue3 Typescript的表格组件",
    },
  },

  // plugins: [[
  //   'vuepress-plugin-typedoc',
  //   // Plugin / TypeDoc options
  //   {
  //     entryPoints: ['./src/formula/index.ts', './src/formula/formulas/index.ts'],
  //     tsconfig: './tsconfig.json',
  //     // Plugin options
  //     out: 'formula',
  //     sidebar: {
  //       fullNames: true,
  //       parentCategory: 'API',
  //     },
  //   },
  // ]],

  theme,
});
