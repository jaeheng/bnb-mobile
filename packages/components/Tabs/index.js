import Tabs from './src/Tabs.vue'
import TabsItem from './src/TabsItem.vue'
Tabs.install = Vue => {
  Vue.component(Tabs.name, Tabs)
  Vue.component(TabsItem.name, TabsItem)
}

export default Tabs
