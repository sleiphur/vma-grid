import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'

describe('linkedList.append', () => {
  it('pushes a new node to the end of the list', () => {
    const list = new LinkedList(1, 2)
    const val = list.append(3)
    expect(val).toBe(list)
    expect(list.toArray()).toStrictEqual([1, 2, 3])
  })

  it('pushes many args', () => {
    const list = new LinkedList(1, 2)
    const value = list.append(3, 4)
    expect(value).toBe(list)
    expect(list.toArray()).toStrictEqual([1, 2, 3, 4])
  })
})
