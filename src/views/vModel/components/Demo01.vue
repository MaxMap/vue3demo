<template>
  <div>
    <h5>我是子组件</h5>
    <p>展示：{{ props.name }}</p>
    <button @click="addVal">+1</button>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  name: null | string;
}

// const props = defineProps<{
//   name: null | string;
// }>();
const props = withDefaults(defineProps<Props>(), {
  name: null,
});

const emit = defineEmits<{
  addVal: [value: number];
}>();

let addVal = () => {
  emit("addVal", 1);
};

let log = () => {
  // console.log(" 打印子组件数据", props);
};
defineExpose({ log });
</script>

<style scoped></style>
