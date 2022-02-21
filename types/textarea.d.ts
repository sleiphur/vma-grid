import {
  SizeType,
  CompType,
  VmaGridComponentInstance,
  ValueOf,
} from './common'
import { Ref, RenderFunction, SetupContext } from 'vue'

export namespace VmaGridTextareaPropTypes {
  export type Size = SizeType
  export type Type = CompType
  export type ModelValue = string | number | null
  export type Immediate = boolean
  export type Name = string
  // export type Clearable = boolean;
  export type Readonly = boolean
  export type Disabled = boolean
  export type Placeholder = string
  export type Maxlength = string | number
  // export type Placement = 'top' | 'bottom' | '' | null;
  export type Rows = string | number
  // export type ShowLines = boolean;
  export type Wrap = boolean
  export type Autofocus = boolean
}

export interface VmaGridTextareaMethods {
  dispatchEvent: (
    type: ValueOf<VmaGridTextareaEmits>,
    params: any,
    evnt?: Event | { type: string },
  ) => void
  /**
   * 获取焦点
   */
  focus(): Promise<any>
  /**
   * 失去焦点
   */
  blur(): Promise<any>
}

export interface VmaGridTextareaReactiveData {
  initiated: boolean
  isActivated: boolean
  inputValue: any
}

export interface VmaGridTextareaRefs {
  refElem: Ref<HTMLDivElement>
  refTextarea: Ref<HTMLTextAreaElement>
  refLinesDiv: Ref<HTMLDivElement>
  refCountHelperDiv: Ref<HTMLDivElement>
  refCountTargetHelperDiv: Ref<HTMLDivElement>
}

export interface VmaGridTextareaConstructor
  extends VmaGridComponentInstance,
    VmaGridTextareaMethods {
  props: VmaGridTextareaOptions
  context: SetupContext<VmaGridTextareaEmits>
  reactiveData: VmaGridTextareaReactiveData
  getRefs(): VmaGridTextareaRefs
  renderVN: RenderFunction
}
export type VmaGridTextareaOptions = VmaGridTextareaProps

export interface VmaGridTextareaProps {
  size: VmaGridTextareaPropTypes.Size
  type: VmaGridTextareaPropTypes.Type
  modelValue: boolean
  label: [string, number]
  indeterminate: boolean
  title: [string, number]
  content: [string, number]
  disabled: boolean
}

export type VmaGridTextareaEmits = [
  'update:modelValue',
  'input',
  'change',
  'focus',
  'blur',
  'keydown',
  'keyup',
]
