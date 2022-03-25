import { createRouter, createWebHistory } from "vue-router";
import signup from "../views/signup.vue";
import login from "../views/login.vue";
import home from "../views/home.vue";
import homepage from "../views/homepage.vue";
import profile from "../views/profile.vue";
import contact from "../views/contact.vue";
import forum from "../views/forum.vue";
import notfound from "../views/notfound.vue";
//import adminpage from "../views/adminpage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "App",
      component: homepage,
    },
    {
      path: "/home",
      name: "home",
      component: home,
    },
    {
      path: "/signup",
      name: "signup",
      component: signup,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/profile",
      name: "profile",
      component: profile,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
    {
      path: "/forum",
      name: "forum",
      component: forum,
    },
    //catchall 404
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: notfound,
    },
    //{
    // path: "/post/:id",
    // name: "post",
    // props:true,
    // component: () => import("../components/posts.vue"),
    //},
    //{
    // path: "/adminpage",
    // name: "adminpage",
    //component: adminpage,
    //meta: { authorize: [Role.Admin] },
    //},
  ],
});

export default router;
