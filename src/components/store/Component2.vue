<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import { useMessageStore } from './message'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useMessageStore()
const { updateMessage } = store
const { message } = storeToRefs(store)
const newMessage = ref('This is a new message.')
const updateNewMessage = () => updateMessage(newMessage.value)
</script>

<template>
  <BoxWithTitleVue title="Component2">
    <p>Use store's method to update message</p>
    <input type="text" v-model="newMessage" />
    <button @click="updateNewMessage">Update!</button>
    <p>message is </p>
    <strong>{{ message }}</strong>
  </BoxWithTitleVue>
</template>
