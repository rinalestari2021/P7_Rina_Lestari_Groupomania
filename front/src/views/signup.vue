<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
      terms: false,
      passwordError: "",
    };
  },
  methods: {
    handleSignUp() {
      console.log("form submitted");
      //validate password
      this.passwordError =
        this.password.lenght > 6
          ? ""
          : "Password must be at least 6 chars long";
      if (!this.passwordError) {
        console.log("email:", this.email);
        console.log("password:", this.password);
        console.log("role:", this.role);
        console.log("terms:", this.terms);
      }
      // all syntaxe js connect with DB here
      let data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      };
      console.log(data);
      axios
        .post("http://localhost:3000/api/auth/signup", data)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log("ERROR REQUEST ===========");
        });
    },
    prevPage() {
      this.$router.go(-1);
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
        v-model="firstName"
      /><br />
      <label for="lname">Lastname:</label><br />
      <input type="text" id="lname" name="lname" required v-model="lastName" />
      <label for="mail">Email:</label><br />
      <input type="text" id="mail" name="mail" required v-model="email" />
      <label for="pass">Password:</label><br />
      <input
        type="password"
        id="passcode"
        name="passcode"
        required
        v-model="password"
      />
      <pre>
        {{ passwordError }}
      </pre>
      <div v-if="passwordError" class="errorpass">{{ passwordError }}</div>

      <label class="state">Role:</label>
      <select v-model="role">
        <option value="developper">Web Developper</option>
        <option value="administration">Administration Staff</option>
        <option value="accounting">Accounting Staff</option>
        <option value="commercial">Marketing Staff</option>
      </select>

      <div class="terms">
        <input type="checkbox" id="conditions" v-model="terms" required />
        <label for="conditions">Accept terms and conditions</label>
      </div>

      <input type="submit" value="SignUp" class="signupbtn" />
    </form>
    <button @click="prevPage" class="previous">Go Back</button>
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
#mail,
#passcode {
  font-size: 11pt;
  color: black;
  border-radius: 15pt;
}

input[type="text"],
select {
  font-size: inherit;
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
}

input[type="password"] {
  font-size: 300%;
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
}

pre {
  color: #011f48;
  top: 5px;
  font-size: 6pt;
  font-weight: bold;
  text-align: center;
}

input[type="submit"] {
  width: 100px;
  padding: 6px 6px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
}

input[type="checkbox"] {
  width: 14px;
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
