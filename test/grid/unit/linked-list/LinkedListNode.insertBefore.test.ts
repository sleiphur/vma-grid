import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import LinkedListNode from '../../../../src/grid/src/utils/linked-list/LinkedListNode'

describe('linkedListNode.insertBefore', () => {
  it('inserts a node before this one', () => {
    const list = new LinkedList(2, 3)
    list.head!.insertBefore(1)
    expect(list.toArray()).toStrictEqual([1, 2, 3])
  })

  it('throws if list is not set', () => {
    const node = new LinkedListNode(1, null, null, null)
    expect(node.insertBefore(0)).toBeInstanceOf(LinkedList)
  })
})
