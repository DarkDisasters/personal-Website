import VueRouter from 'vue-router'

import HomeContainer from './components/HomeContainer.vue'

var router = new VueRouter({
    routes:[
        {
            path: '/',
            component: HomeContainer,
            redirect: '/home'
        },
        {path: '/home', component: HomeContainer}
    ]
})

export default router