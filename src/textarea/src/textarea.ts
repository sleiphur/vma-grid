import {
  computed,
  defineComponent,
  h,
  nextTick,
  PropType,
  reactive,
  Ref,
  ref,
  watch,
} from 'vue'
import { Guid } from '../../utils/guid'
import {
  VmaGridTextareaConstructor,
  VmaGridTextareaEmits,
  VmaGridTextareaMethods,
  VmaGridTextareaRefs,
  VmaGridTextareaPropTypes,
  VmaGridTextareaReactiveData,
} from '../../../types/textarea'

export default defineComponent({
  name: 'VmaGridTextarea',
  props: {
    type: {
      type: String as PropType<VmaGridTextareaPropTypes.Type>,
      default: 'default',
    },
    modelValue: [
      String,
      Number,
    ] as PropType<VmaGridTextareaPropTypes.ModelValue>,
    immediate: {
      type: Boolean as PropType<VmaGridTextareaPropTypes.Immediate>,
      default: true,
    },
    name: String as PropType<VmaGridTextareaPropTypes.Name>,
    // clearable: { type: boolean as PropType<VmaGridTextareaPropTypes.Clearable> },
    readonly: Boolean as PropType<VmaGridTextareaPropTypes.Readonly>,
    disabled: Boolean as PropType<VmaGridTextareaPropTypes.Disabled>,
    placeholder: String as PropType<VmaGridTextareaPropTypes.Placeholder>,
    maxlength: [String, Number] as PropType<VmaGridTextareaPropTypes.Maxlength>,
    size: {
      type: String as PropType<VmaGridTextareaPropTypes.Size>,
      default: 'normal',
    },
    // placement: { type: string as PropType<VmaGridTextareaPropTypes.Placement> },
    rows: {
      type: [String, Number] as PropType<VmaGridTextareaPropTypes.Rows>,
      default: 2,
    },
    // showLines: { type: boolean as PropType<VmaGridTextareaPropTypes.ShowLines>, default: false },
    wrap: {
      type: Boolean as PropType<VmaGridTextareaPropTypes.Wrap>,
      default: true,
    },
    autofocus: {
      type: Boolean as PropType<VmaGridTextareaPropTypes.Autofocus>,
      default: false,
    },
  },
  emits: [
    'update:modelValue',
    'input',
    'change',
    'focus',
    'blur',
    'keydown',
    'keyup',
  ] as VmaGridTextareaEmits,
  setup(props, context) {
    const { emit } = context

    const refElem = ref() as Ref<HTMLDivElement>
    const refLines = ref() as Ref<HTMLDivElement>
    const refCountHelper = ref() as Ref<HTMLDivElement>
    const refCountTargetHelper = ref() as Ref<HTMLDivElement>
    const refTextareaTarget = ref() as Ref<HTMLTextAreaElement>

    const gridTextareaRefs: VmaGridTextareaRefs = {
      refElem,
      refTextarea: refTextareaTarget,
      refLinesDiv: refLines,
      refCountHelperDiv: refCountHelper,
      refCountTargetHelperDiv: refCountTargetHelper,
    }

    const reactiveData = reactive({
      initiated: false,
      isActivated: false,
      inputValue: props.modelValue,
    } as VmaGridTextareaReactiveData)

    const $vmaGridTextarea = {
      uId: Guid.create().toString(),
      props,
      context,
      reactiveData,
      getRefs: () => gridTextareaRefs,
    } as unknown as VmaGridTextareaConstructor & VmaGridTextareaMethods

    const changeValue = () => {
      // console.log('changeValue')
    }

    watch(
      () => props.modelValue,
      (val) => {
        reactiveData.inputValue = val
        changeValue()
      },
    )

    const computeInputPlaceholder = computed(() => {
      const { placeholder } = props
      if (placeholder) {
        return placeholder
      }
      return ''
    })

    const computeInputImmediate = computed(() => {
      const { immediate } = props
      return immediate
    })

    let textareaMethods = {} as VmaGridTextareaMethods

    textareaMethods = {
      dispatchEvent(type, params, evnt) {
        emit(type, { $input: $vmaGridTextarea, $event: evnt, ...params })
      },

      focus() {
        const textareaElem = refTextareaTarget.value
        reactiveData.isActivated = true
        textareaElem.focus()
        return nextTick()
      },
      blur() {
        const textareaElem = refTextareaTarget.value
        textareaElem.blur()
        reactiveData.isActivated = false
        return nextTick()
      },
    }

    Object.assign($vmaGridTextarea, textareaMethods)

    // const clearValueEvent = (evnt: Event, value: VmaGridTextareaPropTypes.ModelValue) => {
    //   textareaMethods.dispatchEvent('clear', { value }, evnt)
    // }

    const emitModelValue = (
      value: VmaGridTextareaPropTypes.ModelValue,
      evnt: Event | { type: string },
    ) => {
      reactiveData.inputValue = value
      textareaMethods.dispatchEvent('input', { value }, evnt)
      emit('update:modelValue', value)
      textareaMethods.dispatchEvent('change', { value }, evnt)
    }

    const triggerEvent = (
      evnt: Event & {
        type: 'input' | 'change' | 'focus' | 'blur' | 'keydown' | 'keyup'
      },
    ) => {
      const { inputValue } = reactiveData
      textareaMethods.dispatchEvent(evnt.type, { value: inputValue }, evnt)
    }

    // const clearEvent = (params: any, evnt: any) => {
    //   clearValueEvent(evnt, null)
    // }

    const changeEvent = (evnt: Event & { type: 'change' }) => {
      const inputImmediate = computeInputImmediate.value
      if (inputImmediate) {
        triggerEvent(evnt)
      } else {
        emitModelValue(reactiveData.inputValue, evnt)
      }
      // calculateLineNumbers()
    }

    const focusEvent = (evnt: Event & { type: 'focus' }) => {
      reactiveData.isActivated = true
      triggerEvent(evnt)
    }

    const scrollEvent = (evnt: Event & { type: 'scroll' }) => {
      if (evnt && evnt.target) {
        // scrolledLength = refTextareaTarget.value.scrollTop
        // syncScroll()
      }
    }

    const blurEvent = (evnt: Event & { type: 'blur' }) => {
      const { inputValue } = reactiveData
      const inputImmediate = computeInputImmediate.value
      if (!inputImmediate) {
        emitModelValue(inputValue, evnt)
      }
      reactiveData.isActivated = false
      textareaMethods.dispatchEvent('blur', { value: inputValue }, evnt)
    }

    const emitInputEvent = (value: any, evnt: Event) => {
      const inputImmediate = computeInputImmediate.value
      reactiveData.inputValue = value
      if (inputImmediate) {
        emitModelValue(value, evnt)
      } else {
        textareaMethods.dispatchEvent('input', { value }, evnt)
      }
    }

    const inputEvent = (evnt: Event & { type: 'input' }) => {
      const textareaElem = evnt.target as HTMLInputElement
      const { value } = textareaElem
      emitInputEvent(value, evnt)
      // recalculate()
    }

    const keydownEvent = (evnt: KeyboardEvent & { type: 'keydown' }) => {
      triggerEvent(evnt)
    }

    const keyupEvent = (evnt: KeyboardEvent & { type: 'keyup' }) => {
      triggerEvent(evnt)
    }

    const renderVN = () => {
      const { inputValue, isActivated } = reactiveData
      const { disabled, readonly, rows, /* showLines, */ wrap, autofocus } =
        props

      const inputPlaceholder = computeInputPlaceholder.value

      return h(
        'div',
        {
          ref: refElem,
          class: [
            'vma-grid-textarea',
            props.size,
            props.type,
            {
              'is--active': isActivated,
              'is--disabled': disabled,
              // 'is--show-lines': showLines,
            },
          ],
        },
        // childrenElements
        [
          //   showLines ? h(
          //     'div',
          //     {
          //       class: 'vma-textarea--lines',
          //     },
          //     h(
          //         'div',
          //         {
          //           ref: refLines,
          //           class: 'vma-textarea--lines-inner',
          //         },
          //         renderLines()
          //     )
          // ) : createCommentVNode(),
          h('textarea', {
            ref: refTextareaTarget,
            class: [
              'inner-textarea',
              {
                'inner-textarea--wrap': wrap,
                'inner-textarea--nowrap': !wrap,
              },
            ],
            value: inputValue,
            placeholder: inputPlaceholder,
            disabled,
            readonly,
            rows,
            autofocus,
            onKeydown: keydownEvent,
            onKeyup: keyupEvent,
            onInput: inputEvent,
            onChange: changeEvent,
            onFocus: focusEvent,
            onBlur: blurEvent,
            onScroll: scrollEvent,
            // onMousedown: detectResize,
            style: {
              resize: 'both',
            },
          }),
          // h('div', {
          //   ref: refCountHelper,
          //   class: 'count-helper',
          // }),
          // h('div', {
          //   ref: refCountTargetHelper,
          //   class: 'count-target-helper',
          //   // rows: 999,
          // }),
        ],
      )
    }
    $vmaGridTextarea.renderVN = renderVN

    // nextTick(() => {
    //   syncScroll()
    //   calculateLineNumbers()
    // })

    return $vmaGridTextarea
  },
  render() {
    return this.renderVN()
  },
})
