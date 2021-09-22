<template>
  <h3 class="page-title">图标列表</h3>
  <bnb-grid>
    <bnb-grid-item v-for="item in glyphs" :text="item.font_class" :icon="item.font_class"></bnb-grid-item>
  </bnb-grid>
</template>
<script>
import icons from '../../../packages/components/Icon/src/font/iconfont.json'
console.log(icons)
export default {
  data () {
    return {
      glyphs: icons.glyphs
    }
  }
}
</script>
