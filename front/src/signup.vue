<script setup></script>

<template>
  <header>
    <img
      alt="Groupomania logo"
      class="logosignup"
      src="./assets/icon-left-font-monochrome-white.png"
      width="360"
      height="58"
    />
  </header>
  <main>
    <div class="form_reg">
      <form>
        <label for="fname">Firstname:</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label for="lname">Lastname:</label><br />
        <input type="text" id="lname" name="lname" />
        <label for="mail">Email:</label><br />
        <input type="text" id="mail" name="mail" />
        <label for="pass">Password:</label><br />
        <input type="password" id="passcode" name="passcode" />
        <input type="submit" value="Signup" class="signupbtn" />
      </form>
    </div>
  </main>
</template>

<style></style>
