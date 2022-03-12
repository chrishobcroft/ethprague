<template>
  <div class="hero">
    <div class="hero__image">
      <img src="../assets/hero.png" alt="hero"/>
    </div>
    <div class="hero__event-date">
      <span>
        10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.  ETH Prague 10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.  ETH Prague 10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.  ETH Prague 10. 6. — 12. 6.  ETH Prague  10. 6. — 12. 6.
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
}

.hero__image {
  height: 700px;
}

.hero__event-date {
  height: 150px;
  background-color: var(--col-primary-accent);
  overflow: hidden;
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

</style>