import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "chat",
      component: () => import("@/view/chat") // 路由懒加载
    }
  ],
  history: createWebHistory()
});

router.beforeEach((to, from) => {
  console.log("beforeEach", { to, from });
  // next()
});

export default router;
