<script>
import axios from "axios";

export default {
  name: "forum",
  data() {
    return {};
  },
  methods: {
    goToHome() {
      let route = this.$router.resolve({ path: "/home" });
      window.open(route.href);
    },
    goToContact() {
      let route = this.$router.resolve({ path: "/contact" });
      window.open(route.href);
    },
  },
  logout() {
    //need to setup the auth first
    //this.$auth.logout ({
    //  returnTo:window.location.origin
    //});
  },
};
</script>

<template>
  <div class="profileheader">
    <img class="pics" src="/pic1.png" width="150" height="150" alt="" />
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
    Yournamehere
  </div>
  <div class="conversation">
    <img class="uploadpics" src="" width="300" height="150" alt="imageupload" />
    <h3 v-if="user">Hi, {{ user.first_name }} {{ user.last_name }}</h3>
  </div>
  <button class="btn-edit">Edit</button>
  <button class="btn-del">Delete</button>

  <div class="newmessage">
    <chat-form v-on:messagesend="addMessage"> </chat-form>
    <input class="addmessage" placeholder="Type here" />
    <img src="/icon-send.png" @click="" class="send" width="50" height="50" />
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
    <button
      @click="goToContact()"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="profilepage"
    >
      Contacts
    </button>
    <button @click="logout()" id="exit">LogOut</button>
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

.addmessage {
  font-size: 12pt;
  color: black;
  text-align: left;
  width: 50vw;
  height: 6.5vh;
}

.newmessage {
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 200px;
  margin-left: 5px;
}

.imgFileUpload,
.send {
  margin-right: 5px;
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
  margin-left: 100px;
  margin-right: 0;
  margin-top: 20px;
  outline: 2px solid #011f48;
}

.uploadpics {
  display: flex;
  justify-items: center;
  align-items: center;
  top: 30px;
  text-align: center;
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

.backhome:hover {
  background-color: #5adfe2;
  cursor: pointer;
}

.profilepage:hover {
  background-color: #5adfe2;
  cursor: pointer;
}

#exit:hover {
  background-color: #5adfe2;
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
