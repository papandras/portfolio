import { createApp } from "vue";
import { createPinia } from "pinia";
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";
import Cookie from "js-cookie";

import App from "./App.vue";
import router from "./router";
import "aos/dist/aos.css";

if (Cookie.get("lang") == undefined) {
  Cookie.set("lang", navigator.language);
}

const app = createApp(App);

app.component("vue-cookie-accept-decline", VueCookieAcceptDecline);

app.use(router);
app.use(createPinia());

app.mount("#app");
