<script setup></script>

<template>
  <header>
    <img
      alt="Groupomania logo"
      class="logowhite"
      src="./assets/icon-left-font-monochrome-white.png"
    />
  </header>
  <main>
    <div class="containerform">
      <form class="ins">
        <label for="fname">Firstname:</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label for="lname">Lastname:</label><br />
        <input type="text" id="lname" name="lname" />
        <label for="mail">Email:</label><br />
        <input type="text" id="mail" name="mail" />
        <label for="pass">Password:</label><br />
        <input type="password" id="passcode" name="passcode" />
        <input type="submit" value="Signup" class="signupbtn" />
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

#fname,
#lname,
#mail {
  font-size: 6pt;
  color: black;
}

input[type="text"] {
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

input[type="password"] {
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

.signupbtn {
  border: 1pt white;
  background-color: white;
  border-spacing: 5px;
  font-size: 6pt;
  color: black;
  text-align: center;
  color: #011f48;
}

.signupbtn:hover {
  background-color: #5adfe2;
}
</style>
