<script setup></script>

<template>
  <header>
    <img
      alt="Groupomania logo"
      class="logosignup"
      src="./assets/icon-left-font-monochrome-white.png"
    />
  </header>
  <main>
    <div class="containerform">
      <form class="log">
        <label for="mail">Email:</label><br />
        <input type="text" id="mail" name="mail" />
        <label for="pass">Password:</label><br />
        <input type="password" id="passcode" name="passcode" />
        <input type="submit" value="Login" class="loginbtn" />
      </form>
    </div>
  </main>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.logowhite {
  margin-top: 219px;
  width: 362px;
  height: 60px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.containerform {
  background-size: 446px 668px;
  background-color: #011f48;
  background-repeat: no-repeat;
  position: relative;
  margin-top: 50px;
}

#mail,
#passcode {
  font-size: 6pt;
  color: black;
}

input[type="text"] {
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

#passcode {
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

.loginbtn {
  border: 1pt white;
  background-color: white;
  border-spacing: 5px;
  font-size: 6pt;
  color: black;
  text-align: center;
  color: #011f48;
}

.loginbtn:hover {
  background-color: #5adfe2;
  cursor: pointer;
}
</style>
