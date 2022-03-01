import { defineComponent, h, PropType, provide } from 'vue'
import { Guid } from '../../../../src/utils/guid'
import {
  VmaGridFoobarPluginConstructor,
  VmaGridFoobarPluginMethods,
  VmaGridFoobarPluginPropTypes,
} from '../../../types/foobar'

export default defineComponent({
  name: 'VmaGridFoobarPlugin',
  props: {
    type: {
      type: String as PropType<VmaGridFoobarPluginPropTypes.Type>,
      default: 'foo',
    },
  },
  setup(props, context) {
    const $vmaGridFoobarPlugin = {
      uId: Guid.create().toString(),
      props,
      context,
    } as unknown as VmaGridFoobarPluginConstructor

    const methods = {
      foobar: (val: number): string => `foobar plugin ${val}`,
    } as VmaGridFoobarPluginMethods

    Object.assign($vmaGridFoobarPlugin, methods)

    const renderVN = () =>
      h('div', {
        class: ['vma-grid-foobar-plugin', props.type],
      })

    $vmaGridFoobarPlugin.renderVN = renderVN

    provide('$vmaGridFoobarPlugin', $vmaGridFoobarPlugin)

    return $vmaGridFoobarPlugin
  },
  render() {
    return this.renderVN()
  },
})
