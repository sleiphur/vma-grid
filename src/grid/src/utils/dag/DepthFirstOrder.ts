import LinkedList from '../linked-list/LinkedList'
import Digraph from './Digraph'

export default class DepthFirstOrder {
  get pre(): LinkedList<number> {
    return this._pre
  }

  set pre(value: LinkedList<number>) {
    this._pre = value
  }

  get reversePost(): LinkedList<number> {
    return this._reversePost
  }

  set reversePost(value: LinkedList<number>) {
    this._reversePost = value
  }

  get marked(): boolean[] {
    return this._marked
  }

  set marked(value: boolean[]) {
    this._marked = value
  }

  get post(): LinkedList<number> {
    return this._post
  }

  set post(value: LinkedList<number>) {
    this._post = value
  }

  private _marked: boolean[]

  private _pre: LinkedList<number> // 前序

  private _post: LinkedList<number> // 后序

  private _reversePost: LinkedList<number> // 逆后序

  constructor(digraph: Digraph) {
    this._pre = new LinkedList<number>()
    this._post = new LinkedList<number>()
    this._reversePost = new LinkedList<number>()
    this._marked = Array.from({ length: digraph.v })

    for (let i = 0; i < digraph.v; i++) {
      if (!this._marked[i]) this.dfs(digraph, i)
    }
  }

  private dfs = (digraph: Digraph, v: number) => {
    this._pre.append(v)
    this._marked[v] = true
    if (digraph.adj.get(v)) {
      digraph.adj.get(v)!.forEach((item: number) => {
        if (!this._marked[item]) {
          this.dfs(digraph, item)
        }
      })
    }
    this._post.append(v)
    this._reversePost.push(v)
  }
}
