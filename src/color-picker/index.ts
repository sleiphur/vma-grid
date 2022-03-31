import { App } from 'vue'
import VmaGridColorPickerComponent from './src/color-picker'

export const GridColorPicker = {
  install(app: App) {
    app.component(VmaGridColorPickerComponent.name, VmaGridColorPickerComponent)
  },
}

export default GridColorPicker
