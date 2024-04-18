import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/css/style.css';
import './assets/js/main.js';

import router from './router';
import App from './App.vue'



createApp(App).use(router).mount('#app')
