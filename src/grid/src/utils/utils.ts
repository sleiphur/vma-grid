import DirectCycle from './dag/DirectCycle'
import { VmaGridPropTypes } from '../../../../types/grid'
import Digraph from './dag/Digraph'
import DepthFirstOrder from './dag/DepthFirstOrder'

export function getRowIndicatorRenderWidth(
  gridSize: VmaGridPropTypes.Size,
): number {
  if (gridSize === 'xxx-large') {
    return 20
  }
  if (gridSize === 'xx-large') {
    return 18
  }
  if (gridSize === 'x-large') {
    return 16
  }
  if (gridSize === 'large') {
    return 14
  }
  if (gridSize === 'normal') {
    return 12
  }
  if (gridSize === 'small') {
    return 10
  }
  if (gridSize === 'mini') {
    return 8
  }
  return 12
}

export function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function getRenderHeight(
  defaultGridRowHeight: number | undefined,
  gridSize: VmaGridPropTypes.Size,
): number {
  if (defaultGridRowHeight) {
    if (gridSize === 'xxx-large') {
      return Math.max(44, defaultGridRowHeight)
    }
    if (gridSize === 'xx-large') {
      return Math.max(40, defaultGridRowHeight)
    }
    if (gridSize === 'x-large') {
      return Math.max(36, defaultGridRowHeight)
    }
    if (gridSize === 'large') {
      return Math.max(32, defaultGridRowHeight)
    }
    if (gridSize === 'normal') {
      return Math.max(28, defaultGridRowHeight)
    }
    if (gridSize === 'small') {
      return Math.max(24, defaultGridRowHeight)
    }
    if (gridSize === 'mini') {
      return Math.max(20, defaultGridRowHeight)
    }
  } else {
    if (gridSize === 'xxx-large') {
      return 44
    }
    if (gridSize === 'xx-large') {
      return 40
    }
    if (gridSize === 'x-large') {
      return 36
    }
    if (gridSize === 'large') {
      return 32
    }
    if (gridSize === 'normal') {
      return 28
    }
    if (gridSize === 'small') {
      return 24
    }
    if (gridSize === 'mini') {
      return 20
    }
  }
  return 28
}

export function getRenderWidth(
  defaultGridColumnWidth: number | undefined,
  gridSize: VmaGridPropTypes.Size,
): number {
  if (defaultGridColumnWidth) {
    if (gridSize === 'xxx-large') {
      return Math.max(180, defaultGridColumnWidth)
    }
    if (gridSize === 'xx-large') {
      return Math.max(168, defaultGridColumnWidth)
    }
    if (gridSize === 'x-large') {
      return Math.max(156, defaultGridColumnWidth)
    }
    if (gridSize === 'large') {
      return Math.max(144, defaultGridColumnWidth)
    }
    if (gridSize === 'normal') {
      return Math.max(132, defaultGridColumnWidth)
    }
    if (gridSize === 'small') {
      return Math.max(120, defaultGridColumnWidth)
    }
    if (gridSize === 'mini') {
      return Math.max(108, defaultGridColumnWidth)
    }
  } else {
    if (gridSize === 'xxx-large') {
      return 180
    }
    if (gridSize === 'xx-large') {
      return 168
    }
    if (gridSize === 'x-large') {
      return 156
    }
    if (gridSize === 'large') {
      return 144
    }
    if (gridSize === 'normal') {
      return 132
    }
    if (gridSize === 'small') {
      return 120
    }
    if (gridSize === 'mini') {
      return 108
    }
  }
  return 132
}

export function filterVertexes(
  vertexes: Record<string, any>,
  errorMap: Record<string, any>,
) {
  const vertexKeys = Object.keys(vertexes)
  if (vertexKeys.length === 0) {
    return { noErrorVertexes: vertexes, errorMap }
  }
  const errorMapKeys = Object.keys(errorMap)
  let hasErrorDep = false
  for (let i = 0; i < vertexKeys.length; i++) {
    if (
      vertexes.hasOwnProperty(vertexKeys[i]) &&
      vertexes[vertexKeys[i]].children &&
      vertexes[vertexKeys[i]].children.length > 0
    ) {
      const dp = vertexes[vertexKeys[i]].children.find(
        (item: any) => errorMapKeys.indexOf(item) >= 0,
      )
      if (dp != null) {
        hasErrorDep = true
        errorMap[vertexKeys[i]] = vertexes[vertexKeys[i]]
        delete vertexes[vertexKeys[i]]
        break
      }
    }
    if (hasErrorDep) {
      filterVertexes(vertexes, errorMap)
    }
  }
  return { noErrorVertexes: vertexes, errorMap }
}

