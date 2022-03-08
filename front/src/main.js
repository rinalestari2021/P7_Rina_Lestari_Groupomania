import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

Vue.use(router);

app.mount("#app");
