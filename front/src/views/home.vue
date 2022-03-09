<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<template>
  <div class="newfeedblock">
    <div class="user">Username</div>
    <picture>
      <source srcset="" class="uploadimage" media="(min-width: 1000px)" />
      <!--must respect our media queries and will swap images at our exact
        breakpoints-->
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
    <button class="delbtn">Delete</button>
  </div>
  <div class="sidebar">
    <a href="./home.vue" class="returnhome">Home</a>
    <a href="./userlist.vue" class="contactlist">Contact</a>
    <button class="exit">Logout</button>
  </div>
</template>

<style lang="scss">
.user,
.returnhome,
.contactlist,
.exit {
  text-align: left;
  font-size: 12pt;
  color: black;
  margin-left: 20%;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.newfeedblock {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  background-color: #5adfe2;
  width: 100%;
  height: auto;
}
a hover {
  cursor: pointer;
}

.form-control {
  font-size: 12pt;
  color: black;
  text-align: left;
  width: 50vw;
  height: 50vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: 600px;
}

.exit {
  border: 1pt white;
  background-color: white;
  border-spacing: 5px;
  font-weight: bold;
  width: 100px;
  padding: 6px 6px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
}

.delbtn {
  position: absolute;
  margin-left: 24%;
}
</style>
