<template>
  <div>{{ count }}</div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";

// 注入响应式的值
const count = inject("test", ref("1"));
console.log("count", count.value);
</script>

<style scoped></style>
