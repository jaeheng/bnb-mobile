import Alert from './src/Alert.vue'
Alert.install = Vue => {
  Vue.component(Alert.name, Alert)
}

export default Alert
