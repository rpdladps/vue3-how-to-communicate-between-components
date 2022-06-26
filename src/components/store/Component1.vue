<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import { useMessageStore } from './message'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useMessageStore()
const { message, getInfo } = storeToRefs(store)
</script>

<template>
  <BoxWithTitleVue title="Component1">
    <p>Use store's getter method</p>
    <p>getInfo is </p>
    <strong>{{ getInfo }}</strong>
  </BoxWithTitleVue>
</template>
