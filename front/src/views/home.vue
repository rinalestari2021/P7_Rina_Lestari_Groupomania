<script>
import axios from "axios";

import posts from "../components/posts.vue";
import uploadimage from "../components/uploadimage.vue";
import comments from "../components/comments.vue";

export default {
  name: "home",
  components: { uploadimage, posts, comments },
  created() {
    this.user = localStorage.getItem("user");
    console.log(this.user);
  },
  data() {
    return {
      fontSize: "12pt",
      fontWeight: "Bold",
      optionColor: "#011f48",
      topDist: "30px",
      leftDist: "285px",
      user: null,
      first_name: "",
      last_name: "",
      posts: [],
      post: {
        imageUrl: "",
        message: "",
      },
      comment: [],
      maxSize: 1024,
      uploadFieldName: "File",
    };
  },

  mounted() {
    fetch("http://localhost:3000/api/posts", {
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    //update post in newsfeed
    getPost() {
      axios
        .get("http://localhost:3000/api/posts", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.posts.res.data;
        })
        .catch((error) => (this.posts = [{ title: "Charging Error" }]));
    },
    //create post
    createPost() {
      axios
        .post(
          "http://localhost:3000/api/auth/posts",
          {
            id: "",
            tittle: "",
            message: "",
          },
          {
            headers: {
              Authorization: "Bearer" + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => console.log(res));
    },
    //btn send
    sendMsg() {
      this.isVisible = !this.isVisible;
    },
    send(post) {
      console.log(post);
    },
    //clique to insert image
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
    goToProfile() {
      let route = this.$router.resolve({ path: "/profile" });
      window.open(route.href);
    },
    goToContact() {
      let route = this.$router.resolve({ path: "/contact" });
      window.open(route.href);
    },
    changeFontSize: function (event) {
      this.fontSize = event.target.value + "px";
    },
    changeOptionColor: function (event) {
      this.optionColor = event.target.value;
    },
    onFileChanged(event) {
      const file = event.target.files[0];
    },
    sendMsg() {
      this.$refs.msg.click(post);
    },
    prevPage() {
      this.$router.go(-1);
    },
    logout() {
      localStorage.clear("user");
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="newfeedblock">
    <h1 class="wall" onclick="getPost()">Newsfeed</h1>
    <div v-for="post in posts" :key="posts.id" class="f-post">
      <p>{{ post.message }}</p>
      <button @click="updatePost()" class="b-edit">Edit</button>
      <button @click="deletePost()" class="btndelete">Delete</button>
    </div>

    <div>
      <h2>Create New</h2>
      <div @click="launchFilePicker()">
        <input
          type="file"
          alt="avatar"
          class="tumbnailupload"
          ref="file"
          :name="uploadFieldName"
          @change="onFileChange($event.target.name, $event.target.files)"
        />
      </div>
      <form @submit.prevent="createPost()">
        <p>{{ post.posts }}</p>
        <input
          type="text"
          @keyup.enter="sendMsg()"
          v-model="post"
          placeholder="Write here"
        />
      </form>
      <button @click="createcomment()" class="addComm">Comment</button>

      <button type="submit" @click="sendMsg()" class="btnsend">Send</button>
    </div>

    <button @click="prevPage" class="prev">Previous</button>
  </div>

  <div class="sidebar">
    <button
      @click="goToProfile()"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="profilepage"
    >
      Profile
    </button>
    <button
      @click="goToContact()"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="profilepage"
    >
      Contacts
    </button>
    <button @click="logout()" id="exit">LogOut</button>
  </div>
</template>

<style lang="scss">
.newfeedblock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: #5adfe2;
  width: 100%;
  height: auto;
  line-height: 20px;
}

.wall {
  color: black;
  margin: auto;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.framefeed {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: white;
  width: 100%;
  height: auto;
  line-height: 20px;
}
button:hover {
  cursor: pointer;
}

.framefeed {
  font-size: 12pt;
  color: black;
  text-align: left;
  width: 50vw;
  height: 35vh;
  bottom: 80px;
}

.imagefeed {
  justify-items: center;
  align-items: center;
  text-align: center;
}

div.sidebar {
  display: flex;
  flex-direction: column;
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: 600px;
}

#exit {
  background-color: white;
  border-spacing: 5px;
  font-size: 14px;
  font-weight: bold;
  width: 100px;
  padding: 6px 6px;
  margin: 8px 0;
  left: 10%;
  background-color: white;
  border: 1px solid white;
  border-radius: 12px;
  padding: 5px;
  text-decoration: none;
  margin: 4px 2px;
  font-family: "Arial Narrow Bold";
  color: #011f48;
  box-shadow: 0 10px 6px -6px #777;
}
.f-post {
  text-align: left;
  text-indent: 15px;
  width: auto;
  height: 30px;
  background-color: white;
  border-radius: 5px;
  margin: 20px 15px;
  box-shadow: 3px 3px 5px #b86758;
}

.contactlist,
.profilepage {
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
  top: 0px;
}

.b-del {
  position: absolute;
  margin-left: 40%;
  top: 100px;
}

.userhome {
  color: #011f48;
  position: absolute;
  left: 390px;
}
.prev {
  margin: 0 10px;
  padding: 5px;
  border: none;
  border-radius: 7px;
  background: white;
  bottom: 30px;
  right: 350px;
  width: 70px;
}
.prev:hover {
  background-color: #b86758;
  color: black;
}

.b-edit,
.btndelete {
  top: 13px;
}

.b-edit,
.btndelete,
.btnsend {
  text-align: center;
  align-items: center;
  width: 50px;
  margin: 3px 5px 5px;
  border-radius: 8px;
  background-color: white;
  color: black;
}
.addComm {
  text-align: center;
  width: 75px;
  border-radius: 8px;
  background-color: white;
  color: black;
}

.tumbnailupload {
  text-align: center;
  align-items: center;
  width: 200px;
  margin: 3px 5px 5px;
  border-radius: 8px;
  background-color: white;
  color: black;
}

button:hover {
  font-weight: bold;
}
</style>
