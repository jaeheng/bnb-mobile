<template>
  <h3 class="page-title">基础用法</h3>
  <bnb-grid>
    <bnb-grid-item
        v-for="i in 8"
        :text="'晚餐' + i"
        icon="moon"></bnb-grid-item>
  </bnb-grid>

  <h3 class="page-title">自定义列数</h3>
  <bnb-grid column-num="3">
    <bnb-grid-item
        v-for="i in 6"
        :text="'晚餐' + i"
        icon="moon"></bnb-grid-item>
  </bnb-grid>

  <h3 class="page-title">内容横排</h3>
  <bnb-grid column-num="3" direction="horizontal">
    <bnb-grid-item
        v-for="i in 3"
        :text="'晚餐' + i"
        icon="moon"></bnb-grid-item>
  </bnb-grid>

  <h3 class="page-title">自定义间隔</h3>
  <bnb-grid column-num="4" gutter="10">
    <bnb-grid-item
        v-for="i in 8"
        :text="'晚餐' + i"
        icon="moon"></bnb-grid-item>
  </bnb-grid>

  <h3 class="page-title">自定义内容</h3>
  <bnb-grid column-num="2">
    <bnb-grid-item
        v-for="i in 4">
      晚餐{{ i }}
    </bnb-grid-item>
  </bnb-grid>
</template>
