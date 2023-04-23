import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import HookMethodView from "@/views/HookMethodView.vue";
import SpiciMethodView from "@/views/SpiciMethodView.vue";
import AboutProjectView from "@/views/AboutProjectView.vue";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/hook',
        alias: '/hook',
        name: 'hook',
        component: HookMethodView
    },
    {
        path: '/spici',
        alias: '/spici',
        name: 'spici',
        component: SpiciMethodView
    },
    {
        path: '/about',
        alias: '/about',
        name: 'about',
        component: AboutProjectView
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
