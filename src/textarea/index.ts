import { App } from 'vue'
import VmaGridTextareaComponent from './src/textarea'

export const GridTextarea = {
  install(app: App) {
    app.component(VmaGridTextareaComponent.name, VmaGridTextareaComponent)
  },
}

export default GridTextarea
