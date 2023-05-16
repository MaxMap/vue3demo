<template>
  <div>
    <!-- <h2>v-model传值</h2> -->
    <p>子组件</p>
    <!-- NOTE $event.target.value 会有报错提示 -->
    <div>
      <input
        type="text"
        :value="age"
        @input="$emit('update:age', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <div>
      <label for="isBol">
        是否勾选:
        <input
          type="checkbox"
          name="是否勾选"
          id="isBol"
          :checked="checked"
          @change="
            $emit('update:checked', ($event.target as HTMLInputElement).checked)
          "
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
// defineProps(["age"]);
defineEmits(["update:age", "update:checked"]);

defineProps<{
  age: number | string;
  checked: boolean;
}>();
</script>

<style scoped></style>
