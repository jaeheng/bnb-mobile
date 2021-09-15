<template>
  <div class="loading-mask">
    <bnb-icon name="loading"></bnb-icon>
  </div>
</template>
<style lang="scss">
@keyframes rotateInf {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .icon-loading {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-right: 0;
    margin-left: -0.5em;
    margin-top: -0.5em;
    color: #000;
    animation: rotateInf 1s infinite linear;
  }
}
</style>
<script>
import BnbIcon from '../../Icon'
export default {
  name: 'bnb-loading',
  components: {
    BnbIcon
  }
}
</script>
