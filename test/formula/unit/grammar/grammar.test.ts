// import { expect } from 'chai'
import FormulaError from '../../../../src/formula/formulas/error'
import FormulaParser from '../../../../src/formula/grammar/hooks'

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
})
const position = { row: 1, col: 1, sheet: 'Sheet1' }

describe('basic parse', () => {
  it('should parse null', () => {
    const actual = parser.parse('E5', position)
    expect(actual).toBeNull()
  })

  it('should parse whole column', () => {
    const actual = parser.parse('SUM(A:A)', position)
    expect(actual).toBe(6)
  })

  it('should parse whole row', () => {
    const actual = parser.parse('SUM(1:1)', position)
    expect(actual).toBe(1)
  })
})

describe('parser allows returning array or range', () => {
  it('should parse array', () => {
    let actual = parser.parse('{1,2,3}', position, true)
    expect(actual).toStrictEqual([[1, 2, 3]])
    actual = parser.parse('{1,2,3;4,5,6}', position, true)
    expect(actual).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
    ])
  })

  it('should parse range', () => {
    const actual = parser.parse('A1:C1', position, true)
    expect(actual).toStrictEqual([
      [1, 2, 3],
      [0, 0, 0],
    ])
  })

  it('should not parse unions', () => {
    const actual = parser.parse('(A1:C1, A2:E9)', position, true)
    expect(actual).toBe(FormulaError.VALUE)
  })

  it('should return single value', () => {
    const actual = parser.parse('A1', position, true)
    expect(actual).toBe(1)
  })

  it('should return null value', () => {
    const actual = parser.parse('E5', position, true)
    expect(actual).toBeNull()
  })
})

describe('async parse', () => {
  it('should return single value', async () => {
    let actual = await parser.parseAsync('A1', position, true)
    expect(actual).toBe(1)
    actual = await parser.parseAsync('E5', position, true)
    expect(actual).toBeNull()
  })
})

describe('custom async function', () => {
  it('should parse and evaluate', async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const parser = new FormulaParser({
      onCell: () => 1,
      functions: {
        IMPORT_CSV: async () => [
          [1, 2, 3],
          [4, 5, 6],
        ],
      },
    })

    let actual = await parser.parseAsync('A1 + IMPORT_CSV()', position)
    expect(actual).toBe(2)
    actual = await parser.parseAsync('-IMPORT_CSV()', position)
    expect(actual).toBe(-1)
    actual = await parser.parseAsync('IMPORT_CSV()%', position)
    expect(actual).toBe(0.01)
    actual = await parser.parseAsync('SUM(IMPORT_CSV(), 1)', position)
    expect(actual).toBe(22)
  })

  it('should support custom function with context', async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const parser = new FormulaParser({
      onCell: () => 1,
      functionsNeedContext: {
        ROW_PLUS_COL: (context: any) =>
          context.position.row + context.position.col,
      },
    })
    const actual = await parser.parseAsync('SUM(ROW_PLUS_COL(), 1)', position)
    expect(actual).toBe(3)
  })
})

describe('github Issues', () => {
  it('issue-19： Inconsistent results with parse and parseAsync', async () => {
    let res = parser.parse('IF(20 < 0, "yep", "nope")')
    expect(res).toBe('nope')
    res = await parser.parseAsync('IF(20 < 0, "yep", "nope")')
    expect(res).toBe('nope')
  })
})
