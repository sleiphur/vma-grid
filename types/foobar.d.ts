import {RenderFunction, SetupContext} from "vue";
import {VmaGridComponentInstance} from "./common";

export type FoobarType = 'foo' | 'bar'

export namespace VmaGridFoobarPropTypes {
    export type Type = FoobarType
}

export interface VmaGridFoobarMethods {}

export type VmaGridFoobarEmits = []

export interface VmaGridFoobarProps {
    type: VmaGridFoobarPropTypes.Type
}

export type VmaGridFoobarOptions = VmaGridFoobarProps

export interface VmaGridFoobarConstructor
    extends VmaGridComponentInstance,
        VmaGridFoobarMethods {
    props: VmaGridFoobarOptions
    context: SetupContext<VmaGridFoobarEmits>
    renderVN: RenderFunction
}