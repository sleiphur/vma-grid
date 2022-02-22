// import { expect } from 'chai'
import FormulaError from '../../../../src/formula/formulas/error'
import FormulaParser from '../../../../src/formula/grammar/hooks'
import DepParser from '../../../../src/formula/grammar/dependency/hooks'

const MAX_ROW = 1048576
const MAX_COLUMN = 16384

const parser = new FormulaParser({
  onCell: (ref: any) => {
    if (ref.row === 5 && ref.col === 5) return null
    return 1
  },
  onRange: (ref: any) => {
    if (ref.to.row === MAX_ROW) {
      return [[1, 2, 3]]
    }
    if (ref.to.col === MAX_COLUMN) {
      return [[1], [0]]
    }
    return [
      [1, 2, 3],
      [0, 0, 0],
    ]
  },
  functions: {
    BAD_FN: () => {
      throw new SyntaxError()
    },
  },
})

const depParser = new DepParser({
  onVariable: (variable: any) =>
    variable === 'aaaa'
      ? { from: { row: 1, col: 1 }, to: { row: 2, col: 2 } }
      : { row: 1, col: 1 },
})

const parsers = [parser, depParser]
const names = ['', ' (DepParser)']

const position = { row: 1, col: 1, sheet: 'Sheet1' }

describe('#ERROR! Error handling', () => {
  // eslint-disable-next-line jest/require-hook,@typescript-eslint/no-shadow
  parsers.forEach((parser, idx) => {
    it(`should handle NotAllInputParsedException${names[idx]}`, () => {
      try {
        parser.parse('SUM(1))', position)
      } catch (e: any) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e).toBeInstanceOf(FormulaError)
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.details.errorLocation.line).toBe(1)
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.details.errorLocation.column).toBe(7)
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.name).toBe('#ERROR!')
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.details.name).toBe('NotAllInputParsedException')
        return
      }
      throw Error('Should not reach here.')
    })

    it(`should handle lexing error${names[idx]}`, () => {
      try {
        parser.parse('SUM(1)$', position)
      } catch (e: any) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e).toBeInstanceOf(FormulaError)
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.details.errorLocation.line).toBe(1)
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.details.errorLocation.column).toBe(7)
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.name).toBe('#ERROR!')
        return
      }
      throw Error('Should not reach here.')
    })

    it(`should handle Parser error []${names[idx]}`, () => {
      try {
        parser.parse('SUM([Sales.xlsx]Jan!B2:B5)', position)
      } catch (e: any) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e).toBeInstanceOf(FormulaError)
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.name).toBe('#ERROR!')
        return
      }
      throw Error('Should not reach here.')
    })

    it(`should handle Parser error${names[idx]}`, () => {
      try {
        parser.parse('SUM(B2:B5, "123"+)', position)
      } catch (e: any) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e).toBeInstanceOf(FormulaError)
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.name).toBe('#ERROR!')
        return
      }
      throw Error('Should not reach here.')
    })
  })

  it('should handle error from functions', () => {
    try {
      parser.parse('BAD_FN()', position)
    } catch (e: any) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e).toBeInstanceOf(FormulaError)
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e.name).toBe('#ERROR!')
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e.details.name).toBe('SyntaxError')
      return
    }
    throw Error('Should not reach here.')
  })

  it('should handle errors in async', async () => {
    try {
      await parser.parseAsync('SUM(*()', position, true)
    } catch (e: any) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e).toBeInstanceOf(FormulaError)
      // eslint-disable-next-line jest/no-conditional-expect
      expect(e.name).toBe('#ERROR!')
      return
    }
    throw Error('Should not reach here.')
  })

  it('should not throw error when ignoreError = true (DepParser)', () => {
    try {
      depParser.parse('SUM(*()', position, true)
    } catch (e) {
      throw Error('Should not reach here.')
    }
  })
})
