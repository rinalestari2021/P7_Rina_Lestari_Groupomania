import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/signup.vue";
import Login from "../views/login.vue";
import Home from "../views/Home.vue";
import Homepage from "../views/Homepage.vue";
import Profile from "../views/Profile.vue";
import Contact from "../views/Contact.vue";
import Forum from "../views/Forum.vue";
import NotFound from "../views/NotFound.vue";
//import AdminPage from "../views/Admin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "App",
      component: Homepage,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/forum",
      name: "Forum",
      component: Forum,
    },
    //catchall 404
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    {
      // path: "/post/:id",
      // name: "Post",
      // props:true,
      // component: () => import("../components/posts.vue"),
    },
    {
      // path: "/Admin",
      // name: "AdminPage",
      //component: AdminPage,
      //meta: { authorize: [Role.Admin] },
    },
  ],
});

export default router;
