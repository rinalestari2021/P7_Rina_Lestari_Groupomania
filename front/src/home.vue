<script>
document.getElementById("btnsignup").onclick = function () {
  location.href = "/signup.vue";
};
document.getElementById("btnlogin").onclick = function () {
  location.href = "/login.vue";
};
</script>

<template>
  <header>
    <img
      alt="Groupomania logo"
      class="logo"
      src="./assets/icon-left-font-monochrome-white.png"
      width="125"
      height="125"
    />
  </header>
  <main>
    <div class="homepage">
      <button onclick="" id="btnsignup" class="submitbtnleft"></button>
      <button onclick="" id="btnlogin" class="submitbtnright"></button>
    </div>
    <div class="greetings">
      <h1>"Welcome to Groupomania<br />Messenger"</h1>
      >
    </div>
  </main>
</template>

<style></style>
