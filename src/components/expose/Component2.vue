<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import Component1Vue from './Component1.vue'
import { ref, onMounted, watch } from 'vue'

const props = defineProps(['msg'])
const child = ref()

const constant = ref()
const makeRandomConstant = ref()
const msg = ref()
const getMsg = ref()
const makeRandomMsg = ref()
const removeMsg = ref()
onMounted(() => {
    makeRandomConstant.value = child.value.makeRandomConstant
    getMsg.value = child.value.getMsg
    makeRandomMsg.value = child.value.makeRandomMsg
    removeMsg.value = child.value.removeMsg
    
    constant.value = child.value.constant
    watch(
        () => child.value.constant,
        (x) => {
            constant.value = x
        }
    )

    msg.value = child.value.msg
    watch(
        () => child.value.msg,
        (x) => {
            msg.value = x
        }
    )
})

defineExpose({ constant, makeRandomConstant, msg, getMsg, makeRandomMsg, removeMsg })
</script>

<template>
    <BoxWithTitleVue title="Component2">
        <Component1Vue :msg="props.msg" ref="child" />
    </BoxWithTitleVue>
</template>