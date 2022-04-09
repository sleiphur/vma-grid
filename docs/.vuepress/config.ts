import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
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
      title: "Theme Demo",
      description: "A demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "主题演示",
      description: "vuepress-theme-hope 的演示",
    },
  },

  plugins: [[
    'vuepress-plugin-typedoc',
    // Plugin / TypeDoc options
    {
      entryPoints: ['./src/formula/index.ts', './src/formula/formulas/index.ts'],
      tsconfig: './tsconfig.json',
      // Plugin options
      out: 'formula',
      sidebar: {
        fullNames: true,
        parentCategory: 'API',
      },
    },
  ]],

  themeConfig,
});
