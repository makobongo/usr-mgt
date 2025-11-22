import { createRouter, createWebHistory } from 'vue-router'
import { Login, Register } from "@/components/auth";
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;