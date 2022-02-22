import generateTests from '../../utils'
import TestCase from './testcase'
import FormulaParser from '../../../../../src/formula/grammar/hooks'

const parser = new FormulaParser()

describe('text Functions', () => {
  // eslint-disable-next-line jest/require-hook
  generateTests(parser, TestCase)
})
