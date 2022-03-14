<template>
  <div class="header">
    <div class="header__content">
      <button class="header__button">tickets</button>

      <div class="header__local-links">
        <a class="header__local-link" v-for="localLink in localLinks" :key="localLink" :href="`#${localLink}`">
          {{ localLink }}
        </a>
      </div>

      <div class="header__social-links">
        <a
          href="https://t.me/ethprague"
          target="_blank"
        >
          <img src="../assets/telegram.svg" alt="telegram" />
        </a>

        <a
          href="https://twitter.com/EthPrague"
          target="_blank"
        >
          <img src="../assets/twitter.svg" alt="twitter" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

</style>
