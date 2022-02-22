import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import checkIntegrity from './list-integrity'

describe('linkedList.insertBefore', () => {
  it('inserts specified node before the other', () => {
    const list = new LinkedList(2, 3)
    list.insertBefore(list.head!, 1)
    checkIntegrity(list)
    expect(list.head!.data).toBe(1)
    expect(list.head!.next!.data).toBe(2)
  })

  it('inserts before the tail', () => {
    const list = new LinkedList(1, 3)
    list.insertBefore(list.tail!, 2)
    checkIntegrity(list)
    expect(list.toArray()).toStrictEqual([1, 2, 3])
  })
})
