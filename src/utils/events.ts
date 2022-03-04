import { documentElem, DomTools, windowElem } from './doms'
import { VmaGridComponentInstance } from '../../types/common'

const wheelName = DomTools.isFirefox ? 'DOMMouseScroll' : 'mousewheel'
const eventStore: {
  comp: VmaGridComponentInstance
  type: string
  cb: (evnt: Event) => void
}[] = []

function triggerEvent(evnt: Event) {
  const isWheel = evnt.type === wheelName
  eventStore.forEach(({ type, cb }) => {
    if (type === evnt.type || (isWheel && type === 'mousewheel')) {
      cb(evnt)
    }
  })
}

export const GlobalEvent = {
  on(comp: VmaGridComponentInstance, type: string, cb: any) {
    if (cb) {
      eventStore.push({ comp, type, cb })
    }
  },
  off(comp: VmaGridComponentInstance, type: string) {
    console.log(comp, type)
  },
  trigger: triggerEvent,
}

if (documentElem) {
  document.addEventListener('contextmenu', triggerEvent, false)
}
if (windowElem) {
  window.addEventListener('mousedown', triggerEvent, false)
  window.addEventListener('mousewheel', triggerEvent, false)
}

export default GlobalEvent
