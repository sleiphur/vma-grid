import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'

describe('linkedList.get', () => {
  it('returns correct data at index 2', () => {
    const list = new LinkedList(1, 2, 3)
    const value = list.get(2)
    expect(value).toBe(3)
  })

  it('returns undefined if index is out of bounds', () => {
    const list = new LinkedList(1, 2, 3)
    const value = list.get(4)
    expect(value).toBeUndefined()
  })
})
