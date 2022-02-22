// import { expect } from 'chai'
import Collection from '../../../../src/formula/grammar/type/collection'

describe('collection', () => {
  it('should throw error', () => {
    expect(
      () => new Collection([], [{ row: 1, col: 1, sheet: 'Sheet1' }]),
    ).toThrow('Collection: data length should match references length.')
  })

  it('should not throw error', () => {
    expect(
      () => new Collection([1], [{ row: 1, col: 1, sheet: 'Sheet1' }]),
    ).not.toThrow()
  })
})
