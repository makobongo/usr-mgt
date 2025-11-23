import { createRouter, createWebHistory } from 'vue-router'
import { UserLogin, UserRegister, NotFound } from "@/components/auth";
import {UserDashboard} from '@/components/views';
const routes = [
  {
    path: '/',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegister
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component: UserDashboard
  },
  // Catch-all route for 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;