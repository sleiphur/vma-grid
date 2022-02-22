import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import LinkedListNode from '../../../../src/grid/src/utils/linked-list/LinkedListNode'

describe('linkedListNode.index', () => {
  it('gets the correct index', () => {
    const list = new LinkedList(1, 2, 3)
    expect(list.tail!.index).toBe(2)
  })

  it('returns undefined when no list is defined on the node', () => {
    const node = new LinkedListNode(1, null, null, null)
    expect(node.index).toBeUndefined()
  })
})
