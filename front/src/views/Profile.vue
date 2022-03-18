<script>
import axios from "axios";

export default {
  name: "Profile",
  //props: ["user", "messages", "currentuserid"],
  data() {
    return {
      fontSize: "12pt",
      fontWeight: "Bold",
      optionColor: "#011f48",
      topDist: "10px",
      leftDist: "285px",
      user: null,
      biograph: "[]",
    };
  },
  methods: {
    goToHome() {
      let route = this.$router.resolve({ path: "/home" });
      window.open(route.href);
    },
    changeFontSize: function (event) {
      this.fontSize = event.target.value + "px";
    },
    changeOptionColor: function (event) {
      this.optionColor = event.target.value;
    },
    logout() {
      //need to setup the auth first
      //this.$auth.logout ({
      //  returnTo:window.location.origin
      //});
    },
    //fetchAuth() {
    // this.$http
    //  .get("api/auth")
    // .then((response) => {
    //  this.user = response.data.auth;
    //  })
    //  .catch((error) => {
    //    console.error("ERROR REQUEST ===========");
    // });
    //},
  },
  created() {
    axios
      .post("/api/auth/accounts" + this.$route.params)
      .then((response) => response.json())
      .then((data) => {
        this.currentuserid = data;
        this.default = [...data.data];
      });
  },
};
</script>

<template>
  <div class="container">
    <div
      class="frameprofile"
      v-for="message in messages"
      v-bind:class="{
        classForUser: message.user.id === currentuserid,
        classNotForUser: message.user.id === currentuserid,
      }"
    >
      <img
        class="profpic"
        :src="`uploads/images_${user.firstName}_${user.lastName}.png`"
        alt="Auth image"
        width="150"
        height="150"
      />
      <div
        class="profname"
        :style="{ 'font-size': fontSize, 'font-weight': fontWeight }"
        v-bind:class="{
          classForAuthororUser: message.user.id === currentuserid,
          classForAuthorNotTheUser: message.user.id !== currentuserid,
        }"
      >
        {{ message.user.firstName }},{{ message.user.lastName }}
      </div>
      <div class="stat_user">{{ message.user.role }}</div>

      <div class="bio">
        About:
        <p class="biodata">{{ message.biograph }}</p>
      </div>
    </div>
  </div>
  <div class="sidebar">
    <button
      @click="goToHome()"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="backhome"
    >
      Home
    </button>

    <button id="turnoff">Deactivate</button>
    <button @click="logout()" id="exit">LogOut</button>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: #5adfe2;
  width: 100%;
  height: auto;
  line-height: 20px;
}
button:hover {
  cursor: pointer;
}

.profname,
.stat_user {
  font-size: 12px;
  color: black;
  font-weight: bold;
}

.profpic {
  border-radius: 50%;
  outline: 2px solid #011f48;
  top: 10px;
}

.profname,
.stat_user {
  top: 10px;
  font-size: 12px;
  font-weight: bold;
  line-height: 30px;
}

div.sidebar {
  display: flex;
  flex-direction: column;
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: auto;
}

.btndel {
  position: absolute;
  margin-left: 40%;
  margin-top: 10px;
}

#turnoff,
#exit,
.backhome {
  width: 100px;
  left: 10%;
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
  box-shadow: 0 10px 6px -6px #777;
  top: 20px;
}

.btnedit {
  position: absolute;
  margin-left: 35%;
  margin-top: 10px;
}

.framecontrol {
  font-size: 12pt;
  color: black;
  text-align: left;
  width: 50vw;
  height: 35vh;
  margin-top: 30px;
}

.frameprofile {
  margin-top: 80px;
}

#turnoff:hover {
  background-color: #5adfe2;
}

.bio {
  color: black;
  font-size: 12pt;
  top: 30px;
}
</style>
