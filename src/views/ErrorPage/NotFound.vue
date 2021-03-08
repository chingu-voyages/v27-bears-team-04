<template>
  <div class="container">
    <div class="row">
      <div class="error">
        <img src="../../assets/404.svg" alt="404 Error in morse code">
        <p>Page Not Found!</p>
        <p>Sorry, we are unable to find the page you are looking for. Click the blow button to return home.</p>
        <router-link class="button button-primary" to="/">Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound.vue"
}
</script>

<style lang="scss" scoped>
@import "ErrorPage.scss";
</style>
