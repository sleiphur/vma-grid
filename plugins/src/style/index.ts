import { App } from 'vue'
import VmaGridStylePluginComponent from './src/style'

const GridStylePlugin = {
    install(app: App) {
        app.component(
            VmaGridStylePluginComponent.name,
            VmaGridStylePluginComponent,
        )
    },
}

export default GridStylePlugin
