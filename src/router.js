import VueRouter from 'vue-router'

import HomePage from './views/HomePage.vue'

var router = new VueRouter({
    routes:[
        {
            path: '/',
            component: HomePage,
            redirect: '/homepage'
        },
        {path: '/homepage', component: HomePage},
       
    ]
})

export default router