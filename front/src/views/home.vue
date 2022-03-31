<script>
import axios from "axios";

export default {
  name: "home",

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
      comments: [],
      comment: {
        imageUrl: "",
        message: "",
      },
      selectFile: null,
    };
  },

  mounted() {
    axios
      .get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      })

      .then((res) => (this.posts = res.data))
      .catch((err) => console.log(err.message));
  },
  methods: {
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

    getUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },

    //get one post
    getOnePost() {
      axios
        .get("http://localhost:3000/api/posts/" + this.post.id, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => res.posts)
        .catch(error);
    },

    //edit or modified post
    updatePost() {
      axios
        .put("http://localhost:3000/api/posts/" + this.post.id, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            id: this.post.id,
            title: this.post.title,
            imageurl: this.post.imageurl,
            message: this.post.message,
          }),
        })
        .then((res) => {
          localStorage.setItem("posts", JSON.stringify(res));
        });
    },

    //create post
    createPost() {
      let formData = new FormData();
      formData.append("image", this.selectedFile, this.selectedFile.name);
      formData.append("message", this.post.message);
      axios
        .post("http://localhost:3000/api/posts/", formData, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.getAllPost();
        });
    },

    //create comments
    createComment() {
      let formData = new FormData();
      formData.append("image", this.selectedFile, this.selectedFile.name);
      axios
        .post("http://localhost:3000/api/posts/comment/", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: "",
            body: "",
            userId: "",
          }),
        })
        .then((res) => {
          localStorage.setItem("post", JSON.stringify(res));
        });
    },
    //delete comment
    deleteComment() {
      axios
        .delete("http://localhost:3000/api/posts/comment/" + this.comment.id, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.comment.res.data;
        })
        .catch(error)
        .then((res) => {
          return response;
        });
    },
    //Delete post
    deletePost() {
      axios
        .delete("http://localhost:3000/api/posts/" + this.post.id, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.posts.res.data;
        });
    },

    //Upload image
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    //button go to user profile page
    goToProfile() {
      this.$router.push("/profile");
    },

    //go to contact list as sample only
    goToContact() {
      this.$router.push("/contact");
    },
    changeFontSize: function (event) {
      this.fontSize = event.target.value + "px";
    },
    changeOptionColor: function (event) {
      this.optionColor = event.target.value;
    },

    //send post
    submit() {
      this.message;
      console.log(this.$refs.input.value);
    },

    //signout button
    logout() {
      localStorage.clear("user");
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="newfeedblock">
    <div v-for="post in posts" :key="post.id" class="f-post">
      <img :src="post.imageUrl" />
      <p>{{ post.message }}</p>
      <div class="buttons">
        <button @click="createComment()" class="addComm">Comment</button>
        <button @click="deletePost()" class="btndelete">Delete</button>
      </div>
    </div>
    <div class="creation">
      <h2>Create New</h2>
      <form>
        <input
          type="text"
          v-model="post.message"
          ref="input"
          placeholder="Write here"
        />
      </form>
      <input
        style="display: none"
        type="file"
        @change="onFileSelected"
        ref="fileInput"
      />
      <button @click="$refs.fileInput.click()">Choose Image</button>
      <button type="submit" @click="createPost()" class="btnsend">Send</button>
    </div>
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
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  background-color: #5adfe2;
  width: 100%;
  height: 100%;
}

.wall {
  color: black;
  margin: auto;
}

p {
  color: black;
}

.buttons {
  display: flex;
  flex-direction: row;
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
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 3px 3px 5px #b86758;
  img {
    max-height: 5rem;
  }
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
  position: relative;
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
.btndelete,
.btnsend.btnsend {
  text-align: center;
  margin: 3px 5px 5px;
  border-radius: 8px;
  background-color: white;
  color: black;
}

.btnsend {
  right: 75px;
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

.tumbnailupload:hover {
  font-weight: bold;
}
</style>
