import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import checkIntegrity from './list-integrity'

describe('linkedList.clear', () => {
  it('clears the list', () => {
    const list = new LinkedList(1, 2, 3)
    list.clear()
    checkIntegrity(list)
  })
})
