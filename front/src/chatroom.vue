<script>
import { ref } from "vue";

export default {
  name: "chatroom",
  setup() {
    const Username = ref((value = "FirstnameLastname"));
    const CN = ref((value = "Complete-Name"));
    const personnel = ref((value = "Staff"));
    const statusline = ref((value = "Online/Offline"));
    const messages = ref((value = "[]"));
    const message = ref((value = ""));

    const submit = () => {}; // need to fill the submit function
    return {
      Username,
      CN,
      personnel,
      statusline,
      messages,
      message,
      submit,
    };
  },
};
</script>

<template>
  <header>
    <img
      alt="Groupomania logo"
      class="logoblack"
      src="./assets/icon-left-font-monochrome-black.png"
    />
    <div class="profileheader">
      <div class="lefttop">
        <img src="./image.png" alt="profilepicture" class="prof-pic" />
        <div class="position">{{ message.personnel }}</div>
      </div>
      <div class="righttop">
        <div class="completename">{{ message.Username }}</div>
        <div class="status">{{ message.statusline }}</div>
      </div>
    </div>
  </header>

  <main>
    <div class="container" v-for="message in messages" :key="message">
      <picture>
        <source srcset="" class="uploadimage" media="(min-width: 1000px)" />
        <source srcset="" class="uploadimage" media="(min-width: 600px)" />
        <img src="./image.png" />
      </picture>
      <p class="CN">{{ message.Complete - name }}</p>
      <form @submit.prevent="submit">
        <input
          class="form-control"
          placeholder="Write a message"
          v-model="message"
        />
      </form>
    </div>
    <div class="c_sendnewmessage">
      <form @submit.prevent="submit">
        <input
          class="form-control"
          placeholder="Write a message"
          v-model="message"
        />
      </form>
    </div>

    <div class="panelmenu">
      <a href="./home.vue" class="returnhome">Home</a>
      <a href="./userlist.vue" class="contactlist">Contact</a>
      <button class="exit">Logout</button>
    </div>
  </main>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.logoblack {
  margin-top: 219px;
  width: 276px;
  height: 43px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.profileheader {
  display: flex;
  align-content: flex-start;
  gap: 5px 20px;
  border-bottom-style: solid 2px #011f48;
}

.lefttop {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px 10px;
}

.righttop {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.user,
.returnhome,
.contactlist,
.exit {
  text-align: left;
  font-size: 6pt;
  color: black;
  margin-left: 10px;
}

.form-control {
  font-size: 6pt;
  color: black;
  text-align: left;
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
  width: 50%;
}

.newfeedblock {
  display: block;
  background-color: #5adfe2;
  width: 657 px;
  height: auto;
}
a hover {
  cursor: pointer;
}

.container,
.c_sendnewmessage,
.form-control {
  border: #011f48 solid 1 px;
  background-color: white;
}
</style>
