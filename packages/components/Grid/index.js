import Grid from './src/Grid.vue'
Grid.install = Vue => {
  Vue.component(Grid.name, Grid)
}

export default Grid
