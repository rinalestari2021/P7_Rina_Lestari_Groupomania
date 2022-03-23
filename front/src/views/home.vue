<script>
import axios from "axios";

//import PostsList from "../components/PostsList.vue";
//import ImagesList from "../components/UploadImage.vue";

export default {
  name: "Home",
  //components: { PostsList, ImagesList },
  async created() {
    const response = await axios.get(
      "http://localhost:3000/api/auth/accounts/",
      {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      }
    );

    console.log(response);
  },
  components: {
    //ImagesList,
    //PostsList,
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
      url: "",
    };
  },

  methods: {
    //update post in newsfeed
    updatePost() {
      axios
        .get("http://localhost:3000/api/posts")
        .then((res) => {
          this.posts.res.data;
        })
        .catch((error) => (this.posts = [{ title: "Charging Error" }]));
    },
    //create post
    createPost() {
      axios
        .post("http://localhost:3000/api/auth/posts", {
          id: "",
          tittle: "",
          body: "",
          userId: "",
        })
        .then((res) => console.log(res));
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
    prevPage() {
      this.$router.go(-1);
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="newfeedblock">
    <h1 class="wall" :show="updatePost()">Newsfeed</h1>
    <div v-for="post in posts" :key="posts.id" class="f-post">
      {{ posts.id }}
      <p>{{ posts.title }}</p>
      <img :src="url" />
      <input type="text" placeholder="Write here" /> {{ posts.body }}
      <button @click.prevent="editPost(post)" class="b-edit">Edit</button>
      <button @click.prevent="deletePost(post.id)" class="btndelete">
        Delete
      </button>
      <button type="submit" class="btnsend">Send</button>
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
  top: 20px;
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
  background-color: white;
  color: #b86758;
}

.b-edit,
.btndelete,
.btnsend {
  width: 50px;
  border-radius: 8px;
  background-color: white;
  color: black;
}

.f-post {
  width: 600px;
}
</style>
