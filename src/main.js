import 'vue-fullpage.js/dist/style.css'
import './assets/style.css'
import './assets/fullpage.css'

import './utils/fullpage.scrollHorizontally.min'
import './utils/fullpage.fadingEffect.min'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import VueFullPage from 'vue-fullpage.js'
import AppVue from './App.vue'

const app = createApp(AppVue)

app.use(createPinia())
app.use(router)
app.use(VueFullPage)

app.mount('#app')
