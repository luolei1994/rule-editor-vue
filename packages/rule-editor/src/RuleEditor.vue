<template>
    <div class="rule-editor">
        <div class="rule-editor-container">
            <div class="rule-editor-main">
                <div v-if="title" class="rule-editor-title">
                    {{ title }}
                </div>
                <div class="rule-editor-content">
                    <SingleRule v-model="ruleData"></SingleRule>
                </div>
            </div>
            <div v-if="showForm" class="rule-editor-form">
                <slot name="ruleForm"></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, type Ref, type PropType } from 'vue'
import { type SingleRuleData, type RuleConfigData } from '../types/index'
import SingleRule from '../component/SingleRule.vue'
// props
const props = defineProps({
    // 名称
    title: {
        type: [String, Boolean],
        required: false,
        default: (originValue) => {
            let title: string | boolean = originValue.title
            if (!title && title !== false) {
                title = '规则编辑器'
            }
            return title
        }
    },
    // 是否展示表单
    showForm: {
        type: Boolean,
        required: false,
        default: true
    },
    // 配置数据
    config: {
        type: Object as PropType<RuleConfigData>,
        required: false,
        default: (originValue) => {
            if (originValue) return originValue
            const configData: RuleConfigData = {
                ruleName: '',
                isPublic: false,
                isLoop: true
            }
            return configData
        }
    }
})

// data
let ruleData: Ref<SingleRuleData> = ref({
    ifData: {
        keyword: 1
    }
})
</script>
<style scoped>
.rule-editor {
    width: 100%;
}
.rule-editor-container {
    display: flex;
    background-color: #f0f2f5;
}
.rule-editor-main {
    flex: 1;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.rule-editor-form {
    margin-left: 8px;
    padding: 0 15px;
    background-color: #fff;
}
.rule-editor-title {
    font-size: 16px;
    padding: 10px 15px;
    border-bottom: 1px solid #dddddd;
}
.rule-editor-content {
    padding: 15px;
}
</style>
