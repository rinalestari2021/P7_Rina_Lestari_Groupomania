<script>
export default {
  name: "Profile",
  data() {
    return {
      fontSize: "12pt",
      fontWeight: "Bold",
      optionColor: "#011f48",
      topDist: "10px",
      leftDist: "285px",
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
  },
};
</script>

<template>
  <div class="container">
    <div class="frameprofile">
      <img
        class="profpic"
        src="/pic1.png"
        alt="picture"
        width="150"
        height="150"
      />
      <div
        class="profname"
        :style="{ 'font-size': fontSize, 'font-weight': fontWeight }"
      >
        Firstname Lastname(Username)
      </div>
      <div class="stat_user">Staff</div>

      <div class="form">
        <img :src="image" alt="" />
        <form @submit.prevent="submit">
          <input
            class="framecontrol"
            placeholder="Write a message"
            v-model="message"
          />
        </form>
        <button class="btnedit">Edit</button>
        <button class="btndel">Delete</button>
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
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
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
  margin-top: 10px;
}

#turnoff:hover {
  background-color: #5adfe2;
}
</style>
