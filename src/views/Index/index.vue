<template>
  <div class="index">
    <div class="header">
      <img src="/logo.svg" alt="logo" class="logo">
      <h2>Bnb-Mobile</h2>
      <p>优秀的移动端UI组件库</p>
    </div>

    <bnb-cell style="margin-top: 15px;" card>
      <bnb-cell-item
          v-for="item in componentsList"
          :key="item.name"
          :to="item.path"
      >{{ item.meta.title }}</bnb-cell-item>
    </bnb-cell>
  </div>
</template>

<style lang="scss">
.header {
  text-align: center;
  h2, p {
    margin: 0;
  }
  p {
    color: #888;
    font-size: 13px;
  }
}
.logo {
  display: block;
  margin: 2em auto;
  height: 68px;
}
</style>
<script>
import { componentsList } from "../../router/app";

export default {
  data () {
    return {
      componentsList
    }
  }
}
</script>
