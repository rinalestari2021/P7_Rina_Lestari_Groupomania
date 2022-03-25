<script>
import axios from "axios";
import { updatePost } from "../../../back/controllers/posts.controllers";

export default {
  name: "Posts",
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
    this.fetchPosts();
  },
  methods: {
    //get one post
    getPost() {
      axios
        .get("http://localhost:3000/api/posts/1", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .then((res) => response.json())
        .then((json) => console.log(json));
    },
  },
  //modify post
  updatePost() {
    axios
      .put("http://localhost:3000/api/posts/", {
        body: JSON.stringify({
          id: "",
          title: "",
          body: "",
        }),
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      })
      .then((res) => response.json())
      .then((json) => console.log(json));
  },

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
  editPost() {
    let data = {
      id: this.post.id,
      title: this.post.title,
      imageurl: this.post.imageurl,
      message: this.post.message,
    }
      .update(this.post.id)
      .then((res) => {
        this.message = "Post edited";
      })
      .catch(error);
  },
};
</script>
<template>
  <div>
    <h2>Create New</h2>
    <form @submit.prevent="createPost()">
      <p>{{ post.title }}</p>
      <img :src="imageurl" />
      <input type="text" placeholder="Write here" v-model="post.message" />
    </form>

    <button @click.prevent="editPost()" class="b-edit">Edit</button>
    <button @click.prevent="deletePost()" class="btndelete">Delete</button>
    <button type="submit" class="btnsend">Send</button>
  </div>
</template>
<style lang="scss"></style>
