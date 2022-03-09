import { App } from 'vue'
import VmaGrid from '../vma-grid'
import VmaGridCtxMenuComponent from './src/context-menu'
import gridCtxMenuHook from './src/hooks'

export const GridCtxMenu = {
  install(app: App) {
    VmaGrid.hooks.add('VmaGridCtxMenu', gridCtxMenuHook)
    app.component(VmaGridCtxMenuComponent.name, VmaGridCtxMenuComponent)
  },
}

export default GridCtxMenu
