<script>
export default {
  name: "Home",
  data() {
    return {}
  }
}
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
    <h1 class="red">HOME</h1>
    <div class="newfeedblock">
      <div class="user">Username</div>
      <picture>
        <source srcset="" class="uploadimage" media="(min-width: 1000px)" />
        /**must respect our media queries and will swap images at our exact
        breakpoints */
        <source srcset="" class="uploadimage" media="(min-width: 600px)" />
        <img src="" alt="" />
      </picture>
      <form @submit.prevent="submit">
        <input
          class="form-control"
          placeholder="Write a message"
          v-model="message"
        />
      </form>
      <button class="delbtn">delete</button>
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
.user {
  text-align: left;
  font-size: 6pt;
  color: black;
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
  max-width: 100%;
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

a,
.form-control {
  font-size: 6pt;
  color: black;
  text-align: left;
}

.sidebar {
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: auto;
}
</style>
