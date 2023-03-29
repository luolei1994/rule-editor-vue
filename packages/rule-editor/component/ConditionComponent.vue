<template>
    <div class="condition-component">
        <ValueInput class="condition-valueinput" v-model="inputData" :data="DATA"></ValueInput>
        <Select class="condition-symbol" v-model="symbol">
            <Option v-for="item in SYMBOL" :value="item.value">{{ item.label }}</Option>
        </Select>
        <ValueInput class="condition-valueinput" v-model="outputData" :data="DATA"></ValueInput>
        <Poptip
            confirm
            title="确定删除当前条件？"
            @on-ok="handleDelete"
            ok-text="确定"
            cancel-text="取消"
        >
            <Button class="condition-delete-btn" size="small">删除</Button>
        </Poptip>
    </div>
</template>
<script lang="ts" setup>
import ValueInput from './ValueInput.vue'
import { InputType, operationSymbol } from '../constant/mockdata'
import { type Enum, type CascaderItem } from '../types'
import { Condition } from '../types'
import { ref, type Ref } from 'vue';

const emit = defineEmits(['update:modelValue', 'delete'])

interface Props {
    modelValue: Condition
    data?: Array<CascaderItem>
    operationSymbol?: Array<Enum>
}

const props = defineProps<Props>()

const DATA: Array<CascaderItem> = props.data ? props.data : InputType
const SYMBOL: Array<Enum> = props.operationSymbol ? props.operationSymbol : operationSymbol

let inputData: Ref<Condition> = ref(new Condition())
let outputData: Ref<Condition> = ref(new Condition())
let symbol: Ref<string> = ref("")
function handleDelete() {
    emit('delete')
}
</script>

<style>
.condition-component {
    display: flex;
    align-items: center;
}
.condition-symbol {
    width: 100px;
    margin: 0 10px;
}
.condition-delete-btn {
    margin-left: 10px;
}
</style>
