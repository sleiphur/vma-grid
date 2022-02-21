import { defineComponent, h, PropType, provide } from 'vue'
import { Guid } from '../../utils/guid'
import {
    VmaGridFoobarConstructor,
    VmaGridFoobarPropTypes,
} from '../../../types/foobar'

export default defineComponent({
    name: 'VmaGridFoobar',
    props: {
        type: {
            type: String as PropType<VmaGridFoobarPropTypes.Type>,
            default: 'foo',
        },
    },
    setup(props, context) {
        const $vmaGridFoobar = {
            uId: Guid.create().toString(),
            props,
            context,
        } as unknown as VmaGridFoobarConstructor

        const renderVN = () =>
            h('div', {
                class: [
                    'vma-grid-foobar',
                    props.type,
                ]
            })

        $vmaGridFoobar.renderVN = renderVN

        provide('$vmaGridFoobar', $vmaGridFoobar)

        return $vmaGridFoobar
    },
    render() {
        return this.renderVN()
    },
})
