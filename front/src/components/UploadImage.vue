<script>
import axios from "axios";

export default {
  name: "UploadImage",
  data() {
    return {
      images: null,
    };
  },
  methods: {
    uploadFile() {
      this.images = this.$refs.file.file[0];
    },
    submitFile() {
      const fData = new fData();
      fData.append("file", this.images);
      const headers = { "Content-Type": "multipart/form-data" };
      axios
        .post("http://localhost:3000/api/auth/post", FormData, { headers })
        .then((res) => {
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
      <input type="files" @change="uploadFile" ref="file" />
      <button @click="submitFile">Upload</button>
    </div>
  </div>
</template>
<style lang="scss"></style>
