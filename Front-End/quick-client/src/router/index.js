import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/account/Login.vue";
import Register from "../pages/account/Register.vue";
import Dashboard from '../pages/Dashboard.vue'
import RecoveryPassword from '../pages/account/RecoveryPassword.vue'
import Profile from '../components/dashboard/Profile.vue';
import Clients from '../components/dashboard/Clients.vue';
import DashboardMain from '../components/dashboard/DashboardMain.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path:'/recovery',
        name:'recovery',
        component: RecoveryPassword
      },
      {
        path:'/profile',
        name:'profile',
        component: Profile
      },
      {
        path:'/dashboards',
        name:'dashboards',
        component: DashboardMain
      },
      {
        path:'/clients',
        name:'clients',
        component: Clients
      }
    ]
  })
  
  export default router
