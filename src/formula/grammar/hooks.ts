import TextFunctions from '../formulas/functions/text'
import DateFunctions from '../formulas/functions/date'
import MathFunctions from '../formulas/functions/math'
import TrigFunctions from '../formulas/functions/trigonometry'
import LogicalFunctions from '../formulas/functions/logical'
import EngFunctions from '../formulas/functions/engineering'
import ReferenceFunctions from '../formulas/functions/reference'
import InformationFunctions from '../formulas/functions/information'
import StatisticalFunctions from '../formulas/functions/statistical'
import WebFunctions from '../formulas/functions/web'
import FormulaError from '../formulas/error'
import { FormulaHelpers } from '../formulas/helpers'
import { Parser } from './parsing'
import { allTokens, lex } from './lexing'
import Utils from './utils'

/**
 * A Excel Formula Parser & Evaluator
 */
class FormulaParser {
  private logs: any

  private isTest

  private utils

  private onVariable

  private functions

  private onRange

  private onCell

  private funsNullAs0

  private funsNeedContextAndNoDataRetrieve

  private funsNeedContext

  private funsPreserveRef

  private parser: Parser

  private position: any

  private async: any

  /**
   * @param {{functions: {}, functionsNeedContext: {}, onVariable: function, onCell: function, onRange: function}} [config]
   * @param isTest - is in testing environment
   */
  constructor(config?: any, isTest = false) {
    this.logs = []
    this.isTest = isTest
    this.utils = new Utils(this)
    config = {
      functions: {},
      functionsNeedContext: {},
      onVariable: () => null,
      onCell: () => 0,
      onRange: () => [[0]],
      ...config,
    }

    this.onVariable = config.onVariable
    this.functions = {
      ...DateFunctions,
      ...StatisticalFunctions,
      ...InformationFunctions,
      ...ReferenceFunctions,
      ...EngFunctions,
      ...LogicalFunctions,
      ...TextFunctions,
      ...MathFunctions,
      ...TrigFunctions,
      ...WebFunctions,
      ...config.functions,
      ...config.functionsNeedContext,
    }
    this.onRange = config.onRange
    this.onCell = config.onCell

    // functions treat null as 0, other functions treats null as ""
    this.funsNullAs0 =
      /* Object.keys(MathFunctions)
            .concat(Object.keys(TrigFunctions))
            .concat(Object.keys(LogicalFunctions))
            .concat(Object.keys(EngFunctions))
            .concat(Object.keys(ReferenceFunctions))
            .concat(Object.keys(StatisticalFunctions))
            .concat(Object.keys(DateFunctions)) */
      Object.keys(DateFunctions)
        .concat(Object.keys(EngFunctions))
        .concat(Object.keys(MathFunctions))
        .concat(Object.keys(LogicalFunctions))
        .concat(Object.keys(ReferenceFunctions))
        .concat(Object.keys(StatisticalFunctions))
        .concat(Object.keys(TrigFunctions))

    // functions need context and don't need to retrieve references
    this.funsNeedContextAndNoDataRetrieve = [
      'ROW',
      'ROWS',
      'COLUMN',
      'COLUMNS',
      'SUMIF',
      'INDEX',
      'AVERAGEIF',
      'IF',
    ]

    // functions need parser context
    this.funsNeedContext = [
      ...Object.keys(config.functionsNeedContext),
      ...this.funsNeedContextAndNoDataRetrieve,
      'INDEX',
      'OFFSET',
      'INDIRECT',
      'IF',
      'CHOOSE',
      'WEBSERVICE',
    ]

    // functions preserve reference in arguments
    this.funsPreserveRef = Object.keys(InformationFunctions)

    this.parser = new Parser(this, this.utils)
  }

  /**
   * Get all lexing token names. Webpack needs this.
   * @return {Array.<string>} - All token names that should not be minimized.
   */
  static get allTokens() {
    return allTokens
  }

