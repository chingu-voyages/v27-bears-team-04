<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="c-homepage text-center">
          <h1 class="c-homepage__title">IMorse</h1>
          <p class="c-homepage__subtitle">
            Secretive Communication Social Platform Based On <span class="text-gold">Morse</span> Code! <br />
            Make Friends While Talking Morse.
          </p>

          <span class="c-homepage__morse">.-- . .-.. -.-. --- -- .</span>

          <div class="c-homepage__img-container">
            <img class="img-fluid c-homepage__img-container__img" v-bind:src="img" alt=""/>
          </div>
        </div>

        <div class="c-buttons-container d-grid gap-3 col-6 mx-auto d-md-flex justify-content-md-center">
          <router-link to="/login" class="btn btn--primary" type="button"
          >Log In
          </router-link
          >
          <router-link to="/register" class="btn btn--secondary" type="button"
          >Sign In
          </router-link
          >
        </div>
      </div>
    </div> <!-- row -->
  </div> <!-- container -->
</template>

<script>
const morseCode = require('../../assets/images/Telegraph_Key.png');


export default {
  name: "Home",
  data() {
    return {
      img: morseCode,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "HomePage.scss";

.text-gold {
  color: $color-primary;
}
</style>

