/* eslint-disable */

import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import Profile from '@/views/Profile.vue';
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
        name: 'Login',
        path: '/login',
        component: Login,
        meta:{
            title: 'Se connecter'
        }
    },{
        name: 'Not Found',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta:{
            title: 'Erreur 404'
        }
    },{ 
        name: 'Profile',
        path: '/profile', 
        component: Profile,
        meta:{
            title: 'Profil'
        },
        props:true 
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