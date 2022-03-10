<script>
export default {
  name: "Profile",
  data() {
    return {
      fontSize: "14px",
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
  },
};
</script>

<template>
  <div class="newfeedblock">
    <img
      class="profpic"
      src="./assets/pp2.png"
      alt="profilepicture"
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
          class="form-control"
          placeholder="Write a message"
          v-model="message"
        />
      </form>
      <button class="btnedit">Edit</button>
      <button class="btndel">Delete</button>
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
    <button id="exit">LogOut</button>
  </div>
</template>

<style lang="scss">
.newfeedblock {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
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
  outline: 1px solid black;
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
  margin-left: 24%;
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
  margin-left: 21%;
  margin-top: 10px;
}
</style>
