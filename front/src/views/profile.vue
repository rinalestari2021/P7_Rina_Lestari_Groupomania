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

  beforeMount() {
    console.log("test");
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
      } catch (e) {
        localStorage.removeItem("user");
        console.log("File Corrupt");
      }
    },

    //delete user
    deleteUser() {
      axios
        .delete("http://localhost:3000/api/auth/accounts/" + this.user.id, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          this.$router.push("/signup");
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
        .put("http://localhost:3000/api/auth/accounts/" + this.user.id, fd, {
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
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.fetchUser();
        });
    },

    goToHome() {
      this.$router.push("/home");
    },
    changeFontSize: function (event) {
      this.fontSize = event.target.value + "px";
    },
    changeOptionColor: function (event) {
      this.optionColor = event.target.value;
    },

    logout() {
      localStorage.clear("user", "token");
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="frameprofile">
      <div :users="users" class="bgprofile">
        <img v-if="user.avatar != null" :src="user.avatar" class="imagep" />
        <input
          style="display: none"
          type="file"
          @change="onFileSelected"
          ref="fileInput"
        />
        <button @click="$refs.fileInput.click()" class="c-image">
          Choose Image
        </button>
        <button @click="onUpload" class="up-load">Upload</button>

        <div class="infoprof">
          <h3
            class="profname"
            :style="{ 'font-size': fontSize, 'font-weight': fontWeight }"
          >
            Username: {{ user.first_name + " " + user.last_name }}
          </h3>
          <p class="ident">ID: {{ user.id }}</p>
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

    <button id="turnoff" @click="deleteUser()">Desactivate</button>
    <button @click.prevent="logout()" id="exit">LogOut</button>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  background-color: #5adfe2;
  width: 100%;
  height: 100%;
  top: 3rem;
  top: 3rem;
}
button:hover {
  cursor: pointer;
}

.bgprofile {
  height: auto;
}

.imagep {
  top: 10px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.up-load,
.c-image {
  top: 15px;
}

.infoprof {
  position: relative;
  top: 20px;
}

.profname,
.ident {
  font-size: 16px;
  color: black;
  font-weight: bold;
  align-items: center;
}

.profpic {
  border-radius: 50%;
  margin-top: 30px;
  width: 200px;
  height: 200px;
}

.profname,
.ident {
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
  position: relative;
  top: 20px;
  background-image: linear-gradient(#b86758, rgb(179, 29, 29));
  border-radius: 20px;
  box-shadow: grey 5px 5px 6px 1px;
  width: 40vw;
  height: 65vh;
  align-items: center;
}

#turnoff:hover {
  background-color: #5adfe2;
}

.e-mail {
  color: black;
  font-size: 12pt;
  text-align: center;
}
</style>
