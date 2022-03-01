import {RenderFunction, SetupContext} from "vue";
import {VmaGridComponentInstance} from "../../types/common";

export type FoobarPluginType = 'foo' | 'bar'

export namespace VmaGridFoobarPluginPropTypes {
    export type Type = FoobarPluginType
}

export interface VmaGridFoobarPluginMethods {
    foobar(val: number): string
}

export type VmaGridFoobarPluginEmits = []

export interface VmaGridFoobarPluginProps {
    type: VmaGridFoobarPluginPropTypes.Type
}

export type VmaGridFoobarPluginOptions = VmaGridFoobarPluginProps

export interface VmaGridFoobarPluginConstructor
    extends VmaGridComponentInstance,
        VmaGridFoobarPluginMethods {
    props: VmaGridFoobarPluginOptions
    context: SetupContext<VmaGridFoobarPluginEmits>
    renderVN: RenderFunction
}