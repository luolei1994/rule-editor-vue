import { type Enum } from '../types/index'

/**
 * Enum类型数据 根据value获取label
 * @param num
 * @returns
 */
export function getLabelFromEnum(array: Array<Enum>, value: number): string | undefined {
    for (let i = 0; i < array.length; i++) {
        if (array[i].value === value) {
        return array[i].label;
        }
    }
    return undefined;
    
}
