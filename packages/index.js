import Alert from './components/Alert'
import Navbar from './components/Navbar'
import Cell from "./components/Cell";
import CellItem from "./components/CellItem";

const components = [
  Alert,
  Navbar,
  Cell,
  CellItem
]

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.use(component))
}

/**
 * Bnb-Mobile
 * Vue UI Components
 * @author jaeheng
 */
export default {
  install,
  ...components
}
