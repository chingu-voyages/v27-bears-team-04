<template>
  <div class="container">
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
export default {
name: 'Login',
}
</script>


<style lang="scss" scoped>
   @import 'LoginPage.scss'
</style>

