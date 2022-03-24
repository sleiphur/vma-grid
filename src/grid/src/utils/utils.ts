import DirectCycle from './dag/DirectCycle'
import { VmaGridPropTypes } from '../../../../types/grid'
import Digraph from './dag/Digraph'
import DepthFirstOrder from './dag/DepthFirstOrder'

export function getRowIndicatorRenderWidth(
  gridSize: VmaGridPropTypes.Size,
): number {
  if (gridSize === 'xxx-large') {
    return 14
  }
  if (gridSize === 'xx-large') {
    return 13
  }
  if (gridSize === 'x-large') {
    return 12
  }
  if (gridSize === 'large') {
    return 11
  }
  if (gridSize === 'normal') {
    return 10
  }
  if (gridSize === 'small') {
    return 9
  }
  if (gridSize === 'mini') {
    return 8
  }
  return 10
}

export function getRenderHeight(
  defaultGridRowHeight: number | undefined,
  gridSize: VmaGridPropTypes.Size,
): number {
  if (defaultGridRowHeight) {
    if (gridSize === 'xxx-large') {
      return Math.max(54, defaultGridRowHeight)
    }
    if (gridSize === 'xx-large') {
      return Math.max(50, defaultGridRowHeight)
    }
    if (gridSize === 'x-large') {
      return Math.max(46, defaultGridRowHeight)
    }
    if (gridSize === 'large') {
      return Math.max(42, defaultGridRowHeight)
    }
    if (gridSize === 'normal') {
      return Math.max(38, defaultGridRowHeight)
    }
    if (gridSize === 'small') {
      return Math.max(34, defaultGridRowHeight)
    }
    if (gridSize === 'mini') {
      return Math.max(30, defaultGridRowHeight)
    }
  } else {
    if (gridSize === 'xxx-large') {
      return 54
    }
    if (gridSize === 'xx-large') {
      return 50
    }
    if (gridSize === 'x-large') {
      return 46
    }
    if (gridSize === 'large') {
      return 42
    }
    if (gridSize === 'normal') {
      return 38
    }
    if (gridSize === 'small') {
      return 34
    }
    if (gridSize === 'mini') {
      return 30
    }
  }
  return 38
}

