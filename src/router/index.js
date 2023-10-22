import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/HomePage.vue'
import Profile from '@/views/ProfilePage.vue'
import UnderConstruction from '@/views/UnderConstruction.vue'
import CreateLicense from '@/pages/CreateLicense.vue'
import HeaderFooterConatiner from '@Components/layout/layoutContainer/HeaderFooterContainer.vue'
import NoHeaderFooterContainer from '@Components/layout/layoutContainer/NoHeaderFooterContainer.vue'

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: HeaderFooterConatiner,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
            },
            {
                path: '/profile/:address',
                name: 'Profile',
                component: Profile,
            },
            {
                path: '/under-construction',
                name: 'UnderConstruction',
                component: UnderConstruction,
            },
        ],
    },
    {
        path: '/',
        name: 'LayoutNoHeaderFooter',
        component: NoHeaderFooterContainer,
        children: [
            {
                path: '/profile/:address/create/',
                name: 'CreateLicense',
                component: CreateLicense,
            },
        ],
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
