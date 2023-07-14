import { createRouter, createWebHistory } from 'vue-router'
import CheckIn from "@/views/checkIn.vue"
import Donate from '@/views/donate.vue'
import DonateShowOut from "@/views/donateShowOut.vue";


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
  },
  {
    path: '/ShowOut',
    name: 'DonateShowOut',
    component: DonateShowOut
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
