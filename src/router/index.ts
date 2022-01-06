import { createRouter, createWebHistory } from "vue-router";
import OrderSummary from "/src/views/OrderSummary.vue";
import StatsPreviewCard from "/src/views/StatsPreviewCard.vue";
import ThreeColumnPreviewCard from "/src/views/ThreeColumnPreviewCard.vue";
import Home from "/src/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/OrderSummary",
    name: "OrderSummary",
    component: OrderSummary,
    meta: { title: "Order summary component" },
  },
  {
    path: "/StatsPreviewCard",
    name: "StatsPreviewCard",
    component: StatsPreviewCard,
    meta: { title: "Stats preview card component" },
  },
  {
    path: "/ThreeColumnPreviewCard",
    name: "ThreeColumnPreviewCard",
    component: ThreeColumnPreviewCard,
    meta: { title: "3-column preview card component" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const DEFAULT_TITLE = "Frontend Mentor Tasks";
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || DEFAULT_TITLE;
  next();
});

export default router;
