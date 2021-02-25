<template>
  <div class="login-container">
    <h1 class="login-title">LOGIN</h1>
    <div class="c-login-buttons">
    <input class="c-login-buttons__item" placeholder="Enter Your Email"/>
    <input class="c-login-buttons__item" placeholder="Enter Your Password"/>
    <button class="c-login-buttons__submit" type="submit"> Submit </button>
    </div>


  </div>
</template>

<script>
export default {
name: 'Login',
}
</script>


<style lang="scss" scoped>
   @import 'LoginPage.scss'
</style>

