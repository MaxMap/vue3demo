<template>
  <div>
    <h1>通信</h1>
    <div>
      <h2>父子通信01</h2>
      <p>defineEmits,defineProps,defineExpose</p>
      <div>
        父组件 <input type="text" v-model="name" />
        <br />
        <Demo01 :name="name" @addVal="upName" ref="children"></Demo01>
      </div>
    </div>
    <div>
      <h2>父子通信02</h2>
      <p>v-model:xxx,defineEmits,defineProps</p>
      <p>值： {{ form.age }},{{ form.checked }}</p>
      <Demo02 v-model:age="form.age" v-model:checked="form.checked"></Demo02>
    </div>
    <div>
      <h2>父子通信03</h2>
      <p>useSlots() 和 useAttrs()</p>
      <Demo03 :text="'测试数据'">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <h2>哈哈哈哈哈哈</h2>
      </Demo03>
    </div>
    <div>
      <h2>父子通信04</h2>
      <p>provide(),inject()</p>
      <Demo04></Demo04>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, reactive, Ref, provide } from "vue";
import Demo01 from "./components/Demo01.vue";
import Demo02 from "./components/Demo02.vue";
import Demo03 from "./components/Demo03.vue";
import Demo04 from "./components/Demo04.vue";

interface Form {
  name: Ref;
  age: number;
  checked: boolean;
}

const name = ref<null | string>("123");

const form = reactive<Form>({
  name: name,
  age: 18,
  checked: true,
});

const upName = (val: number) => {
  name.value += val + "";
};

const children = ref();

// 提供响应式的值
provide("test", name);

nextTick(() => {
  children.value.log();
});
</script>

<style scoped></style>
