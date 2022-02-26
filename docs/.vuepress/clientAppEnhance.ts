import { defineClientAppEnhance } from '@vuepress/client'

import VmaGrid from "../../src/index";
import '../../styles/index.less';



export default defineClientAppEnhance(({ app }) => {
    app.use(VmaGrid)
})
