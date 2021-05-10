import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => {
                require(['../components/login'],resolve);
            },
            meta: {
                title: 'login'
            }
        },
        {
            path: '/index',
            name: 'index',
            component: resolve => {
                require(['../components/index'],resolve);
            },
            meta: {
                title: 'index'
            }
        },
        {
            path: '/error',
            name: 'error',
            component: resolve => {
                require(['../components/error'],resolve);
            },
            meta: {
                title: 'index'
            }
        },
        {
            path: '*',
            name: '404',
            component: resolve => {
                require(['../components/404'],resolve);
            },
            meta: {
                title: '404'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
     if (to.meta.title) {
        document.title = to.meta.title
     }
     next();
});

export default router;
