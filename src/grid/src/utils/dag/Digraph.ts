import LinkedList from '../linked-list/LinkedList'

export default class Digraph {
  get g(): Record<string, any> {
    return this._g
  }

  set g(value: Record<string, any>) {
    this._g = value
  }

  get adj(): LinkedList<LinkedList<number>> {
    return this._adj
  }

  set adj(value: LinkedList<LinkedList<number>>) {
    this._adj = value
  }

  get e(): number {
    return this._e
  }

  set e(value: number) {
    this._e = value
  }

  get v(): number {
    return this._v
  }

  set v(value: number) {
    this._v = value
  }

  // 顶点数
  private _v: number

  // 边数
  private _e: number

  private _g: Record<string, any>

  // 邻接表
  private _adj: LinkedList<LinkedList<number>>

  constructor(g: Record<string, any>) {
    this._g = g
    const gKeys = Object.keys(this._g)
    // console.log(gKeys)
    this._v = gKeys.length
    this._e = 0
    this._adj = LinkedList.from([
      ...Array.from({ length: this._v }, () => new LinkedList<number>()),
    ])
    this._adj.forEach((_, index) => {
      this._g[gKeys[index]].children.forEach((item: any) => {
        // console.log(item, gKeys.indexOf(item))
        this.addEdge(index, gKeys.indexOf(item))
      })
    })
  }

  private addEdge = (v: number, w: number) => {
    this._adj.get(v)!.append(w)
    this._e++
  }
}
