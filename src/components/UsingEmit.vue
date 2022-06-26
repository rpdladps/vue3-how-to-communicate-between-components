<script setup lang="ts">
import Component1Vue from './emit/Component1.vue'
import Component3Vue from './emit/Component3.vue'
import BoxWithTitleVue from './ui/BoxWithTitle.vue'
import { ref } from 'vue'

const msg = ref('')
const updateMsg = newMsg => msg.value = newMsg
const clearMsg = () => msg.value = ''
const randomMsg = () => msg.value = Math.random().toString()

const nestedMsg = ref('')
const updateNestedMsg = newMsg => nestedMsg.value = newMsg
const clearNestedMsg = () => nestedMsg.value = ''
const randomNestedMsg = () => nestedMsg.value = Math.random().toString()
</script>

<template>
    <div class="using-emit">        

        <BoxWithTitleVue title="Using Emit">
            <Component1Vue :msg="msg" @update:msg="updateMsg" @clear:msg="clearMsg" @random:msg="randomMsg" />
            msg is '{{ msg }}'
        </BoxWithTitleVue>

        <BoxWithTitleVue title="Using Emit (nested)">
            <Component3Vue :msg="nestedMsg" @update:msg="updateNestedMsg" @clear:msg="clearNestedMsg" @random:msg="randomNestedMsg" />
            nestedMsg is '{{ nestedMsg }}'
        </BoxWithTitleVue>

    </div>
</template>