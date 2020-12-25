import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

import components from '@/components'
components(app)

import global from '@/global'
global(app)

app.mount('#app')
