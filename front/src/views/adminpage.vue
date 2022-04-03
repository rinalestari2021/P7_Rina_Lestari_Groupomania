<script>
import axios from "axios";
export default {
  name: "adminpage",
  data() {
    return {
      users: [],
      user: {},
    };
  },
  beforeMount() {
    this.getUser();
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    getUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },
    //retrieve all users
    getAllUser() {
      axios
        .get("http://localhost:3000/api/auth/accounts/", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          let allUsers = res.data;
          this.users = allUsers.filter((user) => user.isAdmin == 0);
        })
        .catch((err) => console.log(err.message));
    },
    deleteByAdmin(userId) {
      axios
        .delete("http://localhost:3000/api/auth/accounts/" + userId, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.$router.go();
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
    <div v-for="user in users" :key="user.id" class="adminboard">
      <ul class="dtuser">
        <li><span>ID: </span>{{ user.id }}</li>
        <li><span>Nom: </span>{{ user.last_name }}</li>
        <li><span>Prénom: </span>{{ user.first_name }}</li>
        <li><span>E-mail: </span>{{ user.email }}</li>
      </ul>
      <button @click="deleteByAdmin(user.id)" class="btndelete">Delete</button>
    </div>
    <button @click="backtohome()" class="return">Home</button>
  </div>
</template>
<style lang="scss">
.adminset {
  top: 20px;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  background-color: #5adfe2;
  width: 100%;
  height: 100%;
}

.dtuser {
  text-align: center;
  color: black;
  background: #b86758;
  border: solid 2px black;
  padding: 15px;
}

.btn-ad {
  border-radius: 10px;
}

h1 {
  top: 20px;
  color: black;
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