export function getRenderWidth(
  defaultGridColumnWidth: number | undefined,
  gridSize: VmaGridPropTypes.Size,
): number {
  if (defaultGridColumnWidth) {
    if (gridSize === 'xxx-large') {
      return Math.max(192, defaultGridColumnWidth)
    }
    if (gridSize === 'xx-large') {
      return Math.max(180, defaultGridColumnWidth)
    }
    if (gridSize === 'x-large') {
      return Math.max(168, defaultGridColumnWidth)
    }
    if (gridSize === 'large') {
      return Math.max(156, defaultGridColumnWidth)
    }
    if (gridSize === 'normal') {
      return Math.max(144, defaultGridColumnWidth)
    }
    if (gridSize === 'small') {
      return Math.max(132, defaultGridColumnWidth)
    }
    if (gridSize === 'mini') {
      return Math.max(120, defaultGridColumnWidth)
    }
  } else {
    if (gridSize === 'xxx-large') {
      return 192
    }
    if (gridSize === 'xx-large') {
      return 180
    }
    if (gridSize === 'x-large') {
      return 168
    }
    if (gridSize === 'large') {
      return 156
    }
    if (gridSize === 'normal') {
      return 144
    }
    if (gridSize === 'small') {
      return 132
    }
    if (gridSize === 'mini') {
      return 120
    }
  }
  return 144
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
    // 配置中既有行高定义，又有行隐藏定义
    let sidy = 0
    let y = 0
    do {
      // y += changedRowHeights[`${sidy}`] && changedRowVisibles[`${sidy}`]
      //   ? changedRowHeights[`${sidy}`]
      //   : changedRowVisibles[`${sidy}`] ? rowHeight : 0
      if (changedRowVisibles[`${sidy}`] === 0) {
        // 该行隐藏
        y += 0
      } else {
        // 该行显示
        if (changedRowHeights[`${sidy}`]) {
          // 该行高度有自定义
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
    // 配置中只有行高定义
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
    // 配置中只有行隐藏定义
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
    // 配置中既有列宽定义，又有列隐藏定义
    let sidx = 0
    let x = 0
    do {
      if (changedColumnVisibles[`${sidx}`] === 0) {
        // 该列隐藏
        x += 0
      } else {
        // 该列显示
        if (changedColumnWidths[`${sidx}`]) {
          // 该列宽度有自定义
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
    // 配置中只有列宽定义
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
    // 配置中只有列隐藏定义
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
    // 配置中既有行高定义，又有行隐藏定义
    let sidy = 0
    let ySpace = 0
    while (startIndex > sidy) {
      if (changedRowVisibles[`${sidy}`] === 0) {
        // 该行隐藏
        ySpace += 0
      } else {
        // 该行显示
        if (changedRowHeights[`${sidy}`]) {
          // 该行高度有自定义
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
    // 配置中只有行高定义
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
    // 配置中只有行隐藏定义
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
    // 配置中既有列宽定义，又有列隐藏定义
    let sidx = 0
    let xSpace = 0
    while (startColIndex > sidx) {
      if (changedColumnVisibles[`${sidx}`] === 0) {
        // 该列隐藏
        xSpace += 0
      } else {
        // 该列显示
        if (changedColumnWidths[`${sidx}`]) {
          // 该列宽度有自定义
          xSpace += changedColumnWidths[`${sidx}`]
        } else {
          xSpace += colWidth
        }
      }
      sidx++
    }
    return xSpace - 1
  }
  if (Object.keys(changedColumnWidths).length) {
    // 配置中只有列宽定义
    let sidx = 0
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
    // 配置中只有列隐藏定义
    let sidx = 0
    let xSpace = 0
    while (startColIndex > sidx) {
      xSpace += changedColumnVisibles[`${sidx}`] === 0 ? 0 : colWidth
      sidx++
    }
    return xSpace
  }
  return Math.max(0, startColIndex * colWidth)
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
    // 配置中既有列宽定义，又有列隐藏定义
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
    // 配置中只有列宽定义
    for (const k in Object.keys(changedColumnWidths)) {
      if (
        changedColumnWidths.hasOwnProperty(Object.keys(changedColumnWidths)[k])
      ) {
        changeSum +=
          changedColumnWidths[Object.keys(changedColumnWidths)[k]] - colWidth
      }
    }
  } else if (Object.keys(changedColumnVisibles).length) {
    // 配置中只有列隐藏定义
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
    // 配置中既有行高定义，又有行隐藏定义
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
    // 配置中只有行高定义
    for (const k in Object.keys(changedRowHeights)) {
      if (changedRowHeights.hasOwnProperty(Object.keys(changedRowHeights)[k])) {
        changeSum +=
          changedRowHeights[Object.keys(changedRowHeights)[k]] - rowHeight
      }
    }
  }
  if (Object.keys(changedRowVisibles).length) {
    // 配置中只有行隐藏定义
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

export const getHideCaretTranslateY = (size: string, order: string): number => {
  if (order === 'up') {
    if (size === 'xxx-large') {
      return -7
    }
    if (size === 'xx-large') {
      return -6
    }
    if (size === 'x-large') {
      return -5
    }
    if (size === 'large') {
      return -4
    }
    if (size === 'normal') {
      return -3
    }
    if (size === 'small') {
      return -2
    }
    if (size === 'mini') {
      return -1
    }
  } else {
    if (size === 'xxx-large') {
      return 6
    }
    if (size === 'xx-large') {
      return 5
    }
    if (size === 'x-large') {
      return 4
    }
    if (size === 'large') {
      return 3
    }
    if (size === 'normal') {
      return 2
    }
    if (size === 'small') {
      return 1
    }
    if (size === 'mini') {
      return 0
    }
  }
  return 0
}
