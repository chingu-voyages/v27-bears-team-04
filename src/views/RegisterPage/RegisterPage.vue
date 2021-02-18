<template>
  <div class="container">
    <h1>Sign up</h1>
    <form>
      <div class="row">
        <div class="six columns">
          <label for="username">Username</label>
          <input class="u-full-width"
                 type="text"
                 id="username"
                 v-model="username"
          />
        </div>
        <div class="six columns">
          <label for="password">password</label>
          <input class="u-full-width"
                 type="password"
                 id="password"
                 v-model="password"
          />
        </div>
      </div>
      <label for="email">email</label>
      <input class="u-full-width"
             type="email"
             id="email"
             v-model="email"
      />
      <input type="checkbox" />
      <span class="label-body">I have read and accept term of condition</span>
      <button class="button-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
name: 'Register',
  computed: {
    // The `mapFields` function takes an array of
    // field names and generates corresponding
    // computed properties with getter and setter
    // functions for accessing the Vuex store.
    ...mapFields([
      'fields.username',
      'fields.password',
      'fields.email'
    ]),
  },
}
</script>


<style lang="scss" scoped>
@import "RegisterPage.scss";
</style>
