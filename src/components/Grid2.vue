<template>
  <h2>grid-row-gap 属性、grid-column-gap 属性以及 grid-gap 属性</h2>
  <p>
    grid-row-gap 属性、grid-column-gap 属性分别设置行间距和列间距。grid-gap
    属性是两者的简写形式。
  </p>
  <!-- 案列1 -->
  <!-- <div class="wrapper">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
  </div> -->
  <!-- 案列2 -->
  <!-- <p>grid-template-areas 属性用于定义区域，一个区域由一个或者多个单元格组成,一般这个属性跟网格元素的 grid-area 一起使用</p>
  <div class="wrapper2">
  <div class="box header">Header</div>
  <div class="box sidebar">Sidebar</div>
  <div class="box content">Content</div>
</div> -->
  <!-- 案例3 -->
  <p>grid-auto-flow 属性:先行后列,默认row。dense表示尽可能填满表格</p>
  <p>grid-auto-flow: column，表示先列后行</p>
  <div class="wrapper-num wrapper-4">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="seven item">Seven</div>
    <div class="eight item">eight</div>
    <div class="nine item">Nine</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 200px 100px 100px;
  grid-gap: 10px 20px;
  grid-auto-rows: 50px;
}
.wrapper2 {
  margin: 50px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 120px 120px 120px;
  grid-template-areas:
    ". header  header"
    "sidebar content content";
  background-color: #fff;
  color: #444;
  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
  }

  .header {
    background-color: #999;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .content {
    grid-area: content;
  }

  .header {
    grid-area: header;
  }
}

.wrapper-num {
  &3 {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-auto-flow: row dense;
    grid-gap: 5px;
    grid-auto-rows: 50px;
  }
  &.wrapper-4 {
    display: grid;
    grid-auto-columns: 100px;
    grid-auto-flow: column;
    grid-gap: 5px;
    grid-template-rows: 50px 50px;
  }
  .one {
    background: #19caad;
  }
  .two {
    background: #8cc7b5;
  }
  .three {
    background: #d1ba74;
  }
  .four {
    background: #bee7e9;
  }
  .five {
    background: #e6ceac;
  }
  .six {
    grid-column-start: span 2;
    background: #ecad9e;
  }
  .seven {
    background: #beedc7;
  }
  .eight {
    background: #f4606c;
  }
  .nine {
    background: #a0eee1;
  }
  .item {
    text-align: center;
    font-size: 200%;
    color: #fff;
  }
}
</style>
