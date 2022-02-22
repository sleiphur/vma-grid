// @ts-ignore
import { bahttext } from 'bahttext'
import FormulaError from '../error'
import { FormulaHelpers, Types, WildCard } from '../helpers'

// Spreadsheet number format
// @ts-ignore
import SSF from '../../grammar/ssf'

const H = FormulaHelpers

// full-width and half-width converter
const charsets: any = {
  latin: { halfRE: /[!-~]/g, fullRE: /[！-～]/g, delta: 0xfee0 },
  hangul1: { halfRE: /[ﾡ-ﾾ]/g, fullRE: /[ᆨ-ᇂ]/g, delta: -0xedf9 },
  hangul2: { halfRE: /[ￂ-ￜ]/g, fullRE: /[ᅡ-ᅵ]/g, delta: -0xee61 },
  kana: {
    delta: 0,
    half: '｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ',
    full:
      '。「」、・ヲァィゥェォャュョッーアイウエオカキクケコサシ' +
      'スセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜',
  },
  extras: {
    delta: 0,
    half: '¢£¬¯¦¥₩\u0020|←↑→↓■°',
    full: '￠￡￢￣￤￥￦\u3000￨￩￪￫￬￭￮',
  },
}
const toFull = (set: any) => (c: any) =>
  set.delta
    ? String.fromCharCode(c.charCodeAt(0) + set.delta)
    : [...set.full][[...set.half].indexOf(c)]
const toHalf = (set: any) => (c: any) =>
  set.delta
    ? String.fromCharCode(c.charCodeAt(0) - set.delta)
    : [...set.half][[...set.full].indexOf(c)]
const re = (set: any, way: any) => set[`${way}RE`] || new RegExp(`[${set[way]}]`, 'g')
const sets = Object.keys(charsets).map((i) => charsets[i])
const toFullWidth = (str0: any) =>
  sets.reduce((str, set) => str.replace(re(set, 'half'), toFull(set)), str0)
const toHalfWidth = (str0: any) =>
  sets.reduce((str, set) => str.replace(re(set, 'full'), toHalf(set)), str0)

