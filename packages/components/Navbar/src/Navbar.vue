<template>
  <div class="bnb-navbar">
    <bnb-icon name="left" class="icon" @click="$router.back()"></bnb-icon>
    <span>{{ title }}</span>
  </div>
</template>

<style lang="scss">
.bnb-navbar {
  position: sticky;
  color: #000;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  padding: 0 10px;
  line-height: 56px;
  background: #fff;
  span {
    font-size: 1.2em;
  }
  .icon {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 20px;
    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>

<script>
import BnbIcon from '../../Icon'
export default {
  props: {
    title: {
      default: '',
      type: String
    }
  },
  name: 'bnb-navbar',
  components: {
    BnbIcon
  }
}
</script>
