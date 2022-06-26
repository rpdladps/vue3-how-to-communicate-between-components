<script setup lang="ts">
import Component1Vue from './store/Component1.vue'
import Component2Vue from './store/Component2.vue'
import Component3Vue from './store/Component3.vue'
import BoxWithTitleVue from './ui/BoxWithTitle.vue'
import { useMessageStore } from './store/message'

const store = useMessageStore()
</script>

<template>
    <div class="using-store">

        <BoxWithTitleVue title="Using Store">
          <div class="sibiling-components">
            <Component1Vue />
            <Component2Vue />
            <Component3Vue />
          </div>
          <p>message is '{{ store.message }}</p>
        </BoxWithTitleVue>
        
    </div>
</template>

<style>
.sibiling-components {
  display: flex;
  flex-direction: column;
}
</style>
