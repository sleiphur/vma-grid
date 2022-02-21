import { App } from 'vue'

import VmaGrid from './vma-grid'
import GridFoobar from './foobar'
import GridIcon from './icon'

const components = [
    GridFoobar,
    GridIcon
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