<template>
  <button
      class="bnb-button"
      :class="[typeClass, squareClass, roundClass, plainClass, blockClass, sizeClass]"
      :style="style"
      :disabled="disabled || loading"
  >
    <bnb-icon :name="icon" v-if="icon"></bnb-icon>
    <bnb-loading v-if="loading"></bnb-loading>
    <slot></slot>
  </button>
</template>

<style lang="scss">
@use "sass:math";
@import "../../../style/variable";
.bnb-button {
  padding: $padding 1.5 * $padding;
  border: 1px solid #eee;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, .2);
  & + .bnb-button {
    margin-left: 10px;
  }
  &:focus, &:hover {
    opacity: .9;
  }
  &[disabled] {
    opacity: .5;
    cursor: not-allowed;
  }
  .bnb-icon {
    margin-right: 3px;
    display: inline-block;
    vertical-align: middle;
  }
}
[class*="bnb-button__"] {
  color: #fff;
  border-color: transparent;
}
.bnb-button__primary {
  background: $primary;
  border-color: $primary;
}
.bnb-button__success {
  background: $success;
  border-color: $success;
}
.bnb-button__danger {
  background: $danger;
  border-color: $danger;
}
.bnb-button__default {
  background: #fff;
  border-color: #fff;
  color: #333;
}
.bnb-button__square {
  border-radius: 0;
}
.bnb-button__round {
  border-radius: 100px;
}
.bnb-button__plain {
  background: transparent;
  color: inherit;
  &.bnb-button__primary {
    color: $primary;
  }
  &.bnb-button__success {
    color: $success;
  }
  &.bnb-button__danger {
    color: $danger;
  }
}
.bnb-button__block {
  display: block;
  width: 100%;
}
.bnb-button__large {
  padding: 1.5 * $padding 2.5 * $padding;
}
.bnb-button__normal {
  padding: $padding 1.5 * $padding;
}
.bnb-button__small {
  padding: math.div($padding, 2) $padding;
}
.bnb-button__mini {
  padding: 2px 5px;
  font-size: 0.7em;
}
</style>

<script>
import BnbLoading from '../../Loading'
import BnbIcon from '../../Icon'
export default {
  name: 'bnb-button',
  props: {
    type: {
      default: 'default',
      type: String
    },
    color: {
      default: '',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    square: {
      default: false,
      type: Boolean
    },
    round: {
      default: false,
      type: Boolean
    },
    plain: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    block: {
      default: false,
      type: Boolean
    },
    size: {
      default: 'normal',
      type: String,
      validator (value) {
        return !value || ['large', 'small', 'mini', 'normal'].includes(value)
      }
    }
  },
  computed: {
    typeClass () {
      return this.type ? 'bnb-button__' + this.type : ''
    },
    style () {
      const obj = {}
      if (this.color && !this.plain) {
        obj.background = this.color
        obj.color = '#fff'
        obj['border-color'] = 'transparent'
      }
      if (this.plain) {
        obj.background = 'transparent'
        if (this.color) {
          obj.color = this.color
          obj['border-color'] = this.color
        }
      }
      return obj
    },
    squareClass () {
      return this.square ? 'bnb-button__square' : ''
    },
    roundClass () {
      return this.round ? 'bnb-button__round' : ''
    },
    plainClass () {
      return this.plain ? 'bnb-button__plain' : ''
    },
    blockClass () {
      return this.block ? 'bnb-button__block' : ''
    },
    sizeClass () {
      return this.size ? 'bnb-button__' + this.size : ''
    }
  },
  components: {
    BnbLoading,
    BnbIcon
  }
}
</script>
