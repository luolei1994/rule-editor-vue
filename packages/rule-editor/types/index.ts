/**
 * 规则配置数据
 */
export interface RuleConfigData {
    ruleName: string // 规则名称
    isPublic: boolean // 是否公共规则
    isLoop: boolean // 是否循环规则
    remark?: string // 备注
}

export interface SingleRuleData {
    ifData: IfData
}

export interface IfData {
    keyword: number
}

export interface IfOptions {
    label: string
    handleClick: Function
    attrs?: object
}

export interface Enum {
    label: string
    value: any
}

export interface Variable extends Enum {
    label: string
    value: string
    children?: Array<Variable>
}

export interface Constant extends Enum {
    label: string
    key: string
    value: Array<Variable>
}

/**
 * 函数参数
 */
export interface FunctionParams {
    name: string
    key: string
}

/**
 * 函数名，如自定义日期
 */
export interface FunctionData {
    name: string
    key: string
    parmas: Array<FunctionParams>
}

/**
 * 函数类型名，如日期等
 */
export interface FunctionType extends Enum {
    label: string
    key: string
    value: Array<FunctionData>
}

// 级联数据格式
export interface CascaderItem extends Enum {
    label: string
    value: any
    children?: Array<CascaderItem>
}

export class Condition {
    // 级联输入绑定的值
    value: Array<string>
    // 值类型
    type: number
    // 输入值
    inputValue?: string
    // 输入变量
    inputVariable?: Variable
    // 输入常量
    inputConstant?: Constant
    // 输入函数
    inputFunction?: FunctionData
    // 输入函数参数
    inputFunctionParams?: Array<Condition>
    // 操作符
    operationSymbol?: string
    // 输出值
    outputValue?: string
    // 输出变量
    outputVariable?: Array<string>
    // 输出常量
    outputConstant?: Array<string>
    // 输出函数
    outputFunction?: Array<string>
    // 输出函数参数
    outputFunctionParams?: Array<Condition>

    constructor(value = [], type = 0) {
        this.value = value
        this.type = type
    }
}

// export interface FunctionParams extends Condition {
//     // 字段名称
//     name?: string
// }
