import { provide, defineComponent, h, PropType } from 'vue'
import { Guid } from '../../utils/guid'
import { VmaGridCheckboxPropTypes } from '../../../types/checkbox'
import {
  VmaGridCheckboxGroupMethods,
  VmaGridCheckboxGroupConstructor,
} from '../../../types/checkbox-group'

export default defineComponent({
  name: 'VmaGridCheckboxGroup',
  props: {
    modelValue: {
      type: Array,
      default: () => [] as unknown[],
    },
    disabled: Boolean,
    size: {
      type: String as PropType<VmaGridCheckboxPropTypes.Size>,
    },
    type: {
      type: String as PropType<VmaGridCheckboxPropTypes.Type>,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  emits: ['update:modelValue', 'change'],
  setup(props, context) {
    const { slots, emit } = context

    const $vmaGridCheckboxGroup = {
      uId: Guid.create().toString(),
      props,
      context,
    } as unknown as VmaGridCheckboxGroupConstructor

    const vmaGridCheckboxGroupMethods: VmaGridCheckboxGroupMethods = {
      handleChecked(
        params: { checked: boolean; label: null | string | number },
        evnt: Event,
      ) {
        const { checked, label } = params
        const checkedValues = props.modelValue || []
        const checkIndex = checkedValues.indexOf(label)
        if (checked) {
          if (checkIndex === -1) {
            checkedValues.push(label)
          }
        } else {
          checkedValues.splice(checkIndex, 1)
        }
        emit('update:modelValue', checkedValues)
        emit('change', { checkedValues, ...params }, evnt)
      },
    }

    Object.assign($vmaGridCheckboxGroup, vmaGridCheckboxGroupMethods)

    provide('$vmaGridCheckboxGroup', $vmaGridCheckboxGroup)

    return () =>
      h(
        'div',
        {
          class: 'vma-checkbox-group',
        },
        slots.default ? slots.default({}) : [],
      )
  },
})
