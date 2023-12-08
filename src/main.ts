import './assets/main.scss'
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
import "bootstrap"
app.mount('#app')