import {RenderFunction, SetupContext} from "vue";
import {VmaGridComponentInstance} from "../../types/common";

export type AlignPluginType = 'foo' | 'bar'

export namespace VmaGridAlignPluginPropTypes {
    export type Type = AlignPluginType
}

export interface VmaGridAlignPluginMethods {
    vertical(): Record<string, string>
    horizontal(): Record<string, string>
}

export type VmaGridAlignPluginEmits = []

export interface VmaGridAlignPluginProps {
    type: VmaGridAlignPluginPropTypes.Type
}

export type VmaGridAlignPluginOptions = VmaGridAlignPluginProps

export interface VmaGridAlignPluginConstructor
    extends VmaGridComponentInstance,
        VmaGridAlignPluginMethods {
    props: VmaGridAlignPluginOptions
    context: SetupContext<VmaGridAlignPluginEmits>
    renderVN: RenderFunction
}