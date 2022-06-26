<script setup lang="ts">
import Component1Vue from './expose/Component1.vue'
import Component3Vue from './expose/Component3.vue'
import BoxWithTitleVue from './ui/BoxWithTitle.vue'
import { ref, onMounted, watch } from 'vue'

// Using Expose
const msg = 'defaultMsg'
const child = ref()

const viewMsg = ref(msg)
const viewConstant = ref()
const makeRandomConstant = () => { child.value.makeRandomConstant() }
const rawMsg = ref()
const getMsg = () => viewMsg.value = child.value.getMsg()
const makeRandomMsg = () => { child.value.makeRandomMsg(); getMsg() }
const removeMsg = () => { child.value.removeMsg(); getMsg() }
onMounted(() => {

    viewConstant.value = child.value.constant
    watch(
        () => child.value.constant,
        (x) => {
            viewConstant.value = x
        }
    )

    rawMsg.value = child.value.msg
    watch(
        () => child.value.msg,
        (x) => {
            rawMsg.value = x
        }
    )
})

// Using Expose (nested)
const nestedMsg = 'defaultNestedMsg'
const nestedChild = ref()

const viewNestedMsg = ref(nestedMsg)
const viewNestedConstant = ref()
const nestedMakeRandomConstant = () => { nestedChild.value.makeRandomConstant() }
const rawNestedMsg = ref()
const nestedGetMsg = () => viewNestedMsg.value = nestedChild.value.getMsg()
const nestedMakeRandomMsg = () => { nestedChild.value.makeRandomMsg(); nestedGetMsg() }
const nestedRemoveMsg = () => { nestedChild.value.removeMsg(); nestedGetMsg() }
onMounted(() => {

    viewNestedConstant.value = nestedChild.value.constant    
    watch(
        () => nestedChild.value.constant,
        (x) => {
            viewNestedConstant.value = x
        }
    )

    rawNestedMsg.value = nestedChild.value.msg
    watch(
        () => nestedChild.value.msg,
        (x) => {
            rawNestedMsg.value = x
        }
    )
})
</script>

<template>
    <div class="using-expose">

        <BoxWithTitleVue title="Using Expose">
            <div>
                <span>[ constant is {{ viewConstant }} ]</span>
                <button @click="makeRandomConstant">makeRandomConstant</button>
            </div>
            <div>
                <span>[ rawMsg is '{{ rawMsg }}' ]</span>
                <button @click="getMsg">getMsg</button>
                <button @click="makeRandomMsg">makeRandomMsg</button>
                <button @click="removeMsg">removeMsg</button>
            </div>
            <Component1Vue :msg="msg" ref="child" />
            viewMsg is '{{ viewMsg }}'
        </BoxWithTitleVue>

        <BoxWithTitleVue title="Using Expose (nested)">
            <div>
                <span>[ nestedConstant is {{ viewNestedConstant }} ]</span>
                <button @click="nestedMakeRandomConstant">makeRandomConstant</button>
            </div>
            <div>
                <span>[ rawNestedMsg is '{{ rawNestedMsg }}' ]</span>
                <button @click="nestedGetMsg">getMsg</button>
                <button @click="nestedMakeRandomMsg">makeRandomMsg</button>
                <button @click="nestedRemoveMsg">removeMsg</button>
            </div>
            <Component3Vue :msg="nestedMsg" ref="nestedChild" />
            viewNestedMsg is '{{ viewNestedMsg }}'
        </BoxWithTitleVue>

    </div>
</template>