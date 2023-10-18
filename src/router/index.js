import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/HomePage.vue'
import Profile from '@/views/ProfilePage.vue'
import CreateLicense from '@/pages/CreateLicense.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/profile/:address',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/:address/create/',
        name: 'CreateLicense',
        component: CreateLicense,
    },
    {
        path: '/:catchAll(.*)*',
        redirect: { name: 'Home' },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
