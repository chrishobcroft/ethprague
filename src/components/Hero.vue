<template>
  <div class="hero">
    <div class="hero__image">
      <picture>
        <source media="(min-width: 1120px)" srcset="../assets/hero.webp">
        <img class="hero__image-mobile" src="../assets/hero-mobile.webp" alt="hero">
      </picture>
    </div>

    <div class="hero__event-date">
      <span class="hero__event-date-text">
        ETH Prague  10. 6. — 12. 6.  ETH Prague 10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.  ETH Prague 10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.  ETH Prague 10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.
      </span>
    </div>
  </div>
</template>

<style scoped>

.hero {
  background: linear-gradient(180deg, #00FFE5 0%, #88FF6B 35.42%, #FFFF00 100%);
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero__image {
  margin-bottom: -10px;
}

.hero__image-mobile {
  max-width: 100%;
  padding: 15px;
}

.hero__event-date {
  height: 150px;
  background-color: var(--col-primary-accent);
  display: flex;
  align-items: center;

  color: var(--col-primary-action);
  white-space: nowrap;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 40px;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: center;
}

@media (max-width: 1120px) { 
  .hero__event-date {
    height: 110px;
    font-size: 27px;
    line-height: 37px;
    white-space: normal;
  }
  .hero__event-date-text {
    max-height: 35px;
    overflow: hidden;
  }
}

</style>