<script>
export default {
  data() {
    return {
      homepage,
      greetings,
    };
  },
};
</script>

<template>
  <header>
    <img
      alt="Groupomania logo"
      class="logowhite"
      src="./assets/icon-left-font-monochrome-white.png"
    />
  </header>

  <main>
    <div class="homepage">
      <input
        type="button"
        onclick="/signup.vue"
        id="btnsignup"
        value="Signup"
      />
      <input type="button" onclick="/login.vue" id="btnlogin" value="Login" />
    </div>
    <div class="greetings">
      <h1>"Welcome to Groupomania<br />Messenger"</h1>
    </div>
  </main>
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
