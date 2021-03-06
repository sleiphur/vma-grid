import {
  SizeType,
  CompType,
  VmaGridComponentInstance,
} from './common'
import {ComponentPublicInstance, ref, Ref, RenderFunction, SetupContext} from 'vue'
import { Cell } from '../src/grid/src/helper/Cell'
import {
  VmaGridAlignPluginConstructor,
  VmaGridBorderPluginConstructor,
  VmaGridStylePluginConstructor
} from "../plugins/types";

export type AlignHorizontalType = 'left' | 'center' | 'right'

export type AlignVerticalType = 'top' | 'center' | 'bottom'

export type BorderType = 'full' | 'normal' | 'outer' | 'inner' | 'none'

export type VmaGridCellType =
  | 'row-indicator'
  | 'column-indicator'
  | 'grid-corner'
  | 'gutter-corner'
  | 'normal'

export namespace VmaGridPropTypes {
  export type Id = string
  export type Type = CompType
  export type Editable = boolean
  export type Size = SizeType
  export type Border = BorderType
  export type Data = any[]
  export type AlignHorizontal = AlignHorizontalType
  export type AlignVertical = AlignVerticalType
  export type MinDimensions = number[]
  export type ResizeColumn = boolean
  export type ResizeRow = boolean
  export type GridDefaultRowHeight = number
  export type GridDefaultColumnWidth = number
  export type Loading = boolean
  export type CustomFunction = Record<string, unknown>

  export interface ScrollY {
    gt?: number;
    oSize?: number;
    enabled?: boolean;
  }
}

export type VmaGridOptions = VmaGridProps

export interface VmaGridProps {
  id?: VmaGridPropTypes.Id
  type?: VmaGridPropTypes.Type
  editable?: VmaGridPropTypes.Editable
  size?: VmaGridPropTypes.Size
  border?: VmaGridPropTypes.Border
  data?: VmaGridPropTypes.Data
  alignH?: VmaGridPropTypes.AlignHorizontal
  alignV?: VmaGridPropTypes.AlignVertical
  minDimensions?: VmaGridPropTypes.MinDimensions
  resizeColumn?: VmaGridPropTypes.ResizeColumn
  resizeRow?: VmaGridPropTypes.ResizeRow
  gridRowHeight?: VmaGridPropTypes.GridDefaultRowHeight
  gridColumnWidth?: VmaGridPropTypes.GridDefaultColumnWidth
  loading?: VmaGridPropTypes.Loading
  functions?: VmaGridPropTypes.CustomFunction
  scrollY?: VmaGridPropTypes.ScrollY
}

export interface VmaGridMethods {
  recalculate(refresh: boolean): Promise<any>
  calc(): void
  triggerScrollXEvent(evnt: Event): void
  triggerScrollYEvent(evnt: Event): void
  calcCurrentCellPosition(): void
  calcCurrentCellDisplay(): void
  getParentElem(): Element | null;
  updateColumn(type: string, row: number, col: number): void
  updateRow(type: string, row: number, col: number): void
  updateCell(type: string, row: number, col: number, eRow: number, eCol: number, item: string): void
  getCell(type: string, row: number, col: number): any
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VmaGridPrivateMethods {}

export interface VmaGridReactiveData {
  // ??????????????????
  loading: boolean

  dimensionX: number
  dimensionY: number

  sheets: any[]
  sheet: any
  sheetData: any[]
  sheetDataType: string
  sheetConfig: {
    rh: Record<string, any>[]
    cw: Record<string, any>[]
    rv: Record<string, any>[]
    cv: Record<string, any>[]
  }
  currentSheetData: Cell[][]

  // ?????????
  columnConfigs: any[]
  // ?????????????????????
  columnLeftFixedConfigs: any[]

  // ?????????
  rowConfigs: any[]
  // ?????????????????????
  rowTopFixedConfigs: any[]

  // colgroup??????
  headerColgroup: any
  // ???????????????colgroup??????
  headerLeftFixedColgroup: any

  // ??????HTML Table
  headerTable: any
  headerLeftFixedTable: any
  // ??????HTML Table
  bodyTable: any
  // ??????HTML Table
  footerTable: any

