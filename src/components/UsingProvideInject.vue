<script setup lang="ts">
import DummyComponent3Vue from './provideinject/DummyComponent3.vue'
import BoxWithTitleVue from './ui/BoxWithTitle.vue'
import { ref, unref, provide, readonly } from 'vue'

const msg = ref('It retains reactivity.')
provide('msg', msg)

const readonlyText = ref('It is readonly.')
const updateText = (str) => readonlyText.value = str
provide('readonly-text', { text: readonly(readonlyText), update: updateText })

const unrefMsg = ref('This variable is not reactive.')
provide('unref-msg', unref(unrefMsg))
</script>

<template>
    <div class="using-provide-inject">

        <BoxWithTitleVue title="Using Provide/Inject">

          <DummyComponent3Vue />
          <div>
            <span>msg : </span>
            <input type="text" v-model="msg" />
          </div>
          <div>
            <span>readonlyText : </span>
            <input type="text" :value="readonlyText" disabled />
          </div>
          <div>
            <span>unrefMsg : </span>
            <input type="text" v-model="unrefMsg" />
          </div>
        </BoxWithTitleVue>
        
    </div>
</template>
