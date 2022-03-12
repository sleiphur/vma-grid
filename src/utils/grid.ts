/**
 * 根据长度数字返回列字符
 * @param length 长度数字
 */
export const getNextColumnIndex = (length: number): string => {
  let nLength: number = length
  let p = ''
  do {
    nLength--
    const n = nLength % 26
    p += String.fromCharCode(n + 65)
    nLength = Math.trunc((nLength - n) / 26)
  } while (nLength > 0)
  return p.split('').reverse().join('')
}
