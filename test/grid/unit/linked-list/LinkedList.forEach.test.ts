import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'

describe('linkedList.forEach', () => {
  it('executes a function for each node', () => {
    const list = new LinkedList(1, 2, 3, 4, 5)
    const f = jest.fn()
    list.forEach(f)
    expect(f).toHaveBeenCalledTimes(5)
  })

  it('walks the list in reverse order', () => {
    const list = new LinkedList(1, 2, 3)
    const testArray = new Array(list.length)
    const testArray2: number[] = []
    list.forEach((data, index) => (testArray[index] = data), true)
    list.forEach((data) => testArray2.push(data), true)
    expect(testArray).toStrictEqual(list.toArray())
    expect(testArray2).toStrictEqual([3, 2, 1])
  })
})
