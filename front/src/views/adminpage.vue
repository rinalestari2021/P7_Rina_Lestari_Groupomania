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
  <div>
    <h1>Admin</h1>
    <p>Page can be access by the administrator only</p>
  </div>
  <ul v-if="users.length">
    <li v-for="user" in users :key="user.id">
      {{ user.firstName + "" + user.lastName }}
    </li>
  </ul>
</template>
<style></style>
