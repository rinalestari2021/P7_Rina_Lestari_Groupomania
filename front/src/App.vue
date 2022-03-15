<script>
export default {
  data() {
    return {
      message: "Groupomania Messenger",
      openinglogo: "",
      btnsigup: "",
      btnlogin: "",
      greetings: ""
    }
  }
}
</script>

<template>
  <div id="app">
    <img
      class="openinglogo"
      src="./assets/icon-left-font-monochrome-white.png"
    />
    <div class="opening">
      <router-view></router-view>
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

.greetings {
  position: relative;
  font-family: "Verdana";
  font-weight: bold;
  color: white;
  font-size: 9pt;
  text-align: center;
}
</style>
