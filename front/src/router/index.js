import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Homepage from "../views/Homepage.vue";
import Profile from "../views/Profile.vue";
import Contact from "../views/Contact.vue";
import Forum from "../views/Forum.vue";
import NotFound from "../views/NotFound.vue";

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
  ],
});

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import("../views/AboutView.vue"),
//     },
//   ],
// });

// const myPlugin = {
//   async requestDidStart(requestContext) {
//     console.log("Request started!");

//     return {
//       async parsingDidStart(requestContext) {
//         console.log("Parsing started!");
//       },

//       async validationDidStart(requestContext) {
//         console.log("Validation started!");
//       },
//     };
//   },
// };

export default router;