const TextFunctions = {
  ASC: (text: any) => {
    text = H.accept(text, Types.STRING)
    return toHalfWidth(text)
  },

  BAHTTEXT: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    try {
      return bahttext(number)
    } catch (e: any) {
      throw Error(
        `Error in https://github.com/jojoee/bahttext \n${e.toString()}`,
      )
    }
  },

  CHAR: (number: any) => {
    number = H.accept(number, Types.NUMBER)
    if (number > 255 || number < 1) throw FormulaError.VALUE
    return String.fromCharCode(number)
  },

  CLEAN: (text: any) => {
    text = H.accept(text, Types.STRING)
    return text.replace(/[\x00-\x1F]/g, '')
  },

  CODE: (text: any) => {
    text = H.accept(text, Types.STRING)
    if (text.length === 0) throw FormulaError.VALUE
    return text.charCodeAt(0)
  },

  CONCAT: (...params: any) => {
    let text = ''
    // does not allow union
    H.flattenParams(params, Types.STRING, false, (item: any) => {
      item = H.accept(item, Types.STRING)
      text += item
    })
    return text
  },

  CONCATENATE: (...params: any) => {
    let text = ''
    if (params.length === 0)
      throw Error('CONCATENATE need at least one argument.')
    params.forEach((param: any) => {
      // does not allow range reference, array, union
      param = H.accept(param, Types.STRING)
      text += param
    })

    return text
  },

  DBCS: (text: any) => {
    text = H.accept(text, Types.STRING)
    return toFullWidth(text)
  },

  DOLLAR: (number: any, decimals: any) => {
    number = H.accept(number, Types.NUMBER)
    decimals = H.accept(decimals, Types.NUMBER, 2)
    const decimalString = Array(decimals).fill('0').join('')
    // Note: does not support locales
    // TODO: change currency based on user locale or settings from this library
    return SSF.format(
      `$#,##0.${decimalString}_);($#,##0.${decimalString})`,
      number,
    ).trim()
  },

  EXACT: (text1: any, text2: any) => {
    text1 = H.accept(text1, [Types.STRING])
    text2 = H.accept(text2, [Types.STRING])

    return text1 === text2
  },

  FIND: (findText: any, withinText: any, startNum: any) => {
    findText = H.accept(findText, Types.STRING)
    withinText = H.accept(withinText, Types.STRING)
    startNum = H.accept(startNum, Types.NUMBER, 1)
    if (startNum < 1 || startNum > withinText.length) throw FormulaError.VALUE
    const res = withinText.indexOf(findText, startNum - 1)
    if (res === -1) throw FormulaError.VALUE
    return res + 1
  },

  FINDB: (findText: any, withinText: any, startNum: any) =>
    TextFunctions.FIND(findText, withinText, startNum),

  FIXED: (number: any, decimals: any, noCommas: any) => {
    number = H.accept(number, Types.NUMBER)
    decimals = H.accept(decimals, Types.NUMBER, 2)
    noCommas = H.accept(noCommas, Types.BOOLEAN, false)

    const decimalString = Array(decimals).fill('0').join('')
    const comma = noCommas ? '' : '#,'
    return SSF.format(
      `${comma}##0.${decimalString}_);(${comma}##0.${decimalString})`,
      number,
    ).trim()
  },

  LEFT: (text: any, numChars: any) => {
    text = H.accept(text, Types.STRING)
    numChars = H.accept(numChars, Types.NUMBER, 1)

    if (numChars < 0) throw FormulaError.VALUE
    if (numChars > text.length) return text
    return text.slice(0, numChars)
  },

  LEFTB: (text: any, numChars: any) => TextFunctions.LEFT(text, numChars),

  LEN: (text: any) => {
    text = H.accept(text, Types.STRING)
    return text.length
  },

  LENB: (text: any) => TextFunctions.LEN(text),

  LOWER: (text: any) => {
    text = H.accept(text, Types.STRING)
    return text.toLowerCase()
  },

  MID: (text: any, startNum: any, numChars: any) => {
    text = H.accept(text, Types.STRING)
    startNum = H.accept(startNum, Types.NUMBER)
    numChars = H.accept(numChars, Types.NUMBER)
    if (startNum > text.length) return ''
    if (startNum < 1 || numChars < 1) throw FormulaError.VALUE
    return text.slice(startNum - 1, startNum + numChars - 1)
  },

  MIDB: (text: any, startNum: any, numChars: any) =>
    TextFunctions.MID(text, startNum, numChars),

  NUMBERVALUE: (text: any, decimalSeparator: any, groupSeparator: any) => {
    text = H.accept(text, Types.STRING)
    // TODO: support reading system locale and set separators
    decimalSeparator = H.accept(decimalSeparator, Types.STRING, '.')
    groupSeparator = H.accept(groupSeparator, Types.STRING, ',')

    if (text.length === 0) return 0
    if (decimalSeparator.length === 0 || groupSeparator.length === 0)
      throw FormulaError.VALUE
    decimalSeparator = decimalSeparator[0]
    groupSeparator = groupSeparator[0]
    if (
      decimalSeparator === groupSeparator ||
      text.indexOf(decimalSeparator) < text.lastIndexOf(groupSeparator)
    )
      throw FormulaError.VALUE

    const res = text
      .replace(groupSeparator, '')
      .replace(decimalSeparator, '.')
      // remove chars that not related to number
      .replace(/[^\-0-9.%()]/g, '')
      .match(/([(-]*)([0-9]*[.]*[0-9]+)([)]?)([%]*)/)
    if (!res) throw FormulaError.VALUE
    // ["-123456.78%%", "(-", "123456.78", ")", "%%"]
    const leftParenOrMinus = res[1].length
    const rightParen = res[3].length
    const percent = res[4].length
    let number = Number(res[2])
    if (
      leftParenOrMinus > 1 ||
      (leftParenOrMinus && !rightParen) ||
      (!leftParenOrMinus && rightParen) ||
      isNaN(number)
    )
      throw FormulaError.VALUE
    number /= 100 ** percent
    return leftParenOrMinus ? -number : number
  },

  PHONETIC: () => {},

  PROPER: (text: any) => {
    text = H.accept(text, [Types.STRING])
    text = text.toLowerCase()
    text = text.charAt(0).toUpperCase() + text.slice(1)
    return text.replace(/(?:[^a-zA-Z])([a-zA-Z])/g, (letter: any) =>
      letter.toUpperCase(),
    )
  },

  REPLACE: (old_text: any, start_num: any, num_chars: any, new_text: any) => {
    old_text = H.accept(old_text, [Types.STRING])
    start_num = H.accept(start_num, [Types.NUMBER])
    num_chars = H.accept(num_chars, [Types.NUMBER])
    new_text = H.accept(new_text, [Types.STRING])

    const arr = old_text.split('')
    arr.splice(start_num - 1, num_chars, new_text)

    return arr.join('')
  },

  REPLACEB: (old_text: any, start_num: any, num_chars: any, new_text: any) =>
    TextFunctions.REPLACE(old_text, start_num, num_chars, new_text),

  REPT: (text: any, number_times: any) => {
    text = H.accept(text, Types.STRING)
    number_times = H.accept(number_times, Types.NUMBER)
    let str = ''

    for (let i = 0; i < number_times; i++) {
      str += text
    }
    return str
  },

  RIGHT: (text: any, numChars: any) => {
    text = H.accept(text, Types.STRING)
    numChars = H.accept(numChars, Types.NUMBER, 1)

    if (numChars < 0) throw FormulaError.VALUE
    const len = text.length
    if (numChars > len) return text
    return text.slice(len - numChars)
  },

  RIGHTB: (text: any, numChars: any) => TextFunctions.RIGHT(text, numChars),

  SEARCH: (findText: any, withinText: any, startNum: any) => {
    findText = H.accept(findText, Types.STRING)
    withinText = H.accept(withinText, Types.STRING)
    startNum = H.accept(startNum, Types.NUMBER, 1)
    if (startNum < 1 || startNum > withinText.length) throw FormulaError.VALUE

    // transform to js regex expression
    const findTextRegex = WildCard.isWildCard(findText)
      ? WildCard.toRegex(findText, 'i')
      : findText
    const res = withinText.slice(startNum - 1).search(findTextRegex)
    if (res === -1) throw FormulaError.VALUE
    return res + startNum
  },

  SEARCHB: (findText: any, withinText: any, startNum: any) =>
    TextFunctions.SEARCH(findText, withinText, startNum),

  SUBSTITUTE: (...params: any) => {
    throw FormulaError.NOT_IMPLEMENTED('SUBSTITUTE')
  },

  T: (value: any) => {
    // extract the real parameter
    value = H.accept(value)
    if (typeof value === 'string') return value
    return ''
  },

  TEXT: (value: any, formatText: any) => {
    value = H.accept(value, Types.NUMBER)
    formatText = H.accept(formatText, Types.STRING)
    // I know ssf contains bugs...
    try {
      return SSF.format(formatText, value)
    } catch (e) {
      console.error(e)
      throw FormulaError.VALUE
    }
  },

  TEXTJOIN: (...params: any) => {},

  TRIM: (text: any) => {
    text = H.accept(text, [Types.STRING])
    return text.replace(/^\s+|\s+$/g, '')
  },

  UNICHAR: (number: any) => {
    number = H.accept(number, [Types.NUMBER])
    if (number <= 0) throw FormulaError.VALUE
    return String.fromCharCode(number)
  },

  UNICODE: (text: any) => TextFunctions.CODE(text),
}

export default TextFunctions
