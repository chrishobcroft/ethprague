<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  @import 'styles/normalize.css';
  @import "styles/skeleton.css";

  html, body {
    font-family: "Helvetica Neue";
    letter-spacing: 3px;
    color: #ffffff;
    background: url('./assets/placeholderpunk.jpeg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

</style>
