<script>
export default {
  name: "Forum",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="profileheader">
    <img class="pics" src="./assets/pp2.png" width="150" height="150" alt="" />
    <div class="headers">
      <div class="completename">FirstnameLastname</div>
      <div class="position">Staff</div>
      <div class="statusline">Online/Offline</div>
    </div>
  </div>
  <div
    class="userone"
    :style="{
      'font-size': fontSize,
      'font-weight': fontWeight,
      top: topDist,
      left: leftDist,
    }"
  >
    Your username/name here
  </div>
  <div class="conversation">
    <img
      class="uploadpics"
      src="./assets/pp2.png"
      width="300"
      height="150"
      alt="imageupload"
    />

    <form @submit.prevent="submit">
      <input
        class="messageframe"
        placeholder="Write a message"
        v-model="message"
      />
    </form>
  </div>
  <button class="btn-edit">Edit</button>
  <button class="btn-del">Delete</button>
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
body {
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.profileheader {
  width: 100%;
  height: 200px;
  background-color: #5adfe2;
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 5px 20px;

  border-bottom: 15px solid #011f48;
}

.messageframe {
  font-size: 12pt;
  color: black;
  text-align: left;
  width: 50vw;
  height: 35vh;
  margin-top: 30px;
}

.conversation {
  position: absolute;
  background-color: #5adfe2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px 20px;
  top: 230px;
}

.headers {
  display: flex;
  color: #011f48;
  flex-direction: column;
  justify-content: left;
  line-height: 40px;
  top: 30px;
}

.form-control {
  margin-top: 30px;
}

.userone {
  position: absolute;
  top: 200px;
  left: 390px;
}

.panelmenu {
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: auto;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.pics {
  display: flex;
  justify-items: center;
  border-radius: 50%;
  outline: 2px solid #011f48;
  top: 19px;
  margin-left: 100px;
  margin-right: 0;
}

.uploadpics {
  display: flex;
  justify-items: center;
  align-items: center;
  top: 30px;
  text-align: center;
}

.newfeedblock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: #5adfe2;
  width: 100%;
  height: auto;
  line-height: 20px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: auto;
}

a hover {
  cursor: pointer;
}

.btn-edit {
  position: absolute;
  margin-left: 38%;
  top: 700px;
}

.btn-del {
  position: absolute;
  margin-left: 45%;
  top: 700px;
}
</style>
