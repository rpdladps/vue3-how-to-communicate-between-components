<script setup lang="ts">
import BoxWithTitleVue from '../ui/BoxWithTitle.vue'
import { toRefs } from 'vue'

const props = defineProps(['obj'])
const { id, pw, name } = toRefs(props.obj)
</script>

<template>
    <BoxWithTitleVue title="Component1">
        <div>
            <label>User ID</label>
            <input type="text" v-model="id" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" v-model="pw" />
        </div>
        <div>
            <label>User Name</label>
            <input type="text" v-model="name" disabled/>
        </div>
    </BoxWithTitleVue>
</template>