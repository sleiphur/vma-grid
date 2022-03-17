import {
  ComponentOptions,
  computed,
  createCommentVNode,
  defineComponent,
  h,
  inject,
  PropType,
  provide,
  reactive,
  resolveComponent,
} from 'vue'
import { Guid } from '../../utils/guid'
import {
  VmaGridConstructor,
  VmaGridHeaderConstructor,
  VmaGridHeaderPropTypes,
} from '../../../types/grid'
import { getRenderHeight } from './utils/utils'

export default defineComponent({
  name: 'VmaGridHeader',
  props: {
    fixedType: {
      type: String as PropType<VmaGridHeaderPropTypes.Fixed>,
      default: 'center',
    },
    type: {
      type: String as PropType<VmaGridHeaderPropTypes.Type>,
      default: 'default',
    },
  },
  setup(props, context) {
    // const { slots, emit } = context

    const $vmaCalcGrid = inject('$vmaCalcGrid', {} as VmaGridConstructor)

    const { columnConfigs } = $vmaCalcGrid.reactiveData

    const {
      refGridHeader,
      refGridLeftFixedHeader,
      refGridLeftFixedHeaderX,
      refGridHeaderTable,
      refGridLeftFixedHeaderTable,
      refGridHeaderColgroup,
      refGridLeftFixedHeaderColgroup,
    } = $vmaCalcGrid.getRefs()

    const GridCellComponent = resolveComponent(
      'vma-grid-cell',
    ) as ComponentOptions

    const gridHeaderReactiveData = reactive({})

    const $vmaCalcGridHeader = {
      uId: Guid.create().toString(),
      props,
      context,
      reactiveData: gridHeaderReactiveData,
    } as unknown as VmaGridHeaderConstructor

    const cfs = computed(() => columnConfigs)

    const renderHeaderColgroup = () => {
      const cols: any = []
      if ($vmaCalcGrid.reactiveData.startColIndex !== 0) {
        cols.push(
          h('col', {
            idx: 0,
            style: {
              width: `${cfs.value[0].renderWidth}px`,
            },
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
            style: {
              width: `${cfs.value[index].renderWidth}px`,
            },
          }),
        )
      }
      // $vmaCalcGrid.reactiveData.columnConfigs.forEach((cf, index) => {
      //   cols.push(
      //     h('col', {
      //       idx: index,
      //       style: {
      //         width: `${cf.renderWidth}px`,
      //       },
      //     }),
      //   )
      // })
      return cols
    }

    const renderHeaderRows = () => {
      const tr = []

      const cols: any = []
      if ($vmaCalcGrid.reactiveData.startColIndex !== 0) {
        cols.push(
          h(GridCellComponent, {
            cat: 'grid-corner',
            type: `${props.type}`,
            r: 0,
            c: 0,
            row: 0,
            col: 0,
          }),
        )
      }
      for (
        let index = $vmaCalcGrid.reactiveData.startColIndex;
        index <= $vmaCalcGrid.reactiveData.endColIndex;
        index++
      ) {
        // for (
        //     let indexCol = $vmaCalcGrid.reactiveData.startColIndex;
        //     indexCol <= $vmaCalcGrid.reactiveData.endColIndex;
        //     indexCol++
        // ) {
        if (index > cfs.value.length - 1) {
          break
        }
        if (index === 0) {
          cols.push(
            h(GridCellComponent, {
              cat: 'grid-corner',
              type: `${props.type}`,
              r: 0,
              c: 0,
              row: 0,
              col: 0,
            }),
          )
        } else {
          const cf: any = cfs.value[index]
          cols.push(
            h(GridCellComponent, {
              cat: 'column-indicator',
              type: `${props.type}`,
              r: 0,
              c: cf.index,
              row: 0,
              col: cf.index,
            }),
          )
        }
        // }

        // trs.push(
        //     h(
        //         'tr',
        //         {
        //             row: index,
        //             style: {
        //                 height:
        //                     typeof rf.renderHeight === 'string'
        //                         ? `${rrh.value}px`
        //                         : `${rf.renderHeight}px`,
        //             },
        //         },
        //         cols,
        //     ),
        // )
      }

      cols.concat(
        $vmaCalcGrid.reactiveData.scrollbarWidth
          ? [
              h(GridCellComponent, {
                cat: 'gutter-corner',
                type: `${props.type}`,
                r: 0,
                c: $vmaCalcGrid.reactiveData.columnConfigs.length,
                row: 0,
                col: $vmaCalcGrid.reactiveData.columnConfigs.length,
              }),
            ]
          : [createCommentVNode()],
      )

      tr.push(
        h(
          'tr',
          {
            style: {
              height: `${getRenderHeight(
                $vmaCalcGrid.props.gridRowHeight,
                $vmaCalcGrid.props.size!,
              )}px`,
            },
          },
          cols,
        ),
      )
      return tr
    }

    const renderVN = () =>
      h(
        'div',
        {
          ref:
            props.fixedType === 'center'
              ? refGridHeader
              : refGridLeftFixedHeader,
          class: ['header-wrapper', `${props.type}`],
        },
        [
          h('div', {
            ref: refGridLeftFixedHeaderX,
            style: {
              float: 'left',
                height: `1px`,
                marginTop: `-1px`,
            },
          }),
          h(
            'table',
            {
              ref:
                props.fixedType === 'center'
                  ? refGridHeaderTable
                  : refGridLeftFixedHeaderTable,
              class: ['header', `${props.type}`],
            },
            [
              h(
                'colgroup',
                {
                  ref:
                    props.fixedType === 'center'
                      ? refGridHeaderColgroup
                      : refGridLeftFixedHeaderColgroup,
                },
                renderHeaderColgroup().concat(
                  $vmaCalcGrid.reactiveData.scrollbarWidth
                    ? [
                        h('col', {
                          idx: $vmaCalcGrid.reactiveData.columnConfigs.length,
                          style: {
                            width: `${$vmaCalcGrid.reactiveData.scrollbarWidth}px`,
                          },
                        }),
                      ]
                    : [createCommentVNode()],
                ),
              ),
              h(
                'thead',
                {
                  class: [`${props.type}`],
                },
                renderHeaderRows(),
              ),
            ],
          ),
        ],
      )

    $vmaCalcGridHeader.renderVN = renderVN

    provide('$vmaCalcGridHeader', $vmaCalcGridHeader)

    return $vmaCalcGridHeader
  },
  render() {
    return this.renderVN()
  },
})
