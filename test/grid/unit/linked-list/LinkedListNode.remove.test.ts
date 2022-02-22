import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import LinkedListNode from '../../../../src/grid/src/utils/linked-list/LinkedListNode'

describe('linkedListNode.remove', () => {
  it('removes the head correctly', () => {
    const list = new LinkedList(1, 2, 3)
    list.head!.remove()
    expect(list).toHaveLength(2)
    expect(list.head!.data).toBe(2)
    expect(list.head!.prev).toBeNull()
    expect(list.toArray()).toStrictEqual([2, 3])
  })

  it('throws when list is null', () => {
    const node = new LinkedListNode(1, null, null, null)
    expect(() => node.remove()).toThrow('Node does not belong to any list')
  })
})
