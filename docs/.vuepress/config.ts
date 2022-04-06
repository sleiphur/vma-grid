import type {DefaultThemeOptions} from 'vuepress'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'vma-grid',
    description: 'vue3 calc grid',
    base: process.env.BUILD_WEB === 'true' ? '/' : '/vma-grid/',

    port: 18081,
    head: [
        // 设置 favor.ico，docs/.vuepress/public 下
        [
            'link', {rel: 'icon', href: '/images/logo.png'}
        ]
    ],
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
    themeConfig: {
        logo: '/images/logo.png',
        sidebar: [
            {
                text: '首页',
                link: '/README.md'
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
                ]
            },
            {
                text: '表格',
                children: [
                    {
                        text: '表格初始化',
                        link: '/grid/grid-init.md',
                    },
                    {
                        text: '表格尺寸',
                        link: '/grid/grid-size.md'
                    },
                    {
                        text: '表格主题',
                        link: '/grid/grid-theme.md'
                    },
                    {
                        text: '表格行高列宽全局自定义',
                        link: '/grid/grid-row-height-column-width.md'
                    },
                    {
                        text: '表格行列隐藏',
                        link: '/grid/grid-row-column-hide.md'
                    },
                    {
                        text: '表格行列插入',
                        link: '/grid/grid-row-column-insert.md'
                    },
                    {
                        text: '表格行列删除',
                        link: '/grid/grid-row-column-delete.md'
                    },
                    {
                        text: '单元格字体风格',
                        link: '/grid/grid-cell-font-style.md'
                    },
                    {
                        text: '单元格字号',
                        link: '/grid/grid-cell-font-size.md'
                    },
                    {
                        text: '单元格颜色',
                        link: '/grid/grid-cell-color.md'
                    },

                ],
            },
            {
              text: '公式支持',
              link: '/formula/modules.md'
            },

        ],
    },
})
