<template>
  <div class="login-container">
    <h1 class="login-title">LOGIN</h1>
    <div class="c-login-buttons">
      <input
        class="c-login-buttons__item"
        placeholder="Enter Your Email"
        v-model="email"
      />
      <input
        class="c-login-buttons__item"
        placeholder="Enter Your Password"
        v-model="password"
      />
      <button class="c-login-buttons__submit" type="submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Login",
  components: {},
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/user/login/", {
          email: this.email,
          password: this.password,
        })
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style lang="scss" scoped>
@import "LoginPage.scss";
</style>
