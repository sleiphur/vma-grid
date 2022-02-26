import { App } from 'vue'
import VmaGridButtonComponent from './src/button'

export const GridButton = {
  install(app: App) {
    app.component(VmaGridButtonComponent.name, VmaGridButtonComponent)
  },
}

export default GridButton
