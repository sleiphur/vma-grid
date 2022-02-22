import LinkedList from '../../../../src/grid/src/utils/linked-list/LinkedList'
import checkIntegrity from './list-integrity'

describe('linkedList.merge', () => {
  it('merges two lists', () => {
    const listA = new LinkedList(1, 2, 3)
    const listB = new LinkedList(4, 5, 6)
    listA.merge(listB)
    checkIntegrity(listA)
    checkIntegrity(listB)
    expect(listA).toHaveLength(listB.length)
  })

  it('merges when one of the lists is empty', () => {
    const listA = new LinkedList()
    const listB = new LinkedList(1, 2, 3)
    listA.merge(listB)
    checkIntegrity(listA)
    checkIntegrity(listB)
    expect(listA).toHaveLength(listB.length)
    const listC = new LinkedList()
    listA.merge(listC)
    checkIntegrity(listA)
    checkIntegrity(listC)
    expect(listA).toHaveLength(listC.length)
  })
})
