<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'

const props = defineProps(['msg'])
const emit = defineEmits(['update:msg', 'clear:msg', 'random:msg'])
</script>

<template>
    <BoxWithTitleVue title="Component1">
        <div>
            <input type="text" :value="props.msg" @input="event => emit('update:msg', event.target.value)" />
            <button @click="() => emit('clear:msg')">clear</button>
            <button @click="() => emit('random:msg')">random</button>
        </div>
    </BoxWithTitleVue>
</template>