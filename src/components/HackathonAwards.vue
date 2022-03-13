<template>
  <div id="Hackathon" class="hackathon">

  <div class="hackathon__text-container">
    <SectionTitle title="hackathon awards" />
    <div class="hackathon__text-content">
      We are not doing sponsored tracks instead we want to evaluate the best project in their respective domain. 
    </div>
  </div>

  <div class="hackathon__awards-list">
    <div class="hackathon__awards-item" v-for="award in awards" :key="award.name">
      <div class="hackathon__awards-item-name">
        {{ award.name }}
      </div>
      <div class="hackathon__awards-item-price">
        {{ award.price }}
      </div>
    </div>
  </div>

  </div>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";

const awards = [
  { 
    name: "sustainability award",
    price: "2500 EUR",
  },
  { 
    name: "urbanism award",
    price: "2500 EUR",
  },
   { 
    name: "urbanism award",
    price: "2500 EUR",
  },
  { 
  name: "infrastructure award",
  price: "2500 EUR",
  },
  { 
    name: "user experience award",
    price: "2500 EUR",
  },
  { 
    name: "smart contract design award",
    price: "2500 EUR",
  },
]

</script>

<style scoped>

.hackathon {
  background-color: rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.hackathon__text-container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hackathon__text-content {
  width: 1100px;
  margin-top: 50px;

  color: black;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 25px;
  line-height: 35px;
}

.hackathon__awards-list {
  margin: 100px 0;
  width: 1100px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

}

.hackathon__awards-item {
  transition: all 0.3s;
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 353px;
  height: 214px;
}

.hackathon__awards-item:hover {
  filter: drop-shadow(-8px 8px 8px rgba(0, 0, 0, 0.15));

}

.hackathon__awards-item:hover .hackathon__awards-item-price {
  
  background-color: var(--col-primary-action);
  color: white;
}

.hackathon__awards-item-name {
  font-size: 25px;
  line-height: 35px;
  color: var(--col-primary-action);
  text-transform: uppercase;
}

.hackathon__awards-item-price {
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  text-transform: uppercase;

  font-size: 25px;
  line-height: 35px;
  color: black;

  padding: 13px 15px 11px 15px;

}

</style>