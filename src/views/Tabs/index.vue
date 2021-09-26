<template>
  <h3 class="page-title">基本用法</h3>
  <bnb-tabs v-model="active">
    <bnb-tabs-item label="基本用法1">
      基本用法1
    </bnb-tabs-item>
    <bnb-tabs-item label="基本用法2">
      基本用法2
    </bnb-tabs-item>
    <bnb-tabs-item label="基本用法3">
      基本用法3
    </bnb-tabs-item>
    <bnb-tabs-item label="基本用法4">
      基本用法4
    </bnb-tabs-item>
  </bnb-tabs>
</template>

<script>
export default {
  data () {
    return {
      active: '基本用法1'
    }
  }
}
</script>