  // scroll??????
  gridBodyScrollTop: number
  gridBodyScrollLeft: number
  overflowX: boolean
  overflowY: boolean
  scrollbarWidth: number
  scrollbarHeight: number

  // grid ??????
  gridWidth: number
  tableWidth: number
  // grid ??????
  gridHeight: number

  gridHeaderHeight: number
  gridHeaderWidth: number
  gridLeftFixedHeaderWidth: number
  gridHeaderTableWidth: number
  gridHeaderTableHeight: number

  gridBodyHeight: number
  gridBodyTableHeight: number
  gridFooterHeight: number
  gridLeftFixedBodyHeight: number
  gridLeftFixedBodyWidth: number

  // ?????????
  columns: {
    firstList: any[]
    leftList: any[]
    otherList: any[]
  }

  // ?????????
  rows: {
    topList: any[]
    otherList: any[]
  }

  // ???????????????
  cells: {
    errorMap: Record<string, any>
    cycleMap: Record<string, any>
    noCycleMap: Record<string, any>
  }

  currentCell: any
  currentCellBorderStyle: Record<string, any>
  currentCellEditorStyle: Record<string, any>
  currentCellEditorActive: boolean
  currentCellEditorContent: any

  currentArea: Record<string, any>
  currentAreaBorderStyle: Record<string, any>

  startIndex: number
  endIndex: number

  startColIndex: number
  endColIndex: number

  lastScrollLeft: number
  lastScrollTop: number
  lastScrollTime: number

  gridRowsHeightChanged: Record<string, number>
  gridColumnsWidthChanged: Record<string, number>

  gridRowsVisibleChanged: Record<string, number>
  gridColumnsVisibleChanged: Record<string, number>

  // ??????????????????????????????
  ctxMenuStore: {
    selected: any
    visible: boolean
    showChild: boolean
    selectChild: any
    list: any[][]
    style: any
    [key: string]: any
  }

  currentAreaStatus: boolean
}

export interface VmaGridRefs {
  refColumnResizeBar: Ref<HTMLDivElement>
  refRowResizeBar: Ref<HTMLDivElement>

  refGrid: Ref<HTMLDivElement>

  // Body
  refGridBody: Ref<HTMLDivElement>
  refGridLeftFixedBody: Ref<HTMLDivElement>
  refGridLeftFixedBodyScrollWrapper: Ref<HTMLDivElement>
  refGridLeftFixedBodyX: Ref<HTMLDivElement>
  refGridLeftFixedBodyY: Ref<HTMLDivElement>
  refGridBodyX: Ref<HTMLDivElement>
  refGridBodyY: Ref<HTMLDivElement>
  refGridTopFixedBody: Ref<HTMLDivElement>
  refGridBottomFixedBody: Ref<HTMLDivElement>
  refGridLeftTopFixedBody: Ref<HTMLDivElement>

  refGridBodyTable: Ref<HTMLTableElement>
  refGridLeftFixedBodyTable: Ref<HTMLTableElement>
  refGridTopFixedBodyTable: Ref<HTMLTableElement>
  refGridBottomFixedBodyTable: Ref<HTMLTableElement>
  refGridLeftTopFixedBodyTable: Ref<HTMLTableElement>

  refGridBodyColgroup: Ref<HTMLTableColElement>
  refGridLeftFixedBodyColgroup: Ref<HTMLTableColElement>
  refGridTopFixedBodyColgroup: Ref<HTMLTableColElement>
  refGridBottomFixedBodyColgroup: Ref<HTMLTableColElement>
  refGridLeftTopFixedBodyColgroup: Ref<HTMLTableColElement>

  // Header
  refGridHeader: Ref<HTMLDivElement>
  refGridLeftFixedHeader: Ref<HTMLDivElement>
  refGridLeftFixedHeaderX: Ref<HTMLDivElement>

  refGridHeaderTable: Ref<HTMLTableElement>
  refGridLeftFixedHeaderTable: Ref<HTMLTableElement>

  refGridHeaderColgroup: Ref<HTMLTableColElement>
  refGridLeftFixedHeaderColgroup: Ref<HTMLTableColElement>

