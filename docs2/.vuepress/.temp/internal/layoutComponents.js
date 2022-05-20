import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/Sources/vma-grid/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/Sources/vma-grid/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
}
