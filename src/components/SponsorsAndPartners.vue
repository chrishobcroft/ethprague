<template>
  <div class="sponsors-and-partners" id="Sponsors%20&%20Partners">
    <div class="sponsors-and-partners__block">
      <SectionTitle title="sponsors & partners" />
      <div
        class="sponsors-and-partners__small-title sponsors-and-partners__looks-rare"
      >
        Looks rare
      </div>
      <div class="sponsors-and-partners__looks-rare-icons">
        <a
          v-for="company in looksRare"
          :key="company.name"
          :href="company.link"
          target="_blank"
        >
          <img
            :src="getSponsorsOrPartnersImage(company.name)"
            :alt="company.name"
            class="sponsors-and-partners__looks-rare-icon"
          />
        </a>
      </div>
    </div>

    <div class="sponsors-and-partners__separation-line" />

    <div class="sponsors-and-partners__block">
      <div
        class="sponsors-and-partners__small-title sponsors-and-partners__title-few"
      >
        Few
      </div>
      <div class="sponsors-and-partners__few-icons">
        <a
          v-for="company in few"
          :key="company.name"
          :href="company.link"
          target="_blank"
        >
          <img
            :src="getSponsorsOrPartnersImage(company.name)"
            :alt="company.name"
            class="sponsors-and-partners__few-icon"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";

const looksRare = [
  { name: "pwn", link: "https://pwn.finance/" },
  { name: "uniswap", link: "https://uniswap.org/" },
  { name: "moralis", link: "https://moralis.io/" },
];
const few = [
  { name: "wallet-connect", link: "https://walletconnect.com/" },
  { name: "eth-foundation", link: "https://ethereum.org/en/foundation/" },
  { name: "livepeer", link: "https://livepeer.org/" },
];

const getSponsorsOrPartnersImage = (imageName: string) => {
  return require(`../assets/sponsors-and-partners/${imageName}.svg`);
};
</script>

<style scoped>
.sponsors-and-partners {
  background-color: var(--col-light-gray-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0;
}

.sponsors-and-partners__block {
  padding: 0 var(--app-padding);
  max-width: 1100px;
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
}

.sponsors-and-partners__small-title {
  align-self: flex-start;
  font-size: 15px;
}

.sponsors-and-partners__looks-rare-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 105px;
  margin-bottom: 90px;
  max-width: 100%;
}

.sponsors-and-partners__looks-rare-icon,
.sponsors-and-partners__few-icon {
  max-width: 100%;
  cursor: pointer;
}
.sponsors-and-partners__few-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 110px;
  max-width: 100%;
}

.sponsors-and-partners__separation-line {
  background: white;
  height: 3px;
  width: 100%;
  margin: 0;
}

.sponsors-and-partners__looks-rare {
  margin: 25px 0 20px;
}

.sponsors-and-partners__title-few {
  margin: 20px 0 45px;
}
</style>
