import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProject from './pages/AppProject.vue';
import AppAbout from './pages/AppAbout.vue';
import Error404 from './pages/errors/Error404.vue';
import AppSinglePost from './pages/AppSinglePost.vue';


const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/project',
            name: 'project',
            component: AppProject
        },
        {
            path: '/project/:id',
            name: 'single-project',
            component: AppSinglePost
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/404',
            name: '404',
            component: Error404
        },
        {
            path: '/404',
            name: '404',
            component: Error404
        },
    ]
});
export { router };
