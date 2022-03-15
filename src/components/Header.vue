<template>
  <div class="header">
    <div class="header__content">
      <button class="header__button">tickets</button>

      <div class="header__local-links">
        <a
          class="header__local-link"
          v-for="localLink in localLinks"
          :key="localLink"
          :href="`#${localLink}`"
        >
          {{ localLink }}
        </a>
      </div>

      <div class="header__social-links">
        <a href="https://t.me/ethprague" target="_blank">
          <img src="../assets/telegram.svg" alt="telegram" />
        </a>

        <a href="https://twitter.com/EthPrague" target="_blank">
          <img src="../assets/twitter.svg" alt="twitter" />
        </a>
      </div>
    </div>
  </div>

  <div class="header-mobile">
    <div class="header-mobile__content">
      <button class="header__button">tickets</button>
        <img
          class="header-mobile__hamburger-menu"
          src="../assets/hamburger-menu.svg"
          alt="menu"
          @click="isHamMenuOpen = !isHamMenuOpen"
        />

      <div class="header__social-links">
        <a href="https://t.me/ethprague" target="_blank">
          <img src="../assets/telegram.svg" alt="telegram" />
        </a>

        <a href="https://twitter.com/EthPrague" target="_blank">
          <img src="../assets/twitter.svg" alt="twitter" />
        </a>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="isHamMenuOpen" class="header-mobile__local-links">
        <a
          @click="isHamMenuOpen = false"
          class="header-mobile__local-link"
          v-for="localLink in localLinks"
          :key="localLink"
          :href="`#${localLink}`"
        >
          {{ localLink }}
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isHamMenuOpen = ref(false);
const localLinks = [
  "Manifesto",
  "Hackathon",
  "Speakers",
  "FAQ",
  "Sponsors & Partners",
];
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--col-primary-action);
  z-index: 100;
}

@media only screen and (max-width: 1120px) {
  .header {
    display: none;
  }
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  margin: 0 20px;
}

.header__button {
  background-color: var(--col-primary-action);
  color: white;
  border-radius: 50px;
  padding: 4px 12px;
  margin: 0;

  text-transform: uppercase;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
}

.header__local-links {
  padding: 0 20px;
}

.header__social-links {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.header__local-link {
  text-decoration: none;
  color: white;
  padding: 0 10px;

  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
}

.header__local-link:hover {
  text-decoration: underline;
}

.header-mobile {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--col-primary-action);
  z-index: 100;
}

@media only screen and (min-width: 1120px) {
  .header-mobile {
    display: none;
  }
}

.header-mobile__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.header-mobile__hamburger-menu {
  cursor: pointer;
}

.header-mobile__local-links {
  display: flex;
  width: 100%;
  padding: 50px;
  position: fixed;
  top:80px;
  align-items: center;
  background-color: var(--col-primary-action);
  z-index: 100;
  flex-direction: column;
  padding: 110px 30px 50px 50px;
  min-height: 100vh;
}

.header-mobile__local-link {
  text-decoration: none;
  color: white;
  padding: 23px 10px;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
}

/*/ Animation /*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fadeIn-enter-active {
  transition: opacity 1s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
