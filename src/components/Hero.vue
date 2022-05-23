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
		<div class="hero__event-date-marquee-block">
			<div class="hero__event-date-marquee-inner to-right">
				<span>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
				</span>
				<span>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
				</span>
		</div>
	</div>
    <div class="hero__event-date-text-mobile">ETH Prague <br/> June 10th — 12th</div>
  </div>
</template>

<script setup lang="ts">

enum DeviceType {
  MOBIL = 'mobile',
  DESKTOP = 'desktop',
}

const stripe = 'ETH Prague \u00A0  June 10th — 12th \u00A0'.repeat(3)

const getHeroImage = (forDevice: string) => {
  const randomHeroNum = Math.floor(Math.random() * 4) + 1;
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

.hero__event-date {
  --marquee-block-width--mobile: 470px;
  --marquee-block-width--desktop: 680px;
  overflow: hidden;
  background-color: var(--col-primary-accent);
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  height: 110px;
  font-size: 27px;
  color: var(--col-primary-action);
  display: flex;
  align-items: center;
}

.hero__event-date-marquee-block {
  --total-marquee-items: 5;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: none;
  align-items: center;
  width: calc((var(--marquee-block-width--mobile)) * (var(--total-marquee-items)));
}
.hero__event-date-marquee-inner {
  width: 200%;
  position: absolute;
}

.hero__event-date-marquee-inner.to-right {
  animation: marqueeRight 25s linear infinite;
}
.hero__event-date-marquee-item {
  width: var(--marquee-block-width--mobile);
  display: inline-block;
  transition: all .2s ease-out;
}

@keyframes marqueeRight {
  0% { 
    left: -100%; 
  }
  100% {
   left: 0; 
  }
}

.hero__event-date-text-mobile {
  text-align: center;
  width: 100%;
}

@media (min-width: 1120px) {
  .hero__image-desktop {
    display: block;
  }

  .hero__event-date {
    height: 150px;
    font-size: 40px;
  }
  .hero__event-date-marquee-block {
    display: flex;
    width: calc((var(--marquee-block-width--desktop)) * (var(--total-marquee-items)));
  }
  .hero__event-date-marquee-item {
    width: var(--marquee-block-width--desktop);
  }
  
  .hero__image-mobile {
    display: none;
  }
}

@media (min-width: 600px) {
  .hero__event-date-marquee-block {
    display: flex;
  }

  .hero__event-date-text-mobile {
    display: none;
  }

  .hero__event-date {
    display: block;
  }
}
</style>
