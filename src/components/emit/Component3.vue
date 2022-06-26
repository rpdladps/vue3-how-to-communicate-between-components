<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import Component2Vue from './Component2.vue'

const props = defineProps(['msg'])
const emit = defineEmits(['update:msg', 'clear:msg', 'random:msg'])
</script>

<template>
    <BoxWithTitleVue title="Component3">
        <Component2Vue :msg="props.msg" @update:msg="newMsg => emit('update:msg', newMsg)" @clear:msg="() => emit('clear:msg')" @random:msg="() => emit('random:msg')" />
    </BoxWithTitleVue>
</template>