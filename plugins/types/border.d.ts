import {RenderFunction, SetupContext} from "vue";
import {VmaGridComponentInstance} from "../../types/common";

export type BorderPluginType = 'foo' | 'bar'

export namespace VmaGridBorderPluginPropTypes {
    export type Type = BorderPluginType
}

export interface VmaGridBorderPluginMethods {
    foobar(val: number): string
    out(): string
    outBolder(): string
    inner(): string
    top(): string
    bottom(): string
    left(): string
    right(): string
    none(): string
    all(): string
}

export type VmaGridBorderPluginEmits = []

export interface VmaGridBorderPluginProps {
    type: VmaGridBorderPluginPropTypes.Type
}

export type VmaGridBorderPluginOptions = VmaGridBorderPluginProps

export interface VmaGridBorderPluginConstructor
    extends VmaGridComponentInstance,
        VmaGridBorderPluginMethods {
    props: VmaGridBorderPluginOptions
    context: SetupContext<VmaGridBorderPluginEmits>
    renderVN: RenderFunction
}