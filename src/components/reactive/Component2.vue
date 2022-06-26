<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import Component1Vue from './Component1.vue'
import { toRefs } from 'vue'

const props = defineProps(['obj'])
const { name } = toRefs(props.obj)

const shuffle = () => {
    name.value = name.value
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('')
        .toString()
}
const uppercase = () => {
    name.value = name.value.toUpperCase()
}
const lowercase = () => {
    name.value = name.value.toLowerCase()
}
const reset = () => {
    name.value = 'HyungKwan Park'
}
</script>

<template>
    <BoxWithTitleVue title="Component2">
        <div>
            <span>To control :name</span>
            <button @click="shuffle">shuffle</button>
            <button @click="uppercase">uppercase</button>
            <button @click="lowercase">lowercase</button>
            <button @click="reset">reset</button>
        </div>
        <Component1Vue :obj="props.obj" />
    </BoxWithTitleVue>
</template>