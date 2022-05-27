<template>
  <div class="speakers">
    <div
      v-for="person in speakers"
      :key="person.public_name"
      class="speakers__person"
    >
      <div>
        <Image
          :cssClass="['speakers__person-image', {'speakers__person-image--purple-filter': !Boolean(findPersonByName(person) ? (findPersonByName(person) as Person).isImageEdited : undefined)} ]"
          :src="getPersonImage({person: findPersonByName(person) as Person, peopleData, isGoogleDataCorrupted })"
          :fallbackImageA="getPersonImage({person: findPersonByName(person) as Person, isFallback: true, isGoogleDataCorrupted})"
          :fallbackImageB="require('../../assets/people/default.jpg')"
        />
      </div>
      <div class="speakers__person-bio">
        <div class="speakers__person-bio-name">
          {{ person.public_name }}
        </div>
        <div class="speakers__person-bio-detail">
          {{ person.biography }}
        </div>

        <div class="speakers__person-event-name">
          {{ getPersonEventName(person.public_name)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Person,
  peopleData,
  getPersonImage,
  isGoogleDataCorrupted,
  findPersonByName,
} from "@/components/usePeople";
import Image from "@/components/Image.vue";

const props = defineProps<{
  speakers?: any;
  allEvents?: any;
}>();

const getPersonEventName = (personName: string) => {
  const foundPersonEvent = props.allEvents.find(
    (event: any) => {
      return event.persons.find((person: any) => person.public_name === personName)
      }
  );
  return foundPersonEvent ? foundPersonEvent.title : "";
};

</script>

<style scoped>
.speakers {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px var(--app-padding);
  width: 100%;
  background-color: var(--col-light-gray-bg);
}

.speakers__person {
  flex-direction: column;
  margin-bottom: 20px;
  gap: 1.5rem;
  max-width: 1100px;
  width: 100%;
  display: flex;
  background-color: white;
  border-radius: 18px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  padding: 1.5rem;
  word-break: break-word;
}

@media (min-width: 600px) {
  .speakers__person {
    flex-direction: row;
  }
}

.speakers__person-image--purple-filter {
  filter: brightness(56%) invert(17%) sepia(100%) saturate(631%)
    hue-rotate(214deg) brightness(120%) contrast(131%);
}

.speakers__person-image {
  width: 120px;
  height: 120px;
  border-radius: 250px;
  object-fit: cover;
}

.speakers__person-event-name {
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.5);
  /* text-transform: uppercase; */
  margin-bottom: 1rem;
}

.speakers__person-bio {
  display: flex;
  flex-direction: column;
}

.speakers__person-bio-name {
  font-size: 17px;
  line-height: 22px;
  color: var(--col-primary-action);
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.speakers__person-bio-detail {
  font-size: 15px;
  line-height: 22px;
  color: black;
  margin-bottom: 2rem;
}

@media (min-width: 650px) {
.speakers__person-event-name {
  font-size: 15px;
  line-height: 22px;
  }

  .speakers__person-bio-name {
      font-size: 25px;
    line-height: 29px;
  }

  .speakers__person-bio-detail {
  font-size: 17px;
  }

  .speakers__person {
    padding: 2.5rem;
  }
}
</style>
