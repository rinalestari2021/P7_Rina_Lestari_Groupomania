<script>
import axios from "axios";
//import { getPost } from "../../../back/controllers/posts.controllers";

export default {
  name: "posts",
  data() {
    return {
      post: [],
      post: {
        url: "",
        message: "",
      },
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    //get all posts
    getPost() {
      axios
        .get("http://localhost:3000/api/posts", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
    //get one post
    getOnePost() {
      axios.get("http://localhost:3000/api/posts/${id}", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      });
    },
    //create new post
    createPost() {
      axios
        .post("http://localhost:3000/api/posts", {
          body: JSON.stringify({
            title: "",
            body: "",
            userId: "",
          }),
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.posts.res.data;
        })
        .catch(error);
    },
    //modify(edit) post
    updatePost() {
      axios
        .put("http://localhost:3000/api/posts/", {
          body: JSON.stringify({
            id: this.post.id,
            title: this.post.title,
            imageurl: this.post.imageurl,
            message: this.post.message,
          }),
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .update(this.post.id)
        .then((res) => {
          this.message = "Post edited";
        })
        .catch(error);
    },
    //delete the post
    deletePost() {
      if (confirm("Delete" + post.title)) {
        axios
          .delete("http://localhost:3000/api/${post.id}", {
            headers: {
              Authorization: "Bearer" + localStorage.getItem("token"),
            },
          })
          .then((res) => {
            this.posts.res.data;
          })
          .catch(error)
          .then((res) => {
            return response;
          });
      }
    },
  },
};
</script>
<template>
  <div class="newfeedblock">
    <h1 class="wall" @click="getPost()">Newsfeed</h1>
    <div v-for="post in posts" :key="posts.id" class="f-post">
      {{ post }}
    </div>

    <div>
      <h2>Create New</h2>
      <form @submit.prevent="createPost()">
        <p>{{ post }}</p>
        <img src="" />
        <input type="text" placeholder="Write here" ref="msg" />
      </form>

      <button @click="updatePost()" class="b-edit">Edit</button>
      <button @click="deletePost()" class="btndelete">Delete</button>
      <button type="submit" @click="sendMsg()" class="btnsend">Send</button>
    </div>
  </div>
</template>
<style lang="scss"></style>
