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
    createPost() {
      axios
        .post("http://localhost:3000/api/", this.post)
        .then((res) => (res.data.post = null))
        .catch((error) => console.log(error));
    },
    deletePost() {
      if (confirm("Delete" + post.title)) {
        axios.delete("http://localhost:3000/api/${post.id}").then((res) => {
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
