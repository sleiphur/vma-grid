/**
 * 根据长度数字返回列字符
 * @param length 长度数字
 */
export const getNextColumnIndex = (length: number): string => {
  let n: number = length
  let p = ''
  while (n > 0) {
    p += String.fromCharCode(((n - 1) % 26) + 65)
    n = Math.trunc(n / (26 + 1))
  }
  return p.split('').reverse().join('')
}
