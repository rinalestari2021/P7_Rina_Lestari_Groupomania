<script>
import axios from "axios";
//import UploadFServices from "../services/uploadfiles";

export default {
  name: "uploadimage",
  data() {
    return {
      currentImage: undefined,
      previewImage: undefined,
      progress: 0,
      message: "",
      imageInfos: [],
    };
  },
  mounted() {
    UploadFServices.getFiles().then((res) => {
      this.imageInfos = res.data;
    });
  },
  methods: {
    selectImage() {
      console.log("==========");
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
    },
    upload() {
      this.progress = 0;
      UploadFServices.upload(this.currentImage, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total);
      })
        .then((res) => {
          this.message = res.data.message;
          return UploadFServices.getFiles();
        })
        .catch((err) => {
          this.progress = 0;
          this.message = " Could not upload the image!" + err;
          this.currentImage = undefined;
        });
    },
    submitFile() {
      const formData = new FormData();
      console.log("submitFile =======", fData);
      formData.append("file", this.image);
      const headers = { "Content-Type": "multipart/form-data" };
      axios
        .post("http://localhost:3000/api/auth/post", fData, {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        })
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
      <div class="">
        <div class="">
          <label class="">
            <input
              type="file"
              accept="image/*"
              ref="file"
              @change="selectImage"
            />
            <button class="" :disabled="!currentImage" @click="upload">
              Upload
            </button>
          </label>
        </div>
      </div>
      <div v-if="currentImage" class="">
        <div class="">{{ progress }}%</div>
      </div>
      <div v-if="previewImage">
        <div>
          <img class="" :src="previewImage" alt="" />
        </div>
      </div>
      <div v-if="message" class="" role="alert">
        {{ message }}
      </div>
      <div class="">
        <div class="card-header">List of Images</div>
        <ul class="">
          <li class="" v-for="(image, index) in imageInfos" :key="index">
            <a :href="image.url">{{ image.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
