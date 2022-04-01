<script>
export default {
  name: "adminpage",
  data() {
    return {
      isAdmin: true,
    };
  },

  methods: {
    //retrieve all post
    getAllPost() {
      axios
        .get("http://localhost:3000/api/posts", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })

        .then((res) => (this.posts = res.data))
        .catch((err) => console.log(err.message));
    },

    //retrieve all users
    getUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },

    deleteByAdmin() {
      axios
        .delete("http://localhost:3000/api/auth/accounts/" + this.user.id, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        });
    },

    //return to page home
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
    <button v-if="(isAdmin = true)" class="btn-ad">Entry</button>
    <div v-for="user in users" :key="isAdmin" class="adminboard">
      <p>{{ posts.message }}</p>
      <button @click="deleteByAdmin()" class="btndelete">Delete</button>
    </div>
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