  /**
   * Get value from the cell reference
   * @param ref
   * @return {*}
   */
  getCell(ref: any) {
    // console.log('get cell', JSON.stringify(ref));
    if (ref.sheet == null)
      ref.sheet = this.position ? this.position.sheet : undefined
    return this.onCell(ref)
  }

  /**
   * Get values from the range reference.
   * @param ref
   * @return {*}
   */
  getRange(ref: any) {
    // console.log('get range', JSON.stringify(ref));
    if (ref.sheet == null)
      ref.sheet = this.position ? this.position.sheet : undefined
    return this.onRange(ref)
  }

  /**
   * TODO:
   * Get references or values from a user defined variable.
   * @param name
   * @return {*}
   */
  getVariable(name: any) {
    // console.log('get variable', name);
    const res = {
      ref: this.onVariable(name, this.position.sheet, this.position),
    }
    if (res.ref == null) return FormulaError.NAME
    return res
  }

  /**
   * Retrieve values from the given reference.
   * @param valueOrRef
   * @return {*}
   */
  retrieveRef(valueOrRef: any) {
    if (FormulaHelpers.isRangeRef(valueOrRef)) {
      return this.getRange(valueOrRef.ref)
    }
    if (FormulaHelpers.isCellRef(valueOrRef)) {
      return this.getCell(valueOrRef.ref)
    }
    return valueOrRef
  }

  /**
   * Call an excel function.
   * @param name - Function name.
   * @param args - Arguments that pass to the function.
   * @return {*}
   */
  _callFunction(name: any, args: any) {
    if (name.indexOf('_xlfn.') === 0) name = name.slice(6)
    name = name.toUpperCase()
    // if one arg is null, it means 0 or "" depends on the function it calls
    const nullValue = this.funsNullAs0.includes(name) ? 0 : ''

    if (!this.funsNeedContextAndNoDataRetrieve.includes(name)) {
      // retrieve reference
      args = args.map((arg: any) => {
        if (arg === null)
          return { value: nullValue, isArray: false, omitted: true }
        const res = this.utils.extractRefValue(arg)

        if (this.funsPreserveRef.includes(name)) {
          return { value: res.val, isArray: res.isArray, ref: arg.ref }
        }
        return {
          value: res.val,
          isArray: res.isArray,
          isRangeRef: !!FormulaHelpers.isRangeRef(arg),
          isCellRef: !!FormulaHelpers.isCellRef(arg),
        }
      })
    }
    // console.log('callFunction', name, args)

    if (this.functions[name]) {
      let res
      try {
        if (
          !this.funsNeedContextAndNoDataRetrieve.includes(name) &&
          !this.funsNeedContext.includes(name)
        )
          res = this.functions[name](...args)
        else res = this.functions[name](this, ...args)
      } catch (e) {
        // allow functions throw FormulaError, this make functions easier to implement!
        if (e instanceof FormulaError) {
          return e
        }
        throw e
      }
      if (res === undefined) {
        // console.log(`Function ${name} may be not implemented.`);
        if (this.isTest) {
          if (!this.logs.includes(name)) this.logs.push(name)
          return { value: 0, ref: {} }
        }
        throw FormulaError.NOT_IMPLEMENTED(name)
      }
      return res
    }
    // console.log(`Function ${name} is not implemented`);
    if (this.isTest) {
      if (!this.logs.includes(name)) this.logs.push(name)
      return { value: 0, ref: {} }
    }
    throw FormulaError.NOT_IMPLEMENTED(name)
  }

  async callFunctionAsync(name: any, args: any) {
    const awaitedArgs = []
    for (const arg of args) {
      awaitedArgs.push(await arg)
    }
    const res = await this._callFunction(name, awaitedArgs)
    return FormulaHelpers.checkFunctionResult(res)
  }

  callFunction(name: any, args: any) {
    if (this.async) {
      return this.callFunctionAsync(name, args)
    }
    const res = this._callFunction(name, args)
    return FormulaHelpers.checkFunctionResult(res)
  }

