import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'

let routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
});
