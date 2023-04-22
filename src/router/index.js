import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import HookMethodView from "@/views/HookMethodView.vue";

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
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
