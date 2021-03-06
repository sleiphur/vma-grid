import generateTests from '../../utils'
import TestCase from './testcase'
import FormulaParser from '../../../../../src/formula/grammar/hooks'

const data = [
  ['fruit', 'price', 'count', 4, 5],
  ['Apples', 0.69, 40, 5, 6],
  ['Bananas', 0.34, 38, 5, 6],
  [41235, 0.55, 15, 5, 6],
  [41247, 0.25, 25, 5, 6],
  [41295, 0.59, 40, 5, 6],
  ['Almonds', 2.8, 10, 5, 6], // row 7
  ['Cashews', 3.55, 16, 5, 6], // row 8
  ['Peanuts', 1.25, 20, 5, 6], // row 9
  ['Walnuts', 1.75, 12, 5, 6], // row 10

  ['Apples', 'Lemons', 0, 0, 0], // row 11
  ['Bananas', 'Pears', 0, 0, 0], // row 12
]
const parser = new FormulaParser({
  onCell: (ref: any) => data[ref.row - 1][ref.col - 1],
  onRange: (ref: any) => {
    const arr = []
    for (let row = ref.from.row - 1; row < ref.to.row; row++) {
      const innerArr = []
      for (let col = ref.from.col - 1; col < ref.to.col; col++) {
        innerArr.push(data[row][col])
      }
      arr.push(innerArr)
    }
    return arr
  },
})

describe('engineering Functions', () => {
  // eslint-disable-next-line jest/require-hook
  generateTests(parser, TestCase)
})
