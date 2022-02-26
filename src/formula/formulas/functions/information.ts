import FormulaError from '../error'
import { FormulaHelpers, Types } from '../helpers'

const H = FormulaHelpers

interface NumberDic {
  [index: string]: number
}

const error2Number: NumberDic = {
  '#NULL!': 1,
  '#DIV/0!': 2,
  '#VALUE!': 3,
  '#REF!': 4,
  '#NAME?': 5,
  '#NUM!': 6,
  '#N/A': 7,
}

const InfoFunctions = {
  CELL: (infoType: any, reference: any) => {
    // throw FormulaError.NOT_IMPLEMENTED('CELL');
  },

  'ERROR.TYPE': (value: any) => {
    value = H.accept(value)
    if (value instanceof FormulaError) return error2Number[value.toString()]
    throw FormulaError.NA
  },

  INFO: () => {},

  ISBLANK: (value: any) => {
    if (!value.ref) return false
    // null and undefined are also blank
    return value.value == null || value.value === ''
  },

  ISERR: (value: any) => {
    value = H.accept(value)
    return value instanceof FormulaError && value.toString() !== '#N/A'
  },

  ISERROR: (value: any) => {
    value = H.accept(value)
    return value instanceof FormulaError
  },

  ISEVEN: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    number = Math.trunc(number)
    return number % 2 === 0
  },

  ISLOGICAL: (value: any) => {
    value = H.accept(value)
    return typeof value === 'boolean'
  },

  ISNA: (value: any) => {
    value = H.accept(value)
    return value instanceof FormulaError && value.toString() === '#N/A'
  },

  ISNONTEXT: (value: any) => {
    value = H.accept(value)
    return typeof value !== 'string'
  },

  ISNUMBER: (value: any) => {
    value = H.accept(value)
    return typeof value === 'number'
  },

  ISREF: (value: any) => {
    if (!value.ref) return false
    if (
      H.isCellRef(value) &&
      (value.ref.row > 1048576 || value.ref.col > 16384)
    ) {
      return false
    }
    if (
      H.isRangeRef(value) &&
      (value.ref.from.row > 1048576 ||
        value.ref.from.col > 16384 ||
        value.ref.to.row > 1048576 ||
        value.ref.to.col > 16384)
    ) {
      return false
    }
    value = H.accept(value)
    return !(value instanceof FormulaError && value.toString() === '#REF!')
  },

  ISTEXT: (value: any) => {
    value = H.accept(value)
    return typeof value === 'string'
  },

  N: (value: any) => {
    value = H.accept(value)
    const type = typeof value
    if (type === 'number') return value
    if (type === 'boolean') return Number(value)
    if (value instanceof FormulaError) throw value
    return 0
  },

  NA: () => {
    throw FormulaError.NA
  },

  TYPE: (value: any) => {
    // a reference
    if (value.ref) {
      if (H.isRangeRef(value)) {
        return 16
      }
      if (H.isCellRef(value)) {
        value = H.accept(value)
        // empty cell is number type
        if (typeof value === 'string' && value.length === 0) return 1
      }
    }
    value = H.accept(value)
    const type = typeof value
    if (type === 'number') return 1
    if (type === 'string') return 2
    if (type === 'boolean') return 4
    if (value instanceof FormulaError) return 16
    if (Array.isArray(value)) return 64

    throw FormulaError.VALUE
  },
}

export default InfoFunctions
