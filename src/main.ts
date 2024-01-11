import './assets/main.scss'
import './assets/queries.scss'
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// swiper config
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const app = createApp(App)

// global emitter
import mitt, { type Emitter } from 'mitt'
const emitter:Emitter<any>= mitt()
app.provide("Emitter",emitter)

app.use(createPinia())
app.use(router)
import "bootstrap"
app.mount('#app')