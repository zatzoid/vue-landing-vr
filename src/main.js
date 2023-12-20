import 'normalize.css';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import  components  from '@/components/UI'
import MainPage from '@/components/MainPage'
import AboutPage from '@/components/AboutPage'
import ServicePage from '@/components/ServicePage'

const routes = [
    { path: '/', component: MainPage },
    { path: '/about', component: AboutPage },
    { path: '/service', component: ServicePage },
]

const app = createApp(App)
components.forEach(el => {
    app.component(el.name, el)

});
const router = createRouter({
    history: createWebHistory(),
    routes
  });
  app.use(router)
app.mount('#app')