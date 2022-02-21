import { SetupContext } from 'vue'
import { VmaGridComponentInstance } from './common'
import { VmaGridCheckboxPropTypes } from './checkbox'

export interface VmaGridCheckboxGroupMethods {
  handleChecked(
    params: { checked: boolean; label: null | string | number },
    evnt: Event,
  ): void
}

export interface VmaGridCheckboxGroupConstructor
  extends VmaGridComponentInstance,
    VmaGridCheckboxGroupMethods {
  props: VmaGridCheckboxGroupOptions
  context: SetupContext<VmaGridCheckboxGroupEmits>
}

export interface VmaGridCheckboxGroupProps {
  size?: VmaGridCheckboxPropTypes.Size
  type?: VmaGridCheckboxPropTypes.Type
  modelValue?: any[]
  disabled?: boolean
}

export type VmaGridCheckboxGroupEmits = ['update:modelValue', 'change']

export type VmaGridCheckboxGroupOptions = VmaGridCheckboxGroupProps
