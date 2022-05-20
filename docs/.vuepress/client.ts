import { defineClientConfig } from "@vuepress/client";
import VmaGrid from "../../src/index";
import '../../styles/index.less';

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.use(VmaGrid)
    },
});