<template>
  <div class="bnb-grid" :style="gridStyle" ref="grid">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "../../../style/public";
.bnb-grid {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>
<script>
export default {
  name: 'bnb-grid',
  props: {
    /**
     * 列数
     * 默认4列，可为数字或数字字符串
     */
    columnNum: {
      default: 4,
      type: [String, Number],
      validator: (value) => {
        return !isNaN(value)
      }
    },
    /**
     * 图标大小 px
     * 支持数字和像素字符串
     */
    iconSize: {
      default: '24px',
      type: [String, Number],
      validator: value => {
        return /(^\d+$)|(^\d+px$)/.test(value)
      }
    },
    /**
     * 网格间隔
     */
    gutter: {
      default: 0,
      type: [String, Number],
      validator: value => {
        return /(^\d+$)|(^\d+px$)/.test(value)
      }
    },
    border: {
      default: true,
      type: Boolean
    },
    center: {
      default: true,
      type: Boolean
    },
    clickable: {
      default: false,
      type: Boolean
    },
    direction: {
      default: 'vertical',
      type: String,
      validator: value => {
        return ['horizontal', 'vertical'].includes(value)
      }
    }
  },
  computed: {
    gridStyle () {
      const gutter = parseFloat(this.gutter)
      return {
        'padding-left': gutter + 'px',
        'margin-top': `-${gutter}px`
      }
    }
  },
  provide() {
    return {
      props: this.$props
    }
  }
}
</script>
