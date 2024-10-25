import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "Home",
            component: Home,
            path: '/'
        }
    ]
})

export default router;