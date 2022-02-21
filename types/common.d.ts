export type SizeType =
    | 'xxx-large'
    | 'xx-large'
    | 'x-large'
    | 'large'
    | 'normal'
    | 'small'
    | 'mini'
export type CompType = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export type ValueOf<T> = T extends any[] ? T[number] : T[keyof T]


export interface VmaGridComponentInstance {
    uId: string
}