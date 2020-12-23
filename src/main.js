import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import router from './router'
app.use(router)

import components from '@/components'
components(app)
debugger

import utils from '@/utils'
utils(app)


app.mount('#app')
