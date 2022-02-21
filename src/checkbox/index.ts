import { App } from 'vue'
import VmaGridCheckboxComponent from './src/checkbox'
import VmaGridCheckboxGroupComponent from './src/group'

export const GridCheckbox = {
    install(app: App) {
        app.component(VmaGridCheckboxComponent.name, VmaGridCheckboxComponent)
        app.component(
            VmaGridCheckboxGroupComponent.name,
            VmaGridCheckboxGroupComponent,
        )
    },
}

export default GridCheckbox
