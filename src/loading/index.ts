import { App } from 'vue'
import VmaGridLoadingComponent from './src/loading'

export const GridLoading = {
  install(app: App) {
    app.component(VmaGridLoadingComponent.name, VmaGridLoadingComponent)
  },
}

export default GridLoading
