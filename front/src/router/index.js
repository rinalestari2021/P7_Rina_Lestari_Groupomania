import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/signup.vue";
import Login from "../views/login.vue";
import Home from "../views/home.vue";
import Homepage from "../views/homepage.vue";
import Profile from "../views/userprofile.vue";
import Contact from "../views/userlist.vue";
import Forum from "../views/chatroom.vue";

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
      path: "/userprofile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/userlist",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/chatroom",
      name: "Forum",
      component: Forum,
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
