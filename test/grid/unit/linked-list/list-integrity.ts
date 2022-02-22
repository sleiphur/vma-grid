import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import LinkedListNode from '../../../../src/grid/src/utils/linked-list/LinkedListNode'

export default function (list: LinkedList) {
  expect(list).toBeDefined()
  expect(list).toBeInstanceOf(LinkedList)

  if (list.length > 0) {
    expect(list.head).toBeDefined()
    expect(list.head).toBeInstanceOf(LinkedListNode)
    expect(list.tail).toBeDefined()
    expect(list.tail).toBeInstanceOf(LinkedListNode)
    expect(list.head!.prev).toBeNull()
    expect(list.tail!.next).toBeNull()

    if (list.length > 1) {
      expect(list.head!.next).not.toBeNull()
      expect(list.tail!.prev).not.toBeNull()
    } else {
      expect(list.head).toBe(list.tail)
      expect(list.head!.next).toBeNull()
      expect(list.tail!.prev).toBeNull()
    }

    // Check length
    const count = list.reduce((i) => i + 1, 0)
    const countReverse = list.reduce((i) => i + 1, 0, true)
    expect(count).toBe(list.length)
    expect(countReverse).toBe(list.length)
  } else {
    expect(list.head).toBeNull()
    expect(list.tail).toBeNull()
    expect(list).toHaveLength(0)
  }
}
