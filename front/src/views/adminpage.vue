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
};
</script>
<template>
  <div class="adminset">
    <h1>Admin</h1>
    <router-link :to="{ name: 'home' }">
      <button class="btn-ad">Admin Post</button>
    </router-link>
    <p>Page can be access by the administrator only</p>
  </div>
  >
</template>
<style lang="scss">
.adminset {
  left: 20vw;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.btn-ad {
  border-radius: 10px;
}
.btn-ad:hover {
  font-weight: bold;
  color: #b86758;
}
</style>
