import { createRouter, createWebHashHistory } from 'vue-router';
import Application from "@/pages/Application.vue";
import Authorization from "@/pages/Authorization.vue";
import RequestManagement from "@/pages/RequestManagement.vue";




export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Application,
        },
        {
            path: '/login',
            component: Authorization,
        },
        {
            path: '/request-management',
            component: RequestManagement,
        }
    ]
})


