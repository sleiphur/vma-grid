import generateTests from '../../utils'
import TestCase from './testcase'
import FormulaParser from '../../../../../src/formula/grammar/hooks'

const data = [['fruit', 'price', 'count', 4, 5]]
const parser = new FormulaParser({
  onCell: (ref: any) => data[ref.row - 1][ref.col - 1],
  onRange: (ref: any) => {
    const arr = []
    // eslint-disable-next-line no-plusplus
    for (let row = ref.from.row - 1; row < ref.to.row; row++) {
      const innerArr = []
      // eslint-disable-next-line no-plusplus
      for (let col = ref.from.col - 1; col < ref.to.col; col++) {
        innerArr.push(data[row][col])
      }
      arr.push(innerArr)
    }
    return arr
  },
})

describe('web Functions', () => {
  // eslint-disable-next-line jest/require-hook
  generateTests(parser, TestCase)
})
