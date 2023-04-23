import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.css'
import './assets/css/base.css'
// import 'aos/dist/aos.css';

createApp(App).use(router).mount('#app')
