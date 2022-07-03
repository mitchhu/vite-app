import { createApp } from 'vue'
import { createPinia } from "pinia";
import mitt from "mitt";
import App from './App.vue'

const Mitt = mitt()

const app = createApp(App);
const stores = createPinia();

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt
  }
}

app.config.globalProperties.$Bus = Mitt

app
  .use(stores)
  .mount('#app')
