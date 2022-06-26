<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import Component1Vue from './Component1.vue'

const props = defineProps(['msg'])
const emit = defineEmits(['update:msg', 'clear:msg', 'random:msg'])
</script>

<template>    
    <BoxWithTitleVue title="Component2">
        <Component1Vue :msg="props.msg" @update:msg="newMsg => emit('update:msg', newMsg)" @clear:msg="() => emit('clear:msg')" @random:msg="() => emit('random:msg')" />
    </BoxWithTitleVue>
</template>