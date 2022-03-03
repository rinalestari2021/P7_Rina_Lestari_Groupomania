<template>
  <header>
    <img
      alt="Groupomania logo"
      class="logo"
      src="./assets/icon-left-font-monochrome-black.png"
    />
  </header>

  <main>
    <img src="./image.png" alt="profilepicture" class="prof-pic" />
    <div class="completename">{{ message.Username }}</div>
    <div class="position">{{ message.personnel }}</div>
    <div class="status">{{ message.statusline }}</div>

    <section>
      <div class="container" v-for="message in messages" :key="message">
        <img src="./image.png" />
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
        <p><a href="">Home</a></p>
        <p><a href="">Newsfeed</a></p>
        <p><a href="">Contact</a></p>
        <p><a href="">Logout</a></p>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
  name: "app",
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

<style></style>
