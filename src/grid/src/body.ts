import {
  ComponentOptions,
  computed,
  createCommentVNode,
  defineComponent,
  h,
  inject,
  nextTick,
  onMounted,
  onBeforeUnmount,
  PropType,
  provide,
  reactive,
  resolveComponent,
} from 'vue'
import { Guid } from '../../utils/guid'
import { getRenderHeight } from './utils/utils'
import {
  VmaGridBodyConstructor,
  VmaGridBodyPropTypes,
  VmaGridConstructor,
} from '../../../types/grid'

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
      refGridLeftFixedBodyY,
      refGridTopFixedBody,
      refGridLeftFixedBodyScrollWrapper,
      refGridLeftTopFixedBody,
      refGridBodyTable,
      refGridLeftFixedBodyTable,
      refGridBodyColgroup,
      refGridLeftFixedBodyColgroup,
      refGridHeader,
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

    const gridBodyReactiveData = reactive({})

    const $vmaCalcGridBody = {
      uId: Guid.create().toString(),
      props,
      context,
      reactiveData: gridBodyReactiveData,
    } as unknown as VmaGridBodyConstructor

    const cfs = computed(() => columnConfigs)

    const rfs = computed(() => rowConfigs)

    const renderBodyColgroup = () => {
      const cols: any = []
      cfs.value.forEach((_, index) => {
        cols.push(
          h('col', {
            idx: index,
          }),
        )
      })
      return cols
    }

    const renderBodyRows = () => {
      const trs: any = []
      rfs.value.forEach((rf, index) => {
        trs.push(
          h(
            'tr',
            {
              row: index,
              style: {
                height:
                  typeof rf.renderHeight === 'string'
                    ? `${rrh.value}px`
                    : `${rf.renderHeight}px`,
              },
            },
            cfs.value.map((cf, index) =>
              index === 0
                ? h(GridCellComponent, {
                    cat: 'row-indicator',
                    type: `${props.type}`,
                    r: rf.index,
                    c: 0,
                    row: rf.index,
                    col: 0,
                  })
                : h(GridCellComponent, {
                    cat: 'normal',
                    type: `${props.type}`,
                    r: rf.index,
                    c: cf.index,
                    row: rf.index,
                    col: cf.index,
                  }),
            ),
          ),
        )
      })
      return trs
    }

    const scrollEvent = () => {
      if (props.fixedType === 'center') {
        refGridHeader.value.scrollLeft = refGridBody.value.scrollLeft
        refGridLeftFixedBodyScrollWrapper.value.scrollTop =
          refGridBody.value.scrollTop
      } else if (props.fixedType === 'left') {
        refGridBody.value.scrollTop =
          refGridLeftFixedBodyScrollWrapper.value.scrollTop
      }
    }

    const wheelEvent = (wheelEvent: WheelEvent) => {
      wheelEvent.stopPropagation()
      if (props.fixedType === 'center') {
        refGridBody.value.onscroll = scrollEvent
        refGridLeftFixedBodyScrollWrapper.value.onscroll = null
      } else if (props.fixedType === 'left') {
        refGridBody.value.onscroll = null
        refGridLeftFixedBodyScrollWrapper.value.onscroll = scrollEvent
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
          ? h(
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
            )
          : createCommentVNode(),
      )

    $vmaCalcGridBody.renderVN = renderVN

    provide('$vmaCalcGridBody', $vmaCalcGridBody)

    return $vmaCalcGridBody
  },
  render() {
    return this.renderVN()
  },
})
