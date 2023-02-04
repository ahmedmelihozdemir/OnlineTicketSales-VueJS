import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/event/:id",
      name: "event",
      component: () => import("../views/EventView.vue"),
    },
    {
      path: "/seats/:id",
      name: "seats",
      component: () => import("../views/SeatView.vue"),
    },
    {
      path: "/payment/:id",
      name: "payment",
      component: () => import("../views/PaymentView.vue"),
    },
  ],
});

export default router;
