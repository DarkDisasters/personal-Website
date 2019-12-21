import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import router from './router.js'

Vue.use(VueRouter)
Vue.use(VueResource)



var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
})



