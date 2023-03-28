import { type Enum } from '../types/index'

// 关键字
export const IfData: Array<Enum> = [
    {
        label: '并且',
        value: 1
    },
    {
        label: '或者',
        value: 2
    }
]

// 输入变量类型
export const InputType: Array<Enum> = [
    {
        label: '输入值',
        value: 1
    },
    {
        label: '选择变量',
        value: 2
    },
    {
        label: '选择常量',
        value: 3
    },
    {
        label: '选择函数',
        value: 4
    }
]
