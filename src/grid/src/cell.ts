import {
  ComponentOptions,
  computed,
  createCommentVNode,
  defineComponent,
  h,
  inject,
  nextTick,
  PropType,
  provide,
  reactive,
  resolveComponent,
} from 'vue'
import { DomTools } from '../../utils/doms'
import { getNextColumnIndex } from '../../utils/grid'
import { Guid } from '../../utils/guid'
import {
  VmaGridCellConstructor,
  VmaGridCellPropTypes,
  VmaGridConstructor,
} from '../../../types/grid'
import {
  getHideCaretTranslateY,
  getRenderHeight,
  getRenderWidth,
  getXSpaceFromColumnWidths,
  getYSpaceFromRowHeights,
} from './utils/utils'

export default defineComponent({
  name: 'VmaGridCell',
  props: {
    type: {
      type: String as PropType<VmaGridCellPropTypes.Type>,
      default: 'default',
    },
    cat: {
      type: String as PropType<VmaGridCellPropTypes.Cat>,
      default: 'normal',
    },
    r: Number,
    c: Number,
  },
  setup(props, context) {
    // const { slots, emit } = context

    const $vmaCalcGrid = inject('$vmaCalcGrid', {} as VmaGridConstructor)

    const IconComponent = resolveComponent('vma-grid-icon') as ComponentOptions

    const {
      refGridHeader,
      refGridBody,
      refGridLeftFixedBody,
      refRowResizeBar,
      refColumnResizeBar,
      refCurrentCellEditor,
    } = $vmaCalcGrid.getRefs()

    const { currentSheetData } = $vmaCalcGrid.reactiveData

    const gridCellReactiveData = reactive({})

    const $vmaCalcGridCell = {
      uId: Guid.create().toString(),
      props,
      context,
      reactiveData: gridCellReactiveData,
    } as unknown as VmaGridCellConstructor

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

    const getCellContent = () => {
      const c = currentSheetData[props.r!][props.c! - 1]
      if (c && c.mv) {
        return c.mv
      }
      return null
    }

    const renderCellContent = () => {
      let text = ''
      if (props.cat === 'column-indicator') {
        text = getNextColumnIndex(props.c!.valueOf())
      }
      if (props.cat === 'row-indicator') {
        text = (props.r! + 1).toString()
      }
      if (props.cat === 'normal') {
        text = getCellContent()
      }
      return h(
        'span',
        {
          class: ['cell-content'],
        },
        text,
      )
    }

    const resizeColumnMousedown = (event: MouseEvent) => {
      const { clientX: dragClientX } = event
      const domMousemove = document.onmousemove
      const domMouseup = document.onmouseup
      const dragBtnElem = event.target as HTMLDivElement
      const wrapperElem = refGridHeader.value
      const pos = DomTools.getOffsetPos(dragBtnElem, wrapperElem)
      const dragBtnWidth = dragBtnElem.clientWidth
      const columnWidth = getRenderWidth(
        $vmaCalcGrid.props.gridColumnWidth,
        $vmaCalcGrid.props.size!,
      )
      const leftSpaceWidth = getXSpaceFromColumnWidths(
        $vmaCalcGrid.reactiveData.startColIndex,
        rcw.value,
        $vmaCalcGrid.reactiveData.gridColumnsWidthChanged,
        $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged,
      )
      const dragBtnOffsetWidth = dragBtnWidth
      const dragPosLeft =
        pos.left + Math.floor(dragBtnOffsetWidth) + leftSpaceWidth
      const cell = dragBtnElem.parentNode as HTMLTableCellElement
      const dragMinLeft = Math.max(
        pos.left - cell.clientWidth + dragBtnOffsetWidth,
        0,
      )
      let dragLeft = 0
      const resizeBarElem = refColumnResizeBar.value
      resizeBarElem.style.left = `${
        pos.left + dragBtnOffsetWidth + leftSpaceWidth
      }px`
      resizeBarElem.style.display = 'block'

      // 处理拖动事件
      const updateEvent = (event: MouseEvent) => {
        event.stopPropagation()
        event.preventDefault()
        const offsetX = event.clientX - dragClientX
        const left = dragPosLeft + offsetX
        dragLeft = Math.max(left, dragMinLeft)
        resizeBarElem.style.left = `${dragLeft}px`
        resizeBarElem.style.display = 'block'
      }

      document.onmousemove = updateEvent

      document.onmouseup = () => {
        document.onmousemove = domMousemove
        document.onmouseup = domMouseup
        resizeBarElem.style.display = 'none'
        if (dragBtnElem.parentElement!.getAttribute('col')) {
          const columnConfig = $vmaCalcGrid.reactiveData.columnConfigs.find(
            (item) =>
              item.index ===
              parseInt(dragBtnElem.parentElement!.getAttribute('col')!, 10),
          )
          if (columnConfig) {
            columnConfig.renderWidth = Math.max(
              dragBtnElem.parentElement!.clientWidth + dragLeft - dragPosLeft,
              6,
            )
            $vmaCalcGrid.reactiveData.gridColumnsWidthChanged[
              `${columnConfig.index}`
            ] = columnConfig.renderWidth
            $vmaCalcGrid.reactiveData.gridWidth +=
              columnConfig.renderWidth - columnWidth
          }
        }

        dragBtnElem.parentElement!.style.width = `${Math.max(
          dragBtnElem.parentElement!.clientWidth + dragLeft - dragPosLeft,
          6,
        )}px`
        $vmaCalcGrid.recalculate(true).then(() => {
          nextTick(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
            $vmaCalcGrid.calcCurrentCellDisplay()
          })
        })
      }
    }

    const resizeRowMousedown = (event: MouseEvent) => {
      const { clientY: dragClientY } = event
      const domMousemove = document.onmousemove
      const domMouseup = document.onmouseup
      const dragBtnElem = event.target as HTMLDivElement
      const wrapperElem = refGridLeftFixedBody.value
      const pos = DomTools.getOffsetPos(dragBtnElem, wrapperElem)
      const dragBtnHeight = dragBtnElem.clientHeight
      const rowHeight = getRenderHeight(
        $vmaCalcGrid.props.gridRowHeight,
        $vmaCalcGrid.props.size!,
      )
      const topSpaceHeight = getYSpaceFromRowHeights(
        $vmaCalcGrid.reactiveData.startIndex,
        rrh.value,
        $vmaCalcGrid.reactiveData.gridRowsHeightChanged,
        $vmaCalcGrid.reactiveData.gridRowsVisibleChanged,
      )
      const dragBtnOffsetHeight = dragBtnHeight
      const dragPosTop =
        pos.top + Math.floor(dragBtnOffsetHeight) + topSpaceHeight
      const cell = dragBtnElem.parentNode as HTMLTableCellElement
      const dragMinTop = Math.max(
        pos.top - cell.clientHeight + dragBtnOffsetHeight,
        0,
      )
      let dragTop = 0
      const resizeBarElem = refRowResizeBar.value
      resizeBarElem.style.top = `${
        pos.top +
        refGridHeader.value.clientHeight +
        dragBtnOffsetHeight +
        topSpaceHeight
      }px`
      resizeBarElem.style.display = 'block'

      // 处理拖动事件
      const updateEvent = (event: MouseEvent) => {
        event.stopPropagation()
        event.preventDefault()
        const offsetY = event.clientY - dragClientY
        const top = dragPosTop + offsetY
        dragTop = Math.max(top, dragMinTop)
        resizeBarElem.style.top = `${
          dragTop + refGridHeader.value.clientHeight
        }px`
        resizeBarElem.style.display = 'block'
      }

      document.onmousemove = updateEvent

      document.onmouseup = () => {
        document.onmousemove = domMousemove
        document.onmouseup = domMouseup
        resizeBarElem.style.display = 'none'
        if (dragBtnElem.parentElement!.getAttribute('row')) {
          const rowConfig = $vmaCalcGrid.reactiveData.rowConfigs.find(
            (item) =>
              item.index ===
              parseInt(dragBtnElem.parentElement!.getAttribute('row')!, 10),
          )
          if (rowConfig) {
            rowConfig.renderHeight = Math.max(
              dragBtnElem.parentElement!.clientHeight + dragTop - dragPosTop,
              6,
            )
            $vmaCalcGrid.reactiveData.gridRowsHeightChanged[
              `${rowConfig.index}`
            ] = rowConfig.renderHeight
            $vmaCalcGrid.reactiveData.gridHeight +=
              rowConfig.renderHeight - rowHeight
          }
        }

        dragBtnElem.parentElement!.parentElement!.style.height = `${Math.max(
          dragBtnElem.parentElement!.clientHeight + dragTop - dragPosTop,
          6,
        )}px`
        $vmaCalcGrid.recalculate(true).then(() => {
          nextTick(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
            $vmaCalcGrid.calcCurrentCellDisplay()
          })
        })
      }
    }

    const isUpwardAdjacentRowVisible = computed((): boolean => {
      if (props.r === 0) {
        return true
      }
      return !$vmaCalcGrid.reactiveData.gridRowsVisibleChanged.hasOwnProperty(
        `${props.r! - 1}`,
      )
    })

    const isFrontwardAdjacentColumnVisible = computed((): boolean => {
      if (props.c === 1) {
        return true
      }
      return !$vmaCalcGrid.reactiveData.gridColumnsVisibleChanged.hasOwnProperty(
        `${props.c! - 1 - 1}`,
      )
    })

    const isDownwardAdjacentRowVisible = computed((): boolean => {
      if (props.r === $vmaCalcGrid.reactiveData.rowConfigs.length) {
        return true
      }
      return !$vmaCalcGrid.reactiveData.gridRowsVisibleChanged.hasOwnProperty(
        `${props.r! + 1}`,
      )
    })

    const isBackwardAdjacentColumnVisible = computed((): boolean => {
      if (props.c === $vmaCalcGrid.reactiveData.columnConfigs.length) {
        return true
      }
      return !$vmaCalcGrid.reactiveData.gridColumnsVisibleChanged.hasOwnProperty(
        `${props.c!}`,
      )
    })

    const renderCell = () => {
      if (props.cat === 'row-indicator') {
        return [
          h(
            'div',
            {
              class: ['cell', `${props.type}`],
              style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
            renderCellContent(),
          ),
          $vmaCalcGrid.props.resizeRow
            ? h('div', {
                class: ['row-resize-handler', `${props.type}`],
                onMousedown: (event: MouseEvent) => {
                  resizeRowMousedown(event)
                  event.stopPropagation()
                },
              })
            : createCommentVNode(),
          h(
            'div',
            {
              style: {
                display: !isUpwardAdjacentRowVisible.value ? 'block' : 'none',
              },
              class: ['row-hide-info-upward'],
              onClick: (event: MouseEvent) => {
                const elem = event.target as HTMLDivElement
                const targetElem: any = elem.parentElement!.parentElement!
                $vmaCalcGrid.updateRow(
                  'showUpRows',
                  targetElem.attributes.row.value,
                  targetElem.attributes.col.value,
                )
              },
            },
            h(IconComponent, {
              name: 'ellipsis-h',
              size: $vmaCalcGrid.props.size,
              translateY: getHideCaretTranslateY(
                $vmaCalcGrid.props.size!,
                'up',
              ),
              scaleX: 0.7,
              scaleY: 0.7,
            }),
          ),
          h(
            'div',
            {
              style: {
                display: !isDownwardAdjacentRowVisible.value ? 'block' : 'none',
              },
              class: ['row-hide-info-downward'],
              onClick: (event: MouseEvent) => {
                const elem = event.target as HTMLDivElement
                const targetElem: any = elem.parentElement!.parentElement!
                $vmaCalcGrid.updateRow(
                  'showDownRows',
                  targetElem.attributes.row.value,
                  targetElem.attributes.col.value,
                )
              },
            },
            h(IconComponent, {
              name: 'ellipsis-h',
              size: $vmaCalcGrid.props.size,
              translateY: getHideCaretTranslateY(
                $vmaCalcGrid.props.size!,
                'down',
              ),
              scaleX: 0.7,
              scaleY: 0.7,
            }),
          ),
        ]
      }
      if (props.cat === 'column-indicator') {
        return [
          h(
            'div',
            {
              class: ['cell', `${props.type}`],
              style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
            renderCellContent(),
          ),
          $vmaCalcGrid.props.resizeRow
            ? h('div', {
                class: ['column-resize-handler', `${props.type}`],
                onMousedown: (event: MouseEvent) => {
                  resizeColumnMousedown(event)
                  event.stopPropagation()
                },
              })
            : createCommentVNode(),
          h(
            'div',
            {
              style: {
                display: !isFrontwardAdjacentColumnVisible.value
                  ? 'block'
                  : 'none',
              },
              class: ['column-hide-info-frontward'],
              onClick: (event: MouseEvent) => {
                const elem = event.target as HTMLDivElement
                const targetElem: any = elem.parentElement!.parentElement!
                $vmaCalcGrid.updateColumn(
                  'showFrontColumns',
                  targetElem.attributes.row.value,
                  targetElem.attributes.col.value,
                )
              },
            },
            h(IconComponent, {
              name: 'ellipsis-h',
              size: $vmaCalcGrid.props.size,
              translateY: getHideCaretTranslateY(
                $vmaCalcGrid.props.size!,
                'up',
              ),
              scaleX: 0.7,
              scaleY: 0.7,
            }),
          ),
          h(
            'div',
            {
              style: {
                display: !isBackwardAdjacentColumnVisible.value
                  ? 'block'
                  : 'none',
              },
              class: ['column-hide-info-backward'],
              onClick: (event: MouseEvent) => {
                const elem = event.target as HTMLDivElement
                const targetElem: any = elem.parentElement!.parentElement!
                $vmaCalcGrid.updateColumn(
                  'showBackColumns',
                  targetElem.attributes.row.value,
                  targetElem.attributes.col.value,
                )
              },
            },
            h(IconComponent, {
              name: 'ellipsis-h',
              size: $vmaCalcGrid.props.size,
              translateY: getHideCaretTranslateY(
                $vmaCalcGrid.props.size!,
                'down',
              ),
              scaleX: 0.7,
              scaleY: 0.7,
            }),
          ),
        ]
      }
      if (props.cat === 'grid-corner') {
        return [
          h(
            'div',
            { class: ['cell', `${props.type}`] },
            h('div', { class: ['corner'] }),
          ),
        ]
      }
      return h(
        'div',
        {
          class: ['cell', `${props.type}`],
          style: {
            display: 'flex',
            justifyContent:
              $vmaCalcGrid.props.alignH === 'left'
                ? 'flex-start'
                : $vmaCalcGrid.props.alignH === 'right'
                ? 'flex-end'
                : 'center',
            alignItems:
              $vmaCalcGrid.props.alignV === 'top'
                ? 'flex-start'
                : $vmaCalcGrid.props.alignV === 'bottom'
                ? 'flex-end'
                : 'center',
          },
          onMouseup: () => {
            $vmaCalcGrid.reactiveData.currentCellEditorActive = false
            $vmaCalcGrid.reactiveData.currentCell =
              currentSheetData[props.r!][props.c! - 1]
            $vmaCalcGrid.reactiveData.currentCellEditorContent =
              currentSheetData[props.r!][props.c! - 1].v
          },
          onDblclick: () => {
            $vmaCalcGrid.reactiveData.currentCellEditorActive = true
            nextTick(() => {
              refCurrentCellEditor.value.$el
                .querySelectorAll(`textarea`)
                .forEach((elem: HTMLTextAreaElement) => {
                  elem.focus()
                })
            })
          },
        },
        renderCellContent(),
      )
    }

    const renderVN = () =>
      h(
        props.cat === 'normal' || props.cat === 'row-indicator' ? 'td' : 'th',
        {
          class: [
            props.cat,
            `${props.type}`,
            {
              'cell-active':
                props.cat === 'normal' &&
                $vmaCalcGrid.reactiveData.currentCell &&
                $vmaCalcGrid.reactiveData.currentCell.r !== undefined &&
                $vmaCalcGrid.reactiveData.currentCell.c !== undefined &&
                $vmaCalcGrid.reactiveData.currentCell.r === props.r &&
                $vmaCalcGrid.reactiveData.currentCell.c === props.c! - 1,
              'column-indicator-active':
                props.cat === 'column-indicator' &&
                $vmaCalcGrid.reactiveData.currentCell &&
                $vmaCalcGrid.reactiveData.currentCell.r !== undefined &&
                $vmaCalcGrid.reactiveData.currentCell.c !== undefined &&
                $vmaCalcGrid.reactiveData.currentCell.c === props.c! - 1,
              'row-indicator-active':
                props.cat === 'row-indicator' &&
                $vmaCalcGrid.reactiveData.currentCell &&
                $vmaCalcGrid.reactiveData.currentCell.r !== undefined &&
                $vmaCalcGrid.reactiveData.currentCell.c !== undefined &&
                $vmaCalcGrid.reactiveData.currentCell.r === props.r,
            },
          ],
          style: {
            overflow: 'hidden',
          },
        },
        renderCell(),
      )

    $vmaCalcGridCell.renderVN = renderVN

    provide('$vmaCalcGridCell', $vmaCalcGridCell)

    return $vmaCalcGridCell
  },
  render() {
    return this.renderVN()
  },
})
