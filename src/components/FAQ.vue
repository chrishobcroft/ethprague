<template>
  <div class="faq" id="FAQ">

    <div class="faq__wrap-title">
      <SectionTitle title="FAQ about venue" />
    </div>

    <div class="faq__blocks">
      <div v-for="block in blocks" :key="block.title" class="faq__block">
        <div class="faq__block-toggle" :style="{background: block.toggleBgColor}" @click="toggleBlock(block.title)"> 
            <div class="faq__block-title">
              {{block.title}}
            </div>

            <div class="faq__block-toggle-icon-wrap">
              <div :class="['faq__block-toggle-icon', {'faq__block-toggle-icon--upside-down': openBlocks.includes(block.title)}]">
                <span class="faq__block-toggle-icon-carpet" />
              </div>
            </div>
        </div>

        <div v-show="openBlocks.includes(block.title)" class="faq__block-content-container" :style="{background: block.contentBgColor}">
          <div class="faq__block-content-text">
            {{block.text}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionTitle from "@/components/SectionTitle.vue";

const openBlocks = ref(['']);

const toggleBlock = (blockTitle: string) => {
  if (openBlocks.value.includes(blockTitle)) {
    openBlocks.value = openBlocks.value.filter(title => title !== blockTitle)
  } else {
    openBlocks.value.push(blockTitle)
  }
}

const blocks = [
  {
    title: 'what to expect on-site',
    toggleBgColor: '#01ffe5',
    contentBgColor: '#9efff5',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam libero alias rerum placeat ut temporibus vitae minima voluptas nostrum. Eaque ex nulla modi ducimus? Aut perspiciatis magni delectus voluptatem iste beatae, numquam, fugiat at'
  },
   {
    title: 'location',
    toggleBgColor: '#81ff70',
    contentBgColor: '#c1feb8',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam libero alias rerum placeat ut temporibus vitae minima voluptas nostrum. Eaque ex nulla modi ducimus? Aut perspiciatis magni delectus voluptatem iste beatae, numquam, fugiat at, fugit excepturi ducimus omnis ab amet nisi quod dignissimos. Nemo, modi quasi? Aliquid blanditiis temporibus minus enim nulla omnis iste, quidem ipsum incidunt. Illo modi nihil cumque et, tempore qui consectetur alias veniam optio doloremque quibusdam.'
  },
  {
    title: 'sleep & rest',
    toggleBgColor: '#ffff01',
    contentBgColor: '#ffffb2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam libero alias rerum placeat ut temporibus vitae minima voluptas nostrum. Eaque ex nulla modi ducimus? Aut perspiciatis magni delectus voluptatem iste beatae, numquam, fugiat at, fugit excepturi ducimus omnis ab amet nisi quod dignissimos. Nemo, modi quasi? Aliquid blanditiis temporibus minus enim nulla omnis iste, quidem ipsum incidunt. Illo modi nihil cumque et, tempore qui consectetur alias veniam optio doloremque quibusdam.'
  },
 
  
]
</script>
;
<style scoped>

.faq {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px var(--app-padding);
}

.faq__wrap-title {
  max-width: 1100px;
  width: 100%;
  margin-bottom: 30px;
}

.faq__blocks {
  transition: all 0.3s;
  max-width: 1600px;
  width: 100%;
}

.faq__block {
  transition: all 0.3s;
  margin-bottom: 15px;
}

.faq__block-toggle {
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 270px;
  position: relative;
  background-color: yellow;
  height: 145px;
}

@media (min-width: 970px) {
  .faq__block-toggle {
    height: 160px;
  }
}


.faq__block:hover {
  filter: drop-shadow(-8px 8px 8px rgba(0, 0, 0, 0.15));
}

.faq__block-title {

  font-size: 17px;
  color: var(--col-primary-action);
  text-transform: uppercase;
  padding: 0 70px;
  text-align: center;
}

@media (min-width: 500px) {
  .faq__block-title {
    font-size: 20px;
  }
}

@media (min-width: 970px) {
  .faq__block-title {
    font-size: 25px;
  }
}

.faq__block-content-container {
  background: #ffff004f;
  padding: 120px 25px 50px;
  margin-top: -85px;
  border-bottom-right-radius: 85px;
  border-bottom-left-radius: 85px;
}

@media (min-width: 500px) {
  .faq__block-content-container {
    padding: 120px 70px 60px;
  }
}

@media (min-width: 970px) {
  .faq__block-content-container {
    padding: 135px 200px 50px;
  }
}

.faq__block-content-text {
  max-width: 1100px;
  margin: auto;
  font-size: 17px;
}

@media (min-width: 970px) { 
  .faq__block-content-text { 
    font-size: 20px;
  }
}

.faq__block-toggle-icon-wrap {
  position: initial;
}

.faq__block-toggle-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 35px;
  border: solid 2px var(--col-primary-action);
  position: absolute;
  right: 30px;
  top: 55px;
}

@media (min-width: 970px) {

  .faq__block-toggle-icon-wrap {
    position: absolute;
  }
  .faq__block-toggle-icon  {
    width: 41px;
    height: 41px;
    left: 300px;
    position: relative;
    right: unset;
    top: unset;
  }
}

.faq__block-toggle-icon--upside-down {
  transform: rotate(180deg)
}

.faq__block-toggle-icon-carpet {
  border-left: solid 2px var(--col-primary-action);
  border-bottom: solid 2px var(--col-primary-action);
  transform: rotate(-45deg) skew(5deg, 5deg) translate(1px, -1px);
  width: 11px;
  height: 11px;
}

</style>