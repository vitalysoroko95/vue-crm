import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('../views/HomeView'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('../views/LoginView'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('../views/RegisterView'),
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: () => import('../views/CategoriesView'),
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: () => import('../views/RecordView'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: () => import('../views/ProfileView'),
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'main' },
    component: () => import('../views/PlanningView'),
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },
    component: () => import('../views/HistoryView'),
  },
  {
    path: '/detail-record',
    name: 'detail-record',
    meta: { layout: 'main' },
    component: () => import('../views/DetailRecord'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
