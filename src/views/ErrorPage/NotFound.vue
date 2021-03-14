<template>
  <div class="container h-100">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-6">
        <div class="error">
          <img class="img-fluid mb-3" src="../../assets/404.svg" alt="404 Error in morse code">
          <p>Page Not Found!</p>
          <p>Sorry, we are unable to find the page you are looking for. Click the blow button to return home.</p>
          <router-link class="btn btn--secondary mt-2" to="/">Home</router-link>
        </div>
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
