import { createRouter, createWebHistory } from 'vue-router'
import OrderSummaryComponent from '/src/views/OrderSummaryComponent.vue'
import Home from '/src/views/Home.vue'

const routes = [
     {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/OrderSummaryComponent',
        name: 'OrderSummaryComponent',
        component: OrderSummaryComponent,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router