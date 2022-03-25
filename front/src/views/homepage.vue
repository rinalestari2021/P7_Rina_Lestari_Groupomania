<script>
export default {
  name: "homepage",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="homepage">
    <h1 class="openingtext">Please select to continue</h1>
    <router-link :to="{ name: 'signup' }" id="btnsignup">SignUp</router-link>
    <router-link :to="{ name: 'login' }" id="btnsignup">Login</router-link>
  </div>
</template>

<style lang="scss">
.homepage {
  top: 50px;
  position: relative;
}
.openingtext {
  font-family: "Verdana";
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
}

#btnsignup,
#btnlogin {
  width: 100px;
  height: auto;
  font-size: 14pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid white;
  border-radius: 15px;
  padding: 8px;
  text-decoration: none;
  margin: 4px 10px;
  font-family: "Arial Narrow Bold";
  color: #011f48;
  box-shadow: 0 10px 6px -8px #777;
  top: 50px;
}

#btnsignup:hover {
  background-color: #5adfe2;
  cursor: pointer;
}
</style>
