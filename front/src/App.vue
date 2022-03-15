<script>
export default {
  data() {
    return {
      message: "Groupomania Messenger",
      openinglogo: "",
      btnsigup: "",
      btnlogin: "",
      greetings: "",
    };
  },
  methods: {
    goToSignUp() {
      let route = this.$router.resolve({ path: "/signup" });
      window.open(route.href);
    },
    goToLogin() {
      let route = this.$router.resolve({ path: "/login" });
      window.open(route.href);
    },
  },
};
</script>

<template>
  <div id="app">
    <router-link :to="{ name: 'SignUp' }">SignUp</router-link>
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <img
      class="openinglogo"
      src="./assets/icon-left-font-monochrome-white.png"
    />
    <div class="opening">
      <router-view></router-view>

      <!-- <button @click.self="goToSignUp()" id="btnsignup">SignUp</button>
      <button @click.self="goToLogin()" id="btnsignup">Login</button>-->
    </div>
    <div class="greetings">
      <h1>{{ message }}</h1>
    </div>
  </div>
</template>

<style lang="scss">
.body {
  background: #011f48;
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

#app {
  background: #011f48;
  flex-direction: column;
  position: relative;
  display: flex;
  justify-content: center;
  height: auto;
}

.openinglogo {
  margin-top: 2%;
  width: 30%;
  outline: none;
  align-items: center;
}

.logowhite {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.opening {
  width: 100vw;
  height: 150vh;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  justify-content: space-around;
}

#btnsignup,
#btnlogin {
  width: 100px;
  height: auto;
  font-size: 12pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid white;
  border-radius: 12px;
  padding: 5px;
  text-decoration: none;
  margin: 4px 2px;
  font-family: "Arial Narrow Bold";
  color: #011f48;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}

.greetings {
  position: relative;
  font-family: "Verdana";
  font-weight: bold;
  color: white;
  font-size: 9pt;
  text-align: center;
}
</style>
