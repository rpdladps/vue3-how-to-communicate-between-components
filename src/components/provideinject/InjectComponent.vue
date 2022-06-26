<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import { ref, inject } from 'vue'

const msg = inject('msg')

const { text, update } = inject('readonly-text')
const newText = ref('It can change value of text.')
const updateText = () => update(newText.value)

const unrefMsg = inject('unref-msg')
</script>

<template>

  <BoxWithTitleVue title="InjectComponent">
    <div>
      <span>msg : </span>
      <input type="text" v-model="msg" />
    </div>
    <div>
      <span>readonly-text : </span>
      <input type="text" :value="text" disabled />
    </div>
    <div>
      <span>update-text : </span>
      <input type="text" v-model="newText" />
      <button @click="updateText">Update!</button>
    </div>
    <div>
      <span>unref-msg : </span>
      <input type="text" :value="unrefMsg" disabled />
    </div>
  </BoxWithTitleVue>
  
</template>
