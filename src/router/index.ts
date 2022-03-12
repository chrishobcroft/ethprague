import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'

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
