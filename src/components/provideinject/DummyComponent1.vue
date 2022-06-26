<script setup lang="ts">
import InjectComponentVue from './InjectComponent.vue'
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
</script>

<template>
  <BoxWithTitleVue title="DummyComponent1">
    <InjectComponentVue />
  </BoxWithTitleVue>
</template>