export function calcVertexes(
  vertexes: Record<string, any>,
  cycleVertexes: Record<string, any>,
): any {
  const vertexKeys = Object.keys(vertexes)
  let result
  const g = new Digraph(vertexes)
  const dc = new DirectCycle(g)
  if (dc.hasCycle()) {
    for (let i = 0; i < dc.cycle.length; i++) {
      if (!cycleVertexes.hasOwnProperty(vertexKeys[dc.cycle[i]])) {
        cycleVertexes[vertexKeys[dc.cycle[i]]] = [
          vertexes[vertexKeys[dc.cycle[i]]],
        ].concat()[0]
        delete vertexes[vertexKeys[dc.cycle[i]]]
      }
    }
    result = calcVertexes(vertexes, cycleVertexes)
  } else {
    const dfo = new DepthFirstOrder(g)
    const topological: any = []
    if (dfo.reversePost && dfo.reversePost.length > 0) {
      dfo.reversePost.forEach((item) => {
        topological.push(vertexKeys[item])
      })
    }
    result = { g, topological, noCycleVertexes: vertexes, cycleVertexes }
  }
  return result
}

export const getIndexFromRowHeights = (
  scrollTop: number,
  rowHeight: number,
  changedRowHeights: Record<string, number>,
  changedRowVisibles: Record<string, number>,
): number => {
  if (
    Object.keys(changedRowHeights).length &&
    Object.keys(changedRowVisibles).length
  ) {
    // ???????????????????????????????????????????????????
    let sidy = 0
    let y = 0
    do {
      // y += changedRowHeights[`${sidy}`] && changedRowVisibles[`${sidy}`]
      //   ? changedRowHeights[`${sidy}`]
      //   : changedRowVisibles[`${sidy}`] ? rowHeight : 0
      if (changedRowVisibles[`${sidy}`] === 0) {
        // ????????????
        y += 0
      } else {
        // ????????????
        if (changedRowHeights[`${sidy}`]) {
          // ????????????????????????
          y += changedRowHeights[`${sidy}`]
        } else {
          y += rowHeight
        }
      }
      sidy++
    } while (scrollTop >= y)
    return sidy - 1
  }
  if (Object.keys(changedRowHeights).length) {
    // ???????????????????????????
    let sidy = 0
    let y = 0
    do {
      y += changedRowHeights[`${sidy}`]
        ? changedRowHeights[`${sidy}`]
        : rowHeight
      sidy++
    } while (scrollTop >= y)
    return sidy - 1
  }
  if (Object.keys(changedRowVisibles).length) {
    // ??????????????????????????????
    let sidy = 0
    let y = 0
    do {
      y += changedRowVisibles[`${sidy}`] === 0 ? 0 : rowHeight
      sidy++
    } while (scrollTop >= y)
    return sidy - 1
  }

  return Math.floor(scrollTop / rowHeight)
}

export const getIndexFromColumnWidths = (
  scrollLeft: number,
  columnWidth: number,
  changedColumnWidths: Record<string, number>,
  changedColumnVisibles: Record<string, number>,
): number => {
  if (
    Object.keys(changedColumnWidths).length &&
    Object.keys(changedColumnVisibles).length
  ) {
    // ???????????????????????????????????????????????????
    let sidx = 0
    let x = 0
    do {
      if (changedColumnVisibles[`${sidx}`] === 0) {
        // ????????????
        x += 0
      } else {
        // ????????????
        if (changedColumnWidths[`${sidx}`]) {
          // ????????????????????????
          x += changedColumnWidths[`${sidx}`]
        } else {
          x += columnWidth
        }
      }
      sidx++
    } while (scrollLeft >= x)
    return sidx - 1
  }
  if (Object.keys(changedColumnWidths).length) {
    // ???????????????????????????
    let sidx = 0
    let x = 0
    do {
      x += changedColumnWidths[`${sidx}`]
        ? changedColumnWidths[`${sidx}`]
        : columnWidth
      sidx++
    } while (scrollLeft >= x)
    return sidx - 1
  }
  if (Object.keys(changedColumnVisibles).length) {
    // ??????????????????????????????
    let sidx = 0
    let x = 0
    do {
      x += changedColumnVisibles[`${sidx}`] === 0 ? 0 : columnWidth
      sidx++
    } while (scrollLeft >= x)
    return sidx - 1
  }

  return Math.floor(scrollLeft / columnWidth)
}

