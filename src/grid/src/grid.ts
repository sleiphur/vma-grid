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
} from 'vue'

import { isNumeric } from '../../utils/validate/number'
import { Guid } from '../../utils/guid'
import { FormulaParser, DepParser } from '../../formula'
import { Cell } from './helper/Cell'
import props from './props/grid'
import {
  VmaGridConstructor,
  VmaGridEmits,
  VmaGridMethods,
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
} from './utils/utils'
import { debounce } from './utils/debounce/debounce'
import GlobalEvent from './events'

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

    const FoobarPluginComponent = resolveComponent(
      'vma-grid-foobar-plugin',
    ) as ComponentOptions

    // 下面调用一个并不存在的plugin
    const FoobarPluginComponent123 = resolveComponent(
      'vma-grid-foobar-plugin123',
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

    const refFoobarPlugin = ref() as Ref<ComponentPublicInstance>

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
      currentCellStyle: {
        transform: 'translateX(0) translateY(0)',
        display: 'none',
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
      currentCellEditorActive: false,
      currentCellEditorContent: null,

      startIndex: 0,
      endIndex: 0,

      startColIndex: 0,
      endColIndex: 0,

      lastScrollLeft: 0,
      lastScrollTop: 0,
      lastScrollTime: 0,

      gridRowsHeightChanged: {},
      gridColumnsWidthChanged: {},
    } as unknown as VmaGridReactiveData)

    const $vmaCalcGrid = {
      uId: Guid.create().toString(),
      props,
      context,
      reactiveData: gridReactiveData,
      getRefs: () => gridRefs,
    } as unknown as VmaGridConstructor

    const rcw = computed(() =>
      getRenderWidth(props.gridColumnWidth, props.size),
    )

    const rrh = computed(() => getRenderHeight(props.gridRowHeight, props.size))

    const calcCurrentCellDisplay = () => {
      if (gridReactiveData.currentCell) {
        const { r, c } = gridReactiveData.currentCell
        if (
          r! <= gridReactiveData.endIndex &&
          r! >= gridReactiveData.startIndex &&
          c! <= gridReactiveData.endColIndex &&
          c! >= gridReactiveData.startColIndex &&
          gridReactiveData.currentCellEditorActive
        ) {
          gridReactiveData.currentCellStyle.display = 'block'
        } else {
          gridReactiveData.currentCellStyle.display = 'none'
        }
      } else {
        gridReactiveData.currentCellStyle.display = 'none'
      }
    }

    const calcCurrentCellPosition = () => {
      if (gridReactiveData.currentCell) {
        const leftSpaceWidth = getXSpaceFromColumnWidths(
          gridReactiveData.startColIndex,
          rcw.value,
          gridReactiveData.gridColumnsWidthChanged,
        )

        const topSpaceHeight = getYSpaceFromRowHeights(
          gridReactiveData.startIndex,
          rrh.value,
          gridReactiveData.gridRowsHeightChanged,
        )
        const { r, c } = gridReactiveData.currentCell
        nextTick(() => {
          refGridBodyTable.value
            .querySelectorAll(`td[row="${r}"][col="${c! + 1}"]`)
            .forEach((cellElem: any) => {
              const marginLeft = `${leftSpaceWidth + cellElem.offsetLeft}px`
              const marginTop = `${topSpaceHeight + cellElem.offsetTop}px`
              gridReactiveData.currentCellStyle.transform = `translateX(${marginLeft}) translateY(${marginTop})`
              gridReactiveData.currentCellStyle.height = `${cellElem.offsetHeight}px`
              gridReactiveData.currentCellStyle.width = `${cellElem.offsetWidth}px`
            })
        })
      }
    }

    const rowIndicatorElemWidth = computed(
      () =>
        Math.max(
          getRowIndicatorRenderWidth(props.size) +
            gridReactiveData.endIndex.toString().length *
              getRowIndicatorRenderWidth(props.size),
          40,
        ), // 行号列最小宽度40px
    )

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
                columnConfigs[index].visible
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
            if (index === 0) {
              colgroupElem.style.width = `${rowIndicatorElemWidth.value}px`
            } else if (index < columnConfigs.length) {
              colgroupElem.style.width = `${
                columnConfigs[index].visible
                  ? typeof columnConfigs[index].renderWidth === 'string'
                    ? rcw.value
                    : columnConfigs[index].renderWidth
                  : 0
              }px`
            } else {
              colgroupElem.style.width = `${scrollbarWidth}px`
            }
          },
        )
        Array.from(refGridLeftFixedBodyColgroup.value.children).forEach(
          (colgroupElem: any, index: number) => {
            if (index === 0) {
              colgroupElem.style.width = `${rowIndicatorElemWidth.value}px`
            } else if (index < columnConfigs.length) {
              colgroupElem.style.width = `${
                columnConfigs[index].visible
                  ? typeof columnConfigs[index].renderWidth === 'string'
                    ? rcw.value
                    : columnConfigs[index].renderWidth
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
      )}px`
      refGridLeftFixedHeaderX.value.style.width = `${
        getWidth(
          rowIndicatorElemWidth.value,
          gridReactiveData.columnConfigs.length,
          rcw.value,
          gridReactiveData.gridColumnsWidthChanged,
        ) + scrollbarWidth
      }px`
      refGridLeftFixedBodyY.value.style.height = `${getHeight(
        gridReactiveData.rowConfigs.length,
        rrh.value,
        gridReactiveData.gridRowsHeightChanged,
      )}px`
      refGridBodyX.value.style.width = refGridLeftFixedBodyX.value.style.width
      refGridBodyY.value.style.height = refGridLeftFixedBodyY.value.style.height
      refGridLeftFixedBody.value.style.top = `${gridReactiveData.gridHeaderHeight}px`
      refGridLeftFixedBodyTable.value.style.width = `${tableWidth}px`
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
        tableWidth +=
          typeof column.renderWidth === 'string'
            ? rcw.value
            : column.renderWidth
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
      )
      const marginLeft = `${leftSpaceWidth}px`
      const topSpaceHeight = getYSpaceFromRowHeights(
        gridReactiveData.startIndex,
        rrh.value,
        gridReactiveData.gridRowsHeightChanged,
      )
      const marginTop = `${topSpaceHeight}px`
      if (refGridBodyTable.value) {
        refGridBodyTable.value.style.transform = `translateX(${marginLeft}) translateY(${marginTop})`
        refGridLeftFixedBodyTable.value.style.transform = `translateY(${marginTop})`
      }
      if (refGridHeaderTable.value) {
        refGridHeaderTable.value.style.transform = `translateX(${marginLeft})`
      }
    }

    const calcScrollSizeX = (scrollBodyElem: HTMLDivElement): Promise<void> =>
      new Promise((resolve): void => {
        const scrollLeft = scrollBodyElem.scrollLeft
        const visibleIndex = getIndexFromColumnWidths(
          scrollLeft,
          rcw.value,
          gridReactiveData.gridColumnsWidthChanged,
        )
        const viewportWidth = refGridBody.value.clientWidth
        const visibleSize = Math.ceil(viewportWidth / rcw.value)

        const offsetItem = {
          startColIndex: Math.max(0, visibleIndex - 1 - 5),
          endColIndex: visibleIndex + visibleSize + 5,
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
        )
        const viewportHeight =
          refGridBody.value.clientHeight || refGrid.value.clientHeight
        const visibleSize = Math.ceil(viewportHeight / rrh.value)

        const offsetItem = {
          startIndex: Math.max(0, visibleIndex - 1 - 5),
          endIndex: visibleIndex + visibleSize + 5,
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
        nextTick(() => {
          updateStyle()
        })
      })
    }, 20)

    const debounceScrollY = debounce((scrollBodyElem: HTMLDivElement) => {
      calcScrollSizeY(scrollBodyElem).then(() => {
        nextTick(() => {
          updateStyle()
        })
      })
    }, 20)

    const computeScrollLoad = () =>
      nextTick().then(() => {
        calcScrollSizeX(refGridBody.value)
        calcScrollSizeY(refGridBody.value)
        nextTick(updateStyle)
      })

    const gridMethods = {
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
                              `${c - 1}`
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
                          `${fdItem.col - 1}`
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

    const initCurrentSheetData = (): Promise<void> =>
      new Promise((resolve): void => {
        gridReactiveData.rowConfigs.forEach((row: Row) => {
          // const rowData = []
          gridReactiveData.columnConfigs.forEach((col: Column, colIndex) => {
            if (colIndex > 0) {
              const cellData = gridReactiveData.sheetData.find(
                (data) => data.r === row.index! + 1 && data.c === col.index,
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
                )
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
          gridReactiveData.columnConfigs.push(
            new Column(
              index + 1,
              null,
              null,
              cwConf || 'default',
              null,
              true,
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
          gridReactiveData.rowConfigs.push(
            new Row(
              index,
              null,
              null,
              rhConf || 'default',
              null,
              true,
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
      console.log('handleGlobalMousewheelEvent', event)
    }

    watch(
      () => props.size,
      () => {
        $vmaCalcGrid.recalculate(true).finally(() => {
          GlobalEvent.on(
            $vmaCalcGrid,
            'mousewheel',
            handleGlobalMousewheelEvent,
          )
        })
      },
    )

    watch(
      () => gridReactiveData.currentCell,
      () => {
        calcCurrentCellPosition()
      },
    )

    watch(
      () => gridReactiveData.currentCellEditorActive,
      () => {
        calcCurrentCellDisplay()
      },
    )

    onMounted(() => {
      // 入口
      nextTick(() => {
        loadData().then(() => {
          nextTick(() => {
            // currentSheetData 初始化
            initCurrentSheetData().then(() => {
              $vmaCalcGrid.recalculate(true)
              nextTick(() => {
                $vmaCalcGrid.calc()
              }).finally(() => {
                GlobalEvent.on(
                  $vmaCalcGrid,
                  'mousewheel',
                  handleGlobalMousewheelEvent,
                )
              })
            })
          })
        })
      })
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
          // Header
          h(GridHeaderComponent, {
            class: ['left'],
            style: {
              height: `${gridReactiveData.gridHeaderHeight}px`,
              width: `${gridReactiveData.gridLeftFixedHeaderWidth}px`,
            },
            fixedType: 'left',
            type: props.type,
          }),
          h(GridHeaderComponent, {
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
            class: ['left-top'],
            fixedType: 'left-top',
            type: props.type,
          }),
          h(GridBodyComponent, {
            class: ['left'],
            fixedType: 'left',
            type: props.type,
          }),
          h(GridBodyComponent, {
            class: ['top'],
            fixedType: 'top',
            type: props.type,
          }),
          h(GridBodyComponent, {
            class: ['center'],
            style: {
              height: `${gridReactiveData.gridBodyHeight}px`,
            },
            fixedType: 'center',
            type: props.type,
          }),
          FoobarPluginComponent
            ? h(FoobarPluginComponent, {
                type: 'foo',
                ref: refFoobarPlugin,
                style: {
                  height: `100px`,
                  width: `100px`,
                },
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
