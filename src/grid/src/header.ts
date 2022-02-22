import {
  ComponentOptions,
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

    const {
      refGridHeader,
      refGridLeftFixedHeader,
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

    const renderHeaderColgroup = () => {
      const cols: any = []
      $vmaCalcGrid.reactiveData.columnConfigs.forEach((cf, index) => {
        cols.push(
          h('col', {
            idx: index,
            style: {
              width: `${cf.renderWidth}px`,
            },
          }),
        )
      })
      return cols
    }

    const renderHeaderRows = () => {
      const tr = []
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
          $vmaCalcGrid.reactiveData.columnConfigs
            .map((cf, index) =>
              index === 0
                ? h(GridCellComponent, {
                    cat: 'grid-corner',
                    type: `${props.type}`,
                    r: 0,
                    c: 0,
                    row: 0,
                    col: 0,
                  })
                : h(GridCellComponent, {
                    cat: 'column-indicator',
                    type: `${props.type}`,
                    r: 0,
                    c: cf.index,
                    row: 0,
                    col: cf.index,
                  }),
            )
            .concat(
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
            ),
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
