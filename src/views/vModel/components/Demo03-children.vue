<template>
  <div>
    demo03 孙组件
    <p></p>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs();
console.log("孙组件捕获attrs=>", attrs);
</script>

<style scoped></style>
