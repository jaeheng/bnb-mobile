<template>
  <div class="bnb-alert" :class="[typeClass, showClass]">
    <div class="bnb-alert__icon" :class="title ? 'bnb-alert__icon_big' : ''" v-if="icon">
      <bnb-icon :name="iconName"></bnb-icon>
    </div>
    <div class="bnb-alert__content">
      <h3 v-if="title" class="bnb-alert__title">{{ title }}</h3>
      <slot></slot>
    </div>
    <div class="bnb-alert__close" v-if="closeable">
      <bnb-icon name="close" @click="close"></bnb-icon>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../../style/variable";
.bnb-alert {
  padding: $padding;
  font-size: 14px;
  display: flex;
}
.bnb-alert__title {
  margin: 0 0 5px;
  font-size: 1.1em;
  font-weight: bold;
}
.bnb-alert__success {
  background: lighten($success, 55%);
  color: $success;
}
.bnb-alert__warning {
  background: lighten($warning, 25%);
  color: $warning;
}
.bnb-alert__danger {
  background: lighten($danger, 40%);
  color: $danger;
}
.bnb-alert__info {
  background: #fff;
  color: #333;
  box-shadow: 0 0 1px rgba(0, 0, 0, .2);
}
.bnb-alert__content {
  flex: 1;
}
.bnb-alert__close {
  width: 30px;
  text-align: right;
}
.bnb-alert__icon {
  padding-right: 10px;
}
.bnb-alert_hide {
  display: none;
}
.bnb-alert__icon_big .iconfont {
  font-size: 34px;
}
</style>

<script>
import BnbIcon from '../../Icon'
export default {
  name: 'bnb-alert',
  data () {
    return {
      show: true
    }
  },
  props: {
    title: {
      default: '',
      type: String
    },
    // success/warning/info/danger
    type: {
      default: 'info',
      type: String,
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger', 'info'].includes(value)
      }
    },
    closeable: {
      default: false,
      type: Boolean
    },
    // 仅限Icon组件的图标
    icon: {
      default: false,
      type: [Boolean, String],
      validator (value) {
        return typeof value === 'boolean' || typeof value === 'string'
      }
    }
  },
  computed: {
    typeClass () {
      return 'bnb-alert__' + this.type
    },
    showClass () {
      return !this.show ? 'bnb-alert_hide' : ''
    },
    iconName () {
      let icon = ''
      if (this.icon === true) {
        const iconDefault = {
          success: 'success',
          warning: 'warning',
          danger: 'error',
          info: 'info'
        }
        icon = iconDefault[this.type]
      } else {
        icon = this.icon
      }
      return icon
    }
  },
  components: {
    BnbIcon
  },
  methods: {
    close () {
      this.show = false
      this.$emit('close')
    }
  }
}
</script>
