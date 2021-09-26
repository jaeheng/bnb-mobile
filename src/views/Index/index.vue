<template>
  <div class="index">
    <div class="header">
      <img src="/logo.svg" alt="logo" class="logo">
      <h2>Bnb-Mobile</h2>
      <p>优秀的Vue3移动端UI组件库</p>
    </div>

    <template
        v-for="item in componentsList"
        :key="item.name"
    >
      <h3 class="page-title">{{ item.name }}</h3>
      <bnb-cell card>
        <bnb-cell-item
            v-for="route in item.routes"
            :key="route.name"
            :to="route.path"
        >{{ route.meta.title }}</bnb-cell-item>
      </bnb-cell>
    </template>
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
  margin: 2em auto 0;
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
