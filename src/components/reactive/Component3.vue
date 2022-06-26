<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import Component2Vue from './Component2.vue'
import { toRefs } from 'vue'

const props = defineProps(['obj'])
const { pw } = toRefs(props.obj)

const shuffle = () => {
    pw.value = pw.value
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('')
        .toString()
}
const generate = () => {
    pw.value = Array(16)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10))
        .join('')
        .toString()
}
const reset = () => {
    pw.value = 'makeamericagreatagain'
}
const clear = () => {
    pw.value = ''
}
</script>

<template>
    <BoxWithTitleVue title="Component3">
        <div>
            <span>To control :pw</span>
            <button @click="shuffle">shuffle</button>
            <button @click="generate">generate</button>
            <button @click="reset">reset</button>
            <button @click="clear">clear</button>
        </div>
        <div>
            <Component2Vue :obj="props.obj" />
            <Component2Vue :obj="props.obj" />
        </div>
    </BoxWithTitleVue>
</template>