<template>
  <div id="Hackathon" class="hackathon">

  <div class="hackathon__text-container">
    <SectionTitle title="hackathon awards" />
    <div class="hackathon__text-content">
      We are not doing sponsored tracks instead we want to evaluate the best project in their respective domain. 
    </div>
  </div>

  <div class="hackathon__awards-list">
    <div v-for="award in awards" :class="['hackathon__awards-item', {'hackathon__awards-item-pointer': award.description}]" :key="award.name" @click="showModal(award)">
      <div class="hackathon__awards-item-name">
        {{ award.name }}
      </div>
      <div class="hackathon__awards-item-price">
        {{ award.price }}
      </div>
    </div>
  </div>

    <Transition name="fade">
      <div  v-if="modalContent" class="hackathon__modal-dropdown" @click="modalContent = null">
        <div  class="hackathon__modal" @click.stop >

          <div class="hackathon__modal-title">
            {{ modalContent.name }}
          </div>
          <div class="hackathon__modal-award-price">
            {{ modalContent.price }}
          </div>

          <div v-if="modalContent.description" class="hackathon__modal-description">
            {{ modalContent.description }}
          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
import { ref } from "vue";
type Award = {
  name: string,
  price: string,
  description?: string,
}
const modalContent = ref<Award | null>(null);


const showModal = (award: Award) => {
  if (award.description) {
    modalContent.value = award;
  } else {
    modalContent.value = null;
  }
}

const awards = [
  { 
    name: "sustainability award",
    price: "2500 EUR",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni odio corporis quisquam quaerat, possimus ea iusto assumenda sed illum dicta nostrum labore vero ab adipisci minima fuga animi. Iure."
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
  background-color: var(--col-light-gray-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 var(--app-padding);
}

.hackathon__modal-dropdown {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
}

.hackathon__modal {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  top: 150px;
  position: relative;
  flex: 1;
  width: 93%;
  flex-direction: column;
}

@media (min-width: 970px) { 
  .hackathon__modal {
    width: 80%;
    padding: 50px;
  }
}

.hackathon__modal-award-price {
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
}

.hackathon__modal-description {
  font-size: 15px;
  font-weight: normal;
  margin-bottom: 20px;
}

.hackathon__awards-item-pointer {
  cursor: pointer;
}
.hackathon__text-container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hackathon__text-content {
  max-width: 1100px;
  margin-top: 50px;

  color: black;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 25px;
  line-height: 35px;
}

.hackathon__awards-list {
  margin: 100px 0;
  max-width: 1100px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.hackathon__awards-item {
  transition: all 0.3s;
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  max-width: 353px;
  height: 214px;
  width: 100%;
}

.hackathon__awards-item:hover {
  filter: drop-shadow(-8px 8px 8px rgba(0, 0, 0, 0.15));

}

.hackathon__awards-item:hover .hackathon__awards-item-price {
  
  background-color: var(--col-primary-action);
  color: white;
}

.hackathon__awards-item-name, .hackathon__modal-title {
  font-size: 20px;
  line-height: 35px;
  color: var(--col-primary-action);
  text-transform: uppercase;
}

.hackathon__awards-item-price {
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  text-transform: uppercase;

  font-size: 20px;
  line-height: 35px;
  color: black;

  padding: 13px 15px 11px 15px;

}

@media (min-width: 970px) {
  .hackathon__awards-item-name, .hackathon__modal-title  {
    font-size: 25px;
  }

  .hackathon__awards-item-price {
    font-size: 25px;
  }
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>