<template>
  <div class="container overflow-hidden">
    <h1 class="my-5">Sign up</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input class="form-control"
                       type="text"
                       id="username"
                       v-model="username"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input class="form-control"
                       type="password"
                       id="password"
                       v-model="password"
                />
              </div>
            </div>
          </div>
          <label for="email" class="form-label">Email</label>
          <input class="form-control"
                 type="email"
                 id="email"
                 v-model="email"
          />
          <div class="form-check mt-3 mb-5">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              I have read and accept <router-link to="/terms">term of condition</router-link>.
            </label>
          </div>
          <button class="btn btn--primary d-grid mx-auto d-md-inline" type="submit">Submit</button>
        </form>
      </div>
    </div><!-- /row -->

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
