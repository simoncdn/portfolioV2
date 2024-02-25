import './assets/main.css'
import './assets/style.css'
import './utils/fullpage.scrollHorizontally.min'
import './utils/fullpage.fadingEffect.min'
import 'vue-fullpage.js/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueFullPage)

app.mount('#app')
