import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import Vue3Toastify from 'vue3-toastify';
import { createPinia } from 'pinia'



const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Vue3Toastify, {
    autoClose: 3000,
  })
app.mount("#app")
