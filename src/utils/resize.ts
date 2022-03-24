/**
 * 监听 resize 事件
 * 如果项目中已使用了 resize-observer-polyfill，那么只需要将方法定义全局，该组件就会自动使用
 */
let resizeTimeout: any
/* eslint-disable no-use-before-define */
const eventStore: ResizeObserver[] = []
const defaultInterval = 500

function eventHandle() {
  if (eventStore.length) {
    eventStore.forEach((item) => {
      item.targetList.forEach((observer) => {
        const { target, width, height } = observer
        const clientWidth = target.clientWidth
        const clientHeight = target.clientHeight
        const rWidth = clientWidth && width !== clientWidth
        const rHeight = clientHeight && height !== clientHeight
        if (rWidth || rHeight) {
          observer.width = clientWidth
          observer.height = clientHeight
          setTimeout(item.callback)
        }
      })
    })
    /* eslint-disable @typescript-eslint/no-use-before-define */
    eventListener()
  }
}

function eventListener() {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(eventHandle, defaultInterval)
}

export class ResizeObserver {
  targetList: {
    target: Element
    width: number
    height: number
  }[] = []

  callback: (...args: any[]) => void

  constructor(callback: (...args: any[]) => void) {
    this.callback = callback
  }

  observe(target: Element): void {
    if (target) {
      const { targetList } = this
      if (!targetList.some((observer) => observer.target === target)) {
        targetList.push({
          target,
          width: target.clientWidth,
          height: target.clientHeight,
        })
      }
      if (!eventStore.length) {
        eventListener()
      }
      if (!eventStore.some((item) => item === this)) {
        eventStore.push(this)
      }
    }
  }

  disconnect(): void {
    eventStore.length = 0
  }
}

export function createResizeEvent(callback: (...args: any[]) => void): any {
  if (window.ResizeObserver) {
    return new window.ResizeObserver(callback)
  }
  return new ResizeObserver(callback)
}
