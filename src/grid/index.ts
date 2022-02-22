import { App } from 'vue'
import VmaGridComponent from './src/grid'
import VmaGridHeaderComponent from './src/header'
import VmaGridBodyComponent from './src/body'
import VmaGridCellComponent from './src/cell'

export const Grid = {
    install(app: App) {
        app.component(VmaGridComponent.name, VmaGridComponent)
        app.component(VmaGridHeaderComponent.name, VmaGridHeaderComponent)
        app.component(VmaGridBodyComponent.name, VmaGridBodyComponent)
        app.component(VmaGridCellComponent.name, VmaGridCellComponent)
    },
}

export default Grid
