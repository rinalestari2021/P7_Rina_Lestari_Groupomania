<script>
export default {
  name: "SignUp",
  data() {
    return {
      fname: "",
      lname: "",
      mail: "",
      passcode: "",
      role: "",
      terms: false,
    };
  },
  method: {
    handleSignUp() {
      //validate password
      this.passwordError =
        this.password.lenght > 6
          ? ""
          : "Password must be at least 6 chars long";
      //all syntaxe js connect with DB here
    },
  },
};
</script>

<template>
  <div class="containerform">
    <form @submit.prevent="handleSignUp" class="insc">
      <label for="fname">Firstname:</label><br />
      <input
        type="text"
        id="fname"
        name="fname"
        required
        v-model="fname"
      /><br />
      <label for="lname">Lastname:</label><br />
      <input type="text" id="lname" name="lname" required v-model="lname" />
      <label for="mail">Email:</label><br />
      <input type="text" id="mail" name="mail" required v-model="mail" />
      <label for="pass">Password:</label><br />
      <input
        type="password"
        id="passcode"
        name="passcode"
        required
        v-model="passcode"
      />
      <div v-if="passwordError" class="errorpass">{{ passwordError }}</div>

      <label class="state">Role:</label>
      <select v-model="role">
        <option value="developper">Web Developper</option>
        <option value="administration">Administration Staff</option>
        <option value="accounting">Accounting Staff</option>
        <option value="commercial">Marketing Staff</option>
      </select>

      <div class="terms">
        <input type="checkbox" v-model="terms" required />
        <label>Accept terms and conditions</label>
      </div>

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

form.insc {
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

input[type="text"],
select {
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 14pt;
}

input[type="password"] {
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 14pt;
  font-weight: bold;
}

.errorpass {
  color: #011f48;
  margin-top: 10px;
  font-size: 6pt;
  font-weight: bold;
}

input[type="submit"] {
  width: 100px;
  padding: 6px 6px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
}

input[type="checkbox"] {
  width: 16px;
  margin: 0 10px 0 0;
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
  left: 38%;
}

.signupbtn:hover {
  background-color: #5adfe2;
  cursor: pointer;
}
</style>
