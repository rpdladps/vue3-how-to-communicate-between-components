<script setup lang="ts">
import UsingReactive from './components/UsingReactive.vue'
import UsingEmit from './components/UsingEmit.vue'
import UsingExpose from './components/UsingExpose.vue'
import UsingProvideInject from './components/UsingProvideInject.vue'
import UsingStore from './components/UsingStore.vue'
</script>

<template>
  <h3>How to communicate between components (parent  &lt;=&gt; child)</h3>
  <hr />
  <UsingReactive />
  <hr />
  <UsingEmit />
  <hr />
  <UsingExpose />
  <hr />
  <UsingProvideInject />
  <hr />
  <UsingStore />
</template>