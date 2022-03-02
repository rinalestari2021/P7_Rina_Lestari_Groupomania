import { createApp, VueElement } from "vue";
import App from "./App.vue";
import Router from "vue-router";

createApp(App).mount("#app");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/signup", //splitting route
      name: "signup",
      component: () => import("../signup.vue"),
    },
    {
      path: "/login", //splitting route
      name: "signup",
      component: () => import("../login.vue"),
    },
    {
      path: "/login/chatroom", //splitting route
      name: "chatroom",
      component: () => import("./login/chatroom.vue"),
    },
  ],
});
