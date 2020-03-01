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
    font-family: LibreFranklin;
    letter-spacing: 3px;
    color: #000000;
    background: url('./assets/ethprg-bg.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  /*body {*/
  /*  background-repeat: no-repeat;*/
  /*  background-size: contain, cover;*/
  /*  background-image: url('./assets/ethprg-bg.png');*/
  /*  !*background-repeat: no-repeat;*!*/
  /*  height: 100vh;*/
  /*  width: 100vh;*/
  /*}*/

  /*#bg {*/
  /*  !*position: fixed;*!*/
  /*  background-image: url('./assets/ethprg-bg.png');*/
  /*  width: 100%;*/
  /*  height: 100%;*/
  /*  !*background-color: #000000;*!*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*}*/
  @font-face {
    font-family: 'LibreFranklin';
    src: url('assets/font/LibreFranklin-Regular.otf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'LibreFranklinBold';
    src: url('assets/font/LibreFranklin-Bold.otf');
    font-weight: bold;
    font-style: normal;
  }
</style>
