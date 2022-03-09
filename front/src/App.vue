<script>
export default {
  data() {
    return {
      message: "Welcome to Groupomania Messenger",
      logowhite: "",
      btnsigup: "",
      btnlogin: "",
      greetings: "",
    };
  },
  methods: {
    goToSignUp() {
      this.$router.push("/signup");
    },
  },
};
</script>

<template>
  <div id="app">
    <img
      class="openinglogo"
      src="./assets/icon-left-font-monochrome-white.png"
    />
    <div class="opening">
      <router-view></router-view>
      <router-link to="SignUp">Go to SignUp</router-link>
      <button @click="goToSignUp()" id="btnsignup">SignUp</button>
      <button id="btnsignup">Login</button>
      <router-link to="SignUp">Go to SignUp</router-link>
      <router-link to="SignUp">Go to SignUp</router-link>
      <router-link to="SignUp">Go to SignUp</router-link>
      <router-link to="SignUp">Go to SignUp</router-link>
    </div>
    <div class="greetings">
      <h1>{{ message }}</h1>
    </div>
  </div>
</template>

<style lang="scss">
.body {
  background: var(--vt-c-indigo);
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

#app {
  flex-direction: column;
  position: relative;
  display: flex;
  justify-content: center;
}

.openinglogo {
  margin-top: 20%;
  width: 30%;
  outline: none;
}

.logowhite {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.opening {
  position: relative;

  text-align: center;
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
  font-family: "Verdana";
  font-weight: bold;
  color: white;
  margin-top: 60px;
  font-size: 9pt;
  text-align: center;
}
</style>
