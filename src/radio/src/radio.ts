import {
  ComponentOptions,
  computed,
  defineComponent,
  h,
  inject,
  PropType,
  provide,
  resolveComponent,
} from 'vue'
import { Guid } from '../../utils/guid'
import { VmaGridRadioConstructor, VmaGridRadioPropTypes } from '../../../types/radio'
import { VmaGridRadioGroupConstructor } from '../../../types/radio-group'

export default defineComponent({
  name: 'VmaGridRadio',
  props: {
    size: {
      type: String as PropType<VmaGridRadioPropTypes.Size>,
      default: 'normal',
    },
    type: {
      type: String as PropType<VmaGridRadioPropTypes.Type>,
      default: 'default',
    },
    modelValue: Boolean,
    label: { type: [String, Number], default: null },
    indeterminate: Boolean,
    title: [String, Number],
    content: [String, Number],
    disabled: Boolean,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, context) {
    const { slots, emit } = context
    const $vmaGridRadio = {
      uId: Guid.create().toString(),
      props,
      context,
    } as unknown as VmaGridRadioConstructor

    const IconComponent = resolveComponent('vma-grid-icon') as ComponentOptions

    const $vmaGridRadioGroup = inject(
      '$vmaGridRadioGroup',
      null as VmaGridRadioGroupConstructor | null,
    )

    const computeDisabled = computed(
      () =>
        props.disabled ||
        ($vmaGridRadioGroup && $vmaGridRadioGroup.props.disabled),
    )

    const computeChecked = computed(() =>
      $vmaGridRadioGroup
        ? $vmaGridRadioGroup.props.modelValue === props.label
        : props.modelValue,
    )

    const computeType = computed(() =>
      $vmaGridRadioGroup && $vmaGridRadioGroup.props.type
        ? $vmaGridRadioGroup.props.type
        : props.type,
    )

    const computeSize = computed(() =>
      $vmaGridRadioGroup && $vmaGridRadioGroup.props.size
        ? $vmaGridRadioGroup.props.size
        : props.size,
    )

    const changeEvent = (event: Event) => {
      const isDisabled = computeDisabled.value
      if (!isDisabled) {
        if ($vmaGridRadioGroup) {
          $vmaGridRadioGroup.handleChecked({ label: props.label }, event)
        } else {
          emit('update:modelValue', props.label)
          emit('change', { label: props.label }, event)
        }
      }
    }

    const renderVN = () => {
      const isDisabled = computeDisabled.value
      return h(
        'label',
        {
          class: ['vma-grid-radio', computeSize.value],
          title: props.title,
        },
        [
          h('input', {
            class: 'input',
            type: 'radio',
            disabled: isDisabled,
            checked: computeChecked.value,
            onChange: changeEvent,
          }),
          h(
            'span',
            {
              class: [
                'icon',
                `icon--${computeType.value}`,
                {
                  'icon--checked': computeChecked.value,
                },
                {
                  [`icon--checked--${computeType.value}`]: computeChecked.value,
                },
                {
                  'icon--disabled': isDisabled,
                },
              ],
            },
            [
              h(IconComponent, {
                name: 'check',
                size: computeSize.value,
                translateY: -1,
              }),
            ],
          ),
          h(
            'span',
            {
              class: [
                'label',
                `label--${computeType.value}`,
                {
                  'label--checked': computeChecked.value,
                },
                {
                  [`label--checked--${computeType.value}`]:
                    computeChecked.value,
                },
                {
                  'label--disabled': isDisabled,
                },
              ],
            },
            slots.default ? slots.default({}) : props.content,
          ),
        ],
      )
    }
    $vmaGridRadio.renderVN = renderVN

    provide('$vmaGridRadio', $vmaGridRadio)

    return $vmaGridRadio
  },
  render() {
    return this.renderVN()
  },
})
