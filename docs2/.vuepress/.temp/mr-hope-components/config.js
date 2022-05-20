import { defineClientConfig } from "@vuepress/client";
import Badge from "D:/Sources/vma-grid/node_modules/@mr-hope/vuepress-plugin-components/lib/client/components/Badge";
import BackToTop from "D:/Sources/vma-grid/node_modules/@mr-hope/vuepress-plugin-components/lib/client/components/BackToTop";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    
  },
  rootComponents: [
    BackToTop,
    
  ],
});