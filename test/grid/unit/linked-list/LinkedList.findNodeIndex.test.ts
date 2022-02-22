import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'

describe('linkedList.find', () => {
  it('returns the data of the first node that satisfies the test function', () => {
    const list = new LinkedList(1, 2, 3, 4, 5)
    const nodeIndex = list.findNodeIndex((data) => data === 1)
    expect(nodeIndex!.node.data).toBe(1)
    expect(list.head).toBe(nodeIndex!.node)
    expect(nodeIndex!.index).toBe(0)
  })

  it('returns undefined if the value is not present', () => {
    const list = new LinkedList(1, 2, 3, 4, 5)
    const value = list.findNode((data) => data === 6)
    expect(value).toBeUndefined()
  })
})
