import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import store from "./store/store.js";
import router from "./route/router.js";


const app = createApp(App)
app
    .use(router)
    .use(store)
    .mount('#app')
