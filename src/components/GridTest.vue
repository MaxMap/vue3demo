<template>
  <div>
    <h2>测试</h2>
    <p>1.实现一个div水平垂直居中</p>
    <div class="wrapper1">
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper1 {
  display: grid;
  // justify-content: center;
  // align-content: center;
  // justify-items: center;
  // align-items: center;
  place-content: center;
  width: 500px;
  height: 500px;
  background-color: #000;
  .box {
    width: 100px;
    height: 100px;
    background-color: gold;
    margin-bottom: 5px;
  }
}
</style>
