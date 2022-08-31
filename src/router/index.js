/* eslint-disable */

import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta:{
            title: 'Accueil'
        }
    },{
        name: 'About',
        path: '/about',
        component: About,
        meta:{
            title: 'A propos'
        }
    },{
        name: 'Not Found',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta:{
            title: 'Erreur 404'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to, from) => {
    document.title = to.meta.title;
})

export default router;