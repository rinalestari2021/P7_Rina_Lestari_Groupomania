<script>
export default {
  name: "adminpage",
  data() {
    return {
      user: "",
      users: [],
    };
  },

  created() {},
  methods: {
    backtohome() {
      this.$router.push("/home");
    },
  },
};
</script>
<template>
  <div class="adminset">
    <h1>Admin</h1>
    <p>Page can be access by the administrator only</p>
    <button @click="entryadmin()" class="btn-ad">Entry</button>

    <button @click="backtohome()" class="return">Home</button>
  </div>
</template>
<style lang="scss">
.adminset {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  background-color: #5adfe2;
  width: 100%;
  height: 100%;
}

.btn-ad {
  border-radius: 10px;
}

h1 {
  top: 20px;
}
.btn-ad:hover {
  font-weight: bold;
  color: #b86758;
}

.return {
  top: 50px;
  margin: 0 10px;
  padding: 5px;
  border: none;
  border-radius: 7px;
  top: 50px;
  background: white;
}
.return:hover {
  font-weight: bold;
  background-color: #b86758;
}
</style>
