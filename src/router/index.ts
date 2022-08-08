import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("@/views/ProjectsView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `Qi Mo Lin - ${String(to.name)}`;
  next();
});

export default router;
