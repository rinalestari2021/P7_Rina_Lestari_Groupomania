<script>
export default {
  name: "SignUp",
  data() {
    return {};
  },
};
</script>

<template>
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
      <input type="submit" value="SignUp" class="signupbtn" />
    </form>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.containerform {
  position: relative;
}

form.ins {
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
  border-radius: 15px;
}

input[type="password"] {
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

.signupbtn {
  border: 1pt white;
  background-color: white;
  border-spacing: 5px;
  font-size: 12pt;
  font-weight: bold;
  color: black;
  text-align: center;
  color: #011f48;
}

.signupbtn:hover {
  background-color: #5adfe2;
  cursor: pointer;
}
</style>
