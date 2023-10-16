import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/administration',
      name: 'admin',
      component: () => import('../views/admin_pageView.vue')
    },
    {
      path: '/confidant_display',
      name: 'confidant_display',
      component: () => import('../views/confidant_displayView.vue')
    },
    {
      path: '/confidants',
      name: 'confidants',
      component: () => import('../views/confidantsView.vue')
    },
    {
      path: '/details_capture',
      name: 'details',
      component: () => import('../views/details_captureView.vue')
    },
    {
      path: '/job_answers',
      name: 'job_answers',
      component: () => import('../views/job_answersView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/log_inView.vue')
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('../views/questionsView.vue')
    },
    {
      path: '/test_answers',
      name: 'test_answers',
      component: () => import('../views/test_answersView.vue')
    }
  ]
})

export default router
