export const getIndexFromRowHeights = (
  scrollTop: number,
  rowHeight: number,
  changedRowHeights: Record<string, number>,
): number => {
  if (Object.keys(changedRowHeights).length) {
    let sidx = 0
    let y = 0
    do {
      y += changedRowHeights[`${sidx}`]
        ? changedRowHeights[`${sidx}`]
        : rowHeight
      sidx++
    } while (scrollTop >= y)
    return sidx - 1
  }
  return Math.floor(scrollTop / rowHeight)
}

export const getIndexFromColumnWidths = (
  scrollLeft: number,
  columnWidth: number,
  changedColumnWidths: Record<string, number>,
): number => {
  if (Object.keys(changedColumnWidths).length) {
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
  return Math.floor(scrollLeft / columnWidth)
}

export const getYSpaceFromRowHeights = (
  startIndex: number,
  rowHeight: number,
  changedRowHeights: Record<string, number>,
): number => {
  if (Object.keys(changedRowHeights).length) {
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
  return Math.max(0, startIndex * rowHeight)
}

export const getXSpaceFromColumnWidths = (
  startColIndex: number,
  colWidth: number,
  changedColumnWidths: Record<string, number>,
): number => {
  if (Object.keys(changedColumnWidths).length) {
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
  return Math.max(0, startColIndex * colWidth)
}
