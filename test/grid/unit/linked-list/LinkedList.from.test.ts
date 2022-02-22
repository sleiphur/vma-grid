import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import checkIntegrity from './list-integrity'

describe('linkedList.from', () => {
  it('initialises from an array', () => {
    const l = LinkedList.from([1, 2, 3])
    checkIntegrity(l)
    expect(l.head!.data).toBe(1)
    expect(l.tail!.data).toBe(3)
  })

  it('initialises form a string', () => {
    const l = LinkedList.from('linkedlist')
    checkIntegrity(l)
    expect(l.head!.data).toBe('l')
    expect(l.tail!.data).toBe('t')
  })

  it('initialises from a Map', () => {
    const l = LinkedList.from(
      new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
      ]),
    )
    checkIntegrity(l)
    expect(l.head!.data).toStrictEqual([1, 'one'])
    expect(l.tail!.data).toStrictEqual([3, 'three'])
  })
})
