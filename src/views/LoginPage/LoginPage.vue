<template>
  <div class="login-container">
    <h1 class="login-title">LOGIN</h1>
    <div class="c-login-buttons">
      <label for="email">Enter Your Email</label>
      <input class="c-login-buttons__item"
             type="email"
             id="email"
             v-model="email"
      />

      <label for="password">Password</label>
      <input class="c-login-buttons__item"
             type="password"
             id="password"
             v-model="password"
      />
      <button class="c-login-buttons__submit" type="submit"> Submit</button>
    </div>


  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'Login',
  computed: {
    // The `mapFields` function takes an array of
    // field names and generates corresponding
    // computed properties with getter and setter
    // functions for accessing the Vuex store.
    ...mapFields([
      'fields.email',
      'fields.password'
    ]),
  },
}
</script>


<style lang="scss" scoped>
@import 'LoginPage.scss'
</style>

