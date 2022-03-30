import {createCommentVNode, defineComponent, h, PropType, provide} from 'vue'
import { Guid } from '../../../../src/utils/guid'
import {
    VmaGridStylePluginConstructor,
    VmaGridStylePluginMethods,
    VmaGridStylePluginPropTypes,
} from '../../../types/style'

export default defineComponent({
    name: 'VmaGridStylePlugin',
    props: {
        type: {
            type: String as PropType<VmaGridStylePluginPropTypes.Type>,
            default: 'font-size',
        },
    },
    setup(props, context) {
        const $vmaGridStylePlugin = {
            uId: Guid.create().toString(),
            props,
            context,
        } as unknown as VmaGridStylePluginConstructor

        const methods = {
            foobar: (val: number): string => `foobar plugin ${val}`,
            fontSize: (): string[] => {
                const fs: string[] = []
                // fs.push('custom')
                fs.push('8')
                fs.push('9')
                fs.push('10')
                fs.push('11')
                fs.push('12')
                fs.push('14')
                fs.push('16')
                fs.push('18')
                fs.push('20')
                fs.push('22')
                fs.push('24')
                fs.push('26')
                fs.push('28')
                fs.push('36')
                fs.push('48')
                fs.push('72')
                return fs
            },
            fontFamily: (): string[] => {
                const ff: string[] = []
                ff.push('Times New Roman')
                ff.push('Arial')
                ff.push('Tahoma')
                ff.push('Verdana')
                ff.push('微软雅黑')
                ff.push('宋体')
                ff.push('黑体')
                ff.push('楷体')
                ff.push('仿宋')
                ff.push('新宋体')
                ff.push('华文新魏')
                ff.push('华文行楷')
                ff.push('华文隶书')
                return ff
            },
            fontStyle: (): Record<string, string> => {
                const fs: Record<string, string> = {}
                fs.bl = '粗体'
                fs.it = '斜体'
                fs.ol = '上划线'
                fs.cl = '中划线'
                fs.ul = '下划线'
                return fs
            },
        } as VmaGridStylePluginMethods

        Object.assign($vmaGridStylePlugin, methods)

        const renderVN = () =>
            createCommentVNode()

        $vmaGridStylePlugin.renderVN = renderVN

        provide('$vmaGridStylePlugin', $vmaGridStylePlugin)

        return $vmaGridStylePlugin
    },
    render() {
        return this.renderVN()
    },
})
