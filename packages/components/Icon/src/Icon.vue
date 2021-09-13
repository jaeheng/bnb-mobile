<template>
  <i class="iconfont" :class="extraClass"></i>
</template>

<script>
import './font/iconfont.css'
export default {
  name: 'bnb-icon',
  props: {
    name: {
      default: '',
      type: String
    }
  },
  computed: {
    extraClass () {
      const name = this.name
      return `icon-${name}`
    }
  }
}
</script>
