<script>
import axios from "axios";

export default {
  name: "comments",
  data() {
    return {
      comments: {},
    };
  },
  mounted() {
    this.getcomments();
  },
  methods: {
    getcomments() {
      axios
        .get("http://localhost:3000/api/post/'+this.post.id+'/comments", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
        .catch((err) => {
          console.log(error);
        });
    },
    createComment() {
      axios
        .post("http://localhost:3000/api/comment", {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
          body: this.comment,
        })
        .then((res) => {
          this.comments.res.data;
          this.comment = "";
        })
        .catch((err) => {
          console.log(error);
        });
    },
  },
  //delete comment
  deleteComment() {
    axios
      .delete("http://localhost:3000/api/comment/${id}", {
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
};
</script>
<template></template>
<style></style>
