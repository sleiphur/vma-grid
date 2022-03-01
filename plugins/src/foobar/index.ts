import { App } from 'vue'
import VmaGridFoobarPluginComponent from './src/foobar'

const GridFoobarPlugin = {
  install(app: App) {
    app.component(
      VmaGridFoobarPluginComponent.name,
      VmaGridFoobarPluginComponent,
    )
  },
}

export default GridFoobarPlugin
