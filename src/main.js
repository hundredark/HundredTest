import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import router from './router'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  router,
  // function to have custom setups
  ({ app }) => {
  },
);