import { App } from 'vue'

import VmaGrid from './vma-grid'
import GridFoobar from './foobar'
import GridIcon from './icon'
import GridLoading from './loading'
import GridButton from './button'
import GridRadio from './radio'
import GridCheckbox from './checkbox'
import GridTextarea from './textarea'
import Grid from './grid'

const components = [
  GridFoobar,
  GridIcon,
  GridLoading,
  GridButton,
  GridRadio,
  GridCheckbox,
  GridTextarea,
  Grid,
]

function install(app: App, options?: any) {
  components.forEach((component) => component.install(app))
}

declare module './vma-grid' {
  interface VmaGridInstance {
    install: typeof install
  }
}

VmaGrid.install = install

export default VmaGrid