export const getCurrentAreaHeight = (
  startRowIndex: number,
  endRowIndex: number,
  rowHeight: number,
  changedRowHeights: Record<string, number>,
  changedRowVisibles: Record<string, number>,
): number => {
  let height = 0
  for (let i = startRowIndex; i <= endRowIndex; i++) {
    if (
      Object.keys(changedRowVisibles).length &&
      changedRowVisibles[`${i}`] === 0
    ) {
      height += 0
    } else if (
      Object.keys(changedRowHeights).length &&
      changedRowHeights[`${i}`]
    ) {
      height += changedRowHeights[`${i}`]
    } else {
      height += rowHeight
    }
  }
  return height
}

export const getYSpaceFromRowHeights = (
  startIndex: number,
  rowHeight: number,
  changedRowHeights: Record<string, number>,
  changedRowVisibles: Record<string, number>,
): number => {
  if (
    Object.keys(changedRowHeights).length &&
    Object.keys(changedRowVisibles).length
  ) {
    // ???????????????????????????????????????????????????
    let sidy = 0
    let ySpace = 0
    while (startIndex > sidy) {
      if (changedRowVisibles[`${sidy}`] === 0) {
        // ????????????
        ySpace += 0
      } else {
        // ????????????
        if (changedRowHeights[`${sidy}`]) {
          // ????????????????????????
          ySpace += changedRowHeights[`${sidy}`]
        } else {
          ySpace += rowHeight
        }
      }
      sidy++
    }
    return ySpace
  }
  if (Object.keys(changedRowHeights).length) {
    // ???????????????????????????
    let sidx = 0
    let ySpace = 0
    while (startIndex > sidx) {
      ySpace += changedRowHeights[`${sidx}`]
        ? changedRowHeights[`${sidx}`]
        : rowHeight
      sidx++
    }
    return ySpace
  }
  if (Object.keys(changedRowVisibles).length) {
    // ??????????????????????????????
    let sidx = 0
    let ySpace = 0
    while (startIndex > sidx) {
      ySpace += changedRowVisibles[`${sidx}`] === 0 ? 0 : rowHeight
      sidx++
    }
    return ySpace
  }
  return Math.max(0, startIndex * rowHeight)
}

export const getCurrentAreaWidth = (
  startColIndex: number,
  endColIndex: number,
  columnWidth: number,
  changedColumnWidths: Record<string, number>,
  changedColumnVisibles: Record<string, number>,
): number => {
  let width = 0
  for (let i = startColIndex; i <= endColIndex; i++) {
    if (
      Object.keys(changedColumnVisibles).length &&
      changedColumnVisibles[`${i}`] === 0
    ) {
      width += 0
    } else if (
      Object.keys(changedColumnWidths).length &&
      changedColumnWidths[`${i + 1}`]
    ) {
      width += changedColumnWidths[`${i + 1}`]
    } else {
      width += columnWidth
    }
  }
  return width
}

export const getXSpaceFromColumnWidths = (
  startColIndex: number,
  colWidth: number,
  changedColumnWidths: Record<string, number>,
  changedColumnVisibles: Record<string, number>,
): number => {
  if (
    Object.keys(changedColumnWidths).length &&
    Object.keys(changedColumnVisibles).length
  ) {
    // ???????????????????????????????????????????????????
    let sidx = 1
    let xSpace = 0
    while (startColIndex > sidx) {
      if (changedColumnVisibles[`${sidx}`] === 0) {
        // ????????????
        xSpace += 0
      } else {
        // ????????????
        if (changedColumnWidths[`${sidx}`]) {
          // ????????????????????????
          xSpace += changedColumnWidths[`${sidx}`]
        } else {
          xSpace += colWidth
        }
      }
      sidx++
    }
    return xSpace
  }
  if (Object.keys(changedColumnWidths).length) {
    // ???????????????????????????
    let sidx = 1
    let xSpace = 0
    while (startColIndex > sidx) {
      xSpace += changedColumnWidths[`${sidx}`]
        ? changedColumnWidths[`${sidx}`]
        : colWidth
      sidx++
    }
    return xSpace
  }
  if (Object.keys(changedColumnVisibles).length) {
    // ??????????????????????????????
    let sidx = 1
    let xSpace = 0
    while (startColIndex > sidx) {
      xSpace += changedColumnVisibles[`${sidx}`] === 0 ? 0 : colWidth
      sidx++
    }
    return xSpace
  }
  return Math.max(0, (startColIndex - 1) * colWidth)
}

export const getRealVisibleWidthSize = (
  viewportWidth: number,
  visibleIndex: number,
  colWidth: number,
  changedColumnWidths: Record<string, number>,
  changedColumnVisibles: Record<string, number>,
): number => {
  let x = 0
  let xSize = 0
  while (xSize < viewportWidth) {
    xSize +=
      changedColumnVisibles[`${visibleIndex + x}`] === 0
        ? 0
        : changedColumnWidths[`${visibleIndex + x}`]
        ? changedColumnWidths[`${visibleIndex + x}`]
        : colWidth
    x++
  }
  return x
}

