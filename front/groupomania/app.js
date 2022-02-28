new Vue({
  el: "#app",
  data: {
    message: "Groupomania Messenger",
    imageUrl: "",
  },
  methods: {
    close: function () {
      this.message = "true";
    },
  },
});
