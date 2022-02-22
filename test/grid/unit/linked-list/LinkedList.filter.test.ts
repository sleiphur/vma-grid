import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import checkIntegrity from './list-integrity'

describe('linkedList.filter', () => {
  it('filters a list and returns a new linked list', () => {
    const l1 = new LinkedList(1, 2, 3, 4, 5, 6)
    const l2 = l1.filter((data) => data < 4)
    checkIntegrity(l2)
    expect(l2).not.toBe(l1)
    expect(l2).toHaveLength(3)
    expect(l1).toHaveLength(6)
  })

  it('filters in reverse order', () => {
    const list = new LinkedList(1, 2, 3, 4, 5, 6)
    const filtered = list.filter((data) => data < 4, true)
    checkIntegrity(filtered)
    expect(filtered.toArray()).toStrictEqual([3, 2, 1])
  })
})
