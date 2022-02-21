import {
  SizeType,
  CompType,
  VmaGridComponentInstance,
} from './common'
import { RenderFunction, SetupContext } from 'vue'

export namespace VmaGridCheckboxPropTypes {
  export type Size = SizeType
  export type Type = CompType
}

export interface VmaGridCheckboxMethods {}

export interface VmaGridCheckboxConstructor
  extends VmaGridComponentInstance,
    VmaGridCheckboxMethods {
  props: VmaGridCheckboxOptions
  context: SetupContext<VmaGridCheckboxEmits>
  renderVN: RenderFunction
}
export type VmaGridCheckboxOptions = VmaGridCheckboxProps

export interface VmaGridCheckboxProps {
  size: VmaGridCheckboxPropTypes.Size
  type: VmaGridCheckboxPropTypes.Type
  modelValue: boolean
  label: [string, number]
  indeterminate: boolean
  title: [string, number]
  content: [string, number]
  disabled: boolean
}

export type VmaGridCheckboxEmits = ['update:modelValue', 'change']
