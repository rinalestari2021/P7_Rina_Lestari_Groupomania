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

.user,
.returnhome,
.contactlist,
.exit {
  text-align: left;
  font-size: 6pt;
  color: black;
  margin-left: 10px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.newfeedblock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  background-color: #5adfe2;
  width: 657 px;
  height: auto;
}
a hover {
  cursor: pointer;
}

.sidebar {
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: auto;
}
</style>
