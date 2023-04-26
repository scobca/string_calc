import { createRouter, createWebHashHistory } from 'vue-router'
import VModel from "@/components/UI/VModel.vue";
import AboutProjectView from "@/views/AboutProjectView.vue";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: VModel
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
