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
  ref,
  resolveComponent,
  useCssModule,
  useCssVars,
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
  getCurrentAreaHeight,
  getCurrentAreaWidth,
  getHideCaretTranslateY,
  getRenderHeight,
  getRenderWidth,
  getXSpaceFromColumnWidths,
  getYSpaceFromRowHeights,
} from './utils/utils'
import { debounce } from './utils/debounce/debounce'

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
    rs: {
      type: Number,
      default: 1,
    },
    cs: {
      type: Number,
      default: 1,
    },
  },
  setup(props, context) {
    // const { slots, emit } = context

    const $vmaCalcGrid = inject('$vmaCalcGrid', {} as VmaGridConstructor)

    const IconComponent = resolveComponent('vma-grid-icon') as ComponentOptions

    const {
      refGridHeader,
      refGridBodyTable,
      refGridLeftFixedBody,
      refRowResizeBar,
      refColumnResizeBar,
      refCurrentCellEditor,
    } = $vmaCalcGrid.getRefs()

    const { currentSheetData } = $vmaCalcGrid.reactiveData

    useCssVars(() => ({
      cellBgType:
        currentSheetData[props.r!][props.c! - 1] &&
        currentSheetData[props.r!][props.c! - 1].bgt
          ? currentSheetData[props.r!][props.c! - 1].bgt!
          : '0',
      cellBgCustom:
        currentSheetData[props.r!][props.c! - 1] &&
        currentSheetData[props.r!][props.c! - 1].bg
          ? currentSheetData[props.r!][props.c! - 1].bg
          : '',
    }))

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

    const mousemoveHandler = (event: MouseEvent) => {
      const eventTargetNode: any = DomTools.getEventTargetNode(
        event,
        refGridBodyTable,
        `normal`,
        (target: any) =>
          target.attributes.hasOwnProperty('row') &&
          target.attributes.hasOwnProperty('col'),
      )
      if (eventTargetNode && eventTargetNode.flag) {
        const targetElem: any = eventTargetNode.targetElem
        // 3、move时赋值end
        $vmaCalcGrid.reactiveData.currentArea.end = {
          r: Number(targetElem.attributes.row.value),
          c: Number(targetElem.attributes.col.value) - 1,
        }
        const startColIndex =
          $vmaCalcGrid.reactiveData.currentArea.start.c >
          $vmaCalcGrid.reactiveData.currentArea.end.c
            ? $vmaCalcGrid.reactiveData.currentArea.end.c
            : $vmaCalcGrid.reactiveData.currentArea.start.c
        const endColIndex =
          $vmaCalcGrid.reactiveData.currentArea.end.c <
          $vmaCalcGrid.reactiveData.currentArea.start.c
            ? $vmaCalcGrid.reactiveData.currentArea.start.c
            : $vmaCalcGrid.reactiveData.currentArea.end.c
        const startRowIndex =
          $vmaCalcGrid.reactiveData.currentArea.start.r >
          $vmaCalcGrid.reactiveData.currentArea.end.r
            ? $vmaCalcGrid.reactiveData.currentArea.end.r
            : $vmaCalcGrid.reactiveData.currentArea.start.r
        const endRowIndex =
          $vmaCalcGrid.reactiveData.currentArea.end.r <
          $vmaCalcGrid.reactiveData.currentArea.start.r
            ? $vmaCalcGrid.reactiveData.currentArea.start.r
            : $vmaCalcGrid.reactiveData.currentArea.end.r

        const leftSpaceWidth = getXSpaceFromColumnWidths(
          $vmaCalcGrid.reactiveData.startColIndex,
          rcw.value,
          $vmaCalcGrid.reactiveData.gridColumnsWidthChanged,
          $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged,
        )

        const topSpaceHeight = getYSpaceFromRowHeights(
          $vmaCalcGrid.reactiveData.startIndex,
          rrh.value,
          $vmaCalcGrid.reactiveData.gridRowsHeightChanged,
          $vmaCalcGrid.reactiveData.gridRowsVisibleChanged,
        )
        nextTick(() => {
          refGridBodyTable.value
            .querySelectorAll(
              `td[row="${startRowIndex}"][col="${startColIndex + 1}"]`,
            )
            .forEach((cellElem: any) => {
              const borderMarginLeft = `${
                leftSpaceWidth + cellElem.offsetLeft - 1
              }px`
              const borderMarginTop = `${
                topSpaceHeight + cellElem.offsetTop - 1
              }px`
              $vmaCalcGrid.reactiveData.currentAreaBorderStyle.transform = `translateX(${borderMarginLeft}) translateY(${borderMarginTop})`
              const w = getCurrentAreaWidth(
                startColIndex,
                endColIndex,
                rcw.value,
                $vmaCalcGrid.reactiveData.gridColumnsWidthChanged,
                $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged,
              )
              const h = getCurrentAreaHeight(
                startRowIndex,
                endRowIndex,
                rrh.value,
                $vmaCalcGrid.reactiveData.gridRowsHeightChanged,
                $vmaCalcGrid.reactiveData.gridRowsVisibleChanged,
              )
              $vmaCalcGrid.reactiveData.currentAreaBorderStyle.height = `${h}px`
              $vmaCalcGrid.reactiveData.currentAreaBorderStyle.width = `${w}px`
            })

          // 为cell加上cell-active效果
          // 先清除所有的已有cell-active效果
          refGridBodyTable.value
            .querySelectorAll('.cell-active')
            .forEach((elem, index) => {
              elem.classList.remove('cell-active')
            })
          // 当前范围内的cell，加上cell-active效果
          for (let i = startRowIndex; i <= endRowIndex; i++) {
            for (let j = startColIndex; j <= endColIndex; j++) {
              refGridBodyTable.value
                .querySelectorAll(`td[row="${i}"][col="${j + 1}"]`)
                .forEach((cellElem: any) => {
                  cellElem.classList.add('cell-active')
                })
            }
          }
          // // 为cell加上border bottom效果
          // // 先清除所有的已有bdb效果
          // refGridBodyTable.value
          //     .querySelectorAll('.cell-bdb')
          //     .forEach((elem, index) => {
          //       elem.classList.remove('cell-bdb')
          //     })
          // // 当前范围内的cell，加上cell-active效果
          // for (let i = startRowIndex; i <= endRowIndex; i++) {
          //   for (let j = startColIndex; j <= endColIndex; j++) {
          //     refGridBodyTable.value
          //         .querySelectorAll(`td[row="${i}"][col="${j + 1}"]`)
          //         .forEach((cellElem: any) => {
          //           cellElem.classList.add('cell-bdb')
          //         })
          //   }
          // }
        })
      }
    }

    const resizeCurrentSelectArea = (event: MouseEvent) => {
      const domMousemove = document.onmousemove
      const domMouseup = document.onmouseup

      const updateEvent = (event: MouseEvent) => {
        event.stopPropagation()
        event.preventDefault()
        mousemoveHandler(event)
      }

      document.onmousemove = updateEvent

      document.onmouseup = (event: MouseEvent) => {
        document.onmousemove = domMousemove
        document.onmouseup = domMouseup
        const eventTargetNode: any = DomTools.getEventTargetNode(
          event,
          refGridBodyTable,
          `normal`,
          (target: any) =>
            target.attributes.hasOwnProperty('row') &&
            target.attributes.hasOwnProperty('col'),
        )
        if (eventTargetNode && eventTargetNode.flag) {
          const targetElem: any = eventTargetNode.targetElem
          $vmaCalcGrid.reactiveData.currentArea.end = {
            r: Number(targetElem.attributes.row.value),
            c: Number(targetElem.attributes.col.value) - 1,
          }
          const startColIndex =
            $vmaCalcGrid.reactiveData.currentArea.start.c >
            $vmaCalcGrid.reactiveData.currentArea.end.c
              ? $vmaCalcGrid.reactiveData.currentArea.end.c
              : $vmaCalcGrid.reactiveData.currentArea.start.c
          const endColIndex =
            $vmaCalcGrid.reactiveData.currentArea.end.c <
            $vmaCalcGrid.reactiveData.currentArea.start.c
              ? $vmaCalcGrid.reactiveData.currentArea.start.c
              : $vmaCalcGrid.reactiveData.currentArea.end.c
          const startRowIndex =
            $vmaCalcGrid.reactiveData.currentArea.start.r >
            $vmaCalcGrid.reactiveData.currentArea.end.r
              ? $vmaCalcGrid.reactiveData.currentArea.end.r
              : $vmaCalcGrid.reactiveData.currentArea.start.r
          const endRowIndex =
            $vmaCalcGrid.reactiveData.currentArea.end.r <
            $vmaCalcGrid.reactiveData.currentArea.start.r
              ? $vmaCalcGrid.reactiveData.currentArea.start.r
              : $vmaCalcGrid.reactiveData.currentArea.end.r

          const leftSpaceWidth = getXSpaceFromColumnWidths(
            $vmaCalcGrid.reactiveData.startColIndex,
            rcw.value,
            $vmaCalcGrid.reactiveData.gridColumnsWidthChanged,
            $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged,
          )

          const topSpaceHeight = getYSpaceFromRowHeights(
            $vmaCalcGrid.reactiveData.startIndex,
            rrh.value,
            $vmaCalcGrid.reactiveData.gridRowsHeightChanged,
            $vmaCalcGrid.reactiveData.gridRowsVisibleChanged,
          )
          nextTick(() => {
            refGridBodyTable.value
              .querySelectorAll(
                `td[row="${startRowIndex}"][col="${startColIndex + 1}"]`,
              )
              .forEach((cellElem: any) => {
                const borderMarginLeft = `${
                  leftSpaceWidth + cellElem.offsetLeft - 1
                }px`
                const borderMarginTop = `${
                  topSpaceHeight + cellElem.offsetTop - 1
                }px`
                $vmaCalcGrid.reactiveData.currentAreaBorderStyle.transform = `translateX(${borderMarginLeft}) translateY(${borderMarginTop})`
                const w = getCurrentAreaWidth(
                  startColIndex,
                  endColIndex,
                  rcw.value,
                  $vmaCalcGrid.reactiveData.gridColumnsWidthChanged,
                  $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged,
                )
                const h = getCurrentAreaHeight(
                  startRowIndex,
                  endRowIndex,
                  rrh.value,
                  $vmaCalcGrid.reactiveData.gridRowsHeightChanged,
                  $vmaCalcGrid.reactiveData.gridRowsVisibleChanged,
                )
                $vmaCalcGrid.reactiveData.currentAreaBorderStyle.height = `${h}px`
                $vmaCalcGrid.reactiveData.currentAreaBorderStyle.width = `${w}px`
              })
            // 为cell加上cell-active效果
            // 先清除所有的已有cell-active效果
            refGridBodyTable.value
              .querySelectorAll('.cell-active')
              .forEach((elem, index) => {
                elem.classList.remove('cell-active')
              })
            // 当前范围内的cell，加上cell-active效果
            for (let i = startRowIndex; i <= endRowIndex; i++) {
              for (let j = startColIndex; j <= endColIndex; j++) {
                refGridBodyTable.value
                  .querySelectorAll(`td[row="${i}"][col="${j + 1}"]`)
                  .forEach((cellElem: any) => {
                    cellElem.classList.add('cell-active')
                  })
              }
            }
            // // 为cell加上border bottom效果
            // // 先清除所有的已有bdb效果
            // refGridBodyTable.value
            //     .querySelectorAll('.cell-bdb')
            //     .forEach((elem, index) => {
            //       elem.classList.remove('cell-bdb')
            //     })
            // // 当前范围内的cell，加上cell-active效果
            // for (let i = startRowIndex; i <= endRowIndex; i++) {
            //   for (let j = startColIndex; j <= endColIndex; j++) {
            //     refGridBodyTable.value
            //         .querySelectorAll(`td[row="${i}"][col="${j + 1}"]`)
            //         .forEach((cellElem: any) => {
            //           cellElem.classList.add('cell-bdb')
            //         })
            //   }
            // }
          })
        }
      }
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
                display:
                  $vmaCalcGrid.reactiveData.gridRowsVisibleChanged &&
                  Object.keys($vmaCalcGrid.reactiveData.gridRowsVisibleChanged)
                    .length > 0 &&
                  $vmaCalcGrid.reactiveData.gridRowsVisibleChanged.hasOwnProperty(
                    `${props.r! - 1}`,
                  )
                    ? 'block'
                    : 'none',
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
                display:
                  $vmaCalcGrid.reactiveData.gridRowsVisibleChanged &&
                  Object.keys($vmaCalcGrid.reactiveData.gridRowsVisibleChanged)
                    .length > 0 &&
                  $vmaCalcGrid.reactiveData.gridRowsVisibleChanged.hasOwnProperty(
                    `${props.r! + 1}`,
                  )
                    ? 'block'
                    : 'none',
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
                display:
                  $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged &&
                  Object.keys(
                    $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged,
                  ).length > 0 &&
                  $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged.hasOwnProperty(
                    `${props.c! - 1 - 1}`,
                  )
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
                display:
                  $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged &&
                  Object.keys(
                    $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged,
                  ).length > 0 &&
                  $vmaCalcGrid.reactiveData.gridColumnsVisibleChanged.hasOwnProperty(
                    `${props.c!}`,
                  )
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

      const textDecorations = []
      if (currentSheetData[props.r!][props.c! - 1].cl) {
        textDecorations.push('line-through')
      }
      if (currentSheetData[props.r!][props.c! - 1].ul) {
        textDecorations.push('underline')
      }
      if (currentSheetData[props.r!][props.c! - 1].ol) {
        textDecorations.push('overline')
      }

      return h(
        'div',
        {
          class: ['cell', `${props.type}`],
          style: {
            display: 'flex',
            justifyContent:
              currentSheetData[props.r!][props.c! - 1] &&
              currentSheetData[props.r!][props.c! - 1].ah
                ? currentSheetData[props.r!][props.c! - 1].ah === 'left'
                  ? 'flex-start'
                  : currentSheetData[props.r!][props.c! - 1].ah === 'right'
                  ? 'flex-end'
                  : 'center'
                : $vmaCalcGrid.props.alignH === 'left'
                ? 'flex-start'
                : $vmaCalcGrid.props.alignH === 'right'
                ? 'flex-end'
                : 'center',
            alignItems:
              currentSheetData[props.r!][props.c! - 1] &&
              currentSheetData[props.r!][props.c! - 1].av
                ? currentSheetData[props.r!][props.c! - 1].av === 'top'
                  ? 'flex-start'
                  : currentSheetData[props.r!][props.c! - 1].av === 'bottom'
                  ? 'flex-end'
                  : 'center'
                : $vmaCalcGrid.props.alignV === 'top'
                ? 'flex-start'
                : $vmaCalcGrid.props.alignV === 'bottom'
                ? 'flex-end'
                : 'center',
            fontSize: currentSheetData[props.r!][props.c! - 1].fs
              ? `${currentSheetData[props.r!][props.c! - 1].fs}px`
              : null,
            fontFamily: currentSheetData[props.r!][props.c! - 1].ff
              ? `${currentSheetData[props.r!][props.c! - 1].ff}`
              : null,
            fontStyle: currentSheetData[props.r!][props.c! - 1].it
              ? 'italic'
              : null,
            fontWeight: currentSheetData[props.r!][props.c! - 1].bl
              ? 'bold'
              : null,
            textDecoration:
              textDecorations.length > 0 ? textDecorations.join(' ') : null,
            color: currentSheetData[props.r!][props.c! - 1].fc,
          },
          onMouseup: () => {
            $vmaCalcGrid.reactiveData.currentAreaStatus = false
          },
          onMousedown: (event: MouseEvent) => {
            $vmaCalcGrid.reactiveData.currentAreaStatus = true
            $vmaCalcGrid.reactiveData.currentCellEditorActive = false
            $vmaCalcGrid.reactiveData.currentCell =
              currentSheetData[props.r!][props.c! - 1]
            $vmaCalcGrid.reactiveData.currentCellEditorContent =
              currentSheetData[props.r!][props.c! - 1].v
            if (
              $vmaCalcGrid.reactiveData.currentArea &&
              Object.keys($vmaCalcGrid.reactiveData.currentArea).length > 1 &&
              event.button === 2
            ) {
              const eventTargetNode: any = DomTools.getEventTargetNode(
                event,
                refGridBodyTable,
                `normal`,
                (target: any) =>
                  target.attributes.hasOwnProperty('row') &&
                  target.attributes.hasOwnProperty('col'),
              )
              if (eventTargetNode && eventTargetNode.flag) {
                const targetElem: any = eventTargetNode.targetElem
                const r = targetElem.attributes.row.value
                const c = targetElem.attributes.col.value
                const startColIndex =
                  $vmaCalcGrid.reactiveData.currentArea.start.c >
                  $vmaCalcGrid.reactiveData.currentArea.end.c
                    ? $vmaCalcGrid.reactiveData.currentArea.end.c
                    : $vmaCalcGrid.reactiveData.currentArea.start.c
                const endColIndex =
                  $vmaCalcGrid.reactiveData.currentArea.end.c <
                  $vmaCalcGrid.reactiveData.currentArea.start.c
                    ? $vmaCalcGrid.reactiveData.currentArea.start.c
                    : $vmaCalcGrid.reactiveData.currentArea.end.c
                const startRowIndex =
                  $vmaCalcGrid.reactiveData.currentArea.start.r >
                  $vmaCalcGrid.reactiveData.currentArea.end.r
                    ? $vmaCalcGrid.reactiveData.currentArea.end.r
                    : $vmaCalcGrid.reactiveData.currentArea.start.r
                const endRowIndex =
                  $vmaCalcGrid.reactiveData.currentArea.end.r <
                  $vmaCalcGrid.reactiveData.currentArea.start.r
                    ? $vmaCalcGrid.reactiveData.currentArea.start.r
                    : $vmaCalcGrid.reactiveData.currentArea.end.r
                if (
                  Number(r) >= startRowIndex &&
                  Number(r) <= endRowIndex &&
                  Number(c - 1) >= startColIndex &&
                  Number(c - 1) <= endColIndex
                ) {
                  // 如果右键事件发生在table上的选定区域内时
                  // 不再进行选择区域的选择变更 do nothing
                } else {
                  // 如果右键事件发生在table上的选定区域外时
                  // 1、清理currentArea
                  $vmaCalcGrid.reactiveData.currentArea = {}
                  $vmaCalcGrid.reactiveData.currentArea.start = {
                    r: Number(props.r),
                    c: Number(props.c!) - 1,
                  }
                  nextTick(() => {
                    resizeCurrentSelectArea(event)
                  })
                }
              }
            } else {
              $vmaCalcGrid.reactiveData.currentArea = {}
              $vmaCalcGrid.reactiveData.currentArea.start = {
                r: Number(props.r),
                c: Number(props.c!) - 1,
              }
              nextTick(() => {
                resizeCurrentSelectArea(event)
              })
            }
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
          rowspan: props.rs,
          colspan: props.cs,
          class: [
            props.cat,
            `${props.type}`,
            `cell-bg-${
              currentSheetData[props.r!][props.c! - 1] &&
              currentSheetData[props.r!][props.c! - 1].bgt
                ? currentSheetData[props.r!][props.c! - 1].bgt
                : '0'
            }`,
            {
              'column-indicator-active':
                props.cat === 'column-indicator' &&
                $vmaCalcGrid.reactiveData.currentArea &&
                Object.keys($vmaCalcGrid.reactiveData.currentArea).length > 1 &&
                ((props.c! - 1 >=
                  $vmaCalcGrid.reactiveData.currentArea.start.c &&
                  props.c! - 1 <=
                    $vmaCalcGrid.reactiveData.currentArea.end.c) ||
                  (props.c! - 1 >=
                    $vmaCalcGrid.reactiveData.currentArea.end.c &&
                    props.c! - 1 <=
                      $vmaCalcGrid.reactiveData.currentArea.start.c)),
              'row-indicator-active':
                props.cat === 'row-indicator' &&
                $vmaCalcGrid.reactiveData.currentArea &&
                Object.keys($vmaCalcGrid.reactiveData.currentArea).length > 1 &&
                ((props.r! >= $vmaCalcGrid.reactiveData.currentArea.start.r &&
                  props.r! <= $vmaCalcGrid.reactiveData.currentArea.end.r) ||
                  (props.r! >= $vmaCalcGrid.reactiveData.currentArea.end.r &&
                    props.r! <= $vmaCalcGrid.reactiveData.currentArea.start.r)),
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
