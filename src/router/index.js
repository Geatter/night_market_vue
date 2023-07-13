import { createRouter, createWebHistory } from 'vue-router'
import CheckIn from "@/views/checkIn.vue";

const routes = [
  {
    path: '/',
    name: 'checkin',
    component: CheckIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
