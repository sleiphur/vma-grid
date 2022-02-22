import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'

describe('linkedList.getNode', () => {
  it('gets correct node at index', () => {
    const list = new LinkedList(1, 2, 3)
    const node = list.getNode(1)
    expect(node).toBe(list.head!.next)
    expect(node!.data).toBe(2)
  })

  it('returns undefined if there is no result', () => {
    const list = new LinkedList(1, 2, 3)
    const node1 = list.getNode(-1)
    const node2 = list.getNode(3)
    expect(node1).toBeUndefined()
    expect(node2).toBeUndefined()
  })

  it('searches correctly from the end of the list if index is bigger than half the size of the list', () => {
    const list = new LinkedList()
    for (let i = 0; i < 100; i++) {
      list.append(i)
    }
    const node = list.getNode(80)
    const node1 = list.getNode(99)
    const node2 = list.getNode(48)
    expect(node!.data).toBe(80)
    expect(node1).toBe(list.tail)
    expect(node1!.data).toBe(99)
    expect(node2!.data).toBe(48)
  })
})
