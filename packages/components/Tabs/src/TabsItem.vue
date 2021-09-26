<template>
  <div class="bnb-tabs-item" v-show="show">
    <slot></slot>
  </div>
</template>
<style lang="scss">
@import "../../../style/variable";
.bnb-tabs-item {
  padding: 2*$padding $padding;
  background: #fff;
}
</style>
<script>
export default {
  name: 'bnb-tabs-item',
  inject: ['props'],
  props: ['label'],
  computed: {
    show () {
      return this.label === this.props.modelValue
    }
  }
}
</script>
