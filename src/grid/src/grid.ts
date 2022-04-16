import {
  ComponentOptions,
  createCommentVNode,
  defineComponent,
  h,
  provide,
  reactive,
  ref,
  Ref,
  resolveComponent,
  nextTick,
  onMounted,
  watch,
  ComponentPublicInstance,
  computed,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

import { isNumeric } from '../../utils/validate/number'
import { Guid } from '../../utils/guid'
import { FormulaParser, DepParser } from '../../formula'
import { Cell } from './helper/Cell'
import props from './props/grid'
import { createResizeEvent, ResizeObserver } from '../../utils/resize'
import {
  VmaGridConstructor,
  VmaGridEmits,
  VmaGridMethods,
  VmaGridPrivateMethods,
  VmaGridReactiveData,
  VmaGridRefs,
} from '../../../types/grid'
import { Column } from './helper/Column'
import { Row } from './helper/Row'
import {
  calcVertexes,
  filterVertexes,
  getRenderHeight,
  getRenderWidth,
  getRowIndicatorRenderWidth,
  getHeight,
  getIndexFromColumnWidths,
  getIndexFromRowHeights,
  getWidth,
  getXSpaceFromColumnWidths,
  getYSpaceFromRowHeights,
  getRealVisibleWidthSize,
  getRealVisibleHeightSize,
  getCurrentAreaWidth,
  getCurrentAreaHeight,
} from './utils/utils'
import { debounce } from './utils/debounce/debounce'
import GlobalEvent from './events'
import VmaGrid from '../../vma-grid'
import { DomTools } from '../../utils/doms'
import {
  VmaGridBorderPluginConstructor,
  VmaGridStylePluginConstructor,
} from '../../../plugins/types'

export default defineComponent({
  name: 'VmaGrid',
  props,
  emits: ['update:data', 'change'] as VmaGridEmits,
  setup(props, context) {
    // const { slots, emit } = context

    const GridHeaderComponent = resolveComponent(
      'vma-grid-header',
    ) as ComponentOptions
    const GridBodyComponent = resolveComponent(
      'vma-grid-body',
    ) as ComponentOptions

    const StylePluginComponent = resolveComponent(
      'vma-grid-style-plugin',
    ) as ComponentOptions

    const StyleBorderComponent = resolveComponent(
      'vma-grid-border-plugin',
    ) as ComponentOptions

    const refColumnResizeBar = ref() as Ref<HTMLDivElement>
    const refRowResizeBar = ref() as Ref<HTMLDivElement>

    const refGrid = ref() as Ref<HTMLDivElement>

    // Body
    const refGridBody = ref() as Ref<HTMLDivElement>
    const refGridLeftFixedBody = ref() as Ref<HTMLDivElement>
    const refGridLeftFixedBodyScrollWrapper = ref() as Ref<HTMLDivElement>
    const refGridLeftFixedBodyY = ref() as Ref<HTMLDivElement>
    const refGridLeftFixedBodyX = ref() as Ref<HTMLDivElement>
    const refGridBodyY = ref() as Ref<HTMLDivElement>
    const refGridBodyX = ref() as Ref<HTMLDivElement>
    const refGridTopFixedBody = ref() as Ref<HTMLDivElement>
    const refGridBottomFixedBody = ref() as Ref<HTMLDivElement>
    const refGridLeftTopFixedBody = ref() as Ref<HTMLDivElement>

    const refGridBodyTable = ref() as Ref<HTMLTableElement>
    const refGridLeftFixedBodyTable = ref() as Ref<HTMLTableElement>
    const refGridTopFixedBodyTable = ref() as Ref<HTMLTableElement>
    const refGridBottomFixedBodyTable = ref() as Ref<HTMLTableElement>
    const refGridLeftTopFixedBodyTable = ref() as Ref<HTMLTableElement>

    const refGridBodyColgroup = ref() as Ref<HTMLTableColElement>
    const refGridLeftFixedBodyColgroup = ref() as Ref<HTMLTableColElement>
    const refGridTopFixedBodyColgroup = ref() as Ref<HTMLTableColElement>
    const refGridBottomFixedBodyColgroup = ref() as Ref<HTMLTableColElement>
    const refGridLeftTopFixedBodyColgroup = ref() as Ref<HTMLTableColElement>

    // Header
    const refGridHeader = ref() as Ref<HTMLDivElement>
    const refGridLeftFixedHeader = ref() as Ref<HTMLDivElement>
    const refGridLeftFixedHeaderX = ref() as Ref<HTMLDivElement>

    const refGridHeaderTable = ref() as Ref<HTMLTableElement>
    const refGridLeftFixedHeaderTable = ref() as Ref<HTMLTableElement>

    const refGridHeaderColgroup = ref() as Ref<HTMLTableColElement>
    const refGridLeftFixedHeaderColgroup = ref() as Ref<HTMLTableColElement>

    const refCurrentCellEditor = ref() as Ref<ComponentPublicInstance>

    const refCurrentCellBorderTop = ref() as Ref<HTMLDivElement>
    const refCurrentCellBorderRight = ref() as Ref<HTMLDivElement>
    const refCurrentCellBorderBottom = ref() as Ref<HTMLDivElement>
    const refCurrentCellBorderLeft = ref() as Ref<HTMLDivElement>
    const refCurrentCellBorderCorner = ref() as Ref<HTMLDivElement>

    const refCurrentAreaBorderTop = ref() as Ref<HTMLDivElement>
    const refCurrentAreaBorderRight = ref() as Ref<HTMLDivElement>
    const refCurrentAreaBorderBottom = ref() as Ref<HTMLDivElement>
    const refCurrentAreaBorderLeft = ref() as Ref<HTMLDivElement>
    const refCurrentAreaBorderCorner = ref() as Ref<HTMLDivElement>

    const refGridCtxMenu = ref() as Ref<HTMLDivElement>

    const refColorPicker = ref() as Ref<HTMLDivElement>

    const refStylePlugin = ref() as Ref<VmaGridStylePluginConstructor>
    const refBorderPlugin = ref() as Ref<VmaGridBorderPluginConstructor>

    const gridRefs: VmaGridRefs = {
      refColumnResizeBar,
      refRowResizeBar,

      // Grid
      refGrid,

      // Body
      // |-------------------------|-------------------------------------------|
      // |-----Left-Top-Fixed------|----------------Top-Fixed------------------|
      // |-----Left-Top-Fixed------|------------<--Scrollable-->---------------|
      // |-------------------------|-------------------------------------------|
      // |⇑------Left-Fixed--------|⇑-----------<--Scrollable-->--------------⇑|
      // |-------Left-Fixed--------|------------<--Scrollable-->---------------|
      // |⇓------Left-Fixed--------|⇓-----------<--Scrollable-->--------------⇓|
      // |-------------------------|-------------------------------------------|

      refGridBody, // wrapper div
      refGridLeftFixedBody, // wrapper div
      refGridLeftFixedBodyScrollWrapper, // scroll wrapper div
      refGridLeftFixedBodyX, // X div for hidden overflow
      refGridLeftFixedBodyY, // Y div for hidden overflow
      refGridBodyX, // X div for hidden overflow
      refGridBodyY, // Y div for hidden overflow
      refGridTopFixedBody, // wrapper div
      refGridBottomFixedBody, // wrapper div
      refGridLeftTopFixedBody, // wrapper div

      refGridBodyTable, // inner html table
      refGridLeftFixedBodyTable, // inner html table
      refGridTopFixedBodyTable, // inner html table
      refGridBottomFixedBodyTable, // inner html table
      refGridLeftTopFixedBodyTable, // inner html table

      refGridBodyColgroup,
      refGridLeftFixedBodyColgroup,
      refGridTopFixedBodyColgroup,
      refGridBottomFixedBodyColgroup,
      refGridLeftTopFixedBodyColgroup,

      // Header
      // |-----Left-Fixed--------|------------<--Scrollable-->---------------|
      refGridHeader, // wrapper div
      refGridLeftFixedHeader, // wrapper div
      refGridLeftFixedHeaderX, // wrapper div
      refGridHeaderTable, // inner html table
      refGridLeftFixedHeaderTable, // inner html table
      refGridHeaderColgroup, // table colgroup
      refGridLeftFixedHeaderColgroup, // table colgroup

      refCurrentCellEditor,

      refCurrentCellBorderTop,
      refCurrentCellBorderRight,
      refCurrentCellBorderBottom,
      refCurrentCellBorderLeft,
      refCurrentCellBorderCorner,

      refCurrentAreaBorderTop,
      refCurrentAreaBorderRight,
      refCurrentAreaBorderBottom,
      refCurrentAreaBorderLeft,
      refCurrentAreaBorderCorner,

      refGridCtxMenu,

      refColorPicker,

      refStylePlugin,

      refBorderPlugin,
    }

    const gridReactiveData = reactive({
      // grid加载状态
      loading: false,

      // 所有的sheet定义
      sheets: [],
      // 当前status为1的sheet
      sheet: {},
      // 从props.data中获得的当前status为1的sheet data
      sheetData: [],
      // 从props.data中获得的当前status为1的sheet config
      sheetConfig: {
        rh: [],
        cw: [],
        rv: [],
        cv: [],
      },
      // 二维数组，承载当前sheet原始数据以及经过计算后的数据
      currentSheetData: [],
      // 列定义
      columnConfigs: [],
      // 左侧固定列定义
      columnLeftFixedConfigs: [],

      // 行定义
      rowConfigs: [],
      // 顶端固定行定义
      rowTopFixedConfigs: [],
      // 底部固定行定义
      rowBottomFixedConfigs: [],

      // colgroup定义
      headerColgroup: {},
      // 左侧固定列colgroup定义
      headerLeftFixedColgroup: {},

      // 表头HTML Table
      headerTable: {},
      headerLeftFixedTable: {},
      // 表体HTML Table
      bodyTable: [],
      // 表尾HTML Table
      footerTable: [],

      // scroll相关
      gridBodyScrollTop: 0,
      gridBodyScrollLeft: 0,
      overflowX: false,
      overflowY: false,
      scrollbarWidth: 0,
      scrollbarHeight: 0,

      // grid div 宽度
      gridWidth: 0,
      // 表格 table 宽度
      tableWidth: 0,
      // grid div 高度
      gridHeight: 0,

      gridHeaderWidth: 0,
      gridLeftFixedHeaderWidth: 0,
      gridHeaderTableWidth: 0,

      gridHeaderHeight: 0,
      gridLeftFixedHeaderHeight: 0,
      gridHeaderTableHeight: 0,

      gridBodyHeight: 0,
      gridBodyTableHeight: 0,

      gridFooterHeight: 0,

      gridLeftFixedBodyHeight: 0,
      gridLeftFixedBodyWidth: 0,

      // 列信息
      columns: {
        firstList: [],
        leftList: [],
        otherList: [],
      },

      // 行信息
      rows: {
        topList: [],
        otherList: [],
      },

      // 单元格信息
      cells: {
        errorMap: {},
        cycleMap: {},
        noCycleMap: {},
      },

      currentCell: null,
      currentCellBorderStyle: {
        transform: 'translateX(0) translateY(0)',
        // display: 'none',
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
      currentCellEditorStyle: {
        transform: 'translateX(0) translateY(0)',
        display: 'none',
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
      currentCellEditorActive: false,
      currentCellEditorContent: null,

      currentAreaBorderStyle: {
        transform: 'translateX(0) translateY(0)',
        // display: 'none',
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },

      startIndex: 0,
      endIndex: 0,

      startColIndex: 0,
      endColIndex: 0,

      lastScrollLeft: 0,
      lastScrollTop: 0,
      lastScrollTime: 0,

      gridRowsHeightChanged: {},
      gridColumnsWidthChanged: {},

      gridRowsVisibleChanged: {},
      gridColumnsVisibleChanged: {},

      ctxMenuStore: {
        selected: null,
        visible: false,
        showChild: false,
        selectChild: null,
        list: [],
        style: null,
      },

      currentAreaStatus: false,
    } as unknown as VmaGridReactiveData)

    let resizeObserver: ResizeObserver

    const $vmaCalcGrid = {
      uId: Guid.create().toString(),
      props,
      context,
      reactiveData: gridReactiveData,
      getRefs: () => gridRefs,
    } as unknown as VmaGridConstructor & VmaGridMethods & VmaGridPrivateMethods

    const rcw = computed(() =>
      getRenderWidth(props.gridColumnWidth, props.size),
    )

    const rrh = computed(() => getRenderHeight(props.gridRowHeight, props.size))

    const rowIndicatorElemWidth = computed(
      () =>
        Math.max(
          getRowIndicatorRenderWidth(props.size) +
            gridReactiveData.endIndex.toString().length *
              getRowIndicatorRenderWidth(props.size),
          40,
        ), // 行号列最小宽度40px
    )

    // 普通 cell 0
    // 普通 cell + border bottom 1
    // 普通 cell + border right 2
    // 普通 cell + border bottom + border right 3
    // 带背景的普通 cell 8
    // 带背景的普通 cell + border bottom 9
    // 带背景的普通 cell + border right 10
    // 带背景的普通 cell + border bottom + border right 11
    // 以上状态 再加上 cell-active
    const calcCellBgType = (
      hasBg: boolean,
      hasBdb: boolean,
      hasBdr: boolean,
    ): string => {
      if (hasBg) {
        // 带背景的
        // 未选中状态的
        if (hasBdb && hasBdr) {
          // border bottom + border right
          return '11'
        }
        if (hasBdr) {
          // border right
          return '10'
        }
        if (hasBdb) {
          // border bottom
          return '9'
        }
        // none
        return '8'
      }
      // 不带背景的
      // 未选中状态的
      if (hasBdb && hasBdr) {
        // border bottom + border right
        return '3'
      }
      if (hasBdr) {
        // border right
        return '2'
      }
      if (hasBdb) {
        // border bottom
        return '1'
      }
      // none
      return '0'
    }

    const updateStyle = () => {
      const gridDivClientWidth = refGrid.value.clientWidth
      const gridDivClientHeight = refGrid.value.clientHeight

      const bodyClientWidth = refGridBody.value.clientWidth
      const bodyClientHeight = refGridBody.value.clientHeight
      const bodyOffsetWidth = refGridBody.value.offsetWidth
      const bodyOffsetHeight = refGridBody.value.offsetHeight

      const { firstList, leftList } = gridReactiveData.columns

      gridReactiveData.gridWidth = gridDivClientWidth
      gridReactiveData.gridHeight = gridDivClientHeight
      gridReactiveData.gridHeaderHeight = refGridHeaderTable.value.clientHeight
      gridReactiveData.gridHeaderTableHeight = gridReactiveData.gridHeaderHeight
      gridReactiveData.gridHeaderTableWidth = gridReactiveData.tableWidth
      gridReactiveData.gridHeaderWidth = gridReactiveData.gridWidth
      gridReactiveData.gridLeftFixedHeaderWidth = firstList
        .concat(leftList)
        .reduce(
          (previous: any, column: any) =>
            previous +
            (column.visible
              ? typeof column.renderWidth === 'string'
                ? rcw.value
                : column.renderWidth
              : 0),
          0,
        )
      gridReactiveData.gridBodyHeight =
        gridReactiveData.gridHeight - gridReactiveData.gridHeaderHeight
      gridReactiveData.overflowX = bodyOffsetHeight > bodyClientHeight
      gridReactiveData.overflowY = bodyOffsetWidth > bodyClientWidth
      gridReactiveData.scrollbarWidth = Math.max(
        bodyOffsetWidth - bodyClientWidth,
        0,
      )
      gridReactiveData.scrollbarHeight = Math.max(
        bodyOffsetHeight - bodyClientHeight,
        0,
      )
      const { columnConfigs, scrollbarWidth, tableWidth } = gridReactiveData
      if (
        refGridHeaderColgroup.value.children &&
        refGridHeaderColgroup.value.children.length
      ) {
        Array.from(refGridHeaderColgroup.value.children).forEach(
          (colgroupElem: any, index: number) => {
            const idx = colgroupElem.attributes.idx.value
            if (idx === 0) {
              colgroupElem.style.width = `${rowIndicatorElemWidth.value}px`
            } else if (idx < columnConfigs.length) {
              colgroupElem.style.width = `${
                columnConfigs[idx].visible
                  ? typeof columnConfigs[idx].renderWidth === 'string'
                    ? rcw.value
                    : columnConfigs[idx].renderWidth
                  : 0
              }px`
            } else {
              colgroupElem.style.width = `${scrollbarWidth}px`
            }
          },
        )
        Array.from(refGridBodyColgroup.value.children).forEach(
          (colgroupElem: any, index: number) => {
            const idx = colgroupElem.attributes.idx.value
            if (idx === 0) {
              colgroupElem.style.width = `${rowIndicatorElemWidth.value}px`
            } else if (idx < columnConfigs.length) {
              colgroupElem.style.width = `${
                columnConfigs[idx].visible
                  ? typeof columnConfigs[idx].renderWidth === 'string'
                    ? rcw.value
                    : columnConfigs[idx].renderWidth
                  : 0
              }px`
            }
          },
        )
      }
      if (
        refGridLeftFixedHeaderColgroup.value.children &&
        refGridLeftFixedHeaderColgroup.value.children.length
      ) {
        Array.from(refGridLeftFixedHeaderColgroup.value.children).forEach(
          (colgroupElem: any, index: number) => {
            const idx = colgroupElem.attributes.idx.value
            if (idx === 0) {
              colgroupElem.style.width = `${rowIndicatorElemWidth.value}px`
            } else if (idx < columnConfigs.length) {
              colgroupElem.style.width = `${
                columnConfigs[idx].visible
                  ? typeof columnConfigs[idx].renderWidth === 'string'
                    ? rcw.value
                    : columnConfigs[idx].renderWidth
                  : 0
              }px`
            } else {
              colgroupElem.style.width = `${scrollbarWidth}px`
            }
          },
        )
        Array.from(refGridLeftFixedBodyColgroup.value.children).forEach(
          (colgroupElem: any, index: number) => {
            const idx = colgroupElem.attributes.idx.value
            if (idx === 0) {
              colgroupElem.style.width = `${rowIndicatorElemWidth.value}px`
            } else if (idx < columnConfigs.length) {
              colgroupElem.style.width = `${
                columnConfigs[idx].visible
                  ? typeof columnConfigs[idx].renderWidth === 'string'
                    ? rcw.value
                    : columnConfigs[idx].renderWidth
                  : 0
              }px`
            }
          },
        )
      }
      refGridLeftFixedHeaderTable.value.style.width = `${
        tableWidth + scrollbarWidth
      }px`
      refGridLeftFixedBody.value.style.width = `${gridReactiveData.gridLeftFixedHeaderWidth}px`
      refGridLeftFixedBody.value.style.height = `${
        gridReactiveData.gridBodyHeight - gridReactiveData.scrollbarHeight
      }px`
      refGridLeftFixedBodyX.value.style.width = `${getWidth(
        rowIndicatorElemWidth.value,
        gridReactiveData.columnConfigs.length,
        rcw.value,
        gridReactiveData.gridColumnsWidthChanged,
        gridReactiveData.gridColumnsVisibleChanged,
      )}px`
      refGridLeftFixedHeaderX.value.style.width = `${
        getWidth(
          rowIndicatorElemWidth.value,
          gridReactiveData.columnConfigs.length,
          rcw.value,
          gridReactiveData.gridColumnsWidthChanged,
          gridReactiveData.gridColumnsVisibleChanged,
        ) + scrollbarWidth
      }px`
      refGridLeftFixedBodyY.value.style.height = `${getHeight(
        gridReactiveData.rowConfigs.length,
        rrh.value,
        gridReactiveData.gridRowsHeightChanged,
        gridReactiveData.gridRowsVisibleChanged,
      )}px`
      refGridBodyX.value.style.width = refGridLeftFixedBodyX.value.style.width
      refGridBodyY.value.style.height = refGridLeftFixedBodyY.value.style.height
      refGridLeftFixedBody.value.style.top = `${gridReactiveData.gridHeaderHeight}px`
      if (refGridBodyTable.value) {
        refGridBodyTable.value.style.width = `${gridReactiveData.tableWidth}px`
        refGridLeftFixedBodyTable.value.style.width = `${gridReactiveData.tableWidth}px`
      }
      if (refGridHeaderTable.value) {
        refGridHeaderTable.value.style.width = `${
          gridReactiveData.tableWidth + gridReactiveData.scrollbarWidth
        }px`
      }
      $vmaCalcGrid.calcCurrentCellPosition()
    }

    const calcColumnWidth = () => {
      let tableWidth = 0
      const { firstList, otherList } = gridReactiveData.columns
      // 第一列
      firstList.forEach((column: any) => {
        tableWidth += rowIndicatorElemWidth.value
        column.renderWidth = rowIndicatorElemWidth.value
      })
      // 其他列
      otherList.forEach((column: any) => {
        tableWidth += column.visible
          ? typeof column.renderWidth === 'string'
            ? rcw.value
            : column.renderWidth
          : 0
      })

      gridReactiveData.tableWidth = tableWidth

      nextTick(() => {
        updateStyle()
      })
    }

    const arrangeColumnWidth = () => {
      const firstList: any = []
      const leftList: any = []
      const otherList: any = []

      if (gridReactiveData.startColIndex !== 0) {
        firstList.push(gridReactiveData.columnConfigs[0])
      }
      for (
        let index = gridReactiveData.startColIndex;
        index <= gridReactiveData.endColIndex;
        index++
      ) {
        if (index > gridReactiveData.columnConfigs.length - 1) {
          break
        }
        const cf = gridReactiveData.columnConfigs[index]
        if (index === 0) {
          firstList.push(cf)
        } else if (cf.visible) {
          otherList.push(cf)
          if (cf.fixed === 'left') {
            leftList.push(cf)
          }
        }
      }

      Object.assign(gridReactiveData.columns, {
        firstList,
        leftList,
        otherList,
      })

      nextTick(() => {
        calcColumnWidth()
      })
    }

    const updateScrollXYSpace = () => {
      const leftSpaceWidth = getXSpaceFromColumnWidths(
        gridReactiveData.startColIndex,
        rcw.value,
        gridReactiveData.gridColumnsWidthChanged,
        gridReactiveData.gridColumnsVisibleChanged,
      )
      const marginLeft = `${leftSpaceWidth}px`
      const topSpaceHeight = getYSpaceFromRowHeights(
        gridReactiveData.startIndex,
        rrh.value,
        gridReactiveData.gridRowsHeightChanged,
        gridReactiveData.gridRowsVisibleChanged,
      )
      const marginTop = `${topSpaceHeight}px`
      if (refGridBodyTable.value) {
        refGridBodyTable.value.style.transform = `translateX(${marginLeft}) translateY(${marginTop})`
        refGridBodyTable.value.style.width = `${gridReactiveData.tableWidth}px`
        refGridLeftFixedBodyTable.value.style.transform = `translateY(${marginTop})`
        refGridLeftFixedBodyTable.value.style.width = `${gridReactiveData.tableWidth}px`
      }
      if (refGridHeaderTable.value) {
        refGridHeaderTable.value.style.transform = `translateX(${marginLeft})`
        refGridHeaderTable.value.style.width = `${
          gridReactiveData.tableWidth + gridReactiveData.scrollbarWidth
        }px`
      }
      if (
        gridReactiveData.currentArea &&
        Object.keys(gridReactiveData.currentArea).length > 1
      ) {
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
        nextTick(() => {
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
        })
      }
    }

    const calcScrollSizeX = (scrollBodyElem: HTMLDivElement): Promise<void> =>
      new Promise((resolve): void => {
        const scrollLeft = scrollBodyElem.scrollLeft
        const visibleIndex = getIndexFromColumnWidths(
          scrollLeft,
          rcw.value,
          gridReactiveData.gridColumnsWidthChanged,
          gridReactiveData.gridColumnsVisibleChanged,
        )
        const viewportWidth = refGridBody.value.clientWidth
        const visibleSize = Math.max(
          Math.ceil(viewportWidth / rcw.value),
          getRealVisibleWidthSize(
            viewportWidth,
            visibleIndex,
            rcw.value,
            gridReactiveData.gridColumnsWidthChanged,
            gridReactiveData.gridColumnsVisibleChanged,
          ),
        )

        const offsetItem = {
          startColIndex: Math.max(0, visibleIndex + 1 - 5),
          endColIndex: visibleIndex + visibleSize + 1 + 5,
        }

        const {
          startColIndex: offsetStartColIndex,
          endColIndex: offsetEndColIndex,
        } = offsetItem
        const { startColIndex, endColIndex } = gridReactiveData
        if (
          visibleIndex <= 0 ||
          visibleIndex >= offsetEndColIndex - visibleSize - 1 - 5
        ) {
          if (
            startColIndex !== offsetStartColIndex ||
            endColIndex !== offsetEndColIndex
          ) {
            gridReactiveData.startColIndex = offsetStartColIndex
            gridReactiveData.endColIndex = offsetEndColIndex
            updateScrollXYSpace()
          }
        }
        resolve()
      })

    const calcScrollSizeY = (scrollBodyElem: HTMLDivElement): Promise<void> =>
      new Promise((resolve): void => {
        const scrollTop = scrollBodyElem.scrollTop
        const visibleIndex = getIndexFromRowHeights(
          scrollTop,
          rrh.value,
          gridReactiveData.gridRowsHeightChanged,
          gridReactiveData.gridRowsVisibleChanged,
        )
        const viewportHeight =
          refGridBody.value.clientHeight || refGrid.value.clientHeight
        const visibleSize = Math.max(
          Math.ceil(viewportHeight / rrh.value),
          getRealVisibleHeightSize(
            viewportHeight,
            visibleIndex,
            rrh.value,
            gridReactiveData.gridRowsHeightChanged,
            gridReactiveData.gridRowsVisibleChanged,
          ),
        )

        const offsetItem = {
          startIndex: Math.max(0, visibleIndex + 1 - 5),
          endIndex: visibleIndex + visibleSize + 1 + 5,
        }

        const { startIndex: offsetStartIndex, endIndex: offsetEndIndex } =
          offsetItem
        const { startIndex, endIndex } = gridReactiveData
        if (
          visibleIndex <= 0 ||
          visibleIndex >= offsetEndIndex - visibleSize - 1 - 5
        ) {
          if (startIndex !== offsetStartIndex || endIndex !== offsetEndIndex) {
            gridReactiveData.startIndex = offsetStartIndex
            gridReactiveData.endIndex = offsetEndIndex
            updateScrollXYSpace()
          }
        }
        resolve()
      })

    const debounceScrollX = debounce((scrollBodyElem: HTMLDivElement) => {
      calcScrollSizeX(scrollBodyElem).then(() => {
        arrangeColumnWidth()
      })
    }, 50)

    const debounceScrollY = debounce((scrollBodyElem: HTMLDivElement) => {
      calcScrollSizeY(scrollBodyElem).then(() => {
        updateStyle()
      })
    }, 50)

    const computeScrollLoad = () =>
      nextTick().then(() => {
        calcScrollSizeX(refGridBody.value).then(() => {
          calcScrollSizeY(refGridBody.value).then(() => {
            arrangeColumnWidth()
          })
        })
      })

    const gridMethods = {
      updateColumn: (type: string, row: number, col: number) => {
        if (type === 'hideColumn') {
          gridReactiveData.columnConfigs[col].visible = false
          gridReactiveData.gridColumnsVisibleChanged[`${col - 1}`] = 0
          if (
            gridReactiveData.currentCell &&
            Object.keys(gridReactiveData.currentCell).length > 0 &&
            gridReactiveData.currentCell.c === Number(col) - 1
          ) {
            gridReactiveData.currentCell = {}
          }
          $vmaCalcGrid.recalculate(true).then(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
          })
        }
        if (type === 'showAllColumns') {
          if (Object.keys(gridReactiveData.gridColumnsVisibleChanged).length) {
            for (const k in Object.keys(
              gridReactiveData.gridColumnsVisibleChanged,
            )) {
              if (
                gridReactiveData.gridColumnsVisibleChanged.hasOwnProperty(
                  Object.keys(gridReactiveData.gridColumnsVisibleChanged)[k],
                )
              ) {
                gridReactiveData.columnConfigs[
                  parseInt(
                    Object.keys(gridReactiveData.gridColumnsVisibleChanged)[k],
                    10,
                  ) + 1
                ].visible = true
              }
            }
          }
          gridReactiveData.gridColumnsVisibleChanged = {}
          $vmaCalcGrid.recalculate(true).then(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
          })
        }
        if (type === 'showFrontColumns') {
          if (Object.keys(gridReactiveData.gridColumnsVisibleChanged).length) {
            let idx = 1
            const removeKeys: string[] = []
            while (
              gridReactiveData.gridColumnsVisibleChanged.hasOwnProperty(
                `${Number(col) - idx - 1}`,
              )
            ) {
              gridReactiveData.columnConfigs[Number(col) - idx].visible = true
              removeKeys.push(`${Number(col) - idx - 1}`)
              idx++
            }
            const gridColumnsVisibleChangedNew: Record<string, number> = {}
            Object.keys(gridReactiveData.gridColumnsVisibleChanged).map(
              (key) => {
                if (removeKeys.indexOf(key) < 0) {
                  gridColumnsVisibleChangedNew[key] =
                    gridReactiveData.gridColumnsVisibleChanged[key]
                }
                return null
              },
            )
            gridReactiveData.gridColumnsVisibleChanged =
              gridColumnsVisibleChangedNew
          }
          $vmaCalcGrid.recalculate(true).then(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
          })
        }
        if (type === 'showBackColumns') {
          if (Object.keys(gridReactiveData.gridColumnsVisibleChanged).length) {
            let idx = 1
            const removeKeys: string[] = []
            while (
              gridReactiveData.gridColumnsVisibleChanged.hasOwnProperty(
                `${Number(col) + idx - 1}`,
              )
            ) {
              gridReactiveData.columnConfigs[Number(col) + idx].visible = true
              removeKeys.push(`${Number(col) + idx - 1}`)
              idx++
            }
            const gridColumnsVisibleChangedNew: Record<string, number> = {}
            Object.keys(gridReactiveData.gridColumnsVisibleChanged).map(
              (key) => {
                if (removeKeys.indexOf(key) < 0) {
                  gridColumnsVisibleChangedNew[key] =
                    gridReactiveData.gridColumnsVisibleChanged[key]
                }
                return null
              },
            )
            gridReactiveData.gridColumnsVisibleChanged =
              gridColumnsVisibleChangedNew
          }
          $vmaCalcGrid.recalculate(true).then(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
          })
        }
        if (type === 'insertColumnBefore') {
          gridReactiveData.columnConfigs.map((item: Column) => {
            if (item.index! >= col) {
              item.index! += 1
            }
            return item
          })
          gridReactiveData.columnConfigs.splice(
            col,
            0,
            new Column(
              Number(col),
              null,
              null,
              'default',
              null,
              true,
              false,
              'center',
            ),
          )
          if (
            gridReactiveData.currentArea &&
            Object.keys(gridReactiveData.currentArea).length > 1
          ) {
            const startColIndex =
              gridReactiveData.currentArea.start.c >
              gridReactiveData.currentArea.end.c
                ? gridReactiveData.currentArea.end.c
                : gridReactiveData.currentArea.start.c
            const endColIndex =
              gridReactiveData.currentArea.end.c <
              gridReactiveData.currentArea.start.c
                ? gridReactiveData.currentArea.start.c
                : gridReactiveData.currentArea.end.c
            if (Number(col) - 1 <= startColIndex) {
              gridReactiveData.currentArea.start.c += 1
              gridReactiveData.currentArea.end.c += 1
            } else if (
              Number(col) - 1 > startColIndex &&
              Number(col) - 1 <= endColIndex
            ) {
              gridReactiveData.currentArea.end.c += 1
            }
          }
          const gridColumnsVisibleChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridColumnsVisibleChanged).map((key) => {
            if (Number(key) >= col) {
              const newKey = Number(key) + 1
              gridColumnsVisibleChangedNew[newKey] =
                gridReactiveData.gridColumnsVisibleChanged[key]
            } else {
              gridColumnsVisibleChangedNew[key] =
                gridReactiveData.gridColumnsVisibleChanged[key]
            }
            return null
          })
          gridReactiveData.gridColumnsVisibleChanged =
            gridColumnsVisibleChangedNew

          const gridColumnsWidthChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridColumnsWidthChanged).map((key) => {
            if (Number(key) >= col) {
              const newKey = Number(key) + 1
              gridColumnsWidthChangedNew[newKey] =
                gridReactiveData.gridColumnsWidthChanged[key]
            } else {
              gridColumnsWidthChangedNew[key] =
                gridReactiveData.gridColumnsWidthChanged[key]
            }
            return null
          })
          gridReactiveData.gridColumnsWidthChanged = gridColumnsWidthChangedNew

          gridReactiveData.currentSheetData.map(
            (row: Cell[], index: number) => {
              row.map((cell: Cell) => {
                if (cell.c! >= col - 1) {
                  cell.c! += 1
                }
                return null
              })
              row.splice(
                Number(col - 1),
                0,
                new Cell(
                  index,
                  Number(col) - 1,
                  null,
                  null,
                  null,
                  false,
                  null,
                  0,
                  1,
                  1,
                  null,
                  null,
                  false,
                  false,
                  false,
                  false,
                  false,
                  null,
                  '0',
                  null,
                  false,
                  false,
                  false,
                  false,
                ) as Cell & { [key: string]: string },
              )
              return null
            },
          )
          // TODO 公式调整
          $vmaCalcGrid
            .recalculate(true)
            .then(() => {
              $vmaCalcGrid.calc()
            })
            .then(() => {
              $vmaCalcGrid.calcCurrentCellPosition()
            })
        }
        if (type === 'insertColumnAfter') {
          gridReactiveData.columnConfigs.map((item: Column) => {
            if (item.index! > col) {
              item.index! += 1
            }
            return item
          })
          gridReactiveData.columnConfigs.splice(
            Number(col) + 1,
            0,
            new Column(
              Number(col) + 1,
              null,
              null,
              'default',
              null,
              true,
              false,
              'center',
            ),
          )
          if (
            gridReactiveData.currentArea &&
            Object.keys(gridReactiveData.currentArea).length > 1
          ) {
            const startColIndex =
              gridReactiveData.currentArea.start.c >
              gridReactiveData.currentArea.end.c
                ? gridReactiveData.currentArea.end.c
                : gridReactiveData.currentArea.start.c
            const endColIndex =
              gridReactiveData.currentArea.end.c <
              gridReactiveData.currentArea.start.c
                ? gridReactiveData.currentArea.start.c
                : gridReactiveData.currentArea.end.c
            if (Number(col) - 1 < startColIndex) {
              gridReactiveData.currentArea.start.c += 1
              gridReactiveData.currentArea.end.c += 1
            } else if (
              Number(col) - 1 >= startColIndex &&
              Number(col) - 1 < endColIndex
            ) {
              gridReactiveData.currentArea.end.c += 1
            }
          }
          const gridColumnsVisibleChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridColumnsVisibleChanged).map((key) => {
            if (Number(key) >= col) {
              const newKey = Number(key) + 1
              gridColumnsVisibleChangedNew[newKey] =
                gridReactiveData.gridColumnsVisibleChanged[key]
            } else {
              gridColumnsVisibleChangedNew[key] =
                gridReactiveData.gridColumnsVisibleChanged[key]
            }
            return null
          })
          gridReactiveData.gridColumnsVisibleChanged =
            gridColumnsVisibleChangedNew

          const gridColumnsWidthChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridColumnsWidthChanged).map((key) => {
            if (Number(key) > col) {
              const newKey = Number(key) + 1
              gridColumnsWidthChangedNew[newKey] =
                gridReactiveData.gridColumnsWidthChanged[key]
            } else {
              gridColumnsWidthChangedNew[key] =
                gridReactiveData.gridColumnsWidthChanged[key]
            }
            return null
          })
          gridReactiveData.gridColumnsWidthChanged = gridColumnsWidthChangedNew

          gridReactiveData.currentSheetData.map(
            (row: Cell[], index: number) => {
              row.map((cell: Cell) => {
                if (cell.c! > col - 1) {
                  cell.c! += 1
                }
                return null
              })
              row.splice(
                Number(col),
                0,
                new Cell(
                  index,
                  Number(col),
                  null,
                  null,
                  null,
                  false,
                  null,
                  0,
                  1,
                  1,
                  null,
                  null,
                  false,
                  false,
                  false,
                  false,
                  false,
                  null,
                  '0',
                  null,
                  false,
                  false,
                  false,
                  false,
                ) as Cell & { [key: string]: string },
              )
              return null
            },
          )
          // TODO 公式调整
          $vmaCalcGrid
            .recalculate(true)
            .then(() => {
              $vmaCalcGrid.calc()
            })
            .then(() => {
              $vmaCalcGrid.calcCurrentCellPosition()
            })
        }
        if (type === 'deleteColumn') {
          gridReactiveData.columnConfigs.splice(Number(col), 1)
          gridReactiveData.columnConfigs.map((item: Column) => {
            if (item.index! > col) {
              item.index! -= 1
            }
            return item
          })
          if (
            gridReactiveData.currentArea &&
            Object.keys(gridReactiveData.currentArea).length > 1
          ) {
            const startColIndex =
              gridReactiveData.currentArea.start.c >
              gridReactiveData.currentArea.end.c
                ? gridReactiveData.currentArea.end.c
                : gridReactiveData.currentArea.start.c
            const endColIndex =
              gridReactiveData.currentArea.end.c <
              gridReactiveData.currentArea.start.c
                ? gridReactiveData.currentArea.start.c
                : gridReactiveData.currentArea.end.c
            if (Number(col) - 1 < startColIndex) {
              gridReactiveData.currentArea.start.c -= 1
              gridReactiveData.currentArea.end.c -= 1
            } else if (
              Number(col) - 1 >= startColIndex &&
              Number(col) - 1 <= endColIndex
            ) {
              gridReactiveData.currentArea.end.c -= 1
            }
          }
          const gridColumnsVisibleChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridColumnsVisibleChanged).map((key) => {
            if (Number(key) !== Number(col) - 1) {
              if (Number(key) >= Number(col)) {
                const newKey = Number(key) - 1
                gridColumnsVisibleChangedNew[newKey] =
                  gridReactiveData.gridColumnsVisibleChanged[key]
              } else {
                gridColumnsVisibleChangedNew[key] =
                  gridReactiveData.gridColumnsVisibleChanged[key]
              }
            }
            return null
          })
          gridReactiveData.gridColumnsVisibleChanged =
            gridColumnsVisibleChangedNew
          const gridColumnsWidthChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridColumnsWidthChanged).map((key) => {
            if (Number(key) !== Number(col) - 1) {
              if (Number(key) >= Number(col)) {
                const newKey = Number(key) - 1
                gridColumnsWidthChangedNew[newKey] =
                  gridReactiveData.gridColumnsWidthChanged[key]
              } else {
                gridColumnsWidthChangedNew[key] =
                  gridReactiveData.gridColumnsWidthChanged[key]
              }
            }
            return null
          })
          gridReactiveData.gridColumnsWidthChanged = gridColumnsWidthChangedNew
          gridReactiveData.currentSheetData.map(
            (row: Cell[], index: number) => {
              row.splice(Number(col) - 1, 1)
              row.map((cell: Cell) => {
                if (cell.c! > col - 1) {
                  cell.c! -= 1
                }
                return null
              })
              return null
            },
          )
          if (
            gridReactiveData.currentCell &&
            Object.keys(gridReactiveData.currentCell).length > 0
          ) {
            const { c } = gridReactiveData.currentCell
            if (c! === Number(col) - 1) {
              gridReactiveData.currentCell = {}
            }
          }
          // TODO 公式调整
          $vmaCalcGrid
            .recalculate(true)
            .then(() => {
              $vmaCalcGrid.calc()
            })
            .then(() => {
              $vmaCalcGrid.calcCurrentCellPosition()
            })
        }
      },
      updateRow: (type: string, row: number, col: number) => {
        if (type === 'hideRow') {
          gridReactiveData.rowConfigs[row].visible = false
          gridReactiveData.gridRowsVisibleChanged[`${row}`] = 0
          if (
            gridReactiveData.currentCell &&
            Object.keys(gridReactiveData.currentCell).length > 0 &&
            gridReactiveData.currentCell.r === Number(row)
          ) {
            gridReactiveData.currentCell = {}
          }
          $vmaCalcGrid.recalculate(true).then(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
          })
        }
        if (type === 'showAllRows') {
          if (Object.keys(gridReactiveData.gridRowsVisibleChanged).length) {
            for (const k in Object.keys(
              gridReactiveData.gridRowsVisibleChanged,
            )) {
              if (
                gridReactiveData.gridRowsVisibleChanged.hasOwnProperty(
                  Object.keys(gridReactiveData.gridRowsVisibleChanged)[k],
                )
              ) {
                gridReactiveData.rowConfigs[
                  parseInt(
                    Object.keys(gridReactiveData.gridRowsVisibleChanged)[k],
                    10,
                  )
                ].visible = true
              }
            }
          }
          gridReactiveData.gridRowsVisibleChanged = {}
          $vmaCalcGrid.recalculate(true).then(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
          })
        }
        if (type === 'showUpRows') {
          if (Object.keys(gridReactiveData.gridRowsVisibleChanged).length) {
            let idx = 1
            const removeKeys: string[] = []
            while (
              gridReactiveData.gridRowsVisibleChanged.hasOwnProperty(
                `${Number(row) - idx}`,
              )
            ) {
              gridReactiveData.rowConfigs[Number(row) - idx].visible = true
              removeKeys.push(`${Number(row) - idx}`)
              idx++
            }
            const gridRowsVisibleChangedNew: Record<string, number> = {}
            Object.keys(gridReactiveData.gridRowsVisibleChanged).map((key) => {
              if (removeKeys.indexOf(key) < 0) {
                gridRowsVisibleChangedNew[key] =
                  gridReactiveData.gridRowsVisibleChanged[key]
              }
              return null
            })
            gridReactiveData.gridRowsVisibleChanged = gridRowsVisibleChangedNew
          }
          $vmaCalcGrid.recalculate(true).then(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
          })
        }
        if (type === 'showDownRows') {
          if (Object.keys(gridReactiveData.gridRowsVisibleChanged).length) {
            let idx = 1
            const removeKeys: string[] = []
            while (
              gridReactiveData.gridRowsVisibleChanged.hasOwnProperty(
                `${Number(row) + idx}`,
              )
            ) {
              gridReactiveData.rowConfigs[Number(row) + idx].visible = true
              removeKeys.push(`${Number(row) + idx}`)
              idx++
            }
            const gridRowsVisibleChangedNew: Record<string, number> = {}
            Object.keys(gridReactiveData.gridRowsVisibleChanged).map((key) => {
              if (removeKeys.indexOf(key) < 0) {
                gridRowsVisibleChangedNew[key] =
                  gridReactiveData.gridRowsVisibleChanged[key]
              }
              return null
            })
            gridReactiveData.gridRowsVisibleChanged = gridRowsVisibleChangedNew
          }
          $vmaCalcGrid.recalculate(true).then(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
          })
        }
        if (type === 'insertRowBefore') {
          gridReactiveData.rowConfigs.map((item: Row) => {
            if (item.index! >= row) {
              item.index! += 1
            }
            return item
          })
          gridReactiveData.rowConfigs.splice(
            row,
            0,
            new Row(
              Number(row),
              null,
              null,
              'default',
              null,
              true,
              false,
              'center',
            ),
          )
          if (
            gridReactiveData.currentArea &&
            Object.keys(gridReactiveData.currentArea).length > 1
          ) {
            const startRowIndex =
              gridReactiveData.currentArea.start.r >
              gridReactiveData.currentArea.end.r
                ? gridReactiveData.currentArea.end.r
                : gridReactiveData.currentArea.start.r
            const endRowIndex =
              gridReactiveData.currentArea.end.r <
              gridReactiveData.currentArea.start.r
                ? gridReactiveData.currentArea.start.r
                : gridReactiveData.currentArea.end.r
            if (Number(row) <= startRowIndex) {
              gridReactiveData.currentArea.start.r += 1
              gridReactiveData.currentArea.end.r += 1
            } else if (
              Number(row) > startRowIndex &&
              Number(row) <= endRowIndex
            ) {
              gridReactiveData.currentArea.end.r += 1
            }
          }
          const gridRowsVisibleChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridRowsVisibleChanged).map((key) => {
            if (Number(key) >= row) {
              const newKey = Number(key) + 1
              gridRowsVisibleChangedNew[newKey] =
                gridReactiveData.gridRowsVisibleChanged[key]
            } else {
              gridRowsVisibleChangedNew[key] =
                gridReactiveData.gridRowsVisibleChanged[key]
            }
            return null
          })
          gridReactiveData.gridRowsVisibleChanged = gridRowsVisibleChangedNew
          const gridRowsHeightChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridRowsHeightChanged).map((key) => {
            if (Number(key) >= row) {
              const newKey = Number(key) + 1
              gridRowsHeightChangedNew[newKey] =
                gridReactiveData.gridRowsHeightChanged[key]
            } else {
              gridRowsHeightChangedNew[key] =
                gridReactiveData.gridRowsHeightChanged[key]
            }
            return null
          })
          gridReactiveData.gridRowsHeightChanged = gridRowsHeightChangedNew
          gridReactiveData.currentSheetData.map(
            (aRow: Cell[], index: number) => {
              aRow.map((cell: Cell) => {
                if (cell.r! >= row) {
                  cell.r! += 1
                }
                return null
              })
              return null
            },
          )
          const aNewRow: Cell[] = []
          for (let i = 0; i < gridReactiveData.columnConfigs.length - 1; i++) {
            aNewRow.push(
              new Cell(
                Number(row),
                i,
                null,
                null,
                null,
                false,
                null,
                0,
                1,
                1,
                null,
                null,
                false,
                false,
                false,
                false,
                false,
                null,
                '0',
                null,
                false,
                false,
                false,
                false,
              ) as Cell & { [key: string]: string },
            )
          }
          gridReactiveData.currentSheetData.splice(Number(row), 0, aNewRow)
          // TODO 公式调整
          $vmaCalcGrid
            .recalculate(true)
            .then(() => {
              $vmaCalcGrid.calc()
            })
            .then(() => {
              $vmaCalcGrid.calcCurrentCellPosition()
            })
        }
        if (type === 'insertRowAfter') {
          gridReactiveData.rowConfigs.map((item: Row) => {
            if (item.index! > row) {
              item.index! += 1
            }
            return item
          })
          gridReactiveData.rowConfigs.splice(
            Number(row) + 1,
            0,
            new Row(
              Number(row) + 1,
              null,
              null,
              'default',
              null,
              true,
              false,
              'center',
            ),
          )
          if (
            gridReactiveData.currentArea &&
            Object.keys(gridReactiveData.currentArea).length > 1
          ) {
            const startRowIndex =
              gridReactiveData.currentArea.start.r >
              gridReactiveData.currentArea.end.r
                ? gridReactiveData.currentArea.end.r
                : gridReactiveData.currentArea.start.r
            const endRowIndex =
              gridReactiveData.currentArea.end.r <
              gridReactiveData.currentArea.start.r
                ? gridReactiveData.currentArea.start.r
                : gridReactiveData.currentArea.end.r
            if (Number(row) < startRowIndex) {
              gridReactiveData.currentArea.start.r += 1
              gridReactiveData.currentArea.end.r += 1
            } else if (
              Number(row) >= startRowIndex &&
              Number(row) <= endRowIndex
            ) {
              gridReactiveData.currentArea.end.r += 1
            }
          }
          const gridRowsVisibleChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridRowsVisibleChanged).map((key) => {
            if (Number(key) > row) {
              const newKey = Number(key) + 1
              gridRowsVisibleChangedNew[newKey] =
                gridReactiveData.gridRowsVisibleChanged[key]
            } else {
              gridRowsVisibleChangedNew[key] =
                gridReactiveData.gridRowsVisibleChanged[key]
            }
            return null
          })
          gridReactiveData.gridRowsVisibleChanged = gridRowsVisibleChangedNew
          const gridRowsHeightChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridRowsHeightChanged).map((key) => {
            if (Number(key) > row) {
              const newKey = Number(key) + 1
              gridRowsHeightChangedNew[newKey] =
                gridReactiveData.gridRowsHeightChanged[key]
            } else {
              gridRowsHeightChangedNew[key] =
                gridReactiveData.gridRowsHeightChanged[key]
            }
            return null
          })
          gridReactiveData.gridRowsHeightChanged = gridRowsHeightChangedNew
          gridReactiveData.currentSheetData.map(
            (aRow: Cell[], index: number) => {
              aRow.map((cell: Cell) => {
                if (cell.r! > row) {
                  cell.r! += 1
                }
                return null
              })
              return null
            },
          )
          const aNewRow: Cell[] = []
          for (let i = 0; i < gridReactiveData.columnConfigs.length - 1; i++) {
            aNewRow.push(
              new Cell(
                Number(row) + 1,
                i,
                null,
                null,
                null,
                false,
                null,
                0,
                1,
                1,
                null,
                null,
                false,
                false,
                false,
                false,
                false,
                null,
                '0',
                null,
                false,
                false,
                false,
                false,
              ) as Cell & { [key: string]: string },
            )
          }
          gridReactiveData.currentSheetData.splice(Number(row) + 1, 0, aNewRow)
          // TODO 公式调整
          $vmaCalcGrid
            .recalculate(true)
            .then(() => {
              $vmaCalcGrid.calc()
            })
            .then(() => {
              $vmaCalcGrid.calcCurrentCellPosition()
            })
        }
        if (type === 'deleteRow') {
          gridReactiveData.rowConfigs.splice(Number(row), 1)
          gridReactiveData.rowConfigs.map((item: Row) => {
            if (item.index! > row) {
              item.index! -= 1
            }
            return item
          })
          if (
            gridReactiveData.currentArea &&
            Object.keys(gridReactiveData.currentArea).length > 1
          ) {
            const startRowIndex =
              gridReactiveData.currentArea.start.r >
              gridReactiveData.currentArea.end.r
                ? gridReactiveData.currentArea.end.r
                : gridReactiveData.currentArea.start.r
            const endRowIndex =
              gridReactiveData.currentArea.end.r <
              gridReactiveData.currentArea.start.r
                ? gridReactiveData.currentArea.start.r
                : gridReactiveData.currentArea.end.r
            if (Number(row) < startRowIndex) {
              gridReactiveData.currentArea.start.r -= 1
              gridReactiveData.currentArea.end.r -= 1
            } else if (
              Number(row) >= startRowIndex &&
              Number(row) <= endRowIndex
            ) {
              gridReactiveData.currentArea.end.r -= 1
            }
          }
          const gridRowsVisibleChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridRowsVisibleChanged).map((key) => {
            if (Number(key) !== Number(row)) {
              if (Number(key) > Number(row)) {
                const newKey = Number(key) - 1
                gridRowsVisibleChangedNew[newKey] =
                  gridReactiveData.gridRowsVisibleChanged[key]
              } else {
                gridRowsVisibleChangedNew[key] =
                  gridReactiveData.gridRowsVisibleChanged[key]
              }
            }
            return null
          })
          gridReactiveData.gridRowsVisibleChanged = gridRowsVisibleChangedNew
          const gridRowsHeightChangedNew: Record<string, number> = {}
          Object.keys(gridReactiveData.gridRowsHeightChanged).map((key) => {
            if (Number(key) !== Number(row)) {
              if (Number(key) > Number(row)) {
                const newKey = Number(key) - 1
                gridRowsHeightChangedNew[newKey] =
                  gridReactiveData.gridRowsHeightChanged[key]
              } else {
                gridRowsHeightChangedNew[key] =
                  gridReactiveData.gridRowsHeightChanged[key]
              }
            }
            return null
          })
          gridReactiveData.gridRowsHeightChanged = gridRowsHeightChangedNew
          gridReactiveData.currentSheetData.map(
            (aRow: Cell[], index: number) => {
              aRow.map((cell: Cell) => {
                if (cell.r! > row) {
                  cell.r! -= 1
                }
                return null
              })
              return null
            },
          )
          gridReactiveData.currentSheetData.splice(Number(row), 1)
          if (
            gridReactiveData.currentCell &&
            Object.keys(gridReactiveData.currentCell).length > 0
          ) {
            const { r } = gridReactiveData.currentCell
            if (r! === Number(row)) {
              gridReactiveData.currentCell = {}
            }
          }
          // TODO 公式调整
          $vmaCalcGrid
            .recalculate(true)
            .then(() => {
              $vmaCalcGrid.calc()
            })
            .then(() => {
              $vmaCalcGrid.calcCurrentCellPosition()
            })
        }
      },
      updateCell: (
        type: string,
        row: number,
        col: number,
        eRow: number,
        eCol: number,
        item: string,
      ) => {
        if (type === 'cellFrontColor') {
          for (let i = Number(row); i <= Number(eRow); i++) {
            for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
              gridReactiveData.currentSheetData[Number(i)][Number(j)].fc = item
            }
          }
        }
        if (type === 'cellBackColor') {
          for (let i = Number(row); i <= Number(eRow); i++) {
            for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
              gridReactiveData.currentSheetData[Number(i)][Number(j)].bg = item
              // 更新cell的background css type
              gridReactiveData.currentSheetData[Number(i)][Number(j)].bgt =
                calcCellBgType(
                  !!gridReactiveData.currentSheetData[Number(i)][Number(j)].bg,
                  !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                    .bdb ||
                    (gridReactiveData.currentSheetData[Number(i)][
                      Number(j) + 1
                    ] &&
                      !!gridReactiveData.currentSheetData[Number(i)][
                        Number(j) + 1
                      ].bdt),
                  !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                    .bdr ||
                    (gridReactiveData.currentSheetData[Number(i)][
                      Number(j) + 1
                    ] &&
                      !!gridReactiveData.currentSheetData[Number(i)][
                        Number(j) + 1
                      ].bdl),
                )
            }
          }
        }
        if (type === 'updateCellFontSize') {
          for (let i = Number(row); i <= Number(eRow); i++) {
            for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
              gridReactiveData.currentSheetData[Number(i)][Number(j)].fs =
                Number(item)
            }
          }
        }
        if (type === 'updateCellFontFamily') {
          for (let i = Number(row); i <= Number(eRow); i++) {
            for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
              gridReactiveData.currentSheetData[Number(i)][Number(j)].ff = item
            }
          }
        }
        if (type === 'updateCellFontStyle') {
          if (item === 'bl') {
            const bl = gridReactiveData.currentCell.bl
            for (let i = Number(row); i <= Number(eRow); i++) {
              for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bl = !bl
              }
            }
          }
          if (item === 'it') {
            const it = gridReactiveData.currentCell.it
            for (let i = Number(row); i <= Number(eRow); i++) {
              for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].it = !it
              }
            }
          }
          if (item === 'ol') {
            const ol = gridReactiveData.currentCell.ol
            for (let i = Number(row); i <= Number(eRow); i++) {
              for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].ol = !ol
              }
            }
          }
          if (item === 'cl') {
            const cl = gridReactiveData.currentCell.cl
            for (let i = Number(row); i <= Number(eRow); i++) {
              for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].cl = !cl
              }
            }
          }
          if (item === 'ul') {
            const ul = gridReactiveData.currentCell.ul
            for (let i = Number(row); i <= Number(eRow); i++) {
              for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].ul = !ul
              }
            }
          }
        }
        if (type === 'updateCellBorder') {
          if (
            item === 'top' ||
            item === 'out' ||
            item === 'all' ||
            item === 'none'
          ) {
            const bdt = gridReactiveData.currentCell.bdt
            for (let i = Number(row); i <= Number(row); i++) {
              for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bdt =
                  item !== 'none' // !gridReactiveData.currentSheetData[Number(i)][Number(j)].bdt
                // 更新cell的background css type
                if (Number(i) > 0) {
                  gridReactiveData.currentSheetData[Number(i) - 1][
                    Number(j)
                  ].bgt = calcCellBgType(
                    !!gridReactiveData.currentSheetData[Number(i) - 1][
                      Number(j)
                    ].bg,
                    !!gridReactiveData.currentSheetData[Number(i) - 1][
                      Number(j)
                    ].bdb ||
                      (gridReactiveData.currentSheetData[Number(i)][
                        Number(j)
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i)][
                          Number(j)
                        ].bdt),
                    !!gridReactiveData.currentSheetData[Number(i) - 1][
                      Number(j)
                    ].bdr ||
                      (gridReactiveData.currentSheetData[Number(i) - 1][
                        Number(j) + 1
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i) - 1][
                          Number(j) + 1
                        ].bdl),
                  )
                }
              }
            }
          }
          if (
            item === 'bottom' ||
            item === 'out' ||
            item === 'all' ||
            item === 'none'
          ) {
            const bdb = gridReactiveData.currentCell.bdb
            for (let i = Number(eRow); i <= Number(eRow); i++) {
              for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bdb =
                  item !== 'none' // !gridReactiveData.currentSheetData[Number(i)][Number(j)].bdb
                // 更新cell的background css type
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bgt =
                  calcCellBgType(
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bg,
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bdb ||
                      (gridReactiveData.currentSheetData[Number(i) + 1][
                        Number(j)
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i) + 1][
                          Number(j)
                        ].bdt),
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bdr ||
                      (gridReactiveData.currentSheetData[Number(i)][
                        Number(j) + 1
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i)][
                          Number(j) + 1
                        ].bdl),
                  )
              }
            }
          }
          if (
            item === 'left' ||
            item === 'out' ||
            item === 'all' ||
            item === 'none'
          ) {
            const bdl = gridReactiveData.currentCell.bdl
            for (let i = Number(row); i <= Number(eRow); i++) {
              for (let j = Number(col) - 1; j <= Number(col) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bdl =
                  item !== 'none' // !gridReactiveData.currentSheetData[Number(i)][Number(j)].bdl
                if (Number(j) > 0) {
                  gridReactiveData.currentSheetData[Number(i)][
                    Number(j) - 1
                  ].bgt = calcCellBgType(
                    !!gridReactiveData.currentSheetData[Number(i)][
                      Number(j) - 1
                    ].bg,
                    !!gridReactiveData.currentSheetData[Number(i)][
                      Number(j) - 1
                    ].bdb ||
                      (gridReactiveData.currentSheetData[Number(i) + 1][
                        Number(j) - 1
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i) + 1][
                          Number(j) - 1
                        ].bdt),
                    !!gridReactiveData.currentSheetData[Number(i)][
                      Number(j) - 1
                    ].bdr ||
                      (gridReactiveData.currentSheetData[Number(i)][
                        Number(j)
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i)][
                          Number(j)
                        ].bdl),
                  )
                }
              }
            }
          }
          if (
            item === 'right' ||
            item === 'out' ||
            item === 'all' ||
            item === 'none'
          ) {
            const bdr = gridReactiveData.currentCell.bdr
            for (let i = Number(row); i <= Number(eRow); i++) {
              for (let j = Number(eCol) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bdr =
                  item !== 'none' // !gridReactiveData.currentSheetData[Number(i)][Number(j)].bdr
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bgt =
                  calcCellBgType(
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bg,
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bdb ||
                      (gridReactiveData.currentSheetData[Number(i) + 1][
                        Number(j)
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i) + 1][
                          Number(j)
                        ].bdt),
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bdr ||
                      (gridReactiveData.currentSheetData[Number(i)][
                        Number(j) + 1
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i)][
                          Number(j) + 1
                        ].bdl),
                  )
              }
            }
          }
          if (item === 'inner' || item === 'all' || item === 'none') {
            // inner top
            for (let i = Number(row) + 1; i <= Number(eRow); i++) {
              for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bdt =
                  item !== 'none' // !gridReactiveData.currentSheetData[Number(i)][Number(j)].bdt
                // 更新cell的background css type
                if (Number(i) > 0) {
                  gridReactiveData.currentSheetData[Number(i) - 1][
                    Number(j)
                  ].bgt = calcCellBgType(
                    !!gridReactiveData.currentSheetData[Number(i) - 1][
                      Number(j)
                    ].bg,
                    !!gridReactiveData.currentSheetData[Number(i) - 1][
                      Number(j)
                    ].bdb ||
                      (gridReactiveData.currentSheetData[Number(i)][
                        Number(j)
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i)][
                          Number(j)
                        ].bdt),
                    !!gridReactiveData.currentSheetData[Number(i) - 1][
                      Number(j)
                    ].bdr ||
                      (gridReactiveData.currentSheetData[Number(i) - 1][
                        Number(j) + 1
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i) - 1][
                          Number(j) + 1
                        ].bdl),
                  )
                }
              }
            }
            // inner bottom
            for (let i = Number(row); i <= Number(eRow) - 1; i++) {
              for (let j = Number(col) - 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bdb =
                  item !== 'none' // !gridReactiveData.currentSheetData[Number(i)][Number(j)].bdb
                // 更新cell的background css type
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bgt =
                  calcCellBgType(
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bg,
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bdb ||
                      (gridReactiveData.currentSheetData[Number(i) + 1][
                        Number(j)
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i) + 1][
                          Number(j)
                        ].bdt),
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bdr ||
                      (gridReactiveData.currentSheetData[Number(i)][
                        Number(j) + 1
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i)][
                          Number(j) + 1
                        ].bdl),
                  )
              }
            }
            // inner left
            for (let i = Number(row); i <= Number(eRow); i++) {
              for (let j = Number(col) - 1 + 1; j <= Number(eCol) - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bdl =
                  item !== 'none' // !gridReactiveData.currentSheetData[Number(i)][Number(j)].bdl
                if (Number(j) > 0) {
                  gridReactiveData.currentSheetData[Number(i)][
                    Number(j) - 1
                  ].bgt = calcCellBgType(
                    !!gridReactiveData.currentSheetData[Number(i)][
                      Number(j) - 1
                    ].bg,
                    !!gridReactiveData.currentSheetData[Number(i)][
                      Number(j) - 1
                    ].bdb ||
                      (gridReactiveData.currentSheetData[Number(i) + 1][
                        Number(j) - 1
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i) + 1][
                          Number(j) - 1
                        ].bdt),
                    !!gridReactiveData.currentSheetData[Number(i)][
                      Number(j) - 1
                    ].bdr ||
                      (gridReactiveData.currentSheetData[Number(i)][
                        Number(j)
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i)][
                          Number(j)
                        ].bdl),
                  )
                }
              }
            }
            // inner right
            for (let i = Number(row); i <= Number(eRow); i++) {
              for (let j = Number(eCol) - 1; j <= Number(eCol) - 1 - 1; j++) {
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bdr =
                  item !== 'none' // !gridReactiveData.currentSheetData[Number(i)][Number(j)].bdr
                gridReactiveData.currentSheetData[Number(i)][Number(j)].bgt =
                  calcCellBgType(
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bg,
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bdb ||
                      (gridReactiveData.currentSheetData[Number(i) + 1][
                        Number(j)
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i) + 1][
                          Number(j)
                        ].bdt),
                    !!gridReactiveData.currentSheetData[Number(i)][Number(j)]
                      .bdr ||
                      (gridReactiveData.currentSheetData[Number(i)][
                        Number(j) + 1
                      ] &&
                        !!gridReactiveData.currentSheetData[Number(i)][
                          Number(j) + 1
                        ].bdl),
                  )
              }
            }
          }
          if (
            gridReactiveData.currentArea &&
            Object.keys(gridReactiveData.currentArea).length > 1
          ) {
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
            nextTick(() => {
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
            })
          }
        }
      },
      getCell: (type: string, row: number, col: number) => {
        if (type === 'cellFrontColor') {
          return gridReactiveData.currentSheetData[Number(row)][Number(col) - 1]
            .fc
        }
        if (type === 'cellBackColor') {
          return gridReactiveData.currentSheetData[Number(row)][Number(col) - 1]
            .bg
        }
        return null
      },
      calcCurrentCellDisplay: () => {
        if (gridReactiveData.currentCell) {
          const { r, c } = gridReactiveData.currentCell
          if (
            r! <= gridReactiveData.endIndex &&
            r! >= gridReactiveData.startIndex &&
            c! <= gridReactiveData.endColIndex &&
            c! >= gridReactiveData.startColIndex &&
            gridReactiveData.currentCellEditorActive
          ) {
            gridReactiveData.currentCellEditorStyle.display = 'block'
          } else {
            gridReactiveData.currentCellEditorStyle.display = 'none'
          }
        } else {
          gridReactiveData.currentCellEditorStyle.display = 'none'
        }
      },
      calcCurrentCellPosition: () => {
        if (gridReactiveData.currentCell) {
          const leftSpaceWidth = getXSpaceFromColumnWidths(
            gridReactiveData.startColIndex,
            rcw.value,
            gridReactiveData.gridColumnsWidthChanged,
            gridReactiveData.gridColumnsVisibleChanged,
          )

          const topSpaceHeight = getYSpaceFromRowHeights(
            gridReactiveData.startIndex,
            rrh.value,
            gridReactiveData.gridRowsHeightChanged,
            gridReactiveData.gridRowsVisibleChanged,
          )

          nextTick(() => {
            const { r, c } = gridReactiveData.currentCell
            refGridBodyTable.value
              .querySelectorAll(`td[row="${r}"][col="${c! + 1}"]`)
              .forEach((cellElem: any) => {
                const marginLeft = `${leftSpaceWidth + cellElem.offsetLeft}px`
                const marginTop = `${topSpaceHeight + cellElem.offsetTop}px`
                const borderMarginLeft = `${
                  leftSpaceWidth + cellElem.offsetLeft - 1
                }px`
                const borderMarginTop = `${
                  topSpaceHeight + cellElem.offsetTop - 1
                }px`
                gridReactiveData.currentCellEditorStyle.transform = `translateX(${marginLeft}) translateY(${marginTop})`
                gridReactiveData.currentCellEditorStyle.height = `${cellElem.offsetHeight}px`
                gridReactiveData.currentCellEditorStyle.width = `${cellElem.offsetWidth}px`
                gridReactiveData.currentCellBorderStyle.transform = `translateX(${borderMarginLeft}) translateY(${borderMarginTop})`

                gridReactiveData.currentCellBorderStyle.height = `${cellElem.offsetHeight}px`
                gridReactiveData.currentCellBorderStyle.width = `${cellElem.offsetWidth}px`
              })
          })
        }
        if (
          gridReactiveData.currentArea &&
          Object.keys(gridReactiveData.currentArea).length > 1
        ) {
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
            gridReactiveData.startColIndex,
            rcw.value,
            gridReactiveData.gridColumnsWidthChanged,
            gridReactiveData.gridColumnsVisibleChanged,
          )

          const topSpaceHeight = getYSpaceFromRowHeights(
            gridReactiveData.startIndex,
            rrh.value,
            gridReactiveData.gridRowsHeightChanged,
            gridReactiveData.gridRowsVisibleChanged,
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
                gridReactiveData.currentAreaBorderStyle.transform = `translateX(${borderMarginLeft}) translateY(${borderMarginTop})`
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
          })
        }
      },
      triggerScrollXEvent: (event: Event) => {
        const scrollBodyElem = (event.currentTarget ||
          event.target) as HTMLDivElement
        debounceScrollX(scrollBodyElem)
      },
      triggerScrollYEvent: (event: Event) => {
        const scrollBodyElem = (event.currentTarget ||
          event.target) as HTMLDivElement
        debounceScrollY(scrollBodyElem)
      },
      recalculate: (refresh: boolean) => {
        arrangeColumnWidth()
        if (refresh) {
          return computeScrollLoad().then(() => {
            arrangeColumnWidth()
            return computeScrollLoad()
          })
        }
        return computeScrollLoad()
      },
      /**
       * 获取父容器元素
       */
      getParentElem() {
        const el = refGrid.value
        if ($vmaCalcGrid) {
          const gridEl = $vmaCalcGrid.getRefs().refGrid.value
          return gridEl ? (gridEl.parentNode as HTMLElement) : null
        }
        return el ? (el.parentNode as HTMLElement) : null
      },
      calc: () => {
        const calcCells: Cell[] = []
        gridReactiveData.cells.errorMap = {}
        gridReactiveData.cells.cycleMap = {}
        gridReactiveData.cells.noCycleMap = {}
        const position = { row: 1, col: 1, sheet: gridReactiveData.sheet.name }
        const depParser = new DepParser({})
        const errorKeyList: any = []
        gridReactiveData.currentSheetData.forEach((row: any[]) => {
          row.forEach((item: Cell) => {
            let isFormulaCell = false
            let isFormulaCellDepParseError = true
            let se = null
            let formulaCellDepParseResult = null
            if (
              item &&
              item.v &&
              typeof item.v === 'string' &&
              item.v.trim().startsWith('=')
            ) {
              isFormulaCell = true
              se = '#DEPPARSEERROR!'
              try {
                formulaCellDepParseResult = depParser.parse(
                  item.v.trim().substring(1),
                  position,
                )
                isFormulaCellDepParseError = false
                se = null
              } catch (e) {
                // 此处为直接的parse错误
                console.error(`parse error: ${item.c! - 1}_${item.r}`)
              }
              if (isFormulaCellDepParseError) {
                errorKeyList.push(`${item.c! - 1}_${item.r}`)
              }
              // 接下来还要再检查是否有引用错误（例如，超出范围的单元格引用）
              if (formulaCellDepParseResult !== null) {
                const errorRefCell = formulaCellDepParseResult.find(
                  (item: any) =>
                    item.row > gridReactiveData.rowConfigs.length ||
                    item.col > gridReactiveData.columnConfigs.length,
                )
                if (errorRefCell) {
                  se = '#REFERROR!'
                  errorKeyList.push(`${item.c! - 1}_${item.r}`)
                  isFormulaCellDepParseError = true
                  formulaCellDepParseResult = null
                }
              }
              item.mv = isFormulaCell
                ? isFormulaCellDepParseError
                  ? se
                  : null
                : item && item.v
                ? item.v
                : null
              item.fd = isFormulaCell
                ? isFormulaCellDepParseError
                  ? null
                  : formulaCellDepParseResult
                : null
              item.se = se
              calcCells.push(item)
            } else {
              item.mv = item.v
            }
          })
        })
        // 有向图计算 用来确定计算顺序，同时查找是否有不可计算的依赖循环
        // 计算所有的顶点及有向邻接关系
        const vertexes: Record<string, any> = {}
        calcCells.forEach((item) => {
          if (errorKeyList.indexOf(`${item.c}_${item.r}`) >= 0) {
            gridReactiveData.cells.errorMap[`${item.c}_${item.r}`] = {
              c: item.c,
              r: item.r,
              children: [],
              ref: item,
            }
          } else {
            vertexes[`${item.c}_${item.r}`] = {
              c: item.c,
              r: item.r,
              children: [],
              ref: item,
            }
            if (item.fd && item.fd.length > 0) {
              item.fd.forEach((fdItem: any) => {
                if (
                  fdItem.hasOwnProperty('from') ||
                  fdItem.hasOwnProperty('to')
                ) {
                  // range dependency
                  for (let r = fdItem.from.row; r <= fdItem.to.row; r++) {
                    for (let c = fdItem.from.col; c <= fdItem.to.col; c++) {
                      if (!vertexes.hasOwnProperty(`${c - 1}_${r - 1}`)) {
                        // 不重复时加入新顶点 且 不在errorList
                        if (errorKeyList.indexOf(`${c - 1}_${r - 1}`) < 0) {
                          vertexes[`${c - 1}_${r - 1}`] = {
                            c: c - 1,
                            r: r - 1,
                            children: [],
                            ref: gridReactiveData.currentSheetData[r - 1][
                              c - 1
                            ],
                          }
                        }
                      }
                      if (
                        vertexes[`${item.c}_${item.r}`].children.indexOf(
                          `${c - 1}_${r - 1}`,
                        ) < 0
                      ) {
                        // 加入有向的邻接关系，总是从parent -> child
                        vertexes[`${item.c}_${item.r}`].children.push(
                          `${c - 1}_${r - 1}`,
                        )
                      }
                    }
                  }
                } else {
                  // cell dependency
                  if (
                    !vertexes.hasOwnProperty(
                      `${fdItem.col - 1}_${fdItem.row - 1}`,
                    )
                  ) {
                    // 不重复时加入新顶点 且 不在errorList
                    if (
                      errorKeyList.indexOf(
                        `${fdItem.col - 1}_${fdItem.row - 1}`,
                      ) < 0
                    ) {
                      vertexes[`${fdItem.col - 1}_${fdItem.row - 1}`] = {
                        c: fdItem.col - 1,
                        r: fdItem.row - 1,
                        children: [],
                        ref: gridReactiveData.currentSheetData[fdItem.row - 1][
                          fdItem.col - 1
                        ],
                      }
                    }
                  }
                  if (
                    vertexes[`${item.c}_${item.r}`].children.indexOf(
                      `${fdItem.col - 1}_${fdItem.row - 1}`,
                    ) < 0
                  ) {
                    // 加入有向的邻接关系，总是从parent -> child
                    vertexes[`${item.c}_${item.r}`].children.push(
                      `${fdItem.col - 1}_${fdItem.row - 1}`,
                    )
                  }
                }
              })
            }
          }
        })
        // 从所有的vertexes从去除gridReactiveData.cells.errorList中的单元格，以及依赖它们的单元格，递归，直到没有
        console.time('filterVertexes')
        const { noErrorVertexes } = filterVertexes(
          vertexes,
          gridReactiveData.cells.errorMap,
        )
        console.timeEnd('filterVertexes')
        const errorMapKeys = Object.keys(gridReactiveData.cells.errorMap)
        if (errorMapKeys.length > 0) {
          for (let i = 0; i < errorMapKeys.length; i++) {
            if (
              gridReactiveData.cells.errorMap[errorMapKeys[i]].ref.se !== null
            ) {
              gridReactiveData.cells.errorMap[errorMapKeys[i]].ref.mv =
                gridReactiveData.cells.errorMap[errorMapKeys[i]].ref.se
            } else {
              gridReactiveData.cells.errorMap[errorMapKeys[i]].ref.mv =
                '#REFERROR!'
              gridReactiveData.cells.errorMap[errorMapKeys[i]].ref.se =
                '#REFERROR!'
            }
          }
        }
        // 计算有向图拓扑并收集环信息
        const { topological, noCycleVertexes, cycleVertexes } = calcVertexes(
          noErrorVertexes,
          {},
        )
        gridReactiveData.cells.cycleMap = cycleVertexes
        gridReactiveData.cells.noCycleMap = noCycleVertexes

        const cycleVertexKeys = Object.keys(cycleVertexes)
        for (let i = 0; i < cycleVertexKeys.length; i++) {
          cycleVertexes[cycleVertexKeys[i]].ref.mv = '#CYCLEERROR!'
        }

        // 对有向无环拓扑排序topological下，进行公式计算
        const parser = new FormulaParser({
          functions: props.functions,
          onCell: (ref: any) =>
            gridReactiveData.currentSheetData[ref.row - 1][ref.col - 1].mv,
          onRange: (ref: any) => {
            const arr = []
            for (let row = ref.from.row - 1; row < ref.to.row; row++) {
              const innerArr = []
              // eslint-disable-next-line no-plusplus
              for (let col = ref.from.col - 1; col < ref.to.col; col++) {
                innerArr.push(gridReactiveData.currentSheetData[row][col].mv)
              }
              arr.push(innerArr)
            }
            return arr
          },
        })
        for (let i = 0; i < topological.length; i++) {
          if (
            noCycleVertexes[topological[i]] &&
            noCycleVertexes[topological[i]].ref.v &&
            typeof noCycleVertexes[topological[i]].ref.v === 'string' &&
            noCycleVertexes[topological[i]].ref.v.trim().startsWith('=')
          ) {
            let isParseError = true
            try {
              let result = parser.parse(
                noCycleVertexes[topological[i]].ref.v.trim().substring(1),
                { row: 1, col: 1 },
              )
              if (result && result.result) {
                result = result.result
              }
              if (typeof result === 'number' || typeof result === 'string') {
                noCycleVertexes[topological[i]].ref.mv = result
              } else {
                noCycleVertexes[topological[i]].ref.mv = `${result}`
              }
              isParseError = false
            } catch (e) {
              console.error(topological[i], e)
            }
            if (isParseError) {
              noCycleVertexes[topological[i]].ref.mv = '#ERROR!'
              noCycleVertexes[topological[i]].ref.se = '#ERROR!'
            }
          }
        }
      },
    } as VmaGridMethods

    Object.assign($vmaCalcGrid, gridMethods)

    VmaGrid.hooks.forEach((options) => {
      // const { setupGrid } = options
      if (options.setupGrid) {
        const hookRest = options.setupGrid($vmaCalcGrid)
        if (hookRest && typeof hookRest === 'object') {
          Object.assign($vmaCalcGrid, hookRest)
        }
      }
    })

    const initCurrentSheetData = (): Promise<void> =>
      new Promise((resolve): void => {
        gridReactiveData.rowConfigs.forEach((row: Row) => {
          // const rowData = []
          gridReactiveData.columnConfigs.forEach((col: Column, colIndex) => {
            if (colIndex > 0) {
              const cellData = gridReactiveData.sheetData.find(
                (data) => data.r === row.index! + 1 && data.c === col.index,
              )
              const rightNextData = gridReactiveData.sheetData.find(
                (data) =>
                  data.r === row.index! + 1 && data.c === col.index! + 1,
              )
              const bottomNextData = gridReactiveData.sheetData.find(
                (data) => data.r === row.index! + 1 + 1 && data.c === col.index,
              )
              gridReactiveData.currentSheetData[row.index!][col.index! - 1] =
                new Cell(
                  row.index!,
                  col.index! - 1,
                  cellData && cellData.v ? cellData.v : null,
                  null,
                  null,
                  false,
                  null,
                  0,
                  1,
                  1,
                  cellData && cellData.fs ? cellData.fs : null,
                  cellData && cellData.ff ? cellData.ff : null,
                  !!(cellData && cellData.bl),
                  !!(cellData && cellData.it),
                  !!(cellData && cellData.ol),
                  !!(cellData && cellData.cl),
                  !!(cellData && cellData.ul),
                  cellData && cellData.bg ? cellData.bg : null,
                  calcCellBgType(
                    cellData && cellData.bg,
                    (bottomNextData && bottomNextData.bdt) ||
                      (cellData && cellData.bdb),
                    (rightNextData && rightNextData.bdl) ||
                      (cellData && cellData.bdr),
                  ), // init cell bg type
                  cellData && cellData.fc ? cellData.fc : null,
                  !!(cellData && cellData.bdt),
                  !!(cellData && cellData.bdb),
                  !!(cellData && cellData.bdl),
                  !!(cellData && cellData.bdr),
                ) as Cell & { [key: string]: string }
            }
          })
        })
        resolve()
      })

    const loadData = (): Promise<void> =>
      new Promise((resolve): void => {
        // 1 寻找当前status为1的sheet，如果没有，默认第一个
        gridReactiveData.sheet = props.data!.find((item) => item.status === 1)
        if (gridReactiveData.sheet === undefined && props.data!.length > 0) {
          gridReactiveData.sheet = props.data![0]
        }
        // 2 确定表格行数和列数
        if (
          gridReactiveData.sheet.r &&
          gridReactiveData.sheet.r > props.minDimensions[0]
        ) {
          props.minDimensions[0] = gridReactiveData.sheet.r
        }
        if (
          gridReactiveData.sheet.c &&
          gridReactiveData.sheet.c > props.minDimensions[1]
        ) {
          props.minDimensions[1] = gridReactiveData.sheet.c
        }
        if (gridReactiveData.sheet.data) {
          gridReactiveData.sheetData = gridReactiveData.sheet.data
          // eslint-disable-next-line array-callback-return
          gridReactiveData.sheetData.map((item) => {
            if (item.r && item.r > props.minDimensions[0]) {
              props.minDimensions[0] = item.r
            }
            if (item.c && item.c > props.minDimensions[1]) {
              props.minDimensions[1] = item.c
            }
          })
        }
        if (gridReactiveData.sheet.config) {
          gridReactiveData.sheetConfig = gridReactiveData.sheet.config
        }
        // 3 组成行列
        const columns = [
          ...Array<Record<string, unknown>>(props.minDimensions[1].valueOf()),
        ]
        // const rcw = getRenderWidth(props.gridColumnWidth, props.size)
        gridReactiveData.columnConfigs.push(
          new Column(0, null, null, 'default', null, true, false, 'center'),
        )
        columns.forEach((_, index) => {
          let cwConf = null
          let cvConf = false
          if (
            gridReactiveData.sheetConfig.cw &&
            gridReactiveData.sheetConfig.cw.length
          ) {
            for (let i = 0; i < gridReactiveData.sheetConfig.cw.length; i++) {
              if (
                gridReactiveData.sheetConfig.cw[i].hasOwnProperty('c') &&
                isNumeric(gridReactiveData.sheetConfig.cw[i].c) &&
                gridReactiveData.sheetConfig.cw[i].hasOwnProperty('w') &&
                isNumeric(gridReactiveData.sheetConfig.cw[i].w)
              ) {
                if (
                  Number(gridReactiveData.sheetConfig.cw[i].c) ===
                  index + 1
                ) {
                  cwConf = gridReactiveData.sheetConfig.cw[i].w
                  gridReactiveData.gridColumnsWidthChanged[`${index + 1}`] =
                    gridReactiveData.sheetConfig.cw[i].w
                  break
                }
              }
            }
          }
          if (
            gridReactiveData.sheetConfig.cv &&
            gridReactiveData.sheetConfig.cv.length
          ) {
            for (let i = 0; i < gridReactiveData.sheetConfig.cv.length; i++) {
              if (
                gridReactiveData.sheetConfig.cv[i].hasOwnProperty('c') &&
                isNumeric(gridReactiveData.sheetConfig.cv[i].c) &&
                gridReactiveData.sheetConfig.cv[i].hasOwnProperty('v') &&
                isNumeric(gridReactiveData.sheetConfig.cv[i].v) &&
                gridReactiveData.sheetConfig.cv[i].v === 0
              ) {
                if (Number(gridReactiveData.sheetConfig.cv[i].c) === index) {
                  cvConf = true
                  gridReactiveData.gridColumnsVisibleChanged[`${index}`] =
                    gridReactiveData.sheetConfig.cv[i].v
                  break
                }
              }
            }
          }
          gridReactiveData.columnConfigs.push(
            new Column(
              index + 1,
              null,
              null,
              cwConf || 'default',
              null,
              !cvConf,
              false,
              'center',
            ),
          )
        })

        gridReactiveData.startColIndex = 0
        gridReactiveData.endColIndex = 0

        const rows = [
          ...Array<Record<string, unknown>>(props.minDimensions[0].valueOf()),
        ]

        rows.forEach((_, index) => {
          let rhConf = null
          let rvConf = false
          if (
            gridReactiveData.sheetConfig.rh &&
            gridReactiveData.sheetConfig.rh.length
          ) {
            for (let i = 0; i < gridReactiveData.sheetConfig.rh.length; i++) {
              if (
                gridReactiveData.sheetConfig.rh[i].hasOwnProperty('r') &&
                isNumeric(gridReactiveData.sheetConfig.rh[i].r) &&
                gridReactiveData.sheetConfig.rh[i].hasOwnProperty('h') &&
                isNumeric(gridReactiveData.sheetConfig.rh[i].h)
              ) {
                if (Number(gridReactiveData.sheetConfig.rh[i].r) === index) {
                  rhConf = gridReactiveData.sheetConfig.rh[i].h
                  gridReactiveData.gridRowsHeightChanged[`${index}`] =
                    gridReactiveData.sheetConfig.rh[i].h
                  break
                }
              }
            }
          }
          if (
            gridReactiveData.sheetConfig.rv &&
            gridReactiveData.sheetConfig.rv.length
          ) {
            for (let i = 0; i < gridReactiveData.sheetConfig.rv.length; i++) {
              if (
                gridReactiveData.sheetConfig.rv[i].hasOwnProperty('r') &&
                isNumeric(gridReactiveData.sheetConfig.rv[i].r) &&
                gridReactiveData.sheetConfig.rv[i].hasOwnProperty('v') &&
                isNumeric(gridReactiveData.sheetConfig.rv[i].v) &&
                gridReactiveData.sheetConfig.rv[i].v === 0
              ) {
                if (Number(gridReactiveData.sheetConfig.rv[i].r) === index) {
                  rvConf = true
                  gridReactiveData.gridRowsVisibleChanged[`${index}`] =
                    gridReactiveData.sheetConfig.rv[i].v
                  break
                }
              }
            }
          }
          gridReactiveData.rowConfigs.push(
            new Row(
              index,
              null,
              null,
              rhConf || 'default',
              null,
              !rvConf,
              false,
              'center',
            ),
          )
        })
        gridReactiveData.startIndex = 0
        gridReactiveData.endIndex = 0

        // 总是初始化一个updateCurrentSheetData，与当前的row， column尺寸大小一致
        gridReactiveData.currentSheetData = new Array(rows.length)
          .fill(null)
          .map(() => new Array(columns.length - 1).fill(null))
        resolve()
      })

    const handleGlobalMousewheelEvent = (event: MouseEvent) => {
      if ($vmaCalcGrid.closeMenu) {
        const { ctxMenuStore } = gridReactiveData
        const ctxMenu = refGridCtxMenu.value
        if (
          ctxMenuStore.visible &&
          ctxMenu &&
          !DomTools.getEventTargetNode(event, ctxMenu).flag
        ) {
          $vmaCalcGrid.closeMenu()
        }
      }
    }

    const handleGlobalResizeEvent = () => {
      if ($vmaCalcGrid.closeMenu) {
        $vmaCalcGrid.closeMenu()
      }
      $vmaCalcGrid.recalculate(true)
    }

    const handleGlobalMousedownEvent = (event: MouseEvent) => {
      if ($vmaCalcGrid.closeMenu) {
        const { ctxMenuStore } = gridReactiveData
        const ctxMenu = refGridCtxMenu.value
        if (
          ctxMenuStore.visible &&
          ctxMenu &&
          !DomTools.getEventTargetNode(event, ctxMenu).flag
        ) {
          $vmaCalcGrid.closeMenu()
        }
      }
    }

    const handleGlobalKeydownEvent = (event: KeyboardEvent) => {
      if ($vmaCalcGrid.closeMenu) {
        const { ctxMenuStore } = gridReactiveData
        const ctxMenu = refGridCtxMenu.value
        if (
          ctxMenuStore.visible &&
          ctxMenu &&
          !DomTools.getEventTargetNode(event, ctxMenu).flag
        ) {
          $vmaCalcGrid.closeMenu()
        }
      }
    }

    watch(
      () => props.size,
      () => {
        $vmaCalcGrid
          .recalculate(true)
          .then(() => {
            $vmaCalcGrid.calcCurrentCellPosition()
          })
          .finally(() => {
            GlobalEvent.on(
              $vmaCalcGrid,
              'mousewheel',
              handleGlobalMousewheelEvent,
            )
            GlobalEvent.on(
              $vmaCalcGrid,
              'mousedown',
              handleGlobalMousedownEvent,
            )
            GlobalEvent.on($vmaCalcGrid, 'keydown', handleGlobalKeydownEvent)
            GlobalEvent.on($vmaCalcGrid, 'resize', handleGlobalResizeEvent)
            if ($vmaCalcGrid.handleContextmenuEvent) {
              GlobalEvent.on(
                $vmaCalcGrid,
                'contextmenu',
                $vmaCalcGrid.handleContextmenuEvent,
              )
            }
          })
      },
    )

    watch(
      () => gridReactiveData.currentCell,
      () => {
        $vmaCalcGrid.calcCurrentCellPosition()
      },
      {
        deep: true,
      },
    )

    // watch(
    //     () => gridReactiveData.currentArea,
    //     () => {
    //       $vmaCalcGrid.calcCurrentCellPosition()
    //     },
    //     {
    //       deep: true,
    //     },
    // )

    watch(
      () => gridReactiveData.currentCellEditorActive,
      () => {
        $vmaCalcGrid.calcCurrentCellDisplay()
      },
    )

    onMounted(() => {
      loadData().then(() => {
        initCurrentSheetData().then(() => {
          $vmaCalcGrid
            .recalculate(true)
            .then(() => {
              const el = refGrid.value
              const parentEl = $vmaCalcGrid.getParentElem()
              resizeObserver = createResizeEvent(() => {
                $vmaCalcGrid.recalculate(true)
              })
              if (el) {
                resizeObserver.observe(el)
              }
              if (parentEl) {
                resizeObserver.observe(parentEl)
              }
              GlobalEvent.on(
                $vmaCalcGrid,
                'mousewheel',
                handleGlobalMousewheelEvent,
              )
              GlobalEvent.on(
                $vmaCalcGrid,
                'mousedown',
                handleGlobalMousedownEvent,
              )
              GlobalEvent.on($vmaCalcGrid, 'keydown', handleGlobalKeydownEvent)
              GlobalEvent.on($vmaCalcGrid, 'resize', handleGlobalResizeEvent)
              if ($vmaCalcGrid.handleContextmenuEvent) {
                GlobalEvent.on(
                  $vmaCalcGrid,
                  'contextmenu',
                  $vmaCalcGrid.handleContextmenuEvent,
                )
              }
            })
            .finally(() => {
              $vmaCalcGrid.calc()
            })
        })
      })
    })

    onBeforeUnmount(() => {
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      if ($vmaCalcGrid.closeMenu) {
        $vmaCalcGrid.closeMenu()
      }
    })

    onUnmounted(() => {
      GlobalEvent.off($vmaCalcGrid, 'mousedown')
      GlobalEvent.off($vmaCalcGrid, 'mousewheel')
      GlobalEvent.off($vmaCalcGrid, 'keydown')
      GlobalEvent.off($vmaCalcGrid, 'resize')
      GlobalEvent.off($vmaCalcGrid, 'contextmenu')
    })

    const renderVN = () =>
      h(
        'div',
        {
          ref: refGrid,
          class: [
            'vma-grid',
            `${props.size}`,
            `${props.type}`,
            {
              'overflow-x': gridReactiveData.overflowX,
              'overflow-y': gridReactiveData.overflowY,
            },
          ],
        },
        [
          props.resizeColumn
            ? h('div', {
                ref: refColumnResizeBar,
                class: ['column-resize-bar', `${props.type}`],
                style: gridReactiveData.overflowX
                  ? {
                      height: `calc(100% - ${gridReactiveData.scrollbarHeight}px)`,
                    }
                  : {},
              })
            : createCommentVNode(),
          props.resizeRow
            ? h('div', {
                ref: refRowResizeBar,
                class: ['row-resize-bar', `${props.type}`],
                style: gridReactiveData.overflowY
                  ? {
                      width: `calc(100% - ${gridReactiveData.scrollbarWidth}px)`,
                    }
                  : {},
              })
            : createCommentVNode(),
          h(resolveComponent('vma-grid-ctx-menu') as ComponentOptions, {
            ref: refGridCtxMenu,
          }),
          // Header
          h(GridHeaderComponent, {
            uid: $vmaCalcGrid.uId,
            class: ['left'],
            style: {
              height: `${gridReactiveData.gridHeaderHeight}px`,
              width: `${gridReactiveData.gridLeftFixedHeaderWidth}px`,
            },
            fixedType: 'left',
            type: props.type,
          }),
          h(GridHeaderComponent, {
            uid: $vmaCalcGrid.uId,
            class: ['center'],
            style: {
              height: `${gridReactiveData.gridHeaderHeight}px`,
              width: `${gridReactiveData.gridHeaderWidth}px`,
            },
            fixedType: 'center',
            type: props.type,
          }),
          // Body
          h(GridBodyComponent, {
            uid: $vmaCalcGrid.uId,
            class: ['left-top'],
            fixedType: 'left-top',
            type: props.type,
          }),
          h(GridBodyComponent, {
            uid: $vmaCalcGrid.uId,
            class: ['left'],
            fixedType: 'left',
            type: props.type,
          }),
          h(GridBodyComponent, {
            uid: $vmaCalcGrid.uId,
            class: ['top'],
            fixedType: 'top',
            type: props.type,
          }),
          h(GridBodyComponent, {
            uid: $vmaCalcGrid.uId,
            class: ['center'],
            style: {
              height: `${gridReactiveData.gridBodyHeight}px`,
            },
            fixedType: 'center',
            type: props.type,
          }),
          StylePluginComponent.name
            ? h(StylePluginComponent, {
                type: 'font-size',
                ref: refStylePlugin,
              })
            : createCommentVNode(),
          StyleBorderComponent.name
            ? h(StyleBorderComponent, {
                type: 'foo',
                ref: refBorderPlugin,
              })
            : createCommentVNode(),
        ],
      )
    $vmaCalcGrid.renderVN = renderVN

    provide('$vmaCalcGrid', $vmaCalcGrid)

    return $vmaCalcGrid
  },
  render() {
    return this.renderVN()
  },
})
