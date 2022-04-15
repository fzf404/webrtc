import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/:roomId',
    name: 'room',
    component: () => import('../pages/room.vue'),
  }
]

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
