import {
  computed,
  createCommentVNode,
  defineComponent,
  h,
  PropType,
  provide,
} from 'vue'
import { Guid } from '../../utils/guid'
import {
  VmaGridLoadingConstructor,
  VmaGridLoadingPropTypes,
} from '../../../types/loading'

export default defineComponent({
  name: 'VmaGridLoading',
  props: {
    size: {
      type: String as PropType<VmaGridLoadingPropTypes.Size>,
      default: 'normal',
    },
    currentColor: {
      type: Boolean,
      default: false,
    },
    vertical: Boolean,
    type: {
      type: String as PropType<VmaGridLoadingPropTypes.Type>,
      default: 'default',
    },
    category: {
      type: String as PropType<VmaGridLoadingPropTypes.Category>,
      default: 'circle-fade',
    },
  },
  setup(props, context) {
    const { slots } = context
    const $vmaGridLoading = {
      uId: Guid.create().toString(),
      props,
      context,
    } as unknown as VmaGridLoadingConstructor

    const typeClazz = computed(() => props.type)

    const sizeClazz = computed(() => props.size)

    const renderText = () => {
      const text = slots.default ? slots.default({}) : () => ''
      return h(
        'span',
        {
          class: ['text', typeClazz.value, sizeClazz.value],
          style: {
            display: props.vertical ? 'block' : 'inline-block',
          },
        },
        text,
      )
    }
    const renderLoading = () => {
      if (props.category === 'plane') {
        return createCommentVNode()
      }
      if (props.category === 'chase') {
        const items = []
        items.push(h('div', { class: 'chase-dot' }))
        items.push(h('div', { class: 'chase-dot' }))
        items.push(h('div', { class: 'chase-dot' }))
        items.push(h('div', { class: 'chase-dot' }))
        items.push(h('div', { class: 'chase-dot' }))
        items.push(h('div', { class: 'chase-dot' }))
        return items
      }
      if (props.category === 'bounce') {
        const items = []
        items.push(h('div', { class: 'bounce-dot' }))
        items.push(h('div', { class: 'bounce-dot' }))
        return items
      }
      if (props.category === 'wave') {
        const items = []
        items.push(h('div', { class: 'wave-rect' }))
        items.push(h('div', { class: 'wave-rect' }))
        items.push(h('div', { class: 'wave-rect' }))
        items.push(h('div', { class: 'wave-rect' }))
        items.push(h('div', { class: 'wave-rect' }))
        return items
      }
      if (props.category === 'pulse') {
        return createCommentVNode()
      }
      if (props.category === 'flow') {
        const items = []
        items.push(h('div', { class: 'flow-dot' }))
        items.push(h('div', { class: 'flow-dot' }))
        items.push(h('div', { class: 'flow-dot' }))
        return items
      }
      if (props.category === 'swing') {
        const items = []
        items.push(h('div', { class: 'swing-dot' }))
        items.push(h('div', { class: 'swing-dot' }))
        return items
      }
      if (props.category === 'circle') {
        const items = []
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        items.push(h('div', { class: 'circle-dot' }))
        return items
      }
      if (props.category === 'circle-fade') {
        const items = []
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        items.push(h('div', { class: 'circle-fade-dot' }))
        return items
      }
      if (props.category === 'fold') {
        const items = []
        items.push(h('div', { class: 'fold-cube' }))
        items.push(h('div', { class: 'fold-cube' }))
        items.push(h('div', { class: 'fold-cube' }))
        items.push(h('div', { class: 'fold-cube' }))
        return items
      }
      return createCommentVNode()
    }

    const renderVN = () =>
      h(
        'div',
        {
          class: [
            'vma-grid-loading',
            {
              vertical: props.vertical,
            },
          ],
        },
        [
          h(
            'div',
            {
              class: [
                {
                  plane: props.category === 'plane',
                  chase: props.category === 'chase',
                  bounce: props.category === 'bounce',
                  wave: props.category === 'wave',
                  pulse: props.category === 'pulse',
                  flow: props.category === 'flow',
                  swing: props.category === 'swing',
                  circle: props.category === 'circle',
                  'circle-fade': props.category === 'circle-fade',
                  fold: props.category === 'fold',
                  currentColor: props.currentColor,
                },
                typeClazz.value,
                sizeClazz.value,
              ],
            },
            renderLoading(),
          ),
          renderText(),
        ],
      )

    $vmaGridLoading.renderVN = renderVN

    provide('$vmaGridLoading', $vmaGridLoading)

    return $vmaGridLoading
  },
  render() {
    return this.renderVN()
  },
})
