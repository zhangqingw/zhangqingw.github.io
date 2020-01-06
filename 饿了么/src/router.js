import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import zf from './components/HelloWorld.vue'
import items from './components/items.vue'

const router = new VueRouter({
    routes: [{
            path: '/',
            components: {
                'a': zf
            }
        },
        {
            path: '/items',
            components: {
                'b': items
            }
        }
    ]
})

export default router;