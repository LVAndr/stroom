import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Professions from "@/views/Professions.vue";
import User from "@/views/User.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Home",
            path: '/stroom/',
            component: Home
        },
        {
            name: "Professions",
            path: '/stroom/professions',
            component: Professions
        },
        {
            name: "User",
            path: '/stroom/user',
            component: User
        },
    ]
})

export default router;