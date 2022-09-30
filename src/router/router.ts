import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
// import LoginView from '../views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    // component: defineAsyncComponent(() => import(/* @vite-ignore */ `${HomeView}`))
    component: defineAsyncComponent(() => import(/* @vite-ignore */ '../views/HomeView.vue'))
    // component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // component: defineAsyncComponent(() => import(/* @vite-ignore */ `${AboutView}`))
    component: defineAsyncComponent(() => import(/* @vite-ignore */ '../views/AboutView.vue'))
    // component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    // component: defineAsyncComponent(() => import(/* @vite-ignore */ `${LoginView}`))
    component: defineAsyncComponent(() => import(/* @vite-ignore */ '../views/LoginView.vue'))
    // component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;