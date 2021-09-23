import Alert from './components/Alert'
import Navbar from './components/Navbar'
import Cell from "./components/Cell";
import CellItem from "./components/CellItem";
import Button from "./components/Button";
import Loading from "./components/Loading";
import Icon from "./components/Icon";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
import Row from "./components/Row";
import Col from "./components/Col";

const components = [
  Alert,
  Navbar,
  Cell,
  CellItem,
  Button,
  Loading,
  Icon,
  Grid,
  GridItem,
  Row,
  Col
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
