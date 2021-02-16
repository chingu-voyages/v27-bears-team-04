
<template>

<div class="c-main">
  <div class="c-homepage">
    
    <h1 class="c-homepage__title">IMorse</h1>
    <h1 class="c-homepage__subtitle">
      Secretive Communication Social Platform Based On Morse Code! Make Friends
      While Talking Morse.
    </h1>
    <div>
    </div>
    <div class="c-buttons-container">
      <router-link to="/login" class="c-buttons-container__login"
        >Log In</router-link
      >
      <router-link to="/register" class="c-buttons-container__signin"
        >Sign In</router-link
      >
    </div>

  </div>
   <div class="c-menu">
      <router-link to="/about" class="c-menu__item">About</router-link>
            <router-link to="/about" class="c-menu__item">Contact</router-link>

      <div class="c-menu__social"></div>
    </div>
     <div class="c-homepage__img-container">
        <img class="c-homepage__img-container__img" v-bind:src="img" alt="" />
      </div>
</div>
  <!-- 
 <div class="c-footer">
    <router-link to="/privacy">Privacy</router-link>
    <router-link to="/terms">Terms</router-link>
  </div> -->
</template> 

<script>
const morseCode = require('../../assets/images/morse-machine.jpg');


export default {

  name: "Home",
    data(){
        return{
            img: morseCode,
        }
    }
};

</script>


<style lang="scss" scoped>
@import "HomePage.scss";
</style>

