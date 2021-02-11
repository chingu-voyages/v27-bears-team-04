<template>
  <div class="homepage">
    <h1>This is HomePage</h1>
    <router-link to="/about">About</router-link><br>
    <router-link to="/privacy">Privacy</router-link><br>
     <router-link to="/terms">Terms</router-link><br>
      <router-link to="/register">Register</router-link><br>
       <router-link to="/login">Login</router-link><br>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>


<style lang="scss" scoped>
@import "HomePage.scss";
</style>

