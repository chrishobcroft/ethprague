<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>

import MainPage from "./components/MainPage";
export default {
  name: 'app',
  components: {MainPage},
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="css">
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

  @font-face {
    font-family: 'Helvetica Neue';
    src: url('assets/font/Helvetica.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue Bold';
    src: url('assets/font/Helvetica-Bold.ttf');
    font-weight: normal;
    font-style: normal;
  }
</style>
