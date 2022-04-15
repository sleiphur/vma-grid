import {createCommentVNode, defineComponent, h, PropType, provide} from 'vue'
import { Guid } from '../../../../src/utils/guid'
import {
    VmaGridBorderPluginConstructor,
    VmaGridBorderPluginMethods,
    VmaGridBorderPluginPropTypes,
} from '../../../types/border'

export default defineComponent({
    name: 'VmaGridBorderPlugin',
    props: {
        type: {
            type: String as PropType<VmaGridBorderPluginPropTypes.Type>,
            default: 'foo',
        },
    },
    setup(props, context) {
        const $vmaGridBorderPlugin = {
            uId: Guid.create().toString(),
            props,
            context,
        } as unknown as VmaGridBorderPluginConstructor

        const methods = {
            foobar: (val: number): string => `foobar plugin ${val}`,
            out: (): string => `外侧框线`,
            outBolder: (): string => `粗外侧框线`,
            inner: (): string => `内部框线`,
            all: (): string => `所有框线`,
            none: (): string => `无框线`,
            left: (): string => `左框线`,
            right: (): string => `右框线`,
            top: (): string => `上框线`,
            bottom: (): string => `下框线`,
        } as VmaGridBorderPluginMethods

        Object.assign($vmaGridBorderPlugin, methods)

        const renderVN = () =>
            createCommentVNode()

        $vmaGridBorderPlugin.renderVN = renderVN

        provide('$vmaGridBorderPlugin', $vmaGridBorderPlugin)

        return $vmaGridBorderPlugin
    },
    render() {
        return this.renderVN()
    },
})
