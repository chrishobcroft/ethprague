<template>
  <div class="manifesto">
    <div class="manifesto__buttons">
      <div class="manifesto__buttons-row">
      <a
        href="https://cfp.paralelnipolis.cz/ethprague-2022/"
        target="_blank"
        class="manifesto__button-link"
      >
        <button class="manifesto__button">Apply to speak ></button>
      </a>
      <a
        href="https://cf23uhv4kuq.typeform.com/to/XABwNH5T"
        target="_blank"
        class="manifesto__button-link"
      >
        <button class="manifesto__button">Apply to hack ></button>
      </a>
      </div>
      <div class="manifesto__buttons-row">
      <a
        href="https://cfp.paralelnipolis.cz/ethprague-2022/"
        target="_blank"
        class="manifesto__button-link"
      >
        <button class="manifesto__button">Apply as general admission ></button>
      </a>
      <a
        href="https://cf23uhv4kuq.typeform.com/to/XABwNH5T"
        target="_blank"
        class="manifesto__button-link"
      >
        <button class="manifesto__button">Apply for scholarships ></button>
      </a>
      </div>
    </div>

    <div id='Manifesto' class="manifesto__text-container">
      <SectionTitle title="manifesto" />
      <div class="manifesto__text-content">
        ETHPrague isn’t looking for the next get rich quickly scheme or groundbreaking DeFi apps, instead it’s an event focusing on the future potential of Ethereum and concepts or applications which don’t yet exist. We want to tackle challenges which will or might arise in the next decade and we believe Ethereum will play a major role in solving these. The future is in your hands, anon! You decide whether we end up living in an dark authoritarian dystopia or a bright solarpunk utopia. 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<style scoped>
.manifesto {
  margin: 50px 0 150px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
}
.manifesto__buttons {
  max-width: 1600px;
  display: flex;
  width: 100%;
  gap: 25px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.manifesto__button {
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  letter-spacing: 0px;
  text-transform: uppercase;
  font-weight: 300;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 25px;
  line-height: 29px;
  color: var(--col-primary-action);
  text-align: center;

  border-radius: 300px;
  width: 100%;
  height: 170px;
  border: solid 2px var(--col-primary-action);
  background-color: white;
}

.manifesto__buttons-row {
  display: flex;
  column-gap: 30px;
  width: 100%;
}

.manifesto__button:hover {
  background-color: var(--col-primary-action);
  border: solid 2px var(--col-primary-action);
  color: white;
}

.manifesto__button-link {
  width: 100%;
  text-decoration: none;
}

.manifesto__text-container {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.manifesto__text-content {
  width: 1100px;
  margin-top: 40px;

  color: var(--col-primary-action);
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 40px;
  line-height: 51px;
}
</style>
