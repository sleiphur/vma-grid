import { CSSProperties, defineComponent, h, PropType, provide } from 'vue'
import { Guid } from '../../utils/guid'
import {
  VmaGridIconConstructor,
  VmaGridIconPropTypes,
} from '../../../types/icon'

export default defineComponent({
  name: 'VmaGridIcon',
  props: {
    type: {
      type: String as PropType<VmaGridIconPropTypes.Type>,
      default: 'default',
    },
    size: {
      type: String as PropType<VmaGridIconPropTypes.Size>,
      default: 'normal',
    },
    name: String,
    color: String,
    rotate: { type: Number, default: 0 },
    translateX: { type: Number, default: 0 },
    translateY: { type: Number, default: 0 },
    scaleX: { type: Number, default: 1 },
    scaleY: { type: Number, default: 1 },
  },
  setup(props, context) {
    const $vmaGridIcon = {
      uId: Guid.create().toString(),
      props,
      context,
    } as unknown as VmaGridIconConstructor

    const getStyle = () => {
      const { color, rotate, translateX, translateY, scaleX, scaleY } = props
      const style: CSSProperties = {}
      if (color) {
        style.color = color
      }
      style.transform = `rotate(${rotate}deg) translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`
      return style
    }

    const renderVN = () =>
      h('i', {
        class: [
          'vma-grid-iconfont',
          `vma-grid-icon-${props.name}`,
          'vma-grid-icon',
          props.size,
          props.type,
        ],
        style: getStyle(),
      })

    $vmaGridIcon.renderVN = renderVN

    provide('$vmaGridIcon', $vmaGridIcon)

    return $vmaGridIcon
  },
  render() {
    return this.renderVN()
  },
})
