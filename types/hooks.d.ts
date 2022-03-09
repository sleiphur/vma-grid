import { VmaGridConstructor } from './grid'

export namespace VmaGridGlobalHooksHandlers {
  export type name = 'VmaGrid'
  export interface HookOptions {
    setupGrid?(grid: VmaGridConstructor): void | { [key: string]: any }
  }
}

export class VmaGridGlobalHooks {
  add(type: string, options: VmaGridGlobalHooksHandlers.HookOptions): VmaGridGlobalHooks
  forEach(callback: (options: VmaGridGlobalHooksHandlers.HookOptions, type: string) => void): void
}
