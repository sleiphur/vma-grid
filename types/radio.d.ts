import {SizeType, CompType, VmaGridComponentInstance} from './common';
import {RenderFunction, SetupContext} from "vue";

export namespace VmaGridRadioPropTypes {
  export type Size = SizeType
  export type Type = CompType
}

export interface VmaGridRadioMethods {
}

export interface VmaGridRadioConstructor extends VmaGridComponentInstance, VmaGridRadioMethods {
  props: VmaGridRadioOptions
  context: SetupContext<VmaGridRadioEmits>
  renderVN: RenderFunction
}
export type VmaGridRadioOptions = VmaGridRadioProps

export interface VmaGridRadioProps {
  size: VmaGridRadioPropTypes.Size
  type: VmaGridRadioPropTypes.Type
  modelValue: boolean,
  label: [string, number]
  indeterminate: boolean,
  title: [string, number],
  content: [string, number],
  disabled: boolean,
}

export type VmaGridRadioEmits = ['update:modelValue', 'change']
