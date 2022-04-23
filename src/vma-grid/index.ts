import hooks from './hooks'

export class VmaGridInstance {
  readonly version = '0.6.7'

  readonly hooks = hooks
}

export const VmaGrid = new VmaGridInstance()

export default VmaGrid
