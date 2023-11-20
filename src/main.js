import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from "./lang/i18n.js";
import VueClickAway from 'vue3-click-away'


const app = createApp(App)

app.use(router)
app.use(i18n);
app.use(VueClickAway)

app.mount('#app')
