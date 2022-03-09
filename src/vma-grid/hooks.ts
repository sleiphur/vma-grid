import { VmaGridGlobalHooks } from '../../types'

export class Skeleton {
  private skeleton: any = {}

  add(name: string, params: any) {
    this.skeleton[name] = params
    return this
  }

  forEach(callback: any) {
    if (this.skeleton) {
      for (const key in this.skeleton) {
        if (this.skeleton && this.skeleton.hasOwnProperty) {
          callback.call(null, this.skeleton[key], key, this.skeleton)
        }
      }
    }
  }
}

const hooks = new Skeleton() as VmaGridGlobalHooks

export default hooks
