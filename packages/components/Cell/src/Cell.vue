<template>
  <div class="bnb-cell" :class="{ 'is-card': card }">
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "../../../style/variable";
.bnb-cell {
  padding: $padding;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 1px #ccc;
  &.is-card {
    margin: 0 $padding;
    border-radius: 6px;
  }
}
</style>

<script>
export default {
  name: 'bnb-cell',
  props: {
    card: {
      default: false,
      type: Boolean
    }
  }
}
</script>
