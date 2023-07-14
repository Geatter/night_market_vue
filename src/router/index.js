import { createRouter, createWebHistory } from 'vue-router'
import CheckIn from "@/views/checkIn.vue"
import Donate from '@/views/donate.vue'


const routes = [
  {
    path: '/',
    name: 'checkin',
    component: CheckIn
  },
  {
    path: '/donate',
    name: 'donate',
    component: Donate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
