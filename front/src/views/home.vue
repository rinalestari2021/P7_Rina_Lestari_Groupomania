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
      comment: [],
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
    //get one post
    getOnePost() {
      axios
        .get("http://localhost:3000/api/posts/${id}", {
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
        .put("http://localhost:3000/api/auth/accounts/" + this.user.id, {
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
      axios
        .post("http://localhost:3000/api/auth/posts/" + this.user.id, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            id: "",
            title: "",
            body: "",
            userId: "",
          }),
        })
        .then((res) => {
          localStorage.setItem("posts", JSON.stringify(res));
        });
    },
    //create comments
    createComment() {
      axios
        .post("http://localhost:3000/api/post/1/comment", {
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
        .delete("http://localhost:3000/api/auth/accounts/" + this.user.id, {
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
        .delete("http://localhost:3000/api/auth/accounts/" + this.user.id, {
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
          console.log(res);
        });
    },

    //button go to user profile page
    goToProfile() {
      let route = this.$router.resolve({ path: "/profile" });
      window.open(route.href);
    },

    //go to contact list as sample only
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

    //send post
    submit() {
      this.message;
      console.log(this.$refs.input.value);
    },

    //return to previous page button
    prevPage() {
      this.$router.go(-1);
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
    <h1 class="wall" @click="getPost()">Newsfeed</h1>

    <div v-for="post in posts" :key="posts.id" class="f-post">
      <p>{{ post.message }}</p>
      <button @click="createComment()" class="addComm">Comment</button>
      <button @click="updatePost()" class="b-edit">Edit</button>
      <button @click="deletePost()" class="btndelete">Delete</button>
    </div>

    <div>
      <h2>Create New</h2>
      <form @submit.prevent="createPost()">
        <input
          type="text"
          v-model="post"
          ref="input"
          placeholder="Write here"
        />

        <button @click="$refs.fileInput.click()">Choose Image</button>
        <button @click="onUpload">Upload</button>
      </form>

      <button type="submit" @click="submit()" class="btnsend">Send</button>
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
p {
  color: black;
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

h2 {
  top: 5px;
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
  margin: 30px 15px;
  box-shadow: 3px 3px 5px #b86758;
  bottom: 20px;
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
.addComm {
  top: 15px;
  position: relative;
}

.b-edit,
.btndelete,
.btnsend.btnsend {
  text-align: center;
  align-items: center;
  width: 50px;
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
