<template>
  <div class="layout">
    <bnb-navbar :title="title"></bnb-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$route.meta.title || 'Bnb-Mobile'
    }
  }
}
</script>
