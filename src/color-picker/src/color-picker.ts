import {
  defineComponent,
  h,
  computed,
  resolveComponent,
  ComponentOptions,
  VNode,
  ref,
  provide,
  Ref,
  nextTick,
} from 'vue'
import { Guid } from '../../utils/guid'
import {
  VmaGridButtonConstructor,
  VmaGridColorPickerConstructor,
  VmaGridColorPickerRefs,
  VmaGridRefs,
} from '../../../types'
import { getAbsolutePos } from '../../utils/doms'

export default defineComponent({
  name: 'VmaGridColorPicker',
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
    defaultColor: {
      type: String,
      default: '#000000',
    },
    value: String,
  },
  emits: ['change'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, context) {
    const { slots, emit } = context
    const ButtonComponent = resolveComponent(
      'vma-grid-button',
    ) as ComponentOptions

    const refColorPickerPallet = ref() as Ref<HTMLDivElement>

    const gridColorPickerRefs: VmaGridColorPickerRefs = {
      refColorPickerPallet,
    }

    const $vmaGridColorPicker = {
      uId: Guid.create().toString(),
      props,
      context,
      getRefs: () => gridColorPickerRefs,
    } as unknown as VmaGridColorPickerConstructor

    const hoverColor = ref('')
    // const colorValue = ref(props.value)
    const openStatus = ref(false)

    const themeColorArr = [
      '#000000',
      '#ffffff',
      '#eeece1',
      '#1e497b',
      '#4e81bb',
      '#e2534d',
      '#9aba60',
      '#8165a0',
      '#47acc5',
      '#f9974c',
    ]

    const standardColorArr = [
      '#c21401',
      '#ff1e02',
      '#ffc12a',
      '#ffff3a',
      '#90cf5b',
      '#00af57',
      '#00afee',
      '#0071be',
      '#00215f',
      '#72349d',
    ]

    const colorConfig = [
      ['#7f7f7f', '#f2f2f2'],
      ['#0d0d0d', '#808080'],
      ['#1c1a10', '#ddd8c3'],
      ['#0e243d', '#c6d9f0'],
      ['#233f5e', '#dae5f0'],
      ['#632623', '#f2dbdb'],
      ['#4d602c', '#eaf1de'],
      ['#3f3150', '#e6e0ec'],
      ['#1e5867', '#d9eef3'],
      ['#99490f', '#fee9da'],
    ]

    // 格式化 hex 颜色值
    const parseColor = (hexStr: string) => {
      if (hexStr.length === 4) {
        return `#${hexStr[1]}${hexStr[1]}${hexStr[2]}${hexStr[2]}${hexStr[3]}${hexStr[3]}`
      }
      return hexStr
    }

    // RGB 颜色 转 HEX 颜色
    const rgbToHex = (r: number, g: number, b: number) => {
      const hex = ((r << 16) | (g << 8) | b).toString(16)
      return `#${new Array(Math.abs(hex.length - 7)).join('0')}${hex}`
    }

    // HEX 转 RGB 颜色
    const hexToRgb = (hex: string) => {
      const parsedHex = parseColor(hex)
      const rgb = []
      for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt(`0x${parsedHex.slice(i, i + 2)}`, 16))
      }
      return rgb
    }

    const gradient = (startColor: string, endColor: string, step: number) => {
      // 将 hex 转换为 rgb
      const sColor = hexToRgb(startColor)
      const eColor = hexToRgb(endColor)
      // 计算R G B每一步的差值
      const rStep = (eColor[0] - sColor[0]) / step
      const gStep = (eColor[1] - sColor[1]) / step
      const bStep = (eColor[2] - sColor[2]) / step
      const gradientColorArr = []
      // 计算每一步的hex值
      for (let i = 0; i < step; i++) {
        gradientColorArr.push(
          rgbToHex(
            rStep * i + sColor[0],
            gStep * i + sColor[1],
            bStep * i + sColor[2],
          ),
        )
      }
      return gradientColorArr
    }

    const gradientColor = computed(() => {
      const colorArr = []
      for (const color of colorConfig) {
        colorArr.push(gradient(color[1], color[0], 5))
      }
      return colorArr
    })

    const showColor = computed(() => {
      // console.log(props.value)
      // console.log(colorValue.value)
      if (props.value !== '') {
        return props.value
      }
      return props.defaultColor
    })

    const showDefaultColor = computed(() => {
      if (hoverColor.value !== '') {
        return hoverColor.value
      }
      return showColor.value
    })

    const onBlur = () => {
      openStatus.value = false
    }

    const onClickColorButton = (evnt: MouseEvent) => {
      if (!props.readonly) {
        openStatus.value = true
        nextTick(() => {
          const item: any = evnt.currentTarget
          const childWrapperElem = item.nextElementSibling
          if (childWrapperElem) {
            const { boundingTop, boundingLeft, visibleHeight, visibleWidth } =
              getAbsolutePos(item)
            const posTop = boundingTop + item.offsetHeight
            const posLeft = boundingLeft + item.offsetWidth
            let left = ''
            let right = ''
            // 是否超出右侧
            if (posLeft + childWrapperElem.offsetWidth > visibleWidth - 10) {
              left = 'auto'
              right = `${item.offsetWidth}px`
            }
            // 是否超出底部
            let top = ''
            let bottom = ''
            if (posTop + childWrapperElem.offsetHeight > visibleHeight - 10) {
              top = 'auto'
              bottom = '0'
            }
            childWrapperElem.style.left = left
            childWrapperElem.style.right = right
            childWrapperElem.style.top = top
            childWrapperElem.style.bottom = bottom
          }
        })
      }
    }

    const colorBtnClassNames = ['vma-grid-color-picker--color-button']
    if (props.readonly) {
      colorBtnClassNames.push('vma-grid-color-picker--color-button--readonly')
    }

    const onColorLiClick = (event: Event, color: string) => {
      emit('change', event, color)
      // colorValue.value = color
      openStatus.value = false
    }

    const onDefaultBtnClick = (event: Event) => {
      emit('change', event, props.defaultColor)
      // colorValue.value = props.defaultColor
      openStatus.value = false
    }

    const onColorClick = (event: Event) => {
      emit('change', event, showDefaultColor.value)
      // colorValue.value = showDefaultColor.value
      openStatus.value = false
    }

    const renderDefaultColorPallet = () => {
      const defaultColorPalletClassNames = [
        'vma-grid-color-picker--color-pallet--default',
      ]

      return h(
        'div',
        {
          class: defaultColorPalletClassNames,
        },
        [
          h('div', {
            class: ['vma-grid-color-picker--color-pallet--default-color-view'],
            style: `background-color: ${showDefaultColor.value}`,
            onClick(event: Event) {
              onColorClick(event)
            },
          }),
          h(
            'div',
            {
              class: [
                'vma-grid-color-picker--color-pallet--default-default-color',
              ],
            },
            [
              h(
                ButtonComponent,
                {
                  onMouseDown: onDefaultBtnClick,
                },
                () => '默认颜色',
              ),
            ],
          ),
        ],
      )
    }

    const onColorLiOver = (event: Event, color: string) => {
      hoverColor.value = color
    }

    const onColorLiOut = () => {
      hoverColor.value = ''
    }

    const renderThemeColorPallet = () => {
      const tColorArr: Array<VNode> = []
      const gColorArr: Array<VNode> = []
      themeColorArr.forEach((element) => {
        tColorArr.push(
          h('li', {
            style: `background-color:${element}`,
            onMouseOver(event: Event) {
              onColorLiOver(event, element)
            },
            onMouseOut: onColorLiOut,
            onClick(event: Event) {
              onColorLiClick(event, element)
            },
          }),
        )
      })
      gradientColor.value.forEach((rowElement) => {
        const gradientColorCol: Array<VNode> = []
        rowElement.forEach((element) => {
          gradientColorCol.push(
            h('li', {
              style: `background-color:${element}`,
              onMouseOver(event: Event) {
                onColorLiOver(event, element)
              },
              onMouseOut: onColorLiOut,
              onClick(event: Event) {
                onColorLiClick(event, element)
              },
            }),
          )
        })
        gColorArr.push(h('li', {}, h('ul', {}, gradientColorCol)))
      })

      return h('div', {}, [
        h('h3', {}, '主题颜色'),
        h(
          'ul',
          {
            class: ['vma-grid-color-picker--color-pallet--theme'],
          },
          tColorArr,
        ),
        h(
          'ul',
          {
            class: ['vma-grid-color-picker--color-pallet--gradient'],
          },
          gColorArr,
        ),
      ])
    }

    const renderStdColorPallet = () => {
      const sColorArr: Array<VNode> = []
      standardColorArr.forEach((element) => {
        sColorArr.push(
          h('li', {
            style: `background-color:${element}`,
            onMouseOver(event: Event) {
              onColorLiOver(event, element)
            },
            onMouseOut: onColorLiOut,
            onClick(event: Event) {
              onColorLiClick(event, element)
            },
          }),
        )
      })
      return h('div', {}, [
        h('h3', {}, '标准颜色'),
        h(
          'ul',
          {
            class: ['vma-grid-color-picker--color-pallet--theme'],
          },
          sColorArr,
        ),
      ])
    }

    const renderColorPallet = () =>
      h(
        'div',
        {
          ref: refColorPickerPallet,
          class: [
            'vma-grid-color-picker--color-pallet',
            openStatus.value ? 'vma-grid-color-picker--color-pallet--open' : '',
            // 'vma-grid-color-picker--color-pallet--open',
          ],
        },
        [
          renderDefaultColorPallet(),
          renderThemeColorPallet(),
          renderStdColorPallet(),
        ],
      )

    const renderVN = () =>
      h(
        'div',
        {
          class: ['vma-grid-color-picker'],
          tabIndex: -1,
          onClick(event: Event) {
            event.stopPropagation()
          },
          onBlur,
        },
        [
          h('div', {
            class: colorBtnClassNames,
            style: `background-color:${showColor.value}`,
            onClick: onClickColorButton,
          }),
          renderColorPallet(),
        ],
      )

    $vmaGridColorPicker.renderVN = renderVN

    provide('$vmaGridColorPicker', $vmaGridColorPicker)

    return $vmaGridColorPicker
  },
  render() {
    return this.renderVN()
  },
})
