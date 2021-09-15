<template>
  <h3 class="page-title">基础用法</h3>
  <div class="panel">
    <bnb-alert v-for="item in type" :key="item" :type="item" title="请注意">
      用于页面中展示重要的提示信息。
    </bnb-alert>
  </div>

  <h3 class="page-title">可关闭</h3>
  <div class="panel">
    <bnb-alert type="success" closeable>
      用于页面中展示重要的提示信息。
    </bnb-alert>
    <bnb-alert type="warning" closeable @close="hello">
      存在回调函数
    </bnb-alert>
  </div>

  <h3 class="page-title">带图标</h3>
  <div class="panel">
    <bnb-alert type="success" closeable icon>
      用于页面中展示重要的提示信息。
    </bnb-alert>
    <bnb-alert type="info" closeable icon="search">
      自定义图标。
    </bnb-alert>
    <bnb-alert type="warning" title="请注意" icon>
      用于页面中展示重要的提示信息。
    </bnb-alert>
    <bnb-alert type="danger" title="请注意" icon>
      用于页面中展示重要的提示信息。
    </bnb-alert>
    <bnb-alert type="info" title="请注意" icon>
      用于页面中展示重要的提示信息。
    </bnb-alert>
  </div>
</template>
<style lang="scss">
.bnb-alert {
  margin-bottom: 10px;
}
</style>
<script>
export default {
  data () {
    return {
      type: ['success', 'warning', 'danger', 'info']
    }
  },
  methods: {
    hello () {
      window.alert('Hello World!')
    }
  }
}
</script>
