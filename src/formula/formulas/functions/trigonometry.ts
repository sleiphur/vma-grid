import FormulaError from '../error'
import { FormulaHelpers, Types } from '../helpers'

const H = FormulaHelpers
const MAX_NUMBER = 2 ** 27 - 1

// https://support.office.com/en-us/article/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb
const TrigFunctions = {
  ACOS: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number > 1 || number < -1) throw FormulaError.NUM
    return Math.acos(number)
  },

  ACOSH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number < 1) throw FormulaError.NUM
    return Math.acosh(number)
  },

  ACOT: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.PI / 2 - Math.atan(number)
  },

  ACOTH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (Math.abs(number) <= 1) throw FormulaError.NUM
    return Math.atanh(1 / number)
  },

  ASIN: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number > 1 || number < -1) throw FormulaError.NUM
    return Math.asin(number)
  },

  ASINH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.asinh(number)
  },

  ATAN: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.atan(number)
  },

  ATAN2: (x: any, y: any) => {
    x = H.accept(x, Types.NUMBER)
    y = H.accept(y, Types.NUMBER)
    if (y === 0 && x === 0) throw FormulaError.DIV0
    return Math.atan2(y, x)
  },

  ATANH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (Math.abs(number) > 1) throw FormulaError.NUM
    return Math.atanh(number)
  },

  COS: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (Math.abs(number) > MAX_NUMBER) throw FormulaError.NUM
    return Math.cos(number)
  },

  COSH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.cosh(number)
  },

  COT: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (Math.abs(number) > MAX_NUMBER) throw FormulaError.NUM
    if (number === 0) throw FormulaError.DIV0
    return 1 / Math.tan(number)
  },

  COTH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number === 0) throw FormulaError.DIV0
    return 1 / Math.tanh(number)
  },

  CSC: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (Math.abs(number) > MAX_NUMBER) throw FormulaError.NUM
    return 1 / Math.sin(number)
  },

  CSCH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number === 0) throw FormulaError.DIV0
    return 1 / Math.sinh(number)
  },

  SEC: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (Math.abs(number) > MAX_NUMBER) throw FormulaError.NUM
    return 1 / Math.cos(number)
  },

  SECH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return 1 / Math.cosh(number)
  },

  SIN: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (Math.abs(number) > MAX_NUMBER) throw FormulaError.NUM
    return Math.sin(number)
  },

  SINH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.sinh(number)
  },

  TAN: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (Math.abs(number) > MAX_NUMBER) throw FormulaError.NUM
    return Math.tan(number)
  },

  TANH: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.tanh(number)
  },
}

export default TrigFunctions
