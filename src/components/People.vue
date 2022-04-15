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

    <div class="people__list">
      <div class="people__person" v-for="person in selectedPeople" :key="person.name">
        <a
          v-if="person.twitterLink"
          :class="{ 'people__person-image-twitter-link': person.twitterLink }"
          :href="person.twitterLink"
          target="_blank"
        />
        <img  v-if="person.image" class="people__person-image" :alt="person.name" :src="getPersonImage(person.image)" />

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
import { ref, computed } from 'vue'
import SectionTitle from "@/components/SectionTitle.vue";

enum Roles {
  SPEAKER = 'Speaker',
  JUDGE = 'Judge',
  MENTOR = 'Mentor',
  ALL = 'all'
}

const people = [
  {
    name: "Sunny Aggarwal",
    image: "Sunny_Aggarwal.jpg",
    roles: [Roles.SPEAKER],
    company: 'Osmosis Labs',
    twitterLink: ''
  },
  {
    name: "Harsh Rajat",
    image: "Harsh_Rajat.jpg",
    roles: [Roles.SPEAKER],
    company: 'Ethereum Push Notification Service',
    twitterLink: ''
  },
  {
    name: "Julien	Bouteloup",
    image: "Julien_Bouteloup.jpg",
    roles: [Roles.SPEAKER],
    company: 'StakeDAO',
    twitterLink: ''
  },
  // {
  //   name: "Guillaume	Ballet",
  //   image: "",
  //   roles: [Roles.SPEAKER],
  //   company: 'Ethereum Foundation',
  //   twitterLink: ''
  // },
  {
    name: "Franziska Heintel",
    image: "Franziska_Heintel.jpg",
    roles: [Roles.SPEAKER],
    company: 'Ethereum Foundation',
    twitterLink: ''
  },
  {
    name: "Avihu Levy",
    image: "Avihu_Levy.jpg",
    roles: [Roles.SPEAKER],
    company: 'StarkWare',
    twitterLink: ''
  },
  {
    name: "Austin	Griffith",
    image: "Austin_Griffith.jpg",
    roles: [Roles.SPEAKER],
    company: 'Ethereum Foundation',
    twitterLink: ''
  },
  {
    name: "Afri	Schoedon",
    image: "Afri_Schoedon.jpg",
    roles: [Roles.JUDGE],
    company: 'ChainSafe Systems',
    twitterLink: ''
  },
  {
    name: "Jaye	Harrill",
    image: "Jaye_Harrill.jpg",
    roles: [Roles.SPEAKER],
    company: 'Quantstamp',
    twitterLink: ''
  },
  {
    name: "Clément Leseage",
    image: "Clement_Lesaege.jpg",
    roles: [Roles.SPEAKER],
    company: 'Kleros',
    twitterLink: ''
  },
  {
    name: "Steven	Waterhouse",
    image: "Steven_Waterhouse.jpg",
    roles: [Roles.SPEAKER],
    company: 'Orchid Labs',
    twitterLink: ''
  },
  {
    name: "Zaki	Manian",
    image: "Zaki_Manian.jpg",
    roles: [Roles.SPEAKER],
    company: 'Sommelier',
    twitterLink: ''
  },
]

const showPeopleWithRole = ref(Roles.ALL)

const selectedPeople = computed(() => {
  if (showPeopleWithRole.value === Roles.ALL) {
    return people
  }
  return people.filter(person => person.roles.includes(showPeopleWithRole.value))
})

const getPersonImage = (image: string) => {
  return require('../assets/people/' + image)
}
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
}

.people__person-image-twitter-link {
  height: 230px;
  width: 230px;
  position: absolute;
  transition: all 0.35s;
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.people__person-image-twitter-link:hover {
  background-image: url("~@/assets/twitter_white.svg");
  background-color: #5500ff99;
  cursor: pointer;
}
</style>