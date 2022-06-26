<script setup lang="ts">
import BoxWithTitleVue from './ui/BoxWithTitle.vue'
import Component1Vue from './reactive/Component1.vue';
import Component3Vue from './reactive/Component3.vue'
import { reactive, toRefs } from 'vue'

const obj = reactive({ id: 'rpdladps', pw: 'makeamericagreatagain', name: 'HyungKwan Park', })
const { id, pw, name } = toRefs(obj)

const nestedObj = reactive({ id: 'rpdladps', pw: 'makeamericagreatagain', name: 'HyungKwan Park', })
const { id: nestedId, pw: nestedPw, name: nestedName } = toRefs(nestedObj)
</script>

<template>
    <div class="using-reactive">

        <BoxWithTitleVue title="Using Reactive">
            <Component1Vue :obj="obj" />
            User ID is '{{ id }}'.
            <br />
            Password is '{{ pw }}'.
            <br />
            <div>
                <span>Change Name : </span>
                <input type="text" v-model="name" />
            </div>
        </BoxWithTitleVue>

        <BoxWithTitleVue title="Using Reactive (nested)">
            <Component3Vue :obj="nestedObj" />
            User ID is '{{ nestedId }}'.
            <br />
            Password is '{{ nestedPw }}'.
            <br />
            Name is '{{ nestedName }}'.
        </BoxWithTitleVue>

    </div>
</template>