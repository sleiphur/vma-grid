import FormulaError from '../error'
import { FormulaHelpers, Types } from '../helpers'

const H = FormulaHelpers

/**
 * Get the number of values that evaluate to true and false.
 * Cast Number and "TRUE", "FALSE" to boolean.
 * Ignore unrelated values.
 * @ignore
 * @param {any[]} params
 * @return {number[]}
 */
function getNumLogicalValue(params: any) {
  let numTrue = 0
  let numFalse = 0
  H.flattenParams(params, null, true, (val: any) => {
    const type = typeof val
    if (type === 'string') {
      if (val === 'TRUE') val = true
      else if (val === 'FALSE') val = false
    } else if (type === 'number') val = Boolean(val)

    if (typeof val === 'boolean') {
      if (val === true) numTrue++
      else numFalse++
    }
  })
  return [numTrue, numFalse]
}

const LogicalFunctions = {
  AND: (...params: any) => {
    const [numTrue, numFalse] = getNumLogicalValue(params)

    // OR returns #VALUE! if no logical values are found.
    if (numTrue === 0 && numFalse === 0) return FormulaError.VALUE

    return numTrue > 0 && numFalse === 0
  },

  FALSE: () => false,

  // Special
  IF: (context: any, logicalTest: any, valueIfTrue: any, valueIfFalse: any) => {
    logicalTest = H.accept(logicalTest, Types.BOOLEAN)
    valueIfTrue = H.accept(valueIfTrue) // do not parse type
    valueIfFalse = H.accept(valueIfFalse, null, false) // do not parse type

    return logicalTest ? valueIfTrue : valueIfFalse
  },

  IFERROR: (value: any, valueIfError: any) =>
    value.value instanceof FormulaError
      ? H.accept(valueIfError)
      : H.accept(value),

  IFNA(value: any, valueIfNa: any) {
    if (arguments.length > 2) throw FormulaError.TOO_MANY_ARGS('IFNA')
    return FormulaError.NA.equals(value.value)
      ? H.accept(valueIfNa)
      : H.accept(value)
  },

  IFS: (...params: any) => {
    if (params.length % 2 !== 0)
      return new FormulaError(
        '#N/A',
        'IFS expects all arguments after position 0 to be in pairs.',
      )

    for (let i = 0; i < params.length / 2; i++) {
      const logicalTest = H.accept(params[i * 2], Types.BOOLEAN)
      const valueIfTrue = H.accept(params[i * 2 + 1])
      if (logicalTest) return valueIfTrue
    }

    return FormulaError.NA
  },

  NOT: (logical: any) => {
    logical = H.accept(logical, Types.BOOLEAN)
    return !logical
  },

  OR: (...params: any) => {
    const [numTrue, numFalse] = getNumLogicalValue(params)

    // OR returns #VALUE! if no logical values are found.
    if (numTrue === 0 && numFalse === 0) return FormulaError.VALUE

    return numTrue > 0
  },

  SWITCH: (...params: any) => {},

  TRUE: () => true,

  XOR: (...params: any) => {
    const [numTrue, numFalse] = getNumLogicalValue(params)

    // XOR returns #VALUE! if no logical values are found.
    if (numTrue === 0 && numFalse === 0) return FormulaError.VALUE

    return numTrue % 2 === 1
  },
}

export default LogicalFunctions
