<template>
    <div class="value-input">
        <Cascader
            :data="data"
            v-model="value"
            v-width="100"
            placeholder="请选择值类型"
            @on-change="handleChange"
        />
    </div>
</template>
<script lang="ts" setup>
import { type Ref, ref } from 'vue'
import { type CascaderItem, Condition } from '../types'

interface Props {
    modelValue: Condition
    data: Array<CascaderItem>
}

const props = defineProps<Props>()

let value: Ref<Array<string>> = ref([])

function handleChange () {}
</script>
