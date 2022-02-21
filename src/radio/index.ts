import { App } from 'vue'
import VmaGridRadioComponent from './src/radio'
import VmaGridRadioGroupComponent from './src/group'

export const GridRadio = {
    install(app: App) {
        app.component(VmaGridRadioComponent.name, VmaGridRadioComponent)
        app.component(VmaGridRadioGroupComponent.name, VmaGridRadioGroupComponent)
    },
}

export default GridRadio