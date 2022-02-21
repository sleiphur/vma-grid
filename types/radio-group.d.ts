import { SetupContext } from 'vue'
import { VmaGridComponentInstance } from './common'
import { VmaGridRadioPropTypes } from './radio'

export interface VmaGridRadioGroupMethods {
  handleChecked(params: { label: null | string | number }, event: Event): void
}

export interface VmaGridRadioGroupConstructor
  extends VmaGridComponentInstance,
    VmaGridRadioGroupMethods {
  props: VmaGridRadioGroupOptions
  context: SetupContext<VmaGridRadioGroupEmits>
}
export type VmaGridRadioGroupOptions = VmaGridRadioGroupProps

export interface VmaGridRadioGroupProps {
  size?: VmaGridRadioPropTypes.Size
  type?: VmaGridRadioPropTypes.Type
  modelValue?: string | number
  disabled?: boolean
}

export type VmaGridRadioGroupEmits = ['update:modelValue', 'change']
