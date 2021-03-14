<template>
  <router-view/>
  <teleport to="body">
    <app-footer></app-footer>
  </teleport>
</template>


<script>
import AppFooter from "./components/AppFooter";
export default {
  name: "App",
  components: {
    AppFooter
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

html, body, #app {
  height: 100%;
}

a {
  text-decoration: none;
}

body {
  background: $black;
  color: $white;
  position: relative;
}

</style>
