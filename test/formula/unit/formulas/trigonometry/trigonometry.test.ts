import generateTests from '../../utils'
import TestCase from './testcase'
import FormulaParser from '../../../../../src/formula/grammar/hooks'

const data = [
  ['', 1, 2, 3, 4],
  ['string', 3, 4, 5, 6],
]
const parser = new FormulaParser({
  onCell: (ref: any) => data[ref.row - 1][ref.col - 1],
})

describe('trigonometry Functions', () => {
  // eslint-disable-next-line jest/require-hook
  generateTests(parser, TestCase)
})
