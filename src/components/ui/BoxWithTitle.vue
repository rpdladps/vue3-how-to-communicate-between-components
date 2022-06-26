<script setup lang="ts">
const props = defineProps(['title'])
</script>

<template>
    <div class="box">
        <span class="title">{{ props.title }}</span>
        <slot></slot>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}
.box {
    position: relative;
    margin: 0.76rem;
    padding: 1rem;

    border-radius: 1rem;
    border-color: black;
    border-style: solid;
    border-width: 0.0625rem;
}
.title {
    position: absolute;
    top: -0.75rem;
    left: 1rem;
    padding: 0 0.5rem;

    font-size: 1rem;
    background-color: white;
}
</style>