<template>
  <div class="button-demo">
    <h3 class="page-title">按钮类型</h3>
    <div class="panel">
      <bnb-button>默认按钮</bnb-button>
      <bnb-button type="primary">主要按钮</bnb-button>
      <bnb-button type="success">成功按钮</bnb-button>
      <bnb-button type="danger">危险按钮</bnb-button>
      <bnb-button color="linear-gradient(to right, #ff6034, #ee0a24)">自定义颜色按钮</bnb-button>
    </div>

    <h3 class="page-title">按钮形状</h3>
    <div class="panel">
      <bnb-button type="primary" square>方形按钮</bnb-button>
      <bnb-button type="success" round>圆形按钮</bnb-button>
    </div>

    <h3 class="page-title">朴素按钮</h3>
    <div class="panel">
      <bnb-button type="primary" square plain @click="test('方形按钮')">方形按钮</bnb-button>
      <bnb-button type="success" round plain>圆形按钮</bnb-button>
      <bnb-button color="#0aa3ee" plain>自定义颜色按钮</bnb-button>
    </div>

    <h3 class="page-title">禁用状态按钮</h3>
    <div class="panel">
      <bnb-button type="primary" square :disabled="true" @click="test('方形按钮 disabled')">方形按钮</bnb-button>
      <bnb-button type="success" round plain :disabled="true">圆形按钮</bnb-button>
      <bnb-button color="#0aa3ee" plain disabled>自定义颜色按钮</bnb-button>
    </div>

    <h3 class="page-title">加载状态按钮</h3>
    <div class="panel">
      <bnb-button type="primary" square :loading="true">方形按钮</bnb-button>
      <bnb-button type="success" round plain :loading="true">圆形按钮</bnb-button>
      <bnb-button color="#0aa3ee" plain :loading="true">自定义颜色按钮</bnb-button>
    </div>

    <h3 class="page-title">有图标按钮</h3>
    <div class="panel">
      <bnb-button type="success" round plain icon="lock">圆形按钮</bnb-button>
      <bnb-button color="#0aa3ee" plain icon="search">自定义颜色按钮</bnb-button>
      <bnb-button color="#0aa3ee" icon="search"></bnb-button>
    </div>
    <h3 class="page-title">块级按钮</h3>
    <div class="panel">
      <bnb-button type="primary" block>提 交</bnb-button>
      <bnb-button type="success" round plain icon="lock" block>块级按钮</bnb-button>
    </div>

    <h3 class="page-title">按钮大小</h3>
    <div class="panel">
      <bnb-button type="primary" size="large">超大按钮</bnb-button>
      <bnb-button type="primary">默认按钮</bnb-button>
      <bnb-button type="primary" size="small">小型按钮</bnb-button>
      <bnb-button type="primary" size="mini">迷你按钮</bnb-button>
    </div>
  </div>
</template>
<style lang="scss">
.button-demo {
  .bnb-button {
    margin-bottom: 10px;
    margin-left: 0;
    margin-right: 10px;
  }
}
</style>

<script>
export default {
  methods: {
    test (text) {
      console.log(text)
    }
  }
}
</script>
