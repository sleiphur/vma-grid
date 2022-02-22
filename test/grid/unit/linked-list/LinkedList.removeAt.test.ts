import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import checkIntegrity from './list-integrity'

describe('linkedList.removeAt', () => {
  it('removes at the correct index', () => {
    const list = new LinkedList(1, 2, 3)
    const value = list.removeAt(1)
    expect(value!.data).toBe(2)
    checkIntegrity(list)
    expect(list.toArray()).toStrictEqual([1, 3])
  })

  it('returns undefined if the index is out of bounds', () => {
    const list = new LinkedList(1, 2, 3)
    const value = list.removeAt(4)
    expect(value).toBeUndefined()
    checkIntegrity(list)
    expect(list.toArray()).toStrictEqual([1, 2, 3])
  })
})
