import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import Schedule from '@/pages/Schedule.vue'
let routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
]

export default createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
    return { top: 0 }
  },
  history: createWebHistory(),
  routes,
})
