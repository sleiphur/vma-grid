import { App } from 'vue'
import VmaGridBorderPluginComponent from './src/border'

const GridBorderPlugin = {
    install(app: App) {
        app.component(
            VmaGridBorderPluginComponent.name,
            VmaGridBorderPluginComponent,
        )
    },
}

export default GridBorderPlugin
