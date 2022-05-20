import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "D:/Sources/vma-grid/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup";
import SWUpdatePopup from "D:/Sources/vma-grid/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});