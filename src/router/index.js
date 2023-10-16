import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/HomePage.vue'
import Profile from '@/views/ProfilePage.vue'

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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
