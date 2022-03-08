import { createApp } from "vue";
import signup from "./signup.vue";
import login from "./login.vue";
import home from "./home.vue";
import userprofile from "./userprofile.vue";
import userlist from "./userlist.vue";
import chatroom from "./chatroom.vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const signup = signup(App);
const login = login(App);
const home = home(App);
const userprofile = userprofile(App);
const userlist = userlist(App);
const chatroom = chatroom(App);

app.use(router);

app.mount("#app");
