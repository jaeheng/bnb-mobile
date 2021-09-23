<template>
  <div class="bnb-row" :style="gutterStyle">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.bnb-row {
  display: flex;
  align-items: stretch;
}
</style>

<script>
export default {
  name: 'bnb-row',
  props: {
    gutter: {
      default: 0,
      type: [String, Number]
    }
  },
  computed: {
    gutterStyle () {
      const gutter = parseInt(this.gutter) + 'px'
      return {
        gap: gutter,
        marginBottom: gutter
      }
    }
  }
}
</script>
