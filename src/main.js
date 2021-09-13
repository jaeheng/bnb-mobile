import { createApp } from 'vue'
import Root from './App.vue'
import BnbMobile from '../packages'
import createRouter from './router'
import './style/style.scss'

const app = createApp(Root)
const router = createRouter()
app.use(BnbMobile)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
