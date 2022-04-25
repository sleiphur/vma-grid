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

  bgt?: string // background css type

  fc?: any // font color

  bdt?: boolean // cell border top

  bdb?: boolean // cell border bottom

  bdl?: boolean // cell border left

  bdr?: boolean // cell border right

  av?: string // cell align vertical top middle bottom

  ah?: string // cell align horizontal left center right

  cf?: Record<string, string>

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
    bgt: string | null,
    fc: any,
    bdt: boolean | null,
    bdb: boolean | null,
    bdl: boolean | null,
    bdr: boolean | null,
    av: string | null,
    ah: string | null,
    cf: Record<string, string> | null,
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
      bgt,
      fc,
      bdt,
      bdb,
      bdl,
      bdr,
      av,
      ah,
      cf,
    })
  }
}