  refCurrentCellEditor: Ref<ComponentPublicInstance>

  refCurrentCellBorderTop: Ref<HTMLDivElement>
  refCurrentCellBorderRight: Ref<HTMLDivElement>
  refCurrentCellBorderBottom: Ref<HTMLDivElement>
  refCurrentCellBorderLeft: Ref<HTMLDivElement>
  refCurrentCellBorderCorner: Ref<HTMLDivElement>

  refCurrentAreaBorderTop: Ref<HTMLDivElement>
  refCurrentAreaBorderRight: Ref<HTMLDivElement>
  refCurrentAreaBorderBottom: Ref<HTMLDivElement>
  refCurrentAreaBorderLeft: Ref<HTMLDivElement>
  refCurrentAreaBorderCorner: Ref<HTMLDivElement>

  refGridCtxMenu: Ref<HTMLDivElement>

  refColorPicker: Ref<HTMLDivElement>

  refStylePlugin: Ref<VmaGridStylePluginConstructor>
  refBorderPlugin: Ref<VmaGridBorderPluginConstructor>
  refAlignPlugin: Ref<VmaGridAlignPluginConstructor>
}

export type VmaGridEmits = ['update:data', 'change']

export interface VmaGridConstructor
  extends VmaGridComponentInstance,
    VmaGridMethods, VmaGridPrivateMethods {
  props: VmaGridOptions
  context: SetupContext<VmaGridEmits>
  reactiveData: VmaGridReactiveData
  getRefs(): VmaGridRefs
  renderVN: RenderFunction
}

export type HeaderFixedType = 'center' | 'left' | 'right'

export * from './hooks'

export namespace VmaGridHeaderPropTypes {
  export type Fixed = HeaderFixedType
  export type Type = CompType
}

export type VmaGridHeaderOptions = VmaGridHeaderProps

export interface VmaGridHeaderProps {
  fixed?: VmaGridHeaderPropTypes.Fixed
  type?: VmaGridHeaderPropTypes.Type
}

export interface VmaGridHeaderMethods {}

export type VmaGridHeaderEmits = []

export interface VmaGridHeaderReactiveData {}

export interface VmaGridHeaderConstructor
  extends VmaGridComponentInstance,
    VmaGridHeaderMethods {
  props: VmaGridHeaderOptions
  context: SetupContext<VmaGridHeaderEmits>
  reactiveData: VmaGridHeaderReactiveData
  renderVN: RenderFunction
}

export type BodyFixedType =
  | 'center'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'left-top'

export namespace VmaGridBodyPropTypes {
  export type Fixed = BodyFixedType
  export type Type = CompType
}

export type VmaGridBodyOptions = VmaGridBodyProps

export interface VmaGridBodyProps {
  fixed?: VmaGridBodyPropTypes.Fixed
  type?: VmaGridBodyPropTypes.Type
}

export interface VmaGridBodyMethods {}

export type VmaGridBodyEmits = []

export interface VmaGridBodyReactiveData {}

export interface VmaGridBodyConstructor
  extends VmaGridComponentInstance,
    VmaGridBodyMethods {
  props: VmaGridBodyOptions
  context: SetupContext<VmaGridBodyEmits>
  reactiveData: VmaGridBodyReactiveData
  renderVN: RenderFunction
}

export namespace VmaGridCellPropTypes {
  export type Cat = VmaGridCellType
  export type Type = CompType
}

export type VmaGridCellOptions = VmaGridCellProps

export interface VmaGridCellProps {
  cat: VmaGridCellPropTypes.Cat
  type: VmaGridCellPropTypes.Type
  r: number
  c: number
}

export interface VmaGridCellMethods {}

export type VmaGridCellEmits = []

export interface VmaGridCellReactiveData {}

export interface VmaGridCellConstructor
  extends VmaGridComponentInstance,
    VmaGridCellMethods {
  props: VmaGridCellOptions
  context: SetupContext<VmaGridCellEmits>
  reactiveData: VmaGridCellReactiveData
  renderVN: RenderFunction
}
