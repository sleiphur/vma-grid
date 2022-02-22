import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'

describe('linkedListNode.value', () => {
  it('returns the data on the value property', () => {
    const list = new LinkedList(1)
    expect(list.head!.value).toBe(1)
    expect(list.head!.value).toBe(list.head!.data)
  })
})
