<script setup lang="ts">
import DummyComponent1Vue from './DummyComponent1.vue'
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
</script>

<template>
  <BoxWithTitleVue title="DummyComponent2">
    <DummyComponent1Vue />
  </BoxWithTitleVue>
</template>
