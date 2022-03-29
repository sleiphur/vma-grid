import {RenderFunction, SetupContext} from "vue";
import {VmaGridComponentInstance} from "../../types/common";

export type StylePluginType = 'foo' | 'bar' | 'font-size'

export namespace VmaGridStylePluginPropTypes {
    export type Type = StylePluginType
}

export interface VmaGridStylePluginMethods {
    foobar(val: number): string
    fontSize(): string[]
    fontFamily(): string[]
}

export type VmaGridStylePluginEmits = []

export interface VmaGridStylePluginProps {
    type: VmaGridStylePluginPropTypes.Type
}

export type VmaGridStylePluginOptions = VmaGridStylePluginProps

export interface VmaGridStylePluginConstructor
    extends VmaGridComponentInstance,
        VmaGridStylePluginMethods {
    props: VmaGridStylePluginOptions
    context: SetupContext<VmaGridStylePluginEmits>
    renderVN: RenderFunction
}