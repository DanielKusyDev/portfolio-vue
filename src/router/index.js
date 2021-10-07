import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "",
        component: () => import("@/layout/MainLayout.vue"),
        children: [
            {
                path: "",
                name: "",
                component: () => import("@/views/Home.vue"),
            },
            {
                name: "projectDetails",
                path: "project/:name",
                component: () => import("@/views/ProjectPage.vue"),
            }
        ]
    },
];

const router = new VueRouter({
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        if(savedPosition){
            return savedPosition
        } else {
            return { x: 0, y: 0 };
        }
    }

});

export default router;
