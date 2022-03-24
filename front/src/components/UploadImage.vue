<script>
import axios from "axios";

export default {
  name: "uploadImage",
  data() {
    return {
      image: null,
    };
  },
  methods: {
    uploadFile() {
      console.log("==========");
      this.images = this.$refs.file.file[0];
    },
    submitFile() {
      const fData = new FormData();
      console.log("submitFile =======", fData);
      fData.append("file", this.image);
      const headers = { "Content-Type": "multipart/form-data" };
      axios
        .post("http://localhost:3000/api/auth/post", fData, { headers })
        .then((res) => {
          console.log(res.data);
          res.data.files;
          res.status;
        });
    },
  },
};
</script>
<template>
  <div class="ImagesList">
    <div>
      <input type="file" @change="uploadFile" ref="file" />
      <button @click="submitFile">Upload</button>
    </div>
  </div>
</template>
<style lang="scss"></style>
