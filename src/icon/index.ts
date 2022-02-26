import { App } from 'vue'
import VmaGridIconComponent from './src/icon'

const GridIcon = {
  install(app: App) {
    app.component(VmaGridIconComponent.name, VmaGridIconComponent)
  },
}

export default GridIcon
