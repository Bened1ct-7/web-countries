import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/country/:capital",
      name: "Country",
      component: () => import("../views/Country.vue"),
      props: true,
    },
  ],
});

export default router;
