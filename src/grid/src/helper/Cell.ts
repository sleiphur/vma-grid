// eslint-disable-next-line @typescript-eslint/naming-convention
export class Cell {
  r?: number

  c?: number

  rs?: number

  cs?: number

  fd?: any // 计算依赖

  v?: any // 原始值

  mv?: any // 计算结果值

  s?: boolean // 计算状态，已计算：true；未计算：false

  se?: any // 计算错误 null 未无错误

  t?: number // 计算时间戳

  fs?: number // fontSize

  ff?: string // fontFamily

  bl?: boolean // bold

  it?: boolean // italic

  ol?: boolean // over line

  cl?: boolean // cancel line

  ul?: boolean // under line

  bg?: any // background color

  fc?: any // font color

  constructor(
    r: number,
    c: number,
    v: any,
    mv: any,
    fd: any,
    s: boolean | null,
    se: any,
    t: number | null,
    rs: number | null,
    cs: number | null,
    fs: number | null,
    ff: number | null,
    bl: boolean | null,
    it: boolean | null,
    ol: boolean | null,
    cl: boolean | null,
    ul: boolean | null,
    bg: any,
    fc: any,
  ) {
    Object.assign(this, {
      r,
      c,
      v,
      mv,
      fd,
      s,
      se,
      t,
      rs,
      cs,
      fs,
      ff,
      bl,
      it,
      ol,
      cl,
      ul,
      bg,
      fc,
    })
  }
}