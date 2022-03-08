import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

Vue.use(router);
import home from "./views/home.vue";
import signup from "./views/signup.vue";
import login from "./views/login.vue";
import userprofile from "./views/userprofile.vue";
import userlist from "./views/userlist.vue";
import chatroom from "./views/chatroom.vue";

const router = new VueRouter({
  mode: "history",
  routes: __dirname,
  routes: [
    { path: "/home", component: Home },
    { path: "/signup", component: Signup },
    { path: "/login", component: Login },
    { path: "/userprofile", component: Username },
    { path: "/userlist", component: Contact },
    { path: "/chatroom", component: Chatroom },
  ],
});

new Vue({ router }).$mount("#app");
