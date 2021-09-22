<template>
  <i class="bnb-icon iconfont" :class="extraClass" :style="iconStyle"></i>
</template>

<script>
import './font/iconfont.css'
export default {
  name: 'bnb-icon',
  props: {
    name: {
      default: '',
      type: String
    },
    size: {
      default: '16px',
      type: [String, Number]
    }
  },
  computed: {
    extraClass () {
      const name = this.name
      return `icon-${name}`
    },
    iconStyle () {
      const size = parseFloat(String(this.size)) + 'px'
      return {
        fontSize: size
      }
    }
  }
}
</script>
