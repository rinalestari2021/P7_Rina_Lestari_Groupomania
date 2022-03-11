<script>
export default {
  name: "Home",
  data() {
    return {
      fontSize: "12pt",
      fontWeight: "Bold",
      optionColor: "#011f48",
      topDist: "30px",
      leftDist: "285px",
    };
  },
  methods: {
    goToProfile() {
      let route = this.$router.resolve({ path: "/profile" });
      window.open(route.href);
    },
    goToContact() {
      let route = this.$router.resolve({ path: "/contact" });
      window.open(route.href);
    },
    changeFontSize: function (event) {
      this.fontSize = event.target.value + "px";
    },
    changeOptionColor: function (event) {
      this.optionColor = event.target.value;
    },
    onFileChanged(event) {
      const file = event.target.files[0];
    },
  },
};
</script>

<template>
  <div class="newfeedblock">
    <div
      class="userhome"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
        top: topDist,
        left: leftDist,
      }"
    >
      Your username/name here
    </div>
    <img
      class="imagefeed"
      src="./assets/pp2.png"
      width="300"
      height="150"
      alt="imageupload"
    />
    <div class="form">
      <img :src="image" alt="" />
      <form @submit.prevent="submit">
        <input
          class="framefeed"
          placeholder="Write a message"
          v-model="message"
        />
      </form>
      <button class="b-edit">Edit</button>
      <button class="b-del">Delete</button>
    </div>
  </div>
  <div class="sidebar">
    <button
      @click="goToProfile()"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="profilepage"
    >
      Profile
    </button>
    <button
      @click="goToContact()"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="profilepage"
    >
      Contact
    </button>
    <button id="exit">LogOut</button>
  </div>
</template>

<style lang="scss">
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.framefeed {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: white;
  width: 100%;
  height: auto;
  line-height: 20px;
}
button:hover {
  cursor: pointer;
}

.framefeed {
  font-size: 12pt;
  color: black;
  text-align: left;
  width: 50vw;
  height: 35vh;
  bottom: 80px;
}

.imagefeed {
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  outline: 2px solid #011f48;
  bottom: 200px;
}

div.sidebar {
  display: flex;
  flex-direction: column;
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: 600px;
}

#exit {
  background-color: white;
  border-spacing: 5px;
  font-size: 14px;
  font-weight: bold;
  width: 100px;
  padding: 6px 6px;
  margin: 8px 0;
  left: 10%;
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
}

.contactlist,
.profilepage {
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

.b-del {
  position: absolute;
  margin-left: 40%;
  top: 190px;
}

.b-edit {
  position: absolute;
  margin-left: 35%;
  top: 190px;
}

.userhome {
  color: #011f48;
  position: absolute;
  top: 200px;
  left: 390px;
}
</style>
