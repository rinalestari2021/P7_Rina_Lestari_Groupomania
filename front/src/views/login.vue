<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      mail: "",
      login: "",
    };
  },
  methods: {
    handleLogin() {
      //validate password
      this.passwordError =
        this.password.lenght > 6
          ? ""
          : "Password must be at least 6 chars long";
      //all syntaxe js connect with DB here
      let data = {
        email: this.mail,
        password: this.passcode,
      };
      axios
        .post("http://localhost:3000/api/auth/login", data)
        .then((data) => {
          //
          console.log(data);
        })
        .catch((err) => {
          console.error("ERROR REQUEST ===========");
        });
    },
    submitlogin() {
      //const auth = { email: this.email, password: this.password };
      //this.success = false;
      //this.error = null;
      //try {
      // res = await axios
      //.get("http://localhost:3000/api/auth/accounts", { auth })
      //.then((res) => res.data);
      //this.success = true;
      //} catch (err) {
      //this.error = err.message;
      //}
    },
    prevPage() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <div class="containerform">
    <form @submit.prevent="handleLogin()" class="log">
      <label for="mail">Email:</label><br />
      <input type="string" id="mail" name="mail" required v-model="mail" />
      <label for="pass">Password:</label><br />
      <input
        type="password"
        id="passcode"
        name="passcode"
        required
        v-model="passcode"
      />

      <div v-if="passwordError" class="errorpass">{{ passwordError }}</div>
      <div v-if="success" id="success">Logged in Successully</div>

      <input
        @click="submitlogin()"
        type="submit"
        value="Login"
        class="loginbtn"
      />
      <!--need to
        connect direct to home afterlogin-->
    </form>
    <button @click="prevPage" class="previous">Go Back</button>
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
  font-size: 11pt;
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

#passcode,
#mail {
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15pt;
}

#success {
  color: #011f48;
  margin-top: 10px;
  font-size: 6pt;
  font-weight: bold;
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

.previous {
  margin: 0 10px;
  padding: 5px;
  border: none;
  border-radius: 7px;
  top: 50px;
  background: white;
}

.previous:hover {
  background-color: #5adfe2;
  color: #b86758;
}
</style>
