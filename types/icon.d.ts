import { SetupContext, RenderFunction } from 'vue'
import {
  SizeType,
  CompType,
  VmaGridComponentInstance,
} from './common'

export namespace VmaGridIconPropTypes {
  export type Size = SizeType
  export type Type = CompType
}

export interface VmaGridIconMethods {}

export type VmaGridIconEmits = []

export interface VmaGridIconProps {
  type: VmaGridIconPropTypes.Type
  size: VmaGridIconPropTypes.Size
  name: string
  color: string
  rotate: number
  translateX: number
  translateY: number
  scaleX: number
  scaleY: number
}

export interface VmaGridIconConstructor
  extends VmaGridComponentInstance,
    VmaGridIconMethods {
  props: VmaGridIconOptions
  context: SetupContext<VmaGridIconEmits>
  renderVN: RenderFunction
}
export type VmaGridIconOptions = VmaGridIconProps
