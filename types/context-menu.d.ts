import { ComponentPublicInstance, Ref, RenderFunction, SetupContext } from 'vue'
import {
  SizeType,
  CompType,
  VmaGridComponentInstance,
} from './common'

export namespace VmaGridCtxMenuPropTypes {
  export type Size = SizeType
  export type Type = CompType
}

export interface CtxMenuPrivateRef {
}
export type VmaCtxMenuPrivateRef = CtxMenuPrivateRef

export interface VmaGridCtxMenuMethods {
  /**
   * 手动关闭上下文菜单
   */
  closeMenu?(): Promise<any>
}

export interface VmaGridCtxMenuPrivateMethods {
  handleContextmenuEvent(event: any): void
  ctxMenuMouseoverEvent(event: any, item: any, child?: any): void
  ctxMenuMouseoutEvent(event: any, item: any): void
  ctxMenuLinkEvent(event: any, menu: any): void
}

export interface VmaCtxMenuProps {
  size: VmaGridCtxMenuPropTypes.Size
  type: VmaGridCtxMenuPropTypes.Type
}

export interface VmaGridCtxMenuConstructor
  extends VmaGridComponentInstance,
    VmaGridCtxMenuMethods,
    VmaGridCtxMenuPrivateMethods {
  props: VmaCtxMenuProps
  context: SetupContext
  getRefs(): CtxMenuPrivateRef
  renderVN: RenderFunction
}

declare module './grid' {
  interface VmaGridMethods extends VmaGridCtxMenuMethods {}
  interface VmaGridPrivateMethods extends VmaGridCtxMenuPrivateMethods {}
}
