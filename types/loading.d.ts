import { RenderFunction, SetupContext } from 'vue'
import {
  CompType,
  SizeType,
  VmaGridComponentInstance,
} from './common'

export namespace VmaGridLoadingPropTypes {
  export type Size = SizeType
  export type Type = CompType
  export type Category =
    | 'plane'
    | 'chase'
    | 'bounce'
    | 'wave'
    | 'pulse'
    | 'flow'
    | 'swing'
    | 'circle'
    | 'circle-fade'
    | 'fold'
}

export interface VmaGridLoadingMethods {}

export type VmaGridLoadingEmits = []

export interface VmaGridLoadingProps {
  size: VmaGridLoadingPropTypes.Size
  currentColor: boolean
  vertical: boolean
  type: VmaGridLoadingPropTypes.Type
  category: VmaGridLoadingPropTypes.Category
}

export interface VmaGridLoadingConstructor
  extends VmaGridComponentInstance,
    VmaGridLoadingMethods {
  props: VmaGridLoadingOptions
  context: SetupContext<VmaGridLoadingEmits>
  renderVN: RenderFunction
}
export type VmaGridLoadingOptions = VmaGridLoadingProps
