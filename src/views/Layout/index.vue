<template>
  <div class="bnb-layout">
    <h3 class="page-title">Layout基本用法</h3>
    <div class="panel">
      <bnb-row class="demo-row">
        <bnb-col>Test1</bnb-col>
        <bnb-col>Test2</bnb-col>
        <bnb-col>Test3</bnb-col>
        <bnb-col>Test4</bnb-col>
      </bnb-row>
    </div>

    <h3 class="page-title">自定义间隔</h3>
    <div class="panel">
      <bnb-row gutter="10" class="demo-row">
        <bnb-col>A</bnb-col>
        <bnb-col>B</bnb-col>
        <bnb-col>C</bnb-col>
        <bnb-col>D</bnb-col>
      </bnb-row>
      <bnb-row gutter="10" class="demo-row">
        <bnb-col><bnb-icon name="search"></bnb-icon></bnb-col>
        <bnb-col>Test2 <br> Test2-2</bnb-col>
        <bnb-col><bnb-icon name="gene1"></bnb-icon></bnb-col>
        <bnb-col><bnb-icon name="user"></bnb-icon></bnb-col>
      </bnb-row>
    </div>

    <h3 class="page-title">应用</h3>
    <bnb-row class="navbar">
      <bnb-col>
        <bnb-icon name="mark-fill" size="20"></bnb-icon>
        识物卡
      </bnb-col>
      <bnb-col>
        <bnb-icon name="data" size="20"></bnb-icon>
        学习报告
      </bnb-col>
      <bnb-col>
        <bnb-icon name="user" size="20"></bnb-icon>
        我的
      </bnb-col>
    </bnb-row>
  </div>
</template>

<style lang="scss">
.demo-row {
  .bnb-col {
    background: #42b983;
    padding: 10px 0;
    color: #fff;
    text-align: center;
    &:nth-of-type(odd) {
      background: lightgreen;
    }
  }
}
.navbar {
  background: #fdf0dd;
  .bnb-col {
    padding: 8px 0;
    text-align: center;
    font-size: 13px;
    &:nth-of-type(2) {
      background: #f8e5c9;
    }
  }
  .bnb-icon {
    display: block;
  }
}
</style>
