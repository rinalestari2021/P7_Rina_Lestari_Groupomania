<script>
export default {
  name: "login",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="containerform">
    <form class="log">
      <label for="mail">Email:</label><br />
      <input type="text" id="mail" name="mail" />
      <label for="pass">Password:</label><br />
      <input type="password" id="passcode" name="passcode" />
      <input type="submit" value="Login" class="loginbtn" />
      <!--need to
        connect direct to home afterlogin-->
    </form>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

form.log {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5%;
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
  border-radius: 15px;
}

input[type="submit"] {
  width: 100px;
  padding: 6px 6px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
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
  font-size: 12pt;
  font-weight: bold;
  color: black;
  text-align: center;
  color: #011f48;
  left: 38%;
}

.loginbtn:hover {
  background-color: #5adfe2;
  cursor: pointer;
}
</style>
