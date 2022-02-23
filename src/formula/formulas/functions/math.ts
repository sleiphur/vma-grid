import FormulaError from '../error'
import { FormulaHelpers, Types, Factorials, Criteria } from '../helpers'
import { Infix } from '../operators'
import {isNumeric} from "../../../utils/validate/number";

const H = FormulaHelpers

// Max number in excel is 2^1024-1, same as javascript, thus I will not check if number is valid in some functions.

// factorials
const f: any = []
const fd: any = []

function factorial(n: any): any {
  if (n <= 100) return Factorials[n]
  if (f[n] > 0) return f[n]
  return (f[n] = factorial(n - 1) * n)
}

function factorialDouble(n: any): any {
  if (n === 1 || n === 0) return 1
  if (n === 2) return 2
  if (fd[n] > 0) return fd[n]
  return (fd[n] = factorialDouble(n - 2) * n)
}

interface NumberDic {
  [index: string]: number;
}

// https://support.office.com/en-us/article/excel-functions-by-category-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb
const MathFunctions = {
  ABS: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.abs(number)
  },

  AGGREGATE: (functionNum: any, options: any, ref1: any, ...refs: any) => {
    // functionNum = H.accept(functionNum, Types.NUMBER);
    // throw FormulaError.NOT_IMPLEMENTED('AGGREGATE');
  },

  ARABIC: (text: any) => {
    text = H.accept(text, Types.STRING).toUpperCase()
    // Credits: Rafa? Kukawski
    if (
      !/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(text)
    ) {
      throw new FormulaError(
        '#VALUE!',
        'Invalid roman numeral in ARABIC evaluation.',
      )
    }
    let r: any = 0
    const arr: NumberDic = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }
    text.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (i: any) => {
      r += arr[i]
    })
    return r
  },

  BASE: (number: any, radix: any, minLength: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number < 0 || number >= 2 ** 53) throw FormulaError.NUM
    radix = H.accept(radix, Types.NUMBER)
    if (radix < 2 || radix > 36) throw FormulaError.NUM
    minLength = H.accept(minLength, Types.NUMBER, 0)
    if (minLength < 0) {
      throw FormulaError.NUM
    }

    const result = number.toString(radix).toUpperCase()
    return (
      new Array(Math.max(minLength + 1 - result.length, 0)).join('0') + result
    )
  },

  CEILING: (number: any, significance: any) => {
    number = H.accept(number, Types.NUMBER)
    significance = H.accept(significance, Types.NUMBER)
    if (significance === 0) return 0
    if ((number / significance) % 1 === 0) return number
    const absSignificance = Math.abs(significance)
    const times = Math.floor(Math.abs(number) / absSignificance)
    if (number < 0) {
      // round down, away from zero
      const roundDown = significance < 0
      return roundDown
        ? -absSignificance * (times + 1)
        : -absSignificance * times
    }
    return (times + 1) * absSignificance
  },

  'CEILING.MATH': (number: any, significance: any, mode: any) => {
    number = H.accept(number, Types.NUMBER)
    significance = H.accept(significance, Types.NUMBER, number > 0 ? 1 : -1)
    // mode can be any number
    mode = H.accept(mode, Types.NUMBER, 0)
    // The Mode argument does not affect positive numbers.
    if (number >= 0) {
      return MathFunctions.CEILING(number, significance)
    }
    // if round down, away from zero, then significance
    const offset = mode ? significance : 0
    return MathFunctions.CEILING(number, significance) - offset
  },

  'CEILING.PRECISE': (number: any, significance: any) => {
    number = H.accept(number, Types.NUMBER)
    significance = H.accept(significance, Types.NUMBER, 1)
    // always round up
    return MathFunctions.CEILING(number, Math.abs(significance))
  },

  COMBIN: (number: any, numberChosen: any) => {
    number = H.accept(number, Types.NUMBER)
    numberChosen = H.accept(numberChosen, Types.NUMBER)
    if (number < 0 || numberChosen < 0 || number < numberChosen)
      throw FormulaError.NUM
    const nFactorial = MathFunctions.FACT(number)
    const kFactorial = MathFunctions.FACT(numberChosen)
    return nFactorial / kFactorial / MathFunctions.FACT(number - numberChosen)
  },

  COMBINA: (number: any, numberChosen: any) => {
    number = H.accept(number, Types.NUMBER)
    numberChosen = H.accept(numberChosen, Types.NUMBER)
    // special case
    if ((number === 0 || number === 1) && numberChosen === 0) return 1
    if (number < 0 || numberChosen < 0) throw FormulaError.NUM
    return MathFunctions.COMBIN(number + numberChosen - 1, number - 1)
  },

  DECIMAL: (text: any, radix: any) => {
    text = H.accept(text, Types.STRING)
    radix = H.accept(radix, Types.NUMBER)
    radix = Math.trunc(radix)
    if (radix < 2 || radix > 36) throw FormulaError.NUM
    const res = parseInt(text, radix)
    if (isNaN(res)) throw FormulaError.NUM
    return res
  },

  DEGREES: (radians: any) => {
    radians = H.accept(radians, Types.NUMBER)
    return radians * (180 / Math.PI)
  },

  EVEN: (number: any) => MathFunctions.CEILING(number, -2),

  EXP: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.exp(number)
  },

  FACT: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    number = Math.trunc(number)
    // max number = 170
    if (number > 170 || number < 0) throw FormulaError.NUM
    if (number <= 100) return Factorials[number]
    return factorial(number)
  },

  FACTDOUBLE: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    number = Math.trunc(number)
    // max number = 170
    if (number < -1) throw FormulaError.NUM
    if (number === -1) return 1
    return factorialDouble(number)
  },

  FLOOR: (number: any, significance: any) => {
    number = H.accept(number, Types.NUMBER)
    significance = H.accept(significance, Types.NUMBER)
    if (significance === 0) return 0
    if (number > 0 && significance < 0) throw FormulaError.NUM
    if ((number / significance) % 1 === 0) return number
    const absSignificance = Math.abs(significance)
    const times = Math.floor(Math.abs(number) / absSignificance)
    if (number < 0) {
      // round down, away from zero
      const roundDown = significance < 0
      return roundDown
        ? -absSignificance * times
        : -absSignificance * (times + 1)
    }
    // toward zero
    return times * absSignificance
  },

  'FLOOR.MATH': (number: any, significance: any, mode: any) => {
    number = H.accept(number, Types.NUMBER)
    significance = H.accept(significance, Types.NUMBER, number > 0 ? 1 : -1)

    // mode can be 0 or any other number, 0 means away from zero
    // the official documentation seems wrong
    mode = H.accept(mode, Types.NUMBER, 0)
    // The Mode argument does not affect positive numbers.
    if (mode === 0 || number >= 0) {
      // away from zero
      return MathFunctions.FLOOR(number, Math.abs(significance))
    }
    // towards zero, add a significance
    return MathFunctions.FLOOR(number, significance) + significance
  },

  'FLOOR.PRECISE': (number: any, significance: any) => {
    number = H.accept(number, Types.NUMBER)
    significance = H.accept(significance, Types.NUMBER, 1)
    // always round up
    return MathFunctions.FLOOR(number, Math.abs(significance))
  },

  GCD: (...params: any) => {
    const arr: any = []
    H.flattenParams(
      params,
      null,
      false,
      (param: any) => {
        // allow array, range ref
        param = typeof param === 'boolean' ? NaN : Number(param)
        if (!isNaN(param)) {
          if (param < 0 || param > 9007199254740990)
            // 2^53
            throw FormulaError.NUM
          arr.push(Math.trunc(param))
        } else throw FormulaError.VALUE
      },
      0,
    )
    // http://rosettacode.org/wiki/Greatest_common_divisor#JavaScript
    let i
    let y
    const n = params.length
    let x = Math.abs(arr[0])

    for (i = 1; i < n; i++) {
      y = Math.abs(arr[i])

      while (x && y) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        x > y ? (x %= y) : (y %= x)
      }
      x += y
    }
    return x
  },

  INT: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.floor(number)
  },

  'ISO.CEILING': (number: any, significance: any) =>
    MathFunctions['CEILING.PRECISE'](number, significance),

  LCM: (...params: any) => {
    const arr: any = []
    // always parse string to number if possible
    H.flattenParams(
      params,
      null,
      false,
      (param: any) => {
        param = typeof param === 'boolean' ? NaN : Number(param)
        if (!isNaN(param)) {
          if (param < 0 || param > 9007199254740990)
            // 2^53
            throw FormulaError.NUM
          arr.push(Math.trunc(param))
        }
        // throw value error if can't parse to string
        else throw FormulaError.VALUE
      },
      1,
    )
    // http://rosettacode.org/wiki/Least_common_multiple#JavaScript
    const n = arr.length
    let a = Math.abs(arr[0])
    for (let i = 1; i < n; i++) {
      let b = Math.abs(arr[i])
      const c = a
      while (a && b) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        a > b ? (a %= b) : (b %= a)
      }
      a = Math.abs(c * arr[i]) / (a + b)
    }
    return a
  },

  LN: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.log(number)
  },

  LOG: (number: any, base: any) => {
    number = H.accept(number, Types.NUMBER)
    base = H.accept(base, Types.NUMBER, 10)

    return Math.log(number) / Math.log(base)
  },

  LOG10: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.log10(number)
  },

  MDETERM: (array: any) => {
    array = H.accept(array, Types.ARRAY, undefined, false, true)
    if (array[0].length !== array.length) throw FormulaError.VALUE
    // adopted from https://github.com/numbers/numbers.js/blob/master/lib/numbers/matrix.js#L261
    const numRow = array.length
    const numCol = array[0].length
    let det = 0
    let diagLeft
    let diagRight

    if (numRow === 1) {
      return array[0][0]
    }
    if (numRow === 2) {
      return array[0][0] * array[1][1] - array[0][1] * array[1][0]
    }

    for (let col = 0; col < numCol; col++) {
      diagLeft = array[0][col]
      diagRight = array[0][col]

      for (let row = 1; row < numRow; row++) {
        diagRight *= array[row][(((col + row) % numCol) + numCol) % numCol]
        diagLeft *= array[row][(((col - row) % numCol) + numCol) % numCol]
      }

      det += diagRight - diagLeft
    }

    return det
  },

  MINVERSE: (array: any) => {
    // TODO
    // array = H.accept(array, Types.ARRAY, null, false);
    // if (array[0].length !== array.length)
    //     throw FormulaError.VALUE;
    // throw FormulaError.NOT_IMPLEMENTED('MINVERSE');
  },

  MMULT: (array1: any, array2: any) => {
    array1 = H.accept(array1, Types.ARRAY, undefined, false, true)
    array2 = H.accept(array2, Types.ARRAY, undefined, false, true)

    const aNumRows = array1.length
    const aNumCols = array1[0].length
    const bNumRows = array2.length
    const bNumCols = array2[0].length
    const m = new Array(aNumRows) // initialize array of rows

    if (aNumCols !== bNumRows) throw FormulaError.VALUE

    for (let r = 0; r < aNumRows; r++) {
      m[r] = new Array(bNumCols) // initialize the current row
      for (let c = 0; c < bNumCols; c++) {
        m[r][c] = 0 // initialize the current cell
        for (let i = 0; i < aNumCols; i++) {
          const v1 = array1[r][i]
          const v2 = array2[i][c]
          if (typeof v1 !== 'number' || typeof v2 !== 'number')
            throw FormulaError.VALUE
          m[r][c] += array1[r][i] * array2[i][c]
        }
      }
    }
    return m
  },

  MOD: (number: any, divisor: any) => {
    number = H.accept(number, Types.NUMBER)
    divisor = H.accept(divisor, Types.NUMBER)
    if (divisor === 0) throw FormulaError.DIV0
    return number - divisor * MathFunctions.INT(number / divisor)
  },

  MROUND: (number: any, multiple: any) => {
    number = H.accept(number, Types.NUMBER)
    multiple = H.accept(multiple, Types.NUMBER)
    if (multiple === 0) return 0
    if ((number > 0 && multiple < 0) || (number < 0 && multiple > 0))
      throw FormulaError.NUM
    if ((number / multiple) % 1 === 0) return number
    return Math.round(number / multiple) * multiple
  },

  MULTINOMIAL: (...numbers: any) => {
    let numerator = 0
    let denominator = 1
    H.flattenParams(numbers, Types.NUMBER, false, (number: any) => {
      if (number < 0) throw FormulaError.NUM
      numerator += number
      denominator *= factorial(number)
    })
    return factorial(numerator) / denominator
  },

  MUNIT: (dimension: any) => {
    dimension = H.accept(dimension, Types.NUMBER)
    const matrix = []
    for (let row = 0; row < dimension; row++) {
      const rowArr = []
      for (let col = 0; col < dimension; col++) {
        if (row === col) rowArr.push(1)
        else rowArr.push(0)
      }
      matrix.push(rowArr)
    }
    return matrix
  },

  ODD: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number === 0) return 1
    let temp = Math.ceil(Math.abs(number))
    temp = temp & 1 ? temp : temp + 1
    return number > 0 ? temp : -temp
  },

  PI: () => Math.PI,

  POWER: (number: any, power: any) => {
    number = H.accept(number, Types.NUMBER)
    power = H.accept(power, Types.NUMBER)
    return number ** power
  },

  PRODUCT: (...numbers: any) => {
    let product = 1
    H.flattenParams(
      numbers,
      null,
      true,
      (number: any, info: any) => {
        const parsedNumber = Number(number)
        if (info.isLiteral && !isNaN(parsedNumber)) {
          product *= parsedNumber
        } else {
          if (typeof number === 'number') product *= number
        }
      },
      1,
    )
    return product
  },

  QUOTIENT: (numerator: any, denominator: any) => {
    numerator = H.accept(numerator, Types.NUMBER)
    denominator = H.accept(denominator, Types.NUMBER)
    return Math.trunc(numerator / denominator)
  },

  RADIANS: (degrees: any) => {
    degrees = H.accept(degrees, Types.NUMBER)
    return (degrees / 180) * Math.PI
  },

  RAND: () => Math.random(),

  RANDBETWEEN: (bottom: any, top: any) => {
    bottom = H.accept(bottom, Types.NUMBER)
    top = H.accept(top, Types.NUMBER)
    return Math.floor(Math.random() * (top - bottom + 1) + bottom)
  },

  ROMAN: (number: any, form: any) => {
    number = H.accept(number, Types.NUMBER)
    form = H.accept(form, Types.NUMBER, 0)
    if (form !== 0) throw Error('ROMAN: only allows form=0 (classic form).')
    // The MIT License
    // Copyright (c) 2008 Steven Levithan
    const digits = String(number).split('')
    const key = [
      '',
      'C',
      'CC',
      'CCC',
      'CD',
      'D',
      'DC',
      'DCC',
      'DCCC',
      'CM',
      '',
      'X',
      'XX',
      'XXX',
      'XL',
      'L',
      'LX',
      'LXX',
      'LXXX',
      'XC',
      '',
      'I',
      'II',
      'III',
      'IV',
      'V',
      'VI',
      'VII',
      'VIII',
      'IX',
    ]
    let roman = ''
    let i = 3
    while (i--) {
      roman = (key[+digits.pop()! + i * 10] || '') + roman
    }
    return new Array(+digits.join('') + 1).join('M') + roman
  },

  ROUND: (number: any, digits: any) => {
    number = H.accept(number, Types.NUMBER)
    digits = H.accept(digits, Types.NUMBER)

    const multiplier = Math.pow(10, Math.abs(digits))
    const sign = number > 0 ? 1 : -1
    if (digits > 0) {
      return (sign * Math.round(Math.abs(number) * multiplier)) / multiplier
    }
    if (digits === 0) {
      return sign * Math.round(Math.abs(number))
    }
    return sign * Math.round(Math.abs(number) / multiplier) * multiplier
  },

  ROUNDDOWN: (number: any, digits: any) => {
    number = H.accept(number, Types.NUMBER)
    digits = H.accept(digits, Types.NUMBER)

    const multiplier = Math.pow(10, Math.abs(digits))
    const sign = number > 0 ? 1 : -1
    if (digits > 0) {
      const offset = (1 / multiplier) * 0.5
      return (
        (sign * Math.round((Math.abs(number) - offset) * multiplier)) /
        multiplier
      )
    }
    if (digits === 0) {
      const offset = 0.5
      return sign * Math.round(Math.abs(number) - offset)
    }
    const offset = multiplier * 0.5
    return (
      sign * Math.round((Math.abs(number) - offset) / multiplier) * multiplier
    )
  },

  ROUNDUP: (number: any, digits: any) => {
    number = H.accept(number, Types.NUMBER)
    digits = H.accept(digits, Types.NUMBER)

    const multiplier = Math.pow(10, Math.abs(digits))
    const sign = number > 0 ? 1 : -1
    if (digits > 0) {
      const offset = (1 / multiplier) * 0.5
      return (
        (sign * Math.round((Math.abs(number) + offset) * multiplier)) /
        multiplier
      )
    }
    if (digits === 0) {
      const offset = 0.5
      return sign * Math.round(Math.abs(number) + offset)
    }
    const offset = multiplier * 0.5
    return (
      sign * Math.round((Math.abs(number) + offset) / multiplier) * multiplier
    )
  },

  SERIESSUM: (x: any, n: any, m: any, coefficients: any) => {
    x = H.accept(x, Types.NUMBER)
    n = H.accept(n, Types.NUMBER)
    m = H.accept(m, Types.NUMBER)
    let i = 0
    let result: any
    H.flattenParams([coefficients], Types.NUMBER, false, (coefficient: any) => {
      if (typeof coefficient !== 'number') {
        throw FormulaError.VALUE
      }
      if (i === 0) {
        result = coefficient * Math.pow(x, n)
      } else {
        result += coefficient * Math.pow(x, n + i * m)
      }
      i++
    })
    return result
  },

  SIGN: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return number > 0 ? 1 : number === 0 ? 0 : -1
  },

  SQRT: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number < 0) throw FormulaError.NUM
    return Math.sqrt(number)
  },

  SQRTPI: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number < 0) throw FormulaError.NUM
    return Math.sqrt(number * Math.PI)
  },

  SUBTOTAL: () => {
    // TODO: Finish this after statistical functions are implemented.
  },

  SUM: (...params: any) => {
    // parse string to number only when it is a literal. (not a reference)
    let result = 0
    H.flattenParams(params, Types.NUMBER, true, (item: any, info: any) => {
      // literal will be parsed to given type (Type.NUMBER)
      // console.log(info, item)
      if (info.isLiteral) {
        result += item
      } else {
        if (typeof item === 'number') {
          result += item
        } else if (isNumeric(item)) {
          result += Number(item)
        }
      }
    })
    return result
  },

  /**
   * This functions requires instance of {@link FormulaParser}.
   */
  SUMIF: (context: any, range: any, criteria: any, sumRange: any) => {
    const ranges = H.retrieveRanges(context, range, sumRange)
    range = ranges[0]
    sumRange = ranges[1]

    criteria = H.retrieveArg(context, criteria)
    const isCriteriaArray = criteria.isArray
    // parse criteria
    criteria = Criteria.parse(H.accept(criteria))
    let sum = 0

    range.forEach((row: any, rowNum: any) => {
      row.forEach((value: any, colNum: any) => {
        const valueToAdd = sumRange[rowNum][colNum]
        if (typeof valueToAdd !== 'number') return
        // wildcard
        if (criteria.op === 'wc') {
          if (criteria.match === criteria.value.test(value)) {
            sum += valueToAdd
          }
        } else if (
          Infix.compareOp(
            value,
            criteria.op,
            criteria.value,
            Array.isArray(value),
            isCriteriaArray,
          )
        ) {
          sum += valueToAdd
        }
      })
    })
    return sum
  },

  SUMIFS: () => {},

  SUMPRODUCT: (array1: any, ...arrays: any) => {
    array1 = H.accept(array1, Types.ARRAY, undefined, false, true)
    arrays.forEach((array: any) => {
      array = H.accept(array, Types.ARRAY, undefined, false, true)
      if (
        array1[0].length !== array[0].length ||
        array1.length !== array.length
      )
        throw FormulaError.VALUE
      for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array1[0].length; j++) {
          if (typeof array1[i][j] !== 'number') array1[i][j] = 0
          if (typeof array[i][j] !== 'number') array[i][j] = 0
          array1[i][j] *= array[i][j]
        }
      }
    })
    let result = 0

    array1.forEach((row: any) => {
      row.forEach((value: any) => {
        result += value
      })
    })

    return result
  },

  SUMSQ: (...params: any) => {
    // parse string to number only when it is a literal. (not a reference)
    let result = 0
    H.flattenParams(params, Types.NUMBER, true, (item: any, info: any) => {
      // literal will be parsed to given type (Type.NUMBER)
      if (info.isLiteral) {
        result += item ** 2
      } else {
        if (typeof item === 'number') result += item ** 2
      }
    })
    return result
  },

  SUMX2MY2: (arrayX: any, arrayY: any) => {
    const x: any = []
    const y: any = []
    let sum = 0
    H.flattenParams([arrayX], null, false, (item: any, info: any) => {
      x.push(item)
    })
    H.flattenParams([arrayY], null, false, (item: any, info: any) => {
      y.push(item)
    })
    if (x.length !== y.length) throw FormulaError.NA
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'number' && typeof y[i] === 'number')
        sum += x[i] ** 2 - y[i] ** 2
    }
    return sum
  },

  SUMX2PY2: (arrayX: any, arrayY: any) => {
    const x: any = []
    const y: any = []
    let sum = 0
    H.flattenParams([arrayX], null, false, (item: any, info: any) => {
      x.push(item)
    })
    H.flattenParams([arrayY], null, false, (item: any, info: any) => {
      y.push(item)
    })
    if (x.length !== y.length) throw FormulaError.NA
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'number' && typeof y[i] === 'number')
        sum += x[i] ** 2 + y[i] ** 2
    }
    return sum
  },

  SUMXMY2: (arrayX: any, arrayY: any) => {
    const x: any = []
    const y: any = []
    let sum = 0
    H.flattenParams([arrayX], null, false, (item: any, info: any) => {
      x.push(item)
    })
    H.flattenParams([arrayY], null, false, (item: any, info: any) => {
      y.push(item)
    })
    if (x.length !== y.length) throw FormulaError.NA
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'number' && typeof y[i] === 'number')
        sum += (x[i] - y[i]) ** 2
    }
    return sum
  },

  TRUNC: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    return Math.trunc(number)
  },
}

export default MathFunctions
