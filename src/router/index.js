import {createRouter, createWebHistory} from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: '/stroom/',
            component: () => import('@/views/Home.vue')
        },
        {
            name: "professions",
            path: '/stroom/professions',
            component: () => import('@/views/Professions.vue')
        },
        {
            name: "profession",
            path: '/stroom/profession/:id',
            component: () => import('@/views/Profession.vue')
        },
        {
            name: "user",
            path: '/stroom/user',
            component: () => import('@/views/User.vue')
        },

    ]
})

export default router;