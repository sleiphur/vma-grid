import { provide, defineComponent, h, PropType } from 'vue'
import { Guid } from '../../utils/guid'
import { VmaGridRadioPropTypes } from '../../../types/radio'
import {
  VmaGridRadioGroupMethods,
  VmaGridRadioGroupConstructor,
} from '../../../types/radio-group'

export default defineComponent({
  name: 'VmaGridRadioGroup',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
    },
    disabled: Boolean,
    size: {
      type: String as PropType<VmaGridRadioPropTypes.Size>,
    },
    type: {
      type: String as PropType<VmaGridRadioPropTypes.Type>,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  emits: ['update:modelValue', 'change'],
  setup(props, context) {
    const { slots, emit } = context

    const $vmaGridRadioGroup = {
      uId: Guid.create().toString(),
      props,
      context,
    } as unknown as VmaGridRadioGroupConstructor

    const vmaGridRadioGroupMethods: VmaGridRadioGroupMethods = {
      handleChecked(params: { label: null | string | number }, event: Event) {
        const { label } = params
        emit('update:modelValue', label)
        emit('change', params, event)
      },
    }

    Object.assign($vmaGridRadioGroup, vmaGridRadioGroupMethods)

    provide('$vmaGridRadioGroup', $vmaGridRadioGroup)

    return () =>
      h(
        'div',
        {
          class: 'vma-radio-group',
        },
        slots.default ? slots.default({}) : [],
      )
  },
})
