import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meet",
    name: "meet",
    component: () => import("@/views/Meet.vue"),
  },
  {
    path: "/event/:id",
    name: "event",
    props: true,
    component: () => import("@/views/Event.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/newevent",
    name: "newevent",
    component: () => import("../views/NewEvent.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
