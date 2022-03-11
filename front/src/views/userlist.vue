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
    goToUserprofile() {
      let route = this.$router.resolve({ path: "/userprofile" });
      window.open(route.href);
    },
  },
};
</script>

<template>
  <div class="frame">
    <div class="userlist">
      <img
        class="profpic"
        src="./assets/pp2.png"
        alt="profilepicture"
        width="150"
        height="150"
      />
      <div class="prof-name">
        <button @click="goToUserprofile()">yourfullnamehere</button>
      </div>
    </div>
    <div class="userlist2">
      <img
        class="profpic"
        src="./assets/pp2.png"
        alt="profilepicture"
        width="150"
        height="150"
      />
      <div class="prof-name2">
        <button @click="goToUserprofile()">yourfullnamehere</button>
      </div>
    </div>

    <button
      @click="returnHome()"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="returnhome"
    >
      Home
    </button>
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
}

.returnhome {
  position: relative;
  left: 70%;
  margin-top: 30%;
  width: 55px;
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
