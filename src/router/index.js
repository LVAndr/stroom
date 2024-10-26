import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Professions from "@/views/Professions.vue";
import User from "@/views/User.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Home",
            path: '/',
            component: Home
        },
        {
            name: "Professions",
            path: '/professions',
            component: Professions
        },
        {
            name: "User",
            path: '/user',
            component: User
        },
    ]
})

export default router;