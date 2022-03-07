<script setup></script>

<template>
  <header>
    <img
      alt="Groupomania logo"
      class="logowhite"
      src="./assets/icon-left-font-monochrome-white.png"
    />
  </header>
  <main>
    <div class="userlist">
      <a href="./userprofile.vue">
        <picture>
          <source srcset="" class="uploadimage" media="(min-width: 1000px)" />
          <source srcset="" class="uploadimage" media="(min-width: 600px)" />
          <img src="./assets/pp1.png" class="pp" />
        </picture>
      </a>
      <div class="prof-name">
        <a href="./userprofile.vue">Username></a>
      </div>
    </div>
    <div>
      <input type="button" onclick="./home.vue" id="btnhome" value="Home" />
    </div>
  </main>
</template>

<style lang="scss">
body {
  margin: 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.logowhite {
  margin-top: 219px;
  margin-right: 500px;
  width: 362px;
  height: 60px;
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

img:hover {
  box-shadow: 0 0 2px 1px white;
}
.prof-name {
  font-size: 6pt;
  color: white;
}

#homebtn {
  font-size: 6pt;
  color: white;
}

#homebtn:hover {
  color: #5adfe2;
}
</style>
