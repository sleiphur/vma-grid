import { RenderFunction, SetupContext } from 'vue'
import {
  SizeType,
  CompType,
  VmaGridComponentInstance,
} from './common'
import { VmaGridLoadingPropTypes } from './loading'

export namespace VmaGridButtonPropTypes {
  export type Size = SizeType
  export type Type = CompType
  export type IconPosition = 'left' | 'right'
}

export interface VmaGridButtonMethods {}

export type VmaGridButtonEmits = ['click']

export interface VmaGridButtonProps {
  text: string
  icon: string
  color: string
  block: boolean
  plain: boolean
  round: boolean
  square: boolean
  loading: boolean
  disabled: boolean
  iconPrefix: string
  loadingText: string
  loadingCategory: VmaGridLoadingPropTypes.Category
  type: VmaGridButtonPropTypes.Type
  size: VmaGridButtonPropTypes.Size
  iconPosition: VmaGridButtonPropTypes.IconPosition
}

export interface VmaGridButtonConstructor
  extends VmaGridComponentInstance,
    VmaGridButtonMethods {
  props: VmaGridButtonOptions
  context: SetupContext<VmaGridButtonEmits>
  renderVN: RenderFunction
}
export type VmaGridButtonOptions = VmaGridButtonProps
