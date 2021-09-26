<template>
  <div class="bnb-tabs">
    <ul class="bnb-tabs-nav" ref="nav" :class="{ 'bnb-tabs-nav__super': navList.length > 5 }">
      <li v-for="(item, index) in navList" :key="index" :class="{ active: index === active }" @click="activeChange(item, index)">
        <span class="text--ellipsis">
          {{ item }}
        </span>
      </li>
      <li class="line" :style="lineStyle"></li>
    </ul>
    <slot></slot>
  </div>
</template>
<style lang="scss">
.bnb-tabs-nav {
  background: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  &::-webkit-scrollbar {display:none}
  li {
    height: 42px;
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    overflow: hidden;
    padding: 0 10px;
    &.active {
      font-weight: bold;
    }
  }
  .line {
    content: '';
    display: block;
    height: 2px;
    width: 30px;
    background: red;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0;
    transition: all .2s;
  }
}
.bnb-tabs-nav__super {
  overflow-x: auto;
  li:not(.line) {
    white-space: nowrap;
    overflow: visible;
  }
}
</style>
<script>
import { scrollLeftTo } from "./util";
import { computed, provide } from "vue";

export default {
  name: 'bnb-tabs',
  props: ['modelValue'],
  data () {
    return {
      lineStyle: {}
    }
  },
  setup (props, { attrs, slots, emit }) {
    // 当前激活的tab索引
    const active = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      }
    })

    // 菜单数据
    const navList = []
    slots.default().map(item => {
      if (item.props) {
        navList.push(item.props.label)
      } else {
        item.children.map(child => {
          navList.push(child.props.label)
        })
      }
    })

    provide('props', props)

    return {
      navList,
      active,
      activeIndex: navList.indexOf(props.modelValue)
    }
  },
  mounted () {
    this.setLineStyle(this.activeIndex)
  },
  emits: ['update:modelValue'],
  methods: {
    setLineStyle (index) {
      const nav = this.$refs.nav
      let width = 0
      console.log({ index })
      if (nav) {
        const li = nav.getElementsByTagName('li')
        width = li[index].offsetLeft + li[index].clientWidth / 2 - 15
      }
      this.lineStyle = {
        transform: `translateX(${width}px)`
      }
    },
    activeChange (item, index) {
      this.active = item
      this.activeIndex = index
      this.scrollToContent(index)
      this.setLineStyle(index)
    },
    scrollToContent (active) {
      const nav = this.$refs.nav
      const li = nav.getElementsByTagName('li')
      const current = li[active]
      const to = current.offsetLeft - (nav.offsetWidth - current.offsetWidth) / 2
      scrollLeftTo(nav, to, 0.2)
    }
  }
}
</script>
