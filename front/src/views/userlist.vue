<script>
export default {
  name: "Contact",
  data() {
    return {
      fontSize: "14px",
      fontWeight: "Bold",
      optionColor: "#011f48",
    };
  },
  methods: {
    //need to add profile with attribut id etc
  },
};
</script>

<template>
  <div class="frame">
    <div class="userlist">
      <img
        class="profpic"
        src="/pic2.png"
        alt="profilepicture"
        width="150"
        height="150"
      />
      <router-link :to="{ name: 'Profile' }" class="prof-name"
        >yourfullnamehere</router-link
      >
    </div>
    <div class="userlist2">
      <img
        class="profpic"
        src="/pic1.png"
        alt="profilepicture"
        width="150"
        height="150"
      />
      <router-link :to="{ name: 'Profile' }" class="prof-name2"
        >yourfullnamehere</router-link
      >
    </div>

    <router-link :to="{ name: 'Home' }" class="returnhome">Home</router-link>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.frame {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: auto;
  border-style: solid 2px #5adfe2;
  background-color: #5adfe2;
  align-content: center;
  line-height: 40px;
}

.prof-name,
.prof-name2 {
  top: 3%;
  line-height: 50px;
  text-decoration: none;
  color: #011f48;
}

.returnhome {
  position: relative;
  left: 70%;
  margin-top: 30%;
  width: 55px;
  text-decoration: none;
  font-weight: bold;
  font-size: 12pt;
  color: #011f48;
}

.profpic {
  border-radius: 50%;
  outline: 2px solid #011f48;
  top: 10px;
}

.userlist {
  margin-top: 40px;
}

.userlist2 {
  margin-top: 20px;
}
</style>
