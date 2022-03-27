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
      user: [
        {
          id: "",
          fist_name: "",
          last_name: "",
          email: "",
        },
      ],
      maxSize: 1024,
      uploadFieldName: "File",
    };
  },
  props: { value: Object },
  mounted() {
    //fetch is not working yet
    fetch("http://localhost:3000/api/accounts", {
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => (this.user.id = data))
      .catch((err) => console.log(err.message));
  },
  created() {
    this.user = localStorage.getItem("user");
    console.log(this.user);
  },
  methods: {
    launchFilePicker() {
      this.$refs.file.click();
    },
    onFieldChange(fieldName, file) {
      const { maxSize } = this;
      let imageFile = file[0];
      if (file.lenght > 0) {
        let size = imageFile.size / maxSize / maxSize;
        if (!imageFile.type.match("image.*")) {
          this.errorDialog = true;
          this.errorText = "File size too big!Please select an image under 1MB";
        } else {
          let formData = new FormData();
          let imageURL = URL.createObjectURL(imageFile);
          formData.append(fieldName, imageFile);
          this.$emit("input", { formData, imageURL });
        }
      }
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
      <div>
        <div @click="launchFilePicker()">
          <input
            type="file"
            alt="avatar"
            class="profpic"
            ref="file"
            :name="uploadFieldName"
            @change="onFileChange($event.target.name, $event.target.files)"
          />
        </div>
        <p
          class="profname"
          :style="{ 'font-size': fontSize, 'font-weight': fontWeight }"
        >
          {{ user }}
        </p>
        <p class="stat_user">{{ user.isAdmin }}</p>
        <p class="e-mail">{{ user.email }}</p>
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