  /**
   * Return currently supported functions.
   * @return {this}
   */
  supportedFunctions() {
    const supported: any = []
    const functions = Object.keys(this.functions)
    functions.forEach((fun) => {
      try {
        const res = this.functions[fun](0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        if (res === undefined) return
        supported.push(fun)
      } catch (e) {
        if (e instanceof Error) supported.push(fun)
      }
    })
    return supported.sort()
  }

  /**
   * Check and return the appropriate formula result.
   * @param result
   * @param {boolean} [allowReturnArray] - If the formula can return an array
   * @return {*}
   */
  checkFormulaResult(result: any, allowReturnArray = false) {
    const type = typeof result
    // number
    if (type === 'number') {
      if (isNaN(result)) {
        return FormulaError.VALUE
      }
      if (!isFinite(result)) {
        return FormulaError.NUM
      }
      result += 0 // make -0 to 0
    } else if (type === 'object') {
      if (result instanceof FormulaError) return result
      if (allowReturnArray) {
        if (result.ref) {
          result = this.retrieveRef(result)
        }
        // Disallow union, and other unknown data types.
        // e.g. `=(A1:C1, A2:E9)` -> #VALUE!
        if (
          typeof result === 'object' &&
          !Array.isArray(result) &&
          result != null
        ) {
          return FormulaError.VALUE
        }
      } else {
        if (result.ref && result.ref.row && !result.ref.from) {
          // single cell reference
          result = this.retrieveRef(result)
        } else if (
          result.ref &&
          result.ref.from &&
          result.ref.from.col === result.ref.to.col
        ) {
          // single Column reference
          result = this.retrieveRef({
            ref: {
              row: result.ref.from.row,
              col: result.ref.from.col,
            },
          })
        } else if (Array.isArray(result)) {
          result = result[0][0]
        } else {
          // array, range reference, union collections
          return FormulaError.VALUE
        }
      }
    }
    return result
  }

  /**
   * Parse an excel formula.
   * @param {string} inputText
   * @param {{row: number, col: number}} [position] - The position of the parsed formula
   *              e.g. {row: 1, col: 1}
   * @param {boolean} [allowReturnArray] - If the formula can return an array. Useful when parsing array formulas,
   *                                      or data validation formulas.
   * @returns {*}
   */
  public parse(inputText: any, position?: any, allowReturnArray = false) {
    if (inputText.length === 0) throw Error('Input must not be empty.')
    this.position = position
    this.async = false
    const lexResult = lex(inputText)
    this.parser.input = lexResult.tokens
    let res: any
    try {
      res = this.parser.formulaWithBinaryOp()
      res = this.checkFormulaResult(res, allowReturnArray)
      if (res instanceof FormulaError) {
        return res
      }
    } catch (e: any) {
      throw FormulaError.ERROR(e.message, e)
    }
    if (this.parser.errors.length > 0) {
      const error = this.parser.errors[0]
      throw Utils.formatChevrotainError(error, inputText)
    }
    return res
  }

  /**
   * Parse an excel formula asynchronously.
   * Use when providing custom async functions.
   * @param {string} inputText
   * @param {{row: number, col: number}} [position] - The position of the parsed formula
   *              e.g. {row: 1, col: 1}
   * @param {boolean} [allowReturnArray] - If the formula can return an array. Useful when parsing array formulas,
   *                                      or data validation formulas.
   * @returns {*}
   */
  async parseAsync(inputText: any, position?: any, allowReturnArray = false) {
    if (inputText.length === 0) throw Error('Input must not be empty.')
    this.position = position
    this.async = true
    const lexResult = lex(inputText)
    this.parser.input = lexResult.tokens
    let res
    try {
      res = await this.parser.formulaWithBinaryOp()
      res = this.checkFormulaResult(res, allowReturnArray)
      if (res instanceof FormulaError) {
        return res
      }
    } catch (e: any) {
      throw FormulaError.ERROR(e.message, e)
    }
    if (this.parser.errors.length > 0) {
      const error = this.parser.errors[0]
      throw Utils.formatChevrotainError(error, inputText)
    }
    return res
  }
}

export default FormulaParser
