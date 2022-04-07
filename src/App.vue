<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script setup lang="ts">
  import MainPage from "@/pages/MainPage.vue";
</script>

<style lang="css">
  @import 'styles/normalize.css';
  @import "styles/skeleton.css";

  * {
    box-sizing: border-box;
  }

  :root {
    /* colors */
    --col-primary-action: #5400ff;
    --col-primary-accent: #FFFF00;
    --col-light-gray-bg: rgba(0, 0, 0, 0.08);

    --mobile-breakpoint: 1120px;
    --app-padding: 15px;
  }

  html, body {
    font-family: "Archivo SemiExpanded", Verdana, sans-serif;
    letter-spacing: 0px;
    /* color: #ffffff; */
    /* background: url('./assets/placeholderpunk.jpeg') no-repeat center center fixed; */
    scroll-behavior: smooth;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  ::-moz-selection { /* Code for Firefox */
    color: var(--col-primary-action);
    background: var(--col-primary-accent);
  }

  ::selection {
    color: var(--col-primary-action);
    background: var(--col-primary-accent);
  }

  @font-face {
    font-family: "Archivo SemiExpanded"; /*a name to be used later*/
    src: url("assets/font/Archivo_SemiExpanded-Medium.ttf"); /*URL to font*/
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
