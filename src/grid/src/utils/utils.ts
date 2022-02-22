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
      return Math.max(36, defaultGridRowHeight)
    }
    if (gridSize === 'xx-large') {
      return Math.max(34, defaultGridRowHeight)
    }
    if (gridSize === 'x-large') {
      return Math.max(32, defaultGridRowHeight)
    }
    if (gridSize === 'large') {
      return Math.max(30, defaultGridRowHeight)
    }
    if (gridSize === 'normal') {
      return Math.max(28, defaultGridRowHeight)
    }
    if (gridSize === 'small') {
      return Math.max(26, defaultGridRowHeight)
    }
    if (gridSize === 'mini') {
      return Math.max(24, defaultGridRowHeight)
    }
  } else {
    if (gridSize === 'xxx-large') {
      return 36
    }
    if (gridSize === 'xx-large') {
      return 34
    }
    if (gridSize === 'x-large') {
      return 32
    }
    if (gridSize === 'large') {
      return 30
    }
    if (gridSize === 'normal') {
      return 28
    }
    if (gridSize === 'small') {
      return 26
    }
    if (gridSize === 'mini') {
      return 24
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
      return Math.max(96, defaultGridColumnWidth)
    }
    if (gridSize === 'xx-large') {
      return Math.max(90, defaultGridColumnWidth)
    }
    if (gridSize === 'x-large') {
      return Math.max(84, defaultGridColumnWidth)
    }
    if (gridSize === 'large') {
      return Math.max(78, defaultGridColumnWidth)
    }
    if (gridSize === 'normal') {
      return Math.max(72, defaultGridColumnWidth)
    }
    if (gridSize === 'small') {
      return Math.max(66, defaultGridColumnWidth)
    }
    if (gridSize === 'mini') {
      return Math.max(60, defaultGridColumnWidth)
    }
  } else {
    if (gridSize === 'xxx-large') {
      return 96
    }
    if (gridSize === 'xx-large') {
      return 90
    }
    if (gridSize === 'x-large') {
      return 84
    }
    if (gridSize === 'large') {
      return 78
    }
    if (gridSize === 'normal') {
      return 72
    }
    if (gridSize === 'small') {
      return 66
    }
    if (gridSize === 'mini') {
      return 60
    }
  }
  return 72
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
