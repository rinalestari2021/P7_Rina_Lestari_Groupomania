<script></script>

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
        <div class="position">Staff</div>
      </div>
      <div class="righttop">
        <div class="completename">FirstnameLastname</div>
        <div class="statusline">Online/Offline</div>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <picture>
        <source srcset="" class="uploadimage" media="(min-width: 1000px)" />
        <source srcset="" class="uploadimage" media="(min-width: 600px)" />
        <img src="./image.png" />
      </picture>
      <p class="CN">Complete-Name</p>
      <form @submit.prevent="submit">
        <input class="form-control" placeholder="Write a message" />
      </form>
      <button class="delbtn">delete</button>
    </div>
    <div class="c_sendnewmessage">
      <form @submit.prevent="submit">
        <input class="form-control" placeholder="Write a message" />
      </form>
      <button class="delbtn">delete</button>
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
