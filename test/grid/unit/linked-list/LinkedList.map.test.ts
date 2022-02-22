import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import checkIntegrity from './list-integrity'

describe('linkedList.test', () => {
  it('maps to a new list', () => {
    const l1 = new LinkedList(1, 2, 3)
    const l2 = l1.map((data) => data)
    checkIntegrity(l2)
    expect(l1).toStrictEqual(l2)
    expect(l1).not.toBe(l2)
  })

  it('uses return values from the map function', () => {
    const l1 = new LinkedList(1, 2, 3)
    const l2 = l1.map((data) => data + 10)
    checkIntegrity(l2)
    expect(l2.toArray()).toStrictEqual([11, 12, 13])
  })

  it('maps in reverse order', () => {
    const list = new LinkedList(1, 2, 3)
    const newList = list.map((data) => data + 10, true)
    checkIntegrity(newList)
    expect(newList.toArray()).toStrictEqual([13, 12, 11])
  })
})
