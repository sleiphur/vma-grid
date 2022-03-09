import { App } from 'vue'

export class VmaGridInstance {
    /**
     * 版本号
     */
    public readonly version: string

    public install(app: App, options?: any): void
}

/**
 * 一个基于 vue 的 PC 端表格组件
 */
export const VmaGrid: VmaGridInstance

declare global {
    interface Window {
        VmaGrid: VmaGridInstance
    }
}

export default VmaGrid



export * from './foobar'
export * from './icon'
export * from './loading'
export * from './button'
export * from './radio'
export * from './radio-group'
export * from './checkbox'
export * from './checkbox-group'
export * from './textarea'
export * from './hooks'
export * from './context-menu'
export * from './grid'

export {
    FormulaParser,
    MAX_ROW,
    MAX_COLUMN,
    SSF,
    DepParser,
    FormulaError,
    FormulaHelpers,
    Types,
    ReversedTypes,
    Factorials,
    WildCard,
    Criteria,
    Address,
} from '../src/formula'

export * from '../plugins/types'