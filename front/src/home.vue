<script>
document.getElementById("btnsignup").onclick = function () {
  location.href = "/signup.vue";
};
document.getElementById("btnlogin").onclick = function () {
  location.href = "/login.vue";
};
</script>
<template>
  <header>
    <img
      alt="Groupomania logo"
      class="logoblack"
      src="./assets/icon-left-font-monochrome-black.png"
    />
  </header>
  <main>
    <div class="newfeedblock">
      <div class="user">Username</div>
      <img src="" class="uploadimage" />
      <form @submit.prevent="submit">
        <input
          class="form-control"
          placeholder="Write a message"
          v-model="message"
        />
      </form>
    </div>
    <div class="sidebar">
      <a href="./home.vue" class="returnhome">Home</a>
      <a href="./userlist.vue" class="contactlist">Contact</a>
      <a href="" clas="exit">Logout</a>
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

.user,
.returnhome,
.contactlist,
.exit {
  font-size: 6pt;
  color: black;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