export const getRealVisibleHeightSize = (
  viewportHeight: number,
  visibleIndex: number,
  rowHeight: number,
  changedRowWidths: Record<string, number>,
  changedRowVisibles: Record<string, number>,
): number => {
  let y = 0
  let ySize = 0
  while (ySize < viewportHeight) {
    ySize +=
      changedRowVisibles[`${visibleIndex + y}`] === 0
        ? 0
        : changedRowWidths[`${visibleIndex + y}`]
        ? changedRowWidths[`${visibleIndex + y}`]
        : rowHeight
    y++
  }
  return y
}

export const getWidth = (
  rowIndicatorElemWidth: number,
  total: number,
  colWidth: number,
  changedColumnWidths: Record<string, number>,
  changedColumnVisibles: Record<string, number>,
): number => {
  let changeSum = 0
  if (
    Object.keys(changedColumnWidths).length &&
    Object.keys(changedColumnVisibles).length
  ) {
    // ???????????????????????????????????????????????????
    for (const k in Object.keys(changedColumnWidths)) {
      if (
        changedColumnWidths.hasOwnProperty(Object.keys(changedColumnWidths)[k])
      ) {
        changeSum +=
          changedColumnWidths[Object.keys(changedColumnWidths)[k]] - colWidth
      }
    }
    for (const k in Object.keys(changedColumnVisibles)) {
      if (
        changedColumnVisibles.hasOwnProperty(
          Object.keys(changedColumnVisibles)[k],
        )
      ) {
        if (changedColumnWidths[Object.keys(changedColumnVisibles)[k]]) {
          changeSum -=
            changedColumnWidths[Object.keys(changedColumnVisibles)[k]]
        } else {
          changeSum -= colWidth
        }
      }
    }
  } else if (Object.keys(changedColumnWidths).length) {
    // ???????????????????????????
    for (const k in Object.keys(changedColumnWidths)) {
      if (
        changedColumnWidths.hasOwnProperty(Object.keys(changedColumnWidths)[k])
      ) {
        changeSum +=
          changedColumnWidths[Object.keys(changedColumnWidths)[k]] - colWidth
      }
    }
  } else if (Object.keys(changedColumnVisibles).length) {
    // ??????????????????????????????
    for (const k in Object.keys(changedColumnVisibles)) {
      if (
        changedColumnVisibles.hasOwnProperty(
          Object.keys(changedColumnVisibles)[k],
        )
      ) {
        changeSum -= colWidth
      }
    }
  }
  return rowIndicatorElemWidth + (total - 1) * colWidth + changeSum
}

export const getHeight = (
  total: number,
  rowHeight: number,
  changedRowHeights: Record<string, number>,
  changedRowVisibles: Record<string, number>,
): number => {
  let changeSum = 0
  if (
    Object.keys(changedRowHeights).length &&
    Object.keys(changedRowVisibles).length
  ) {
    // ???????????????????????????????????????????????????
    for (const k in Object.keys(changedRowHeights)) {
      if (changedRowHeights.hasOwnProperty(Object.keys(changedRowHeights)[k])) {
        changeSum +=
          changedRowHeights[Object.keys(changedRowHeights)[k]] - rowHeight
      }
    }
    for (const k in Object.keys(changedRowVisibles)) {
      if (
        changedRowVisibles.hasOwnProperty(Object.keys(changedRowVisibles)[k])
      ) {
        if (changedRowHeights[Object.keys(changedRowVisibles)[k]]) {
          changeSum -= changedRowHeights[Object.keys(changedRowVisibles)[k]]
        } else {
          changeSum -= rowHeight
        }
      }
    }
  }
  if (Object.keys(changedRowHeights).length) {
    // ???????????????????????????
    for (const k in Object.keys(changedRowHeights)) {
      if (changedRowHeights.hasOwnProperty(Object.keys(changedRowHeights)[k])) {
        changeSum +=
          changedRowHeights[Object.keys(changedRowHeights)[k]] - rowHeight
      }
    }
  }
  if (Object.keys(changedRowVisibles).length) {
    // ??????????????????????????????
    for (const k in Object.keys(changedRowVisibles)) {
      if (
        changedRowVisibles.hasOwnProperty(Object.keys(changedRowVisibles)[k])
      ) {
        changeSum -= rowHeight
      }
    }
  }

  return total * rowHeight + changeSum
}

export const getHideCaretTranslateY = (size: string, order: string): number => 0
