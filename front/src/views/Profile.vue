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
          avatar: "",
          img: "",
          id: "",
          fist_name: "",
          last_name: "",
          email: "",
        },
      ],
      maxSize: 1024,
      uploadFieldName: "File",
      avatar: null,
      saving: false,
      saved: false,
      showUser: true,
    };
  },
  props: { value: Object },
  watch: {
    avatar: {
      handler: function () {
        this.saved = false;
      },
      deep: true,
    },
  },

  created() {
    this.user = localStorage.getItem("user");
    console.log(this.user);
  },
  mounted() {
    console.log(this.user);
  },
  methods: {
    fetchUser() {
      userId = this.id;
      if (userId != 0) {
        axios.get("http://localhost:3000/api/accounts/${id}", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          }
            .then((res) => {
              this.user = res.data;
              console.log(res.data);
            })
            .catch(error),
        });
      }
    },
    addUser() {
      axios.post("http://localhost:3000/api/accounts/${id}", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        }
          .then((res) => {
            this.user.push({
              id: user.id,
              img: user.img,
              first_name: user.first_name,
              last_name: user.last_name,
              role: user.role,
              email: user.email,
            });
            console.log(res.data);
          })
          .catch(error),
      });
    },

    //Upload picker for avatar
    launchFilePicker() {
      this.$refs.file.click();
    },
    onFieldChange(fieldName, file) {
      const { maxSize } = this;
      let imageFile = file[0];
      if (file.length > 0) {
        let size = imageFile.size / maxSize / maxSize;
        if (!imageFile.type.match("image.*")) {
          this.errorDialog = true;
          this.errorText = "Please choose and image file";
        } else if (size > 1) {
          this.errorDialog = true;
          this.errorText =
            "File size is too big!Please select an image under 1MB";
        } else {
          let formData = new FormData();
          let imageURL = URL.createObjectURL(imageFile);
          formData.append(fieldName, imageFile);
          this.$emit("input", { formData, imageURL });
        }
      }
    },
    //Avatar setting
    uploadimage() {
      this.saving = true;
      setTimeout(() => this.savedAvatar(), 1000);
    },
    savedAvatar() {
      this.saving = false;
      this.saved = true;
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
        <div @click="launchFilePicker()">
          <input
            type="file"
            alt="avatar"
            class="profpic"
            ref="file"
            :name="uploadFieldName"
            @change="onFileChange($event.target.name, $event.target.files)"
          /><img :src="user.img" :alt="avatar" />
        </div>
        <div v-if="avatar && saved == false">
          <button class="" @click="uploadimage" :loading="saving">
            Save Avatar
          </button>
        </div>
        <div>
          <h3
            class="profname"
            :style="{ 'font-size': fontSize, 'font-weight': fontWeight }"
          >
            {{ user.id }}
            Username: {{ user.fist_name + user.last_name }}
          </h3>
          <p class="stat_user">Role: {{ user.role }}</p>
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

    <button id="turnoff">Deactivate</button>
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
.stat_user {
  font-size: 12px;
  color: black;
  font-weight: bold;
}

.profpic {
  border-radius: 50%;
  margin-top: 30px;
  width: 200px;
  height: 200px;
}

.profname,
.stat_user {
  top: 10px;
  font-size: 12px;
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
  height: 100vh;
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
