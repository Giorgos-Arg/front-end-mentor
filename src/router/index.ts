import { createRouter, createWebHistory } from 'vue-router'
import OrderSummary from '/src/views/OrderSummary.vue'
import StatsPreviewCard from '/src/views/StatsPreviewCard.vue'
import Home from '/src/views/Home.vue'

const routes = [
     {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/OrderSummary',
        name: 'OrderSummary',
        component: OrderSummary,
    },
    {
        path: '/StatsPreviewCard',
        name: 'StatsPreviewCard',
        component: StatsPreviewCard,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router