import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import routes from './app'
const isServer = typeof window === 'undefined'
const history = isServer ? createMemoryHistory() : createWebHistory()

export default function() {
  return createRouter({
    routes,
    history
  })
}
