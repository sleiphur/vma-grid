import { FormulaHelpers, Types, Criteria, Address } from '../helpers'
import FormulaError from '../error'
import { Infix } from '../operators'
import DistributionFunctions from './distribution'

const H = FormulaHelpers

const StatisticalFunctions = {
  AVEDEV: (...numbers: any) => {
    let sum = 0
    const arr: any = []
    // parse number only if the input is literal
    H.flattenParams(numbers, Types.NUMBER, true, (item: any, info: any) => {
      if (typeof item === 'number') {
        sum += item
        arr.push(item)
      }
    })
    const avg = sum / arr.length
    sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += Math.abs(arr[i] - avg)
    }
    return sum / arr.length
  },

  AVERAGE: (...numbers: any) => {
    let sum = 0
    let cnt = 0
    // parse number only if the input is literal
    H.flattenParams(numbers, Types.NUMBER, true, (item: any, info: any) => {
      if (typeof item === 'number') {
        sum += item
        cnt++
      }
    })
    return sum / cnt
  },

  AVERAGEA: (...numbers: any) => {
    let sum = 0
    let cnt = 0
    // parse number only if the input is literal
    H.flattenParams(numbers, Types.NUMBER, true, (item: any, info: any) => {
      const type = typeof item
      if (type === 'number') {
        sum += item
        cnt++
      } else if (type === 'string') {
        cnt++
      }
    })
    return sum / cnt
  },

  // special
  AVERAGEIF: (context: any, range: any, criteria: any, averageRange: any) => {
    const ranges = H.retrieveRanges(context, range, averageRange)
    range = ranges[0]
    averageRange = ranges[1]

    criteria = H.retrieveArg(context, criteria)
    const isCriteriaArray = criteria.isArray
    criteria = Criteria.parse(H.accept(criteria))

    let sum = 0
    let cnt = 0
    range.forEach((row: any, rowNum: any) => {
      row.forEach((value: any, colNum: any) => {
        const valueToAdd = averageRange[rowNum][colNum]
        if (typeof valueToAdd !== 'number') return
        // wildcard
        if (criteria.op === 'wc') {
          if (criteria.match === criteria.value.test(value)) {
            sum += valueToAdd
            cnt++
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
          cnt++
        }
      })
    })
    if (cnt === 0) throw FormulaError.DIV0
    return sum / cnt
  },

  AVERAGEIFS: () => {},

  COUNT: (...ranges: any) => {
    let cnt = 0
    H.flattenParams(ranges, null, true, (item: any, info: any) => {
      // literal will be parsed to Type.NUMBER
      if (info.isLiteral && !isNaN(item)) {
        cnt++
      } else {
        if (typeof item === 'number') cnt++
      }
    })
    return cnt
  },

  COUNTIF: (range: any, criteria: any) => {
    // do not flatten the array
    range = H.accept(range, Types.ARRAY, undefined, false, true)
    const isCriteriaArray = criteria.isArray
    criteria = H.accept(criteria)

    let cnt = 0
    // parse criteria
    criteria = Criteria.parse(criteria)

    range.forEach((row: any) => {
      row.forEach((value: any) => {
        // wildcard
        if (criteria.op === 'wc') {
          if (criteria.match === criteria.value.test(value)) cnt++
        } else if (
          Infix.compareOp(
            value,
            criteria.op,
            criteria.value,
            Array.isArray(value),
            isCriteriaArray,
          )
        ) {
          cnt++
        }
      })
    })
    return cnt
  },

  LARGE: () => {},

  MAX: () => {},

  MAXA: () => {},

  MAXIFS: () => {},

  MEDIAN: () => {},

  MIN: () => {},

  MINA: () => {},

  MINIFS: () => {},

  PERMUT: () => {},

  PERMUTATIONA: () => {},

  SMALL: () => {},
}

Object.assign(StatisticalFunctions, DistributionFunctions)

export default StatisticalFunctions
