import {
  ComponentOptions,
  computed,
  defineComponent,
  h,
  PropType,
  resolveComponent,
  inject,
  provide,
} from 'vue'
import { Guid } from '../../utils/guid'
import {
  VmaGridCheckboxPropTypes,
  VmaGridCheckboxConstructor,
} from '../../../types/checkbox'
import { VmaGridCheckboxGroupConstructor } from '../../../types/checkbox-group'

export default defineComponent({
  name: 'VmaGridCheckbox',
  props: {
    size: {
      type: String as PropType<VmaGridCheckboxPropTypes.Size>,
      default: 'normal',
    },
    type: {
      type: String as PropType<VmaGridCheckboxPropTypes.Type>,
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

    const $vmaGridCheckbox = {
      uId: Guid.create().toString(),
      props,
      context,
    } as unknown as VmaGridCheckboxConstructor

    const IconComponent = resolveComponent('VmaGridIcon') as ComponentOptions

    const $vmaGridCheckboxGroup = inject(
      '$vmaGridCheckboxGroup',
      null as VmaGridCheckboxGroupConstructor | null,
    )

    const computeDisabled = computed(
      () =>
        props.disabled ||
        ($vmaGridCheckboxGroup && $vmaGridCheckboxGroup.props.disabled),
    )

    const computeChecked = computed(() =>
      $vmaGridCheckboxGroup
        ? $vmaGridCheckboxGroup.props.modelValue?.includes(props.label)
        : props.modelValue,
    )

    const computeType = computed(() =>
      $vmaGridCheckboxGroup && $vmaGridCheckboxGroup.props.type
        ? $vmaGridCheckboxGroup.props.type
        : props.type,
    )

    const computeSize = computed(() =>
      $vmaGridCheckboxGroup && $vmaGridCheckboxGroup.props.size
        ? $vmaGridCheckboxGroup.props.size
        : props.size,
    )

    const classNames = ['vma-grid-checkbox', computeSize.value]

    const changeEvent = (evnt: Event & { target: { checked: boolean } }) => {
      const isDisabled = computeDisabled.value
      if (!isDisabled) {
        const { checked } = evnt.target
        if ($vmaGridCheckboxGroup) {
          $vmaGridCheckboxGroup.handleChecked(
            { checked, label: props.label },
            evnt,
          )
        } else {
          emit('update:modelValue', checked)
          emit('change', { checked, label: props.label }, evnt)
        }
      }
    }

    const renderVN = () => {
      const isDisabled = computeDisabled.value
      return h(
        'label',
        {
          class: classNames,
          title: props.title,
        },
        [
          h('input', {
            class: 'input',
            type: 'checkbox',
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
    $vmaGridCheckbox.renderVN = renderVN

    provide('$vmaGridRadio', $vmaGridCheckbox)

    return $vmaGridCheckbox
  },
  render() {
    return this.renderVN()
  },
})
