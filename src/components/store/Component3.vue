<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import { useMessageStore } from './message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <BoxWithTitleVue title="Component3">
    <p>Change value directly with ref & v-model</p>
    <input type="text" v-model="message" />
    <p>message is </p>
    <strong>{{ message }}</strong>
  </BoxWithTitleVue>
</template>
