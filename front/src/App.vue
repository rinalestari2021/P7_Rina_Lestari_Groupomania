<script>
import App from "./views/home.vue";

export default {
  components: {
    App,
  },
};

const App = new Vue({
  el: "#app",
  data: {
    logowhite: "",
    btnsigup: "",
    btnlogin: "",
    greetings: "",
  },
  methods: {
    redirectToSignup() {
      this.$router.push({ path: "/signup" });
    },
    redirectToLogin() {
      this.$router.push({ path: "/login" });
    },
  },
}).mount("#app");
</script>

<template>
  <div id="app">
    <img
      alt="Groupomania logo"
      class="logowhite"
      src="./assets/icon-left-font-monochrome-white.png"
    />
    <div class="homepage">
      <router-view name="Home" />
      <button @click="redirectToSignup()" id="btnsignup">SignUp</button>
      <button @click="redirectToLogin()" id="btnsignup">Login</button>
    </div>
    <div class="greetings">
      <h1>{{ message }}</h1>
    </div>
  </div>
</template>

<style lang="scss">
.body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(-vt-c-black);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.background {
  color: #011f48;
}

.logowhite {
  margin-top: 219px;
  margin-right: 500px;
  width: 362px;
  height: 60px;
}

.homepage {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#btnsignup,
#btnlogin {
  font-size: 8pt;
  background-color: white;
  border: 1px solid white;
  border-radius: 12px;
  padding: 5px;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  font-family: "Arial Narrow Bold";
  color: #011f48;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}

.greetings {
  font-family: "Verdana";
  font-weight: bold;
  color: white;
  margin-top: 510px;
  font-size: 9pt;
  text-align: center;
}
</style>
