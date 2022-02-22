import Digraph from './Digraph'

export default class DirectCycle {
  get onStack(): boolean[] {
    return this._onStack
  }

  set onStack(value: boolean[]) {
    this._onStack = value
  }

  get cycle(): number[] {
    return this._cycle
  }

  set cycle(value: number[]) {
    this._cycle = value
  }

  get edgeTo(): number[] {
    return this._edgeTo
  }

  set edgeTo(value: number[]) {
    this._edgeTo = value
  }

  get marked(): boolean[] {
    return this._marked
  }

  set marked(value: boolean[]) {
    this._marked = value
  }

  private _marked: boolean[]

  private _edgeTo: number[]

  private _cycle: number[] = []

  private _onStack: boolean[]

  constructor(digraph: Digraph) {
    this._marked = Array.from({ length: digraph.v })
    this._edgeTo = Array.from({ length: digraph.v })
    this._onStack = Array.from({ length: digraph.v })

    for (let i = 0; i < digraph.v; i++) {
      if (!this._marked[i]) this.dfs(digraph, i)
    }
  }

  private dfs = (digraph: Digraph, v: number) => {
    this._marked[v] = true
    this._onStack[v] = true
    if (digraph.adj.get(v)) {
      digraph.adj.get(v)!.forEach((item: number) => {
        if (
          this._cycle === null ||
          this._cycle === undefined ||
          this._cycle.length === 0
        ) {
          if (!this._marked[item]) {
            this._edgeTo[item] = v
            this.dfs(digraph, item)
          } else if (this._onStack[item]) {
            for (let x = v; x !== item; x = this._edgeTo[x]) {
              this._cycle.push(x)
            }
            this._cycle.push(item)
            this._cycle.push(v)
          }
        }
      })
    }
    // 退出dfs时，将顶点v出栈
    this._onStack[v] = false
  }

  hasCycle = (): boolean =>
    this._cycle !== null && this._cycle !== undefined && this._cycle.length > 0
}
