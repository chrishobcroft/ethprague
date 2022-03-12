<template>
  <div class="manifesto">
    <div class="manifesto__buttons">
      <a
        href="https://cfp.paralelnipolis.cz/ethprague-2022/"
        target="_blank"
        class="manifesto__button-link"
      >
        <button class="manifesto__button">Apply to speak</button>
      </a>
      <a
        href="https://cf23uhv4kuq.typeform.com/to/XABwNH5T"
        target="_blank"
        class="manifesto__button-link"
      >
        <button class="manifesto__button">Apply to hack</button>
      </a>
    </div>

    <div class="manifesto__text">
      <SectionTitle title="manifesto" />
      <div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<style scoped>
.manifesto {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  background-color: white;
}
.manifesto__buttons {
  margin-bottom: 35px;
  width: 100%;
  display: flex;
  gap: 25px;
  justify-content: space-between;
}
.manifesto__button {
  font-weight: 300;
  margin: 0;
  letter-spacing: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  border-radius: 300px;
  padding: 39px;
  font-size: 20px;
  line-height: 31px;
  width: 100%;
  border: solid 2px var(--col-primary-action);
  background-color: white;
  color: var(--col-primary-action);
}

.manifesto__button:hover {
  background-color: var(--col-primary-action);
  border: solid 2px var(--col-primary-action);
  color: white;
}

.manifesto__button-link {
  width: 100%;
}
</style>
