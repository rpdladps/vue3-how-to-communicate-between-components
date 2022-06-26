<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import { ref, computed } from 'vue'

const props = defineProps(['msg'])
const msg = ref(props.msg)

const constant = ref(Math.random())
const makeRandomConstant = () => constant.value = Math.random()
const getMsg = () => msg.value
const makeRandomMsg = () => msg.value = Math.random().toString()
const removeMsg = () => msg.value = ''
defineExpose({ constant, makeRandomConstant, msg, getMsg, makeRandomMsg, removeMsg, })
</script>

<template>
    <BoxWithTitleVue title="Component1">
        <input type="text" v-model="msg" />
    </BoxWithTitleVue>
</template>