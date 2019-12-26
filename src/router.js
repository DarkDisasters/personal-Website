import VueRouter from 'vue-router'

import HomePage from './views/HomePage.vue'
import Newpaper from './views/Newpaper.vue'
import Pythonview from './views/papersview/Pythonview.vue'
import Practiceview from './views/Practiceview.vue'

import TypeConverse from './views/papersview/python/basic/TypeConverse.vue'
import ArrayAdd from './views/papersview/python/basic/ArrayAdd.vue'
import ArrayDivide from './views/papersview/python/basic/ArrayDivide.vue'
import StringOperation from './views/papersview/python/basic/StringOperation.vue'

import Flask from './views/papersview/python/flask/Flask.vue'

import Tornadobasic from './views/papersview/python/tornado/TornadoBasic.vue'

var router = new VueRouter({
    routes:[
        {
            path: '/',
            component: HomePage,
            redirect: '/homepage'
        },
        {path: '/homepage', component: HomePage},
        {
            path: '/newpapers',
            component: Newpaper,
        },
        {
            path: '/paper/python',
            component: Pythonview,
            children:[
                {path: 'pythonbasic/typeconversion', component: TypeConverse},
                {path: 'pythonbasic/string', component: StringOperation},
                {path: 'pythonbasic/array/add', component:ArrayAdd},
                {path: 'pythonbasic/array/divide', component:ArrayDivide},
                {path: 'flask', component: Flask},
                {path: 'tornado/basic', component: Tornadobasic},
            ]
        },
        {
            path: '/practices',
            component: Practiceview
        }
    ]
})

export default router