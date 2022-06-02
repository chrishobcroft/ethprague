<template>
  <div class="sponsors-and-partners" id="SponsorsAndPartners">
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
            :src="getSponsorsOrPartnersImage(company.image)"
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
            :src="getSponsorsOrPartnersImage(company.image)"
            :alt="company.name"
            class="sponsors-and-partners__few-icon"
          />
        </a>
      </div>
    </div>

    <div class="sponsors-and-partners__separation-line" />

    <div class="sponsors-and-partners__block">
      <div
        class="sponsors-and-partners__small-title sponsors-and-partners__title-few"
      >
        Frens
      </div>
      <div class="sponsors-and-partners__friends-icons">
        <a
          v-for="company in friends"
          :key="company.name"
          :href="company.link"
          target="_blank"
        >
          <img
            :src="getSponsorsOrPartnersImage(company.image)"
            :alt="company.name"
            class="sponsors-and-partners__few-icon"
          />
        </a>
      </div>
    </div>

<!--    <div class="sponsors-and-partners__separation-line" />-->

<!--    <div class="sponsors-and-partners__block">-->
<!--      <div-->
<!--          class="sponsors-and-partners__small-title sponsors-and-partners__title-few"-->
<!--      >-->
<!--        Media & Partners-->
<!--      </div>-->
<!--      <div class="sponsors-and-partners__others-icons">-->
<!--        <a-->
<!--            v-for="company in partners"-->
<!--            :key="company.name"-->
<!--            :href="company.link"-->
<!--            target="_blank"-->
<!--        >-->
<!--          <img-->
<!--              :src="getSponsorsOrPartnersImage(company.image)"-->
<!--              :alt="company.name"-->
<!--              class="sponsors-and-partners__friends-icon"-->
<!--          />-->
<!--        </a>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";

const looksRare = [
  { name: "pwn", link: "https://pwn.finance/", image: "pwn.svg",},
  { name: "uniswap", link: "https://uniswap.org/", image: "uniswap.svg",},
  { name: "moralis", link: "https://moralis.io/", image: "moralis.svg",},
];
const few = [
  { name: "wallet-connect", link: "https://walletconnect.com/", image: "wallet-connect.svg"},
  { name: "eth-foundation", link: "https://ethereum.foundation", image: "eth-foundation.svg"},
  { name: "livepeer", link: "https://livepeer.org/", image: "livepeer.svg"},
  { name: "ledger", link: "https://www.ledger.com/", image: "ledger.svg"},
  { name: "element", link: "https://www.element.fi/", image: "element.png"},
  { name: "galaxis", link: "https://galaxis.xyz/#/", image: "galaxis.svg" },
];

const friends = [
  { name: "boba-network", link: "https://simon@boba.network/", image: "boba-network.png" },
  { name: "chainsafe", link: "https://chainsafe.io/", image: "chainsafe.svg" },
  { name: "starkware", link: "https://starkware.co/", image:  "starkware.svg" },
  { name: "wintermute", link: "https://www.wintermute.com/", image:  "wintermute.svg" },
  { name: "golem-foundation", link: "https://golem.foundation/", image:  "golem-foundation.png" },
  { name: "ethswarm", link: "https://ethswarm.org/", image:  "ethswarm.svg" },
  { name: "connext", link: "https://connext.network/", image:  "connext.svg" },
  { name: "openq", link: "https://www.openq.dev/", image:  "openq.png" },
  { name: "nodereal", link: "https://nodereal.io/", image:  "nodereal.svg" },
];

const partners = [
  { name: "rekt", link: "https://simon@boba.network/", image: "boba-network.png" },
  { name: "banklessdao", link: "https://simon@boba.network/", image: "boba-network.png" },
  { name: "serotonin", link: "https://simon@boba.network/", image: "boba-network.png" }
]

const getSponsorsOrPartnersImage = (imageName: string) => {
  return require(`../assets/sponsors-and-partners/${imageName}`);
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

.sponsors-and-partners__looks-rare-icons,
.sponsors-and-partners__friends-icons,
.sponsors-and-partners__few-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
}

.sponsors-and-partners__looks-rare-icon,
.sponsors-and-partners__few-icon {
  max-width: 275px;
  cursor: pointer;
  width: 100%;
}

.sponsors-and-partners__looks-rare-icons {
  gap: 105px;
  margin-bottom: 90px;
  max-width: 100%;
}

.sponsors-and-partners__looks-rare {
  margin: 25px 0 20px;
}

.sponsors-and-partners__few-icons {
  column-gap: 110px;
  row-gap: 80px;
  margin-bottom: 90px;
}

.sponsors-and-partners__friends-icons {
  column-gap: 115px;
  row-gap: 90px;
  filter: sepia(100%) grayscale(1) brightness(40%) contrast(338%);
  /*margin-bottom: 90px*/
}

.sponsors-and-partners__others-icons {
  column-gap: 115px;
  row-gap: 90px;
  filter: sepia(100%) grayscale(1) brightness(40%) contrast(338%)
}

.sponsors-and-partners__black-white-filter {
  filter: sepia(100%) grayscale(1) brightness(40%) contrast(338%)
}

.sponsors-and-partners__friends-icon {
  max-width: 200px;
  max-height: 95px;
  cursor: pointer;
  width: 100%;
}


.sponsors-and-partners__separation-line {
  background: white;
  height: 3px;
  width: 100%;
  margin: 0;
}

.sponsors-and-partners__title-few {
  margin: 20px 0 45px;
}
</style>
