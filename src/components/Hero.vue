<template>
  <div class="hero">
    <div class="hero__image-desktop">
      <img class="hero__image-eth" src="../assets/hero/hero_eth.svg" />
      <img class="hero__image-polis" src="../assets/hero/hero_polis.svg" />
      <img class="hero__image-text" src="../assets/hero/hero_text.svg" />
      <img class="hero__image-prague" src="../assets/hero/hero_prague.svg" />
      <img class="hero__image-main-image" :src="getHeroImage(DeviceType.DESKTOP)" />
    </div>
    <img class="hero__image-mobile" :src="getHeroImage(DeviceType.MOBIL)" alt="hero" />
  </div>
  <div class="hero__event-date">
    <div class="hero__event-date-text">
      <span>ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp;</span>
    </div>

    <div class="hero__event-date-text hero__event-date-text2">
      <span>ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp; ETH Prague &nbsp; June 10th — 12th &nbsp;</span>
    </div>
    <div class="hero__event-date-text-mobile">ETH Prague <br/> June 10th — 12th</div>
  </div>
</template>

<script setup lang="ts">

enum DeviceType {
  MOBIL = 'mobile',
  DESKTOP = 'desktop',
}

const getHeroImage = (forDevice: string) => {
  const randomHeroNum = Math.floor(Math.random() * 3) + 1;
  switch (forDevice) {
    case DeviceType.MOBIL:
      return require(`../assets/hero/hero_mobile_${randomHeroNum}.webp`)
    case DeviceType.DESKTOP:
      return require(`../assets/hero/hero_${randomHeroNum}.webp`)
  }
}

</script>

<style scoped>
.hero {
  background: linear-gradient(180deg, #00ffe5 0%, #88ff6b 35.42%, #ffff00 100%);
  transform: matrix(1, 0, 0, -1, 0, 0);
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero__image-desktop {
  transform: matrix(1, 0, 0, -1, 0, 0);
  display: none;
  height: 700px;
  width: 1100px;
  position: relative;
}

.hero__image-mobile {
  transform: matrix(1, 0, 0, -1, 0, 0);
  max-width: 100%;
  padding: 15px;
}

.hero__event-date {
  align-items: center;
  background-color: var(--col-primary-accent);
  color: var(--col-primary-action);
  display: flex;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 40px;
  height: 150px;
  letter-spacing: 0em;
  line-height: 47px;
  overflow: hidden;
  position: relative;
  text-align: center;
  white-space: nowrap;
  margin: 0 auto;
}

.hero__image-eth {
  position: absolute;
  top: 53px;
  left: 0;
}
.hero__image-polis {
  position: absolute;
  top: 53px;
  right: 0;
}
.hero__image-text {
  position: absolute;
  right: 10px;
  bottom: 50px;
}
.hero__image-prague {
  position: absolute;
  bottom: 15px;
  right: 275px;
  z-index: 10;
}
.hero__image-main-image {
  position: absolute;
  bottom: -150px;
  right: 250px;
  width: 605px;
}

.hero__event-date-text {
  display: none;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
}

.hero__event-date-text-mobile {
  text-align: center;
  width: 100%;
}

.hero__event-date-text span {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 70s linear infinite;
}

.hero__event-date-text2 span {
  animation-delay: 35s;
}

@keyframes marquee {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }
}

@media (min-width: 1120px) {
  .hero__image-desktop {
    display: block;
  }

  .hero__image-mobile {
    display: none;
  }
}

@media (max-width: 1120px) {
  .hero__event-date {
    height: 110px;
    font-size: 27px;
    line-height: 37px;
  }
}

@media (min-width: 600px) {
  .hero__event-date-text {
    display: block;
  }

  .hero__event-date-text-mobile {
    display: none;
  }
}
</style>
