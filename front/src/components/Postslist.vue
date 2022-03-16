<script>
export default {
  props: ["posts"],
  setup(props) {
    console.log("props".props);
  },
};
</script>
<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
    </div>
  </div>
</template>
<style lang="scss"></style>
