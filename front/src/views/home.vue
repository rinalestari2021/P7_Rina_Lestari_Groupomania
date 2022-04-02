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
        PostId: "",
        text: "",
      },
      selectFile: null,
      commentClick: 0,
      updateClick: 0,
      postId: null,
    };
  },

  mounted() {
    axios
      .get("http://localhost:3000/api/posts", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      })

      .then((res) => {
        this.posts = res.data;
      })
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
        .catch((error) => {
          console.error(error);
        });
    },

    //edit or modified post
    updatePost(postId) {
      //this.post.message =
      let formData = new FormData();
      formData.append("image", this.selectedFile, this.selectedFile.name);
      formData.append("message", this.post.message);
      axios
        .put("http://localhost:3000/api/posts/" + postId, formData, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.$router.go();
          this.updateClick == 0;
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
        })
        .catch((err) => {
          console.error(err);
        });
    },

    //create comments
    createComment(postId) {
      this.comment.PostId = postId;
      axios
        .post("http://localhost:3000/api/posts/comment/", this.comment, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.$router.go();
          this.commentClick == 0;
        });
    },

    //delete comment
    deleteComment(commentId) {
      axios
        .delete("http://localhost:3000/api/posts/comment/" + commentId, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.$router.go();
        });
    },

    //Delete post
    deletePost(postId) {
      axios
        .delete("http://localhost:3000/api/posts/" + postId, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then(() => {
          this.$router.go();
        });
    },

    //Add comment
    addCommentClick(postId) {
      if (this.commentClick == 1) {
        this.commentClick--;
      } else {
        this.commentClick++;
      }
      this.postId = postId;
    },
    addUpdateClick(postId) {
      if (this.updateClick == 1) {
        this.updateClick--;
      } else {
        this.updateClick++;
      }
      this.postId = postId;
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
    goToAdminPage() {
      this.$router.push("/adminpage");
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
      <div v-if="updateClick == 1 && postId == post.id">
        <form>
          <input
            type="text"
            v-model="this.post.message"
            ref="input"
            placeholder="Write here"
          />
        </form>
        <button @click="$refs.fileInput.click()">Choose Image</button>
        <button type="submit" @click="updatePost(post.id)" class="btnsend">
          Update
        </button>
        <input
          style="display: none"
          type="file"
          @change="onFileSelected"
          ref="fileInput"
        />
      </div>
      <div v-if="commentClick == 1 && postId == post.id">
        <form>
          <input
            type="text"
            v-model="comment.text"
            ref="input"
            placeholder="Write here"
          />
          <button @click="addCommentClick()" class="addComm">Back</button>
          <button @click="createComment(post.id)" class="addComm">Send</button>
        </form>
      </div>
      <div class="buttons">
        <button
          @click="addCommentClick(post.id)"
          v-if="commentClick == 0"
          class="addComm"
        >
          Comment
        </button>
        <button
          v-if="post.UserId == user.id"
          @click="addUpdateClick(post.id)"
          class="btndelete"
        >
          Modify
        </button>
        <button
          v-if="post.UserId == user.id"
          @click="deletePost(post.id)"
          class="btndelete"
        >
          Delete
        </button>
      </div>
      <div v-for="comment in post.Comments" :key="comment.id" class="">
        <p>{{ comment.text }}</p>
        <button
          v-if="comment.UserId == user.id"
          @click="deleteComment(comment.id)"
          class="btndelete"
        >
          Delete
        </button>
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
      @click="goToAdminPage()"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="adpage"
    >
      AdminPage
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
  top: 3rem;
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
  border-radius: 8px;
}

div.sidebar {
  display: flex;
  flex-direction: column;
  float: right;
  margin: 0 1.5%;
  background-color: #5adfe2;
  width: 150px;
  height: 600px;
  top: 3rem;
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
  top: 20px;
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

.adpage,
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
  top: 20px;
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

.adpage:hover {
  background-color: #5adfe2;
}

.btnsend {
  text-align: center;
  margin: 3px 5px 5px;
  border-radius: 8px;
  background-color: white;
  color: black;
}

.addComm,
.btndelete {
  text-align: center;
  width: 75px;
  border-radius: 8px;
  background-color: white;
  color: black;
  margin-right: 10px;
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
