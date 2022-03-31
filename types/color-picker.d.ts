import {SetupContext, RenderFunction, Ref} from 'vue'
import {
    VmaGridComponentInstance,
} from './common'

export namespace VmaGridColorPickerPropTypes {
}

export interface VmaGridColorPickerMethods {}

export interface VmaGridColorPickerRefs {
    refColorPickerPallet: Ref<HTMLDivElement>
}

export type VmaGridColorPickerEmits = ['change']

export interface VmaGridColorPickerProps {
    readonly: boolean
    value: string
    defaultColor: string
}

export type VmaGridColorPickerOptions = VmaGridColorPickerProps

export interface VmaGridColorPickerConstructor
    extends VmaGridComponentInstance,
        VmaGridColorPickerMethods {
    props: VmaGridColorPickerOptions
    context: SetupContext<VmaGridColorPickerEmits>
    getRefs(): VmaGridColorPickerRefs
    renderVN: RenderFunction
}

