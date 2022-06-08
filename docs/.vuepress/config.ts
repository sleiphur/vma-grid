import { defineUserConfig } from "vuepress";
const { defaultTheme } = require('@vuepress/theme-default')

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'vma-grid',
  description: 'vue3 calc grid - 一个基于Vue3 Typescript的表格组件',
  base: process.env.BUILD_WEB === 'true' ? '/' : '/vma-grid/',

  port: 18088,

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  theme: defaultTheme({
    // 在这里进行配置
    sidebar: [
      {
        text: '首页',
        link: '/README.md'
      },
      {
        text: '公式支持',
        link: '/formula/modules.md'
      },
      {
        text: '基础组件',
        children: [
          {
            text: '图标',
            link: '/basic/grid-icon.md'
          },
          {
            text: 'Loading',
            link: '/basic/grid-loading.md'
          },
          {
            text: '按钮',
            link: '/basic/grid-button.md'
          },
          {
            text: '单选',
            link: '/basic/grid-radio.md'
          },
          {
            text: '复选',
            link: '/basic/grid-checkbox.md'
          },
          {
            text: '多行文本',
            link: '/basic/grid-textarea.md'
          },
          {
            text: '表格',
            link: '/basic/grid.md'
          },
          {
            text: '单元格水平垂直位置',
            link: '/basic/grid-column-align.md'
          },
          {
            text: '列宽拖动行高拖动',
            link: '/basic/grid-resize-column-row.md'
          },
          {
            text: '表头分组',
            link: '/basic/grid-column-header-group.md'
          },
          {
            text: '列名助记',
            link: '/basic/grid-column-helper.md'
          }
        ]
      }
    ],
  }),

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

});
