import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'

import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'

document.cookie = `lang=${navigator.language}`

const app = createApp(App)

app.component('vue-cookie-accept-decline', VueCookieAcceptDecline)

app.use(router)
app.use(createPinia())

app.mount('#app')