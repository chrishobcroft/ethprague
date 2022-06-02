<template>
  <div id="manifesto-buttons" />
  <div class="manifesto">
    <h1>
      Tickets are sold out & applications are now closed!
    </h1>
    <div class="manifesto__buttons">
      <div class="manifesto__buttons-row">
<!--        <a-->
<!--          href="https://cf23uhv4kuq.typeform.com/to/XABwNH5T"-->
<!--          target="_blank"-->
<!--          class="manifesto__button-link"-->
<!--        >-->
<!--          <button class="manifesto__button">-->
<!--            Join waiting list <span class="manifesto__headless-arrow" />-->
<!--          </button>-->
<!--        </a>-->

<!--        <a-->
<!--          href="https://cf23uhv4kuq.typeform.com/to/lZwG0Eq3"-->
<!--          target="_blank"-->
<!--          class="manifesto__button-link"-->
<!--        >-->
<!--          <button class="manifesto__button">-->
<!--            Apply to help <span class="manifesto__headless-arrow" />-->
<!--          </button>-->
<!--        </a>-->
        <!-- <a
        href="https://cfp.paralelnipolis.cz/ethprague-2022/"
        target="_blank"
        class="manifesto__button-link"
      >
        <button class="manifesto__button">Apply to speak <span class="manifesto__headless-arrow"/></button>
      </a> -->
      </div>
      <div class="manifesto__buttons-row">
<!--        <a-->
<!--          href="https://tickets.paralelnipolis.cz/dtp/ethprague2022/?"-->
<!--          target="_blank"-->
<!--          class="manifesto__button-link"-->
<!--        >-->
<!--          <button class="manifesto__button">-->
<!--            Get a ticket<span class="manifesto__headless-arrow" />-->
<!--          </button>-->
<!--        </a>-->
        <router-link class="manifesto__button-link" to="/schedule">
          <button class="manifesto__button">
            See schedule <span class="manifesto__headless-arrow" />
          </button>
        </router-link>
        <!--      <a-->
        <!--        href="https://cf23uhv4kuq.typeform.com/to/XABwNH5T"-->
        <!--        target="_blank"-->
        <!--        class="manifesto__button-link"-->
        <!--      >-->
        <!--        <button class="manifesto__button">Apply for scholarships <span class="manifesto__headless-arrow"/></button>-->
        <!--      </a>-->
      </div>
    </div>

    <div id="Manifesto" class="manifesto__text-container">
      <SectionTitle title="manifesto" />
      <div class="manifesto__text-content">
        ETHPrague isn’t looking for the next get rich quickly scheme or groundbreaking DeFi apps, instead it’s an event focusing on the future potential of Ethereum and concepts or applications which don’t yet exist. We want to tackle challenges which will or might arise in the next decade and we believe Ethereum will play a major role in solving these. The future is in your hands, anon! You decide whether we end up living in a dark authoritarian dystopia or a bright solarpunk utopia.
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
  padding: 0 var(--app-padding);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  text-align: justify;
}
.manifesto__buttons,
.manifesto__buttons-row-one-button {
  max-width: 1600px;
  display: flex;
  width: 100%;
  gap: 25px;
  flex-direction: column;
  align-items: center;
}

.manifesto__buttons {
  justify-content: space-between;
}

.manifesto__buttons-row-one-button {
  justify-content: center;
}
.manifesto__button {
  transition: all 0.3s;
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

  position: relative;
}

.manifesto__button-one-button {
  max-width: 50%;
  margin: auto;
}

@media (max-width: 1120px) {
  .manifesto__button {
    font-size: 20px;
    height: 150px;
  }
}

@media (max-width: 600px) {
  .manifesto__button {
    font-size: 15px;
    height: 120px;
    white-space: break-spaces;
  }
}

.manifesto__buttons-row {
  display: flex;
  column-gap: 30px;
  width: 100%;
}

@media (max-width: 1120px) {
  .manifesto__buttons-row {
    flex-wrap: wrap;
    gap: 30px;
  }
  .manifesto__button-one-button {
    max-width: 100%;
  }
}

.manifesto__button:hover,
.manifesto__button:focus {
  border: solid 2px var(--col-primary-action);
  color: white;
  box-shadow: inset 30px -8em 0 0 var(--col-primary-action);
}

.manifesto__button:hover .manifesto__headless-arrow {
  border-left: solid 2px white;
  border-bottom: solid 2px white;
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
  max-width: 100%;
}

.manifesto__text-content {
  width: 1100px;
  max-width: 100%;
  margin-top: 40px;

  color: var(--col-primary-action);
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 40px;
  line-height: 51px;
}

@media (max-width: 1120px) {
  .manifesto__text-content {
    font-size: 30px;
    line-height: 40px;
  }
}

@media (max-width: 600px) {
  .manifesto__text-content {
    font-size: 23px;
    line-height: 35px;
  }
}

.manifesto__headless-arrow {
  border-left: solid 2px var(--col-primary-action);
  border-bottom: solid 2px var(--col-primary-action);
  transform: rotate(-135deg) skew(5deg, 5deg) translate(1px, -1px);
  width: 12px;
  height: 12px;
  margin: 0 12px 2px;
}

#manifesto-buttons {
  display: block;
  position: relative;
  top: -80px;
  visibility: hidden;
}
</style>
