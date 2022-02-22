import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import LinkedListNode from '../../../../src/grid/src/utils/linked-list/LinkedListNode'

describe('linkedListNode.insertAfter', () => {
  it('inserts a node before this one', () => {
    const list = new LinkedList(1, 2)
    list.tail!.insertAfter(3)
    expect(list.toArray()).toStrictEqual([1, 2, 3])
  })

  it('throws when list is null', () => {
    const node = new LinkedListNode(1, null, null, null)
    expect(node.insertAfter(2)).toBeInstanceOf(LinkedList)
  })
})
