<template>
  <div id="Speakers" class="people">
    <div class="people__header">
      <SectionTitle title="people" />
      <div class="people__header-menu">
        <button
          @click="showPeopleWithRole = Roles.ALL"
          :class="headerMenuButtonClasses(Roles.ALL)"
        >all</button>
        <button
          @click="showPeopleWithRole = Roles.SPEAKER"
          :class="headerMenuButtonClasses(Roles.SPEAKER)"
        >speakers</button>
        <button
          @click="showPeopleWithRole = Roles.JUDGE"
          :class="headerMenuButtonClasses(Roles.JUDGE)"
        >judges</button>
        <button
          @click="showPeopleWithRole = Roles.MENTOR"
          :class="headerMenuButtonClasses(Roles.MENTOR)"
        >mentors</button>
      </div>
    </div>

    <div class="people__list" v-if="selectedPeople">
      <div class="people__person" v-for="person in selectedPeople" :key="person.name" >
        <a
          v-if="person.twitterLink"
          :class="{ 'people__person-image-twitter-link': person.twitterLink }"
          :href="person.twitterLink"
          target="_blank"
        />

        <Image :cssClass="['people__person-image', {'people__person-image--purple-filter': !Boolean(person.isImageEdited)} ]" :src="getPersonImage({person, peopleData, isGoogleDataCorrupted })" :fallbackImageA="getPersonImage({person, isFallback: true, isGoogleDataCorrupted})" :fallbackImageB="require('../assets/people/default.jpg')" />

        <div class="people__person-name">{{ person.name }}</div>

        <div class="people__person-company">{{ person.company }}</div>

        <div class="people__person-roles">
          <div class="people__person-role" v-for="role in person.roles" :key="role">{{ role }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import SectionTitle from "@/components/SectionTitle.vue"
import { Roles, peopleFallback } from "@/components/people"
import Image from "@/components/Image.vue"
import {peopleData, getPersonImage, isGoogleDataCorrupted, fetchPeopleData} from '@/components/usePeople'

onMounted( async () => {
  fetchPeopleData()
})

const showPeopleWithRole = ref(Roles.ALL)

const selectedPeople = computed(() => {

  if(!peopleData.value || isGoogleDataCorrupted.value) {
    if (showPeopleWithRole.value === Roles.ALL) {
      return peopleFallback;
    }
    return peopleFallback.filter(person => person.roles.includes(showPeopleWithRole.value));
  }

  if (showPeopleWithRole.value === Roles.ALL) {
    return peopleData.value
  }
  return (peopleData.value).filter(person => person.roles.includes(showPeopleWithRole.value))
});

const headerMenuButtonClasses = (role: string) => `people__header-menu-button ${showPeopleWithRole.value === role ? 'people__header-menu-button-active' : ''}`

</script>

<style scoped>
.people {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 var(--app-padding);
}

.people__header {
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  justify-content: space-between;
  gap: 30px;
}

@media only screen and (min-width: 1120px) {
  .people__header {
    flex-direction: row;
  }
}
.people__header-menu-button {
  border-radius: 18px;
  border: 1px solid #000000;
  padding: 9px 22px;
  margin-left: 10px;

  font-weight: 300;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 22px;
}

.people__header-menu-button-active {
  border: 1px solid var(--col-primary-action);
  background-color: var(--col-primary-action);
  color: white;
  font-weight: 300;
}
.people__list {
  margin: 100px 0;
  justify-content: center;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.people__person {
  width: 230px;
  height: 395px;
}

.people__person-name {
  font-size: 25px;
  line-height: 27px;
  text-align: center;
  color: black;
  width: 230px;
}

.people__person-company {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: black;
}

.people__person-roles {
  margin-top: 15px;
  width: 230px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.people__person-role {
  font-size: 15px;
  line-height: 25px;
  margin-left: 10px;
  color: black;
  text-decoration: underline;
}

.people__person-image {
  width: 230px;
  height: 230px;
  border-radius: 250px;
  margin-bottom: 30px;
  object-fit: cover;
}

.people__person-image-twitter-link {
  height: 230px;
  width: 230px;
  position: absolute;
  transition: all 0.35s;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
}
.people__person-image-twitter-link:hover {
  background-image: url("~@/assets/twitter_white.svg");
  background-color: #5500ff99;
  cursor: pointer;
}

.people__person-image--purple-filter {
  filter: brightness(56%) invert(17%) sepia(100%) saturate(631%) hue-rotate(214deg) brightness(120%) contrast(131%)
}
</style>