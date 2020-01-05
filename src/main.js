import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router.js'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)


var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
})