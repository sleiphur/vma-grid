import { App } from 'vue'
import VmaGridFoobarComponent from './src/foobar'

const GridFoobar = {
  install(app: App) {
    app.component(VmaGridFoobarComponent.name, VmaGridFoobarComponent)
  },
}

export default GridFoobar
