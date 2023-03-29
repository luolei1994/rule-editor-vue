<template>
    <div class="single-rule">
        <div class="if-content">
            <div class="common-title">如果</div>
            <div class="content">
                <ButtonGroup class="if-content-button-group">
                    <Button>
                        <Text>{{ getLabelFromEnum(IfData, data.ifData.keyword) }}</Text>
                    </Button>
                    <Button class="if-content-button">
                        <Dropdown trigger="hover">
                            <Icon size="25" type="ios-more" />
                            <template #list>
                                <DropdownMenu>
                                    <DropdownItem
                                        v-for="item in ifOptions"
                                        v-bind="item.attrs"
                                        @click="item.handleClick"
                                        >{{ item.label }}</DropdownItem
                                    >
                                </DropdownMenu>
                            </template>
                        </Dropdown>
                    </Button>
                </ButtonGroup>
                <div v-if="conditions.length" class="line"></div>
                <div class="condition-container">
                    <div v-if="conditions.length > 1" class="condition-border-left"></div>
                    <div class="condition-content">
                        <div class="condition" v-for="(item, index) in conditions">
                            <ConditionComponent v-model="conditions[index]" @delete="conditions.splice(index, 1)"></ConditionComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import ConditionComponent from './ConditionComponent.vue'
import { type Ref, ref, type PropType } from 'vue'
import { getLabelFromEnum } from '../utils/index'
import {
    type SingleRuleData,
    type IfOptions,
    Condition,
} from '../types/index'

import { IfData } from '../constant/mockdata'

// 事件定义
const emits = defineEmits(['on-delete'])

// 定义Props
const props = defineProps({
    modelValue: {
        type: Object as PropType<SingleRuleData>,
        required: true
    },
    isRoot: {
        type: Boolean,
        required: false,
        default: true
    }
})

// 定义Data
let data: Ref<SingleRuleData> = ref(props.modelValue)

// 将JSON中的数据转化为固定选项
let ifOptions: IfOptions[] = IfData.map((item) => {
    return {
        label: item.label,
        handleClick: () => {
            data.value.ifData.keyword = item.value as number
        }
    }
})
const CONDITION: IfOptions[] = [
    {
        label: '添加条件',
        handleClick: addCondition,
        attrs: {
            divided: true
        }
    },
    {
        label: '添加联合条件',
        handleClick: addUnionCondition
    }
]
ifOptions = ifOptions.concat(CONDITION)

// 是否是根节点
if (!props.isRoot) {
    ifOptions.push({
        label: '删除',
        handleClick: () => {
            emits('on-delete')
        }
    })
}

// 条件
let conditions: Ref<Condition[]> = ref([])

// 添加条件
function addCondition() {
    conditions.value.push(new Condition())
}
// 添加联合条件
function addUnionCondition() {}
</script>
<style scoped>
@import url('../style/common.css');
.if-content-button {
    padding: 0 4px;
}
.content {
    display: flex;
    align-items: normal;
}
.line {
    margin-top: 15px;
    width: 16px;
    height: 1px;
    background-color: #c9c9c9;
}
.condition-container {
    display: flex;
    align-items: center;
}
.condition-content .condition {
    display: flex;
    align-items: center;
}
.condition-content .condition::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 1px;
    background-color: #c9c9c9;
    position: relative;
}
.condition-border-left {
    height: calc(100% - 24px);
    width: 1px;
    background-color: #c9c9c9;
    margin-top: -1px;
}
</style>
