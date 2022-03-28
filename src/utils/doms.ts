const inBrowser = typeof window !== 'undefined'
const UA = inBrowser && window.navigator.userAgent.toLowerCase()
const isIE = UA && /; msie|trident/i.test(UA) && !/ucbrowser/i.test(UA)
const isEdge = UA && /edg/i.test(UA)
const isChrome =
  UA &&
  /chrome|crios/i.test(UA) &&
  !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(UA)
const isChromium = UA && /chromium/i.test(UA)
const isSafari =
  UA &&
  /safari/i.test(UA) &&
  !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(UA)
const isFirefox = UA && /firefox|fxios/i.test(UA) && !/seamonkey/i.test(UA)
const isOpera = UA && /opr|opera/i.test(UA)

export const htmlElem =
  typeof document === 'undefined'
    ? 0
    : document
    ? document.querySelector('html')
    : 0
export const documentElem = typeof document === 'undefined' ? 0 : document
export const windowElem = typeof window === 'undefined' ? 0 : window

function getNodeOffsetPos(
  elem: any,
  container: any,
  param: { top: number; left: number },
): any {
  if (elem) {
    const parentElem = elem.parentNode
    param.top += elem.offsetTop
    param.left += elem.offsetLeft
    if (parentElem && parentElem !== htmlElem && parentElem !== document.body) {
      param.top -= parentElem.scrollTop
      param.left -= parentElem.scrollLeft
    }
    if (
      container && (elem === container || elem.offsetParent === container)
        ? 0
        : elem.offsetParent
    ) {
      return getNodeOffsetPos(elem.offsetParent, container, param)
    }
  }
  return param
}

const reClsMap: { [key: string]: any } = {}

function getClsRE(cls: any) {
  if (!reClsMap[cls]) {
    reClsMap[cls] = new RegExp(`(?:^|\\s)${cls}(?!\\S)`, 'g')
  }
  return reClsMap[cls]
}

function hasClass(elem: any, cls: any) {
  return (
    elem &&
    elem.className &&
    elem.className.match &&
    elem.className.match(getClsRE(cls))
  )
}

function getDomNode(): Record<string, number> {
  const documentElement = document.documentElement
  const bodyElem = document.body
  return {
    scrollTop: documentElement.scrollTop || bodyElem.scrollTop,
    scrollLeft: documentElement.scrollLeft || bodyElem.scrollLeft,
    visibleHeight: documentElement.clientHeight || bodyElem.clientHeight,
    visibleWidth: documentElement.clientWidth || bodyElem.clientWidth,
  }
}

export const DomTools = {
  isIE,
  isEdge,
  isChrome,
  isChromium,
  isSafari,
  isFirefox,
  isOpera,
  getOffsetPos(elem: any, container: any) {
    return getNodeOffsetPos(elem, container, { left: 0, top: 0 })
  },
  getDomNode,
  hasClass,
  getAbsolutePos(elem: any) {
    const bounding = elem.getBoundingClientRect()
    const boundingTop = bounding.top
    const boundingLeft = bounding.left
    const { scrollTop, scrollLeft, visibleHeight, visibleWidth } = getDomNode()
    return {
      boundingTop,
      top: scrollTop + boundingTop,
      boundingLeft,
      left: scrollLeft + boundingLeft,
      visibleHeight,
      visibleWidth,
    }
  },
  getEventTargetNode(
    evnt: any,
    container: any,
    queryCls?: string,
    queryMethod?: (target: Element) => boolean,
  ) {
    let targetElem
    let target = evnt.target
    while (target && target.nodeType && target !== document) {
      if (
        queryCls &&
        hasClass(target, queryCls) &&
        (!queryMethod || queryMethod(target))
      ) {
        targetElem = target
      } else if (target === container) {
        return {
          flag: queryCls ? !!targetElem : true,
          container,
          targetElem,
        }
      }
      target = target.parentNode
    }
    return { flag: false }
  },
  isPx(val: any) {
    return val && /^\d+(px)?$/.test(val)
  },
  isScale(val: any) {
    return val && /^\d+%$/.test(val)
  },
}

export function getAbsolutePos(elem: any) {
  const bounding = elem.getBoundingClientRect()
  const boundingTop = bounding.top
  const boundingLeft = bounding.left
  const { scrollTop, scrollLeft, visibleHeight, visibleWidth } = getDomNode()
  return {
    boundingTop,
    top: scrollTop + boundingTop,
    boundingLeft,
    left: scrollLeft + boundingLeft,
    visibleHeight,
    visibleWidth,
  }
}
