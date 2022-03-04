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
