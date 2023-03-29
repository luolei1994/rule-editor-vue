import {
    type Enum,
    type Variable,
    type Constant,
    type FunctionType,
    type CascaderItem
} from '../types/index'

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

// 变量预置
const VariableData: Array<Variable> = [
    {
        label: '客户',
        value: 'client',
        children: [
            {
                label: '年龄',
                value: 'age'
            },
            {
                label: '性别',
                value: 'gender'
            },
            {
                label: '婚否',
                value: 'married'
            },
            {
                label: '订单',
                value: 'order',
                children: [
                    {
                        label: '数量',
                        value: 'quantity'
                    },
                    {
                        label: '名称',
                        value: 'name'
                    },
                    {
                        label: '价格',
                        value: 'price'
                    }
                ]
            }
        ]
    },
    {
        label: '订单',
        value: 'order',
        children: [
            {
                label: '数量',
                value: 'quantity'
            },
            {
                label: '名称',
                value: 'name'
            },
            {
                label: '价格',
                value: 'price'
            }
        ]
    }
]

const ConstantData: Array<Constant> = [
    {
        label: '性别',
        key: 'gender',
        value: [
            {
                label: '男',
                value: 'male'
            },
            {
                label: '女',
                value: 'female'
            }
        ]
    }
]

const FunctionTypeData: Array<FunctionType> = [
    {
        label: '日期',
        key: 'date',
        value: [
            {
                name: '格式化日期',
                key: 'formatDate',
                parmas: [
                    {
                        name: '目标日期',
                        key: 'targetDate'
                    },
                    {
                        name: '格式',
                        key: 'format'
                    }
                ]
            },
            {
                name: '当前日期',
                key: 'nowDate',
                parmas: []
            },
            {
                name: '日期加天',
                key: 'datePlusDay',
                parmas: [
                    {
                        name: '目标日期',
                        key: 'targetDate'
                    },
                    {
                        name: '加几天',
                        key: 'dayCount'
                    }
                ]
            }
        ]
    }
]

// 输入变量类型
export const InputType: Array<CascaderItem> = [
    {
        label: '输入值',
        value: 1
    },
    {
        label: '选择变量',
        value: 2,
        children: VariableData
    },
    {
        label: '选择常量',
        value: 3,
        children: ConstantData
    },
    {
        label: '选择函数',
        value: 4,
        children: FunctionTypeData
    }
]

// 操作符
export const operationSymbol: Array<Enum> = [
    {
        label: '等于',
        value: '=='
    },
    {
        label: '等于（不区分大小写）',
        value: 'EqualsIgnoreCase'
    },
    {
        label: '不等于',
        value: '!='
    },
    {
        label: '不等于（不区分大小写）',
        value: 'NotEqualsIgnoreCase'
    },
    {
        label: '小于',
        value: '<'
    },
    {
        label: '小于等于',
        value: '<='
    },
    {
        label: '大于',
        value: '>'
    },
    {
        label: '大于等于',
        value: '>='
    },
    {
        label: '在集合中',
        value: 'in'
    },
    {
        label: '不在集合中',
        value: 'NotIn'
    },
    {
        label: '开始于',
        value: 'StartWith'
    },
    {
        label: '不开始于',
        value: 'NotStartWith'
    },
    {
        label: '结束于',
        value: 'EndWith'
    },
    {
        label: '不结束于',
        value: 'NotEndWith'
    },
    {
        label: '为空',
        value: 'Null'
    },
    {
        label: '不为空',
        value: 'NotNull'
    },
    {
        label: '匹配',
        value: 'Match'
    },
    {
        label: '不匹配',
        value: 'NotMatch'
    },
    {
        label: '包含',
        value: 'Contain'
    },
    {
        label: '不包含',
        value: 'NotContain'
    }
]
