<script>
import signup from "./signup.vue";
import login from "./login.vue";
import home from "./home.vue";
import userprofile from "./userprofile.vue";
import userlist from "./userlist.vue";
import chatroom from "./chatroom.vue";

export default {
  name: "App",
  data() {
    return {
      components: {
        signup: signup,
        login: login,
        home: home,
        userprofile: userprofile,
        userlist: userlist,
        chatroom: chatroom,
      },
      message: "Groupomania Messenger ",
    };
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
      <button @click="redirectToSignup()" id="btnsignup">Signup</button>
      <button @click="redirectToLogin()" id="btnsignup">Login</button>
    </div>
    <div class="greetings">
      <h1>{{ message }}</h1>
    </div>
  </div>
</template>

<style lang="scss">
.body {
  width: 90%;
  margin: 0 auto;
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
