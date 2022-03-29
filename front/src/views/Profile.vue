<script>
import axios from "axios";

export default {
  name: "profile",
  data() {
    return {
      fontSize: "12pt",
      fontWeight: "Bold",
      optionColor: "#011f48",
      topDist: "10px",
      leftDist: "285px",
      user: {
        id: true,
        first_name: "",
        last_name: "",
        email: "",
      },
      users: [
        {
          img: "",
          id: "",
          first_name: "",
          last_name: "",
          email: "",
        },
      ],
      selectFile: null,
    };
  },

  created() {
    this.user = localStorage.getItem("user");
    console.log(this.user);
  },
  beforeMount() {
    this.fetchUser();
  },
  mounted() {
    if (!this.user) {
      this.$router.push("/login");
    }
  },
  methods: {
    fetchUser() {
      try {
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user);
      } catch (e) {
        localStorage.removeItem("user");
        console.log("File Corrupt");
      }
    },
    //update user
    updateUser() {
      axios
        .put("http://localhost:3000/api/accounts/${id}", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res));
        })
        .catch(error);
    },

    //delete user
    deleteUser() {
      axios
        .delete("http://localhost:3000/api/delete/user?id=${id}", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.result.splice(id, 1);
        });
    },

    //Upload image
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedFile, this.selectedFile.name);
      axios
        .put("http://localhost:3000/api/uploadFile/${id}", fd, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },

          onUploadProgress: (uploadEvent) => {
            console.log(
              "Upload Progress:" +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          },
        })
        .then((res) => {
          console.log(res);
        });
    },

    goToHome() {
      let route = this.$router.resolve({ path: "/home" });
      window.open(route.href);
    },
    changeFontSize: function (event) {
      this.fontSize = event.target.value + "px";
    },
    changeOptionColor: function (event) {
      this.optionColor = event.target.value;
    },
    logout() {
      localStorage.clear("user");
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="frameprofile">
      <div :users="users">
        <input
          style="display: none"
          type="file"
          @change="onFileSelected"
          ref="fileInput"
        />
        <button @click="$refs.fileInput.click()">Choose Image</button>
        <button @click="onUpload">Upload</button>

        <div class="infoprof">
          <h3
            class="profname"
            :style="{ 'font-size': fontSize, 'font-weight': fontWeight }"
          >
            Username: {{ user.first_name + " " + user.last_name }}
          </h3>
          <p class="ident">ID {{ user.id }}</p>
          <p class="e-mail">Email: {{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="sidebar">
    <button
      @click="goToHome()"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="backhome"
    >
      Home
    </button>

    <button id="turnoff" @click="deleteUser()">Deactivate</button>
    <button @click.prevent="logout()" id="exit">LogOut</button>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: #5adfe2;
  width: 100%;
  height: auto;
  line-height: 20px;
}
button:hover {
  cursor: pointer;
}

.profname,
.ident {
  font-size: 16px;
  color: black;
  font-weight: bold;
}

.profpic {
  border-radius: 50%;
  margin-top: 30px;
  width: 200px;
  height: 200px;
}
p {
  font-size: 16px;
}

.profname,
.ident {
  top: 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
}

div.sidebar {
  display: flex;
  flex-direction: column;
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: auto;
}

.btndel {
  position: absolute;
  margin-left: 40%;
  margin-top: 10px;
}

#turnoff,
#exit,
.backhome {
  width: 100px;
  left: 10%;
  height: auto;
  font-size: 12pt;
  font-weight: bold;
  background-color: white;
  border: 1px solid white;
  border-radius: 12px;
  padding: 5px;
  text-decoration: none;
  margin: 4px 2px;
  font-family: "Arial Narrow Bold";
  color: #011f48;
  box-shadow: 0 10px 6px -6px #777;
  top: 20px;
}

.btnedit {
  position: absolute;
  margin-left: 35%;
  margin-top: 10px;
}

.framecontrol {
  font-size: 12pt;
  color: black;
  text-align: left;
  width: 50vw;
  height: 35vh;
  margin-top: 30px;
}

.frameprofile {
  margin-top: 80px;
  background-image: linear-gradient(#b86758, rgb(179, 29, 29));
  border-radius: 20px;
  box-shadow: grey 5px 5px 6px 1px;
  width: 40vw;
  height: 50vh;
  align-items: center;
}

#turnoff:hover {
  background-color: #5adfe2;
}

.e-mail {
  color: black;
  font-size: 12pt;
  top: 50px;
  text-align: center;
}
</style>
