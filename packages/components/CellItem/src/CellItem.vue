<template>
  <div class="bnb-cell-item" @click="redirect">
    <div class="text">
      <slot></slot>
      <p class="info">{{ info }}</p>
    </div>
    <div class="right">
      {{ value }}
      <bnb-icon name="right" v-if="to || link"></bnb-icon>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../style/variable";
.bnb-cell-item {
  padding: $padding+2 $padding;
  display: flex;
  align-items: center;
  position: relative;
  &:last-child:after {
    display: none;
  }
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(.5);
    background: rgb(235, 237, 240);
  }
  &:focus, &:hover {
    background: #fbfbfb;
  }
  .text {
    flex: 1;
    font-size: 1.1em;
    a {
      display: block;
      text-decoration: none;
      color: inherit;
    }
  }
  .right {
    color: #ccc;
  }
  .info {
    margin: 0;
    font-size: 0.8em;
    color: #888;
  }
}
</style>

<script>
import BnbIcon from '../../Icon'
export default {
  name: 'bnb-cell-item',
  components: {
    BnbIcon
  },
  props: {
    to: {
      default: '',
      type: String,
      validator (value) {
        return !value || value.split('')[0] === '/'
      }
    },
    info: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    },
    link: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    redirect () {
      const to = this.to
      if (to) {
        this.$router.push(to)
      }
    }
  }
}
</script>
