<script setup lang="ts">
import { Form, FormItem, Input, Switch } from 'view-ui-plus'
import { getCurrentInstance, ref, type Ref } from 'vue'

interface ruleForm {
    configName: String
    isPublic: Boolean
    isLoop: Boolean
    remark?: String
}
let data: Ref<ruleForm> = ref({
    configName: '规则1',
    isPublic: false,
    isLoop: true
})
const required: object = {
    required: true,
    message: '此项不能为空，请填写'
}
const validRule: object = {
    ruleName: {
        ...required
    },
    remark: {
        required: false
    },
    isPublic: {
        required: false
    },
    isLoop: {
        required: false
    }
}

const { proxy } = getCurrentInstance() as any

function submit() {
    proxy.$Message.success('保存成功')
}
function cancel() {
    proxy.$Message.info('取消')
}
</script>

<template>
    <div class="content-container">
        <RuleEditor>
            <template v-slot:ruleForm>
                <Form :labelWidth="100" :model="data" :rules="validRule">
                    <FormItem label="规则名称" prop="ruleName">
                        <Input v-model="data.configName" />
                    </FormItem>
                    <FormItem label="备注" prop="remark">
                        <Input v-model="data.remark" type="textarea" />
                    </FormItem>
                    <FormItem label="是否公共规则" prop="isPublic">
                        <Switch v-model="data.isPublic"></Switch>
                    </FormItem>
                    <FormItem label="是否循环规则" prop="isLoop">
                        <Switch v-model="data.isLoop"></Switch>
                    </FormItem>
                </Form>
                <div class="button-container">
                    <Button class="margin-button" type="primary" @click="submit">保存</Button>
                    <Button @click="cancel">取消</Button>
                </div>
            </template>
        </RuleEditor>
    </div>
</template>
<style>
.margin-button {
    margin-right: 15px;
}
</style>
