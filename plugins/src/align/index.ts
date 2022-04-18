import { App } from 'vue'
import VmaGridAlignPluginComponent from './src/align'

const GridAlignPlugin = {
    install(app: App) {
        app.component(
            VmaGridAlignPluginComponent.name,
            VmaGridAlignPluginComponent,
        )
    },
}

export default GridAlignPlugin
