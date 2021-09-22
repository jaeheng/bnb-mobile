<template>
  <div class="bnb-grid-item" :class="[directionClass]" :style="itemStyle">
    <div class="bnb-grid-item__content bnb-hairline">
      <slot>
        <bnb-icon class="bnb-grid-item__icon" :name="icon" v-if="icon" :size="iconSize"></bnb-icon>
        <span class="bnb-grid-item__text">{{ text }}</span>
      </slot>
    </div>
  </div>
</template>
<style lang="scss">
.bnb-grid-item {
  text-align: center;
  position: relative;
  color: #333;
  box-sizing: border-box;
  .bnb-grid-item__icon {
    margin-right: 3px;
    vertical-align: middle;
  }
  .bnb-grid-item__text {
    color: #646566;
    font-size: 12px;
    line-height: 1.5;
    word-break: break-all;
  }
  .bnb-grid-item__content {
    height: 100%;
    background: #fff;
    padding: 16px 8px;
    box-sizing: border-box;
    &::after {
      z-index: 1;
      border-width: 0 1px 1px 0;
    }
  }
  &.bnb-grid-item__vertical {
    .bnb-grid-item__icon {
      display: block;
    }
  }
}
</style>
<script>
import BnbIcon from '../../Icon/src/Icon.vue'
export default {
  name: 'bnb-grid-item',
  components: {
    BnbIcon
  },
  props: {
    icon: {
      default: '',
      type: String
    },
    text: {
      default: '',
      type: String
    }
  },
  inject: ['props'],
  computed: {
    directionClass () {
      return 'bnb-grid-item__' + this.props.direction
    },
    iconSize () {
      return this.props.iconSize
    },
    itemStyle () {
      const flexBasis = 100 / this.props.columnNum + '%'
      const gutter = parseFloat(this.props.gutter) + 'px'
      return {
        'flex-basis': flexBasis,
        'padding-right': gutter,
        'margin-top': gutter
      }
    }
  }
}
</script>
