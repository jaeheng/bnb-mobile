import Col from './src/Col.vue'
Col.install = Vue => {
  Vue.component(Col.name, Col)
}

export default Col
