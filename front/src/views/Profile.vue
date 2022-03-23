<script>
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      fontSize: "12pt",
      fontWeight: "Bold",
      optionColor: "#011f48",
      topDist: "10px",
      leftDist: "285px",
      user: null,
      profile: {
        id: "",
        username: "",
        biograph: "",
        role: "",
        image: "/",
      },
    };
  },
  methods: {
    isCurrentUser() {
      if (this.isCurrentUser.username && this.profile.username) {
        return this.isCurrentUser.username === this.profile.username;
      }
      return false;
    },
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
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  created() {
    axios
      .get("http://localhost:3000/api/auth/accounts/:id")
      .then((res) => response.json())
      .then((data) => {
        this.profile = data;
        this.default = [...data.data];
      });
  },
};
</script>

<template>
  <div class="container">
    <div class="frameprofile">
      <div v-if="isCurrentUser()">
        <img
          class="profpic"
          :src="profile.image"
          alt="profile image"
          width="200"
          height="200"
        />
        <div
          class="profname"
          :style="{ 'font-size': fontSize, 'font-weight': fontWeight }"
        >
          Username:{{ profile.username }}
        </div>
        <div class="stat_user">{{ profile.role }}</div>

        <div class="bio">
          About:
          <p class="biodata">{{ profile.biograph }}</p>
        </div>
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
    <button @click.prevent="logout()" id="exit">LogOut</button>
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
  margin-top: 30px;
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
  background-image: linear-gradient(#b86758, rgb(179, 29, 29));
  border-radius: 20px;
  box-shadow: grey 5px 5px 6px 1px;
  width: 50vw;
  height: 100vh;
  align-items: center;
}

#turnoff:hover {
  background-color: #5adfe2;
}

.bio {
  color: black;
  font-size: 12pt;
  top: 50px;
  text-align: center;
}
</style>
