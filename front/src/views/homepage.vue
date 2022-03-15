<script>
export default {
  name: "Homepage",
  data() {
    return {}
  }
}
</script>

<template>
  <div class="homepage">
    <h1 class="openingtext">Please select to continue</h1>

    <router-link :to="{ name: 'SignUp' }" id="btnsignup">SignUp</router-link>
    <router-link :to="{ name: 'Login' }" id="btnsignup">Login</router-link>
  </div>
</template>

<style lang="scss">
.openingtext {
  font-family: "Verdana";
  font-size: 12pt;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
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
</style>
