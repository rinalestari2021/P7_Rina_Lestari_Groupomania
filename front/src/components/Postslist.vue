<script>
import axios from "axios";

export default {
  name: "Postslist",
  data() {
    posts: [];
    return {};
  },
  methods: {
    updatePost() {
      axios
        .get("http://localhost:3000/api/auth/post")
        .then((response) => (this.posts = response.data))
        .catch((error) => console.log(error));
    },
    createPost() {
      axios
        .post("http://localhost:3000/api/auth/accounts/:id", {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        })
        .then((response) => (this.posts = response.data))
        .catch((error) => console.log(error));
    },
    deletePost() {
      axios
        .delete("http://localhost:3000/api/auth/accounts/:id", {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        })
        .then((response) => (this.posts = response.data))
        .catch((error) => console.log(error));
    },
  },
};
</script>
<template>
  <div class="PostList">
    <div v-on:load="updatePost">
      <h3 v-for="post in posts">{{ post.tittle }}</h3>
    </div>
  </div>
</template>
<style lang="scss"></style>
