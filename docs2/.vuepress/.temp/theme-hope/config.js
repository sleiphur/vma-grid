import { defineClientConfig } from "@vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper";
import HomePage from "@theme-hope/components/HomePage";
import NormalPage from "@theme-hope/components/NormalPage";
import Navbar from "@theme-hope/module/navbar/components/Navbar";
import Sidebar from "@theme-hope/module/sidebar/components/Sidebar";

import { useScrollPromise } from "@theme-hope/composables";
import { setupDarkMode } from "@theme-hope/module/outlook/composables";
import { setupSidebarItems } from "@theme-hope/module/sidebar/composables";

import "D:/Sources/vma-grid/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";



export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // register to inject styles
    app.component("CommonWrapper", CommonWrapper);
    app.component("HomePage", HomePage);
    app.component("NormalPage", NormalPage);
    app.component("Navbar", Navbar);
    app.component("Sidebar", Sidebar);

    
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    
  },
});