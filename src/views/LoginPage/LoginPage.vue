<template>
  <div class="container overflow-hidden">
    <h1 class="my-5">Login</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input class="form-control"
                       type="email"
                       id="email"
                       v-model="email"
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
        </form>
        <button class="btn btn--primary d-grid mx-auto d-md-inline mt-5" type="submit">Submit</button>
      </div>
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

