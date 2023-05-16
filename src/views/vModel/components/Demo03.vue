<template>
  <div>
    <!-- <slot>默认slot</slot> -->
    <slot v-if="slotDefault" />
    <ChildBox v-bind="attrs"></ChildBox>
  </div>
</template>

<script setup lang="ts">
import { useAttrs, useSlots } from "vue";
import ChildBox from "./Demo03-children.vue";
const slotDefault = !!useSlots().default;
const slotHeader = !!useSlots().header;
const attrs = useAttrs();

console.log("slots=>", slotHeader);
// console.log("attrs=>", attrs.text);
</script>

<style scoped></style>
