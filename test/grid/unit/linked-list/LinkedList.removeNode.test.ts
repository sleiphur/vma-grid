import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import checkIntegrity from './list-integrity'

describe('linkedList.removeNode', () => {
  it('removes a node from the middle', () => {
    const list = new LinkedList(1, 2, 3)
    const node = list.getNode(1)
    list.removeNode(node!)
    checkIntegrity(list)
    expect(list.toArray()).toStrictEqual([1, 3])
  })

  it('removes the first node', () => {
    const list = new LinkedList(1, 2, 3)
    list.removeNode(list.head!)
    checkIntegrity(list)
    expect(list.toArray()).toStrictEqual([2, 3])
  })

  it('removes the last node', () => {
    const list = new LinkedList(1, 2, 3)
    list.removeNode(list.tail!)
    checkIntegrity(list)
    expect(list.toArray()).toStrictEqual([1, 2])
  })

  it('removes the only node', () => {
    const list = new LinkedList(1)
    list.removeNode(list.head!)
    checkIntegrity(list)
    expect(list.toArray()).toStrictEqual([])
  })

  it('removes the second last node and leaves only one', () => {
    const list = new LinkedList(1, 2)
    list.removeNode(list.head!)
    checkIntegrity(list)
    expect(list.toArray()).toStrictEqual([2])
  })

  it('throws a ReferenceError when the list is wrong', () => {
    const list = new LinkedList(1, 2)
    const list2 = new LinkedList(3)
    expect(() => list.removeNode(list2.head!)).toThrow(
      'Node does not belong to this list',
    )
  })
})
