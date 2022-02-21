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