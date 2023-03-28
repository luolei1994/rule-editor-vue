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
    value: number
}


export interface Condition {
    // 级联输入绑定的值
    modelValue: any,
    // 值类型
    type: number | null
    // 输入值
    inputValue?: string
    // 输入变量
    inputVariable?: Array<string>
    // 输入常量
    inputConstant?: Array<string>
    // 输入函数
    inputFunction?: Array<string>
    // 输入函数参数
    inputFunctionParams?: Array<FunctionParams>
    // 操作符
    operationSymbol?: number
    // 输出值
    outputValue?: string
    // 输出变量
    outputVariable?: Array<string>
    // 输出常量
    outputConstant?: Array<string>
    // 输出函数
    outputFunction?: Array<string>
}

export interface FunctionParams extends Condition{
    // 字段名称
    name?: string
}

// 级联数据格式
export interface CascaderData {
    label: string,
    value: string,
    children?: Array<CascaderData>
}