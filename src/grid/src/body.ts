import {
  ComponentOptions,
  computed,
  createCommentVNode,
  defineComponent,
  h,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  PropType,
  provide,
  reactive,
  resolveComponent,
} from 'vue'
import { Guid } from '../../utils/guid'
import { getRenderHeight, getRenderWidth } from './utils/utils'
import {
  VmaGridBodyConstructor,
  VmaGridBodyPropTypes,
  VmaGridConstructor,
} from '../../../types/grid'
import { isNumeric } from '../../utils/validate/number'

export default defineComponent({
  name: 'VmaGridBody',
  props: {
    fixedType: {
      type: String as PropType<VmaGridBodyPropTypes.Fixed>,
      default: 'center',
    },
    type: {
      type: String as PropType<VmaGridBodyPropTypes.Type>,
      default: 'default',
    },
  },
  setup(props, context) {
    // const { slots, emit } = context

    const $vmaCalcGrid = inject('$vmaCalcGrid', {} as VmaGridConstructor)

    const {
      refGridBody,
      refGridLeftFixedBody,
      refGridLeftFixedBodyX,
      refGridLeftFixedBodyY,
      refGridBodyX,
      refGridBodyY,
      refGridTopFixedBody,
      refGridLeftFixedBodyScrollWrapper,
      refGridLeftTopFixedBody,
      refGridBodyTable,
      refGridLeftFixedBodyTable,
      refGridBodyColgroup,
      refGridLeftFixedBodyColgroup,
      refGridHeader,
      refCurrentCellEditor,
    } = $vmaCalcGrid.getRefs()

    const { columnConfigs, rowConfigs } = $vmaCalcGrid.reactiveData

    const GridCellComponent = resolveComponent(
      'vma-grid-cell',
    ) as ComponentOptions

    const rrh = computed(() =>
      getRenderHeight(
        $vmaCalcGrid.props.gridRowHeight,
        $vmaCalcGrid.props.size!,
      ),
    )

    const rcw = computed(() =>
      getRenderWidth(
        $vmaCalcGrid.props.gridColumnWidth,
        $vmaCalcGrid.props.size!,
      ),
    )

    const gridBodyReactiveData = reactive({})

    const $vmaCalcGridBody = {
      uId: Guid.create().toString(),
      props,
      context,
      reactiveData: gridBodyReactiveData,
    } as unknown as VmaGridBodyConstructor

    const TextareaComponent = resolveComponent(
      'vma-grid-textarea',
    ) as ComponentOptions

    const cfs = computed(() => columnConfigs)

    const rfs = computed(() => rowConfigs)

    const renderBodyColgroup = () => {
      const cols: any = []
      if ($vmaCalcGrid.reactiveData.startColIndex !== 0) {
        cols.push(
          h('col', {
            idx: 0,
          }),
        )
      }
      for (
        let index = $vmaCalcGrid.reactiveData.startColIndex;
        index <= $vmaCalcGrid.reactiveData.endColIndex;
        index++
      ) {
        if (index > cfs.value.length - 1) {
          break
        }
        cols.push(
          h('col', {
            idx: index,
          }),
        )
      }
      return cols
    }

    const renderBodyRows = () => {
      const trs: any = []
      for (
        let index = $vmaCalcGrid.reactiveData.startIndex;
        index <= $vmaCalcGrid.reactiveData.endIndex;
        index++
      ) {
        if (index > rfs.value.length - 1) {
          break
        }
        const rf: any = rfs.value[index]

        const cols: any = []
        if ($vmaCalcGrid.reactiveData.startColIndex !== 0) {
          cols.push(
            h(GridCellComponent, {
              cat: 'row-indicator',
              type: `${props.type}`,
              r: rf.index,
              c: 0,
              row: rf.index,
              col: 0,
            }),
          )
        }
        for (
          let indexCol = $vmaCalcGrid.reactiveData.startColIndex;
          indexCol <= $vmaCalcGrid.reactiveData.endColIndex;
          indexCol++
        ) {
          if (indexCol > cfs.value.length - 1) {
            break
          }
          if (indexCol === 0) {
            cols.push(
              h(GridCellComponent, {
                cat: 'row-indicator',
                type: `${props.type}`,
                r: rf.index,
                c: 0,
                row: rf.index,
                col: 0,
                id: `${rf.index}_0`,
              }),
            )
          } else {
            const cf: any = cfs.value[indexCol]
            cols.push(
              h(GridCellComponent, {
                cat: 'normal',
                type: `${props.type}`,
                r: rf.index,
                c: cf.index,
                row: rf.index,
                col: cf.index,
                id: `${rf.index}_${cf.index}`,
              }),
            )
          }
        }

        trs.push(
          h(
            'tr',
            {
              row: index,
              style: {
                height: rf.visible
                  ? typeof rf.renderHeight === 'string'
                    ? `${rrh.value}px`
                    : `${rf.renderHeight}px`
                  : 0,
              },
            },
            cols,
          ),
        )
      }
      return trs
    }

    const scrollEvent = (event: Event) => {
      if (props.fixedType === 'center') {
        refGridHeader.value.scrollLeft = refGridBody.value.scrollLeft
        refGridLeftFixedBodyScrollWrapper.value.scrollTop =
          refGridBody.value.scrollTop
      } else if (props.fixedType === 'left') {
        refGridBody.value.scrollTop =
          refGridLeftFixedBodyScrollWrapper.value.scrollTop
      }
      $vmaCalcGrid.triggerScrollXEvent(event)
      $vmaCalcGrid.triggerScrollYEvent(event)
    }

    let wheelTime: any
    let wheelXSize = 0
    let wheelXInterval = 0
    let wheelXTotal = 0
    let isPrevWheelX = false
    let wheelYSize = 0
    let wheelYInterval = 0
    let wheelYTotal = 0
    let isPrevWheelY = false

    const handleWheelY = (
      wheelEvent: WheelEvent,
      deltaY: number,
      isWheelUp: boolean,
    ) => {
      const remainSize =
        isPrevWheelY === isWheelUp ? Math.max(0, wheelYSize - wheelYTotal) : 0
      isPrevWheelY = isWheelUp
      wheelYSize = Math.abs(
        isWheelUp ? deltaY - remainSize : deltaY + remainSize,
      )
      wheelYInterval = 0
      wheelYTotal = 0
      clearTimeout(wheelTime)
      const handleSmooth = () => {
        if (wheelYTotal < wheelYSize) {
          wheelYInterval = Math.max(5, Math.floor(wheelYInterval * 1.5))
          wheelYTotal += wheelYInterval
          if (wheelYTotal > wheelYSize) {
            wheelYInterval -= wheelYTotal - wheelYSize
          }
          const { scrollTop, clientHeight, scrollHeight } = refGridBody.value
          const targetTop = scrollTop + wheelYInterval * (isWheelUp ? -1 : 1)
          refGridBody.value.scrollTop = targetTop
          refGridLeftFixedBody.value.scrollTop = targetTop
          if (
            isWheelUp ? targetTop < scrollHeight - clientHeight : targetTop >= 0
          ) {
            wheelTime = setTimeout(handleSmooth, 10)
          }
          // emit
        }
      }
      handleSmooth()
    }

    const handleWheelX = (
      wheelEvent: WheelEvent,
      deltaX: number,
      isWheelLeft: boolean,
    ) => {
      const remainSize =
        isPrevWheelX === isWheelLeft ? Math.max(0, wheelXSize - wheelXTotal) : 0
      isPrevWheelX = isWheelLeft
      wheelXSize = Math.abs(
        isWheelLeft ? deltaX - remainSize : deltaX + remainSize,
      )
      wheelXInterval = 0
      wheelXTotal = 0
      clearTimeout(wheelTime)
      const handleSmooth = () => {
        if (wheelXTotal < wheelXSize) {
          wheelXInterval = Math.max(5, Math.floor(wheelXInterval * 1.5))
          wheelXTotal += wheelXInterval
          if (wheelXTotal > wheelXSize) {
            wheelXInterval -= wheelXTotal - wheelXSize
          }
          const { scrollLeft, clientWidth, scrollWidth } = refGridBody.value
          const targetLeft =
            scrollLeft + wheelXInterval * (isWheelLeft ? -1 : 1)
          refGridBody.value.scrollLeft = targetLeft
          if (
            isWheelLeft
              ? targetLeft < scrollWidth - clientWidth
              : targetLeft >= 0
          ) {
            wheelTime = setTimeout(handleSmooth, 10)
          }
          // emit
        }
      }
      handleSmooth()
    }

    const wheelEvent = (wheelEvent: WheelEvent) => {
      if (props.fixedType === 'center') {
        refGridBody.value.onscroll = scrollEvent
        refGridLeftFixedBodyScrollWrapper.value.onscroll = null
      } else if (props.fixedType === 'left') {
        refGridBody.value.onscroll = null
        refGridLeftFixedBodyScrollWrapper.value.onscroll = scrollEvent
      }
      const { deltaX, deltaY } = wheelEvent

      // 若已到达顶部或底部或最左或最右，则不用触发
      const isWheelUp = deltaY < 0
      const isWheelLeft = deltaX < 0
      const scrollBodyElement =
        props.fixedType === 'left'
          ? refGridLeftFixedBody.value
          : refGridBody.value
      let returnY = false
      if (
        deltaX === 0 && isWheelUp
          ? scrollBodyElement.scrollTop <= 0
          : scrollBodyElement.scrollTop >=
            scrollBodyElement.scrollHeight -
              scrollBodyElement.clientHeight -
              10 * rrh.value
      ) {
        returnY = true
      }
      let returnX = false
      if (
        deltaY === 0 && isWheelLeft
          ? scrollBodyElement.scrollLeft <= 0
          : scrollBodyElement.scrollLeft >=
            scrollBodyElement.scrollWidth -
              scrollBodyElement.clientWidth -
              10 * rcw.value
      ) {
        returnX = true
      }

      if (returnX && returnY) {
        return
      }

      if (!returnX) {
        const { lastScrollLeft } = $vmaCalcGrid.reactiveData
        const scrollLeft = scrollBodyElement.scrollLeft + deltaX
        const isRollX = scrollLeft !== lastScrollLeft
        if (isRollX) {
          wheelEvent.preventDefault()
          $vmaCalcGrid.reactiveData.lastScrollLeft = scrollLeft
          $vmaCalcGrid.reactiveData.lastScrollTime = Date.now()
          handleWheelX(wheelEvent, deltaX, isWheelLeft)
          $vmaCalcGrid.triggerScrollXEvent(wheelEvent)
        }
      }

      if (!returnY) {
        const { lastScrollTop } = $vmaCalcGrid.reactiveData
        const scrollTop = scrollBodyElement.scrollTop + deltaY
        const isRollY = scrollTop !== lastScrollTop
        if (isRollY) {
          wheelEvent.preventDefault()
          $vmaCalcGrid.reactiveData.lastScrollTop = scrollTop
          $vmaCalcGrid.reactiveData.lastScrollTime = Date.now()
          handleWheelY(wheelEvent, deltaY, isWheelUp)
          $vmaCalcGrid.triggerScrollYEvent(wheelEvent)
        }
      }
    }

    onMounted(() => {
      nextTick(() => {
        if (props.fixedType === 'left') {
          refGridBody.value.onscroll = null
          refGridLeftFixedBodyScrollWrapper.value.onscroll = scrollEvent
        } else if (props.fixedType === 'center') {
          refGridBody.value.onscroll = scrollEvent
          refGridLeftFixedBodyScrollWrapper.value.onscroll = null
        }
      })
    })

    onBeforeUnmount(() => {
      if (refGridBody && refGridBody.value) {
        refGridBody.value.onscroll = null
      }
      if (
        refGridLeftFixedBodyScrollWrapper &&
        refGridLeftFixedBodyScrollWrapper.value
      ) {
        refGridLeftFixedBodyScrollWrapper.value.onscroll = null
      }
    })

    const renderVN = () =>
      h(
        'div',
        {
          ref:
            props.fixedType === 'center'
              ? refGridBody
              : props.fixedType === 'left'
              ? refGridLeftFixedBody
              : props.fixedType === 'top'
              ? refGridTopFixedBody
              : refGridLeftTopFixedBody,

          class: ['body-wrapper'],
          ...{
            onWheel: wheelEvent,
          },
        },
        [
          props.fixedType === 'left'
            ? h(
                'div',
                {
                  ref: refGridLeftFixedBodyScrollWrapper,
                  class: ['fixed-wrapper'],
                  style: {
                    // width: `${$vmaCalcGrid.reactiveData.gridLeftFixedBodyWidth}px`,
                    height: `${
                      $vmaCalcGrid.reactiveData.gridBodyHeight -
                      $vmaCalcGrid.reactiveData.scrollbarHeight
                    }px`,
                  },
                },
                [
                  h('div', {
                    ref: refGridLeftFixedBodyY,
                    style: {
                      float: 'left',
                      width: 0,
                    },
                  }),
                  h('div', {
                    ref: refGridLeftFixedBodyX,
                    style: {
                      float: 'left',
                      height: `1px`,
                      marginTop: `-1px`,
                    },
                  }),
                  h(
                    'table',
                    {
                      ref: refGridLeftFixedBodyTable,
                      class: ['body'],
                    },
                    [
                      h(
                        'colgroup',
                        {
                          ref: refGridLeftFixedBodyColgroup,
                        },
                        renderBodyColgroup(),
                      ),
                      h('tbody', {}, renderBodyRows()),
                    ],
                  ),
                ],
              )
            : props.fixedType === 'center'
            ? [
                h('div', {
                  ref: refGridBodyY,
                  style: {
                    float: 'left',
                    width: 0,
                  },
                }),
                h('div', {
                  ref: refGridBodyX,
                  style: {
                    float: 'left',
                    height: `1px`,
                    marginTop: `-1px`,
                  },
                }),
                h(
                  'table',
                  {
                    ref: refGridBodyTable,
                    class: ['body'],
                  },
                  [
                    h(
                      'colgroup',
                      {
                        ref: refGridBodyColgroup,
                      },
                      renderBodyColgroup(),
                    ),
                    h('tbody', {}, renderBodyRows()),
                  ],
                ),
              ]
            : createCommentVNode(),
          props.fixedType === 'center'
            ? h(TextareaComponent, {
                ref: refCurrentCellEditor,
                class: ['cell-editor'],
                size: $vmaCalcGrid.props.size,
                type: $vmaCalcGrid.props.type,
                modelValue: $vmaCalcGrid.reactiveData.currentCellEditorContent,
                'onUpdate:modelValue': (value: any) => {
                  $vmaCalcGrid.reactiveData.currentCellEditorContent = value
                },
                style: {
                  display: $vmaCalcGrid.reactiveData.currentCellStyle.display,
                  transform:
                    $vmaCalcGrid.reactiveData.currentCellStyle.transform,
                  height: $vmaCalcGrid.reactiveData.currentCellStyle.height,
                  width: $vmaCalcGrid.reactiveData.currentCellStyle.width,
                  left: $vmaCalcGrid.reactiveData.currentCellStyle.left,
                  top: $vmaCalcGrid.reactiveData.currentCellStyle.top,
                },
                onBlur: () => {
                  $vmaCalcGrid.reactiveData.currentCell.v = isNumeric(
                    $vmaCalcGrid.reactiveData.currentCellEditorContent,
                  )
                    ? Number($vmaCalcGrid.reactiveData.currentCellEditorContent)
                    : $vmaCalcGrid.reactiveData.currentCellEditorContent
                  // 重新计算
                  nextTick(() => {
                    $vmaCalcGrid.calc()
                  })
                },
              })
            : createCommentVNode(),
        ],
      )

    $vmaCalcGridBody.renderVN = renderVN

    provide('$vmaCalcGridBody', $vmaCalcGridBody)

    return $vmaCalcGridBody
  },
  render() {
    return this.renderVN()
  },
})
