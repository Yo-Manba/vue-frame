import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { index: 1 },
    },
    {
        path: '/inner1',
        name: "Inner1",
        component: () =>
            import ('../views/Inner1'),
        meta: { index: 2 },
    },
    {
        path: '/inner2',
        name: "Inner2",
        component: () =>
            import ('../views/Inner2'),
        meta: { index: 3 },
    }


    //   {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
]

const router = new VueRouter({
    routes
})

export default router