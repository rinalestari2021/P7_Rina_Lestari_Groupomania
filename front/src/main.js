import { createApp, VueElement } from "vue";
import App from "./App.vue";
import Router from "vue-router";

createApp(App).mount("#app");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "App",
      component: () => import("./src/App.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./src/home.vue"),
    },
    {
      path: "/signup", //splitting route
      name: "signup",
      component: () => import("./src/signup.vue"),
    },
    {
      path: "/login", //splitting route
      name: "signup",
      component: () => import("./src/login.vue"),
    },
    {
      path: "/login/chatroom", //splitting route
      name: "chatroom",
      component: () => import("./src/login/chatroom.vue"),
    },
    {
      path: "/login/userprofile", //splitting route
      name: "userprofile",
      component: () => import("./src/login/userprofile.vue"),
    },
    {
      path: "/login/userlist", //splitting route
      name: "userlist",
      component: () => import("./src/login/userlist.vue"),
    },
  ],
});
