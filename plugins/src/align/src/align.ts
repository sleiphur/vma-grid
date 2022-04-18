import {createCommentVNode, defineComponent, h, PropType, provide} from 'vue'
import { Guid } from '../../../../src/utils/guid'
import {
    VmaGridAlignPluginConstructor,
    VmaGridAlignPluginMethods,
    VmaGridAlignPluginPropTypes,
} from '../../../types/align'

export default defineComponent({
    name: 'VmaGridAlignPlugin',
    props: {
        type: {
            type: String as PropType<VmaGridAlignPluginPropTypes.Type>,
            default: 'foo',
        },
    },
    setup(props, context) {
        const $vmaGridAlignPlugin = {
            uId: Guid.create().toString(),
            props,
            context,
        } as unknown as VmaGridAlignPluginConstructor

        const methods = {
            vertical: (): Record<string, string> => {
                const av: Record<string, string> = {}
                av.avt = '垂直居上'
                av.avm = '垂直居中'
                av.avb = '垂直居下'
                return av
            },
            horizontal: (): Record<string, string> => {
                const ah: Record<string, string> = {}
                ah.ahl = '水平居左'
                ah.ahc = '水平居中'
                ah.ahr = '水平居右'
                return ah
            },
        } as VmaGridAlignPluginMethods

        Object.assign($vmaGridAlignPlugin, methods)

        const renderVN = () =>
            createCommentVNode()

        $vmaGridAlignPlugin.renderVN = renderVN

        provide('$vmaGridAlignPlugin', $vmaGridAlignPlugin)

        return $vmaGridAlignPlugin
    },
    render() {
        return this.renderVN()
    },
})
