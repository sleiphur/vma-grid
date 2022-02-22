import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import checkIntegrity from './list-integrity'

describe('linkedList.insertAt', () => {
  it('inserts a node at position 1', () => {
    const l = new LinkedList(1, 3)
    l.insertAt(1, 2)
    checkIntegrity(l)
    expect(l.head!.next!.data).toBe(2)
  })

  it('inserts a node even if the index is off limits', () => {
    const l = new LinkedList(1, 2)
    l.insertAt(100, 3)
    checkIntegrity(l)
    expect(l.tail!.data).toBe(3)
  })

  it('inserts a node even if the index is negative', () => {
    const l = new LinkedList(2, 3)
    l.insertAt(-100, 1)
    checkIntegrity(l)
    expect(l.head!.data).toBe(1)
  })

  it('inserts on an empty list', () => {
    const list = new LinkedList()
    list.insertAt(0, 1)
    checkIntegrity(list)
    expect(list.toArray()).toStrictEqual([1])
  })
})
