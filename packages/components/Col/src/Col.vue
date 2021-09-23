<template>
  <div class="bnb-col">
    <div class="bnb-col__inner">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.bnb-col {
  flex: 1;
  display: flex;
  align-items: center;
}
.bnb-col__inner {
  flex: 1;
}
</style>

<script>
export default {
  name: 'bnb-col'
}
</script>
