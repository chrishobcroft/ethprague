<template>
  <div>
    <Transition name="fade">
      <div v-if="modalContent" class="modal__dropdown" @click="closeModal">
        <div class="modal" @click.stop>
          <div class="modal__close-wrap">
            <div class="modal__close" @click="closeModal">X</div>
          </div>

          <div class="modal__title">
            {{ modalContent.title }}
          </div>
          <div class="modal__date-duration-place">
            {{ formatDate(modalContent.date) }} >
            {{ formatDuration(modalContent.start, modalContent.duration) }} >
            {{ modalContent.room }}
          </div>

          <div class="modal__abstract">
            {{ modalContent.abstract }}
          </div>

          <div class="modal__description-text">
            {{ modalContent.description }}
          </div>

          <div class="modal__separator" />

          <div
            v-for="person in modalContent.persons"
            :key="person.public_name"
            class="modal__person"
          >
            <div>
              <Image
                :cssClass="['modal__person-image', {'modal__person-image--purple-filter': !Boolean(findPersonByName(person) ? (findPersonByName(person) as Person).isImageEdited : undefined)} ]"
                :src="getPersonImage({person: findPersonByName(person) as Person, peopleData, isGoogleDataCorrupted })"
                :fallbackImageA="getPersonImage({person: findPersonByName(person) as Person, isFallback: true, isGoogleDataCorrupted})"
                :fallbackImageB="require('../../assets/people/default.jpg')"
              />
            </div>

            <div class="modal__person-bio">
              <div class="modal__person-bio-name">
                {{ person.public_name }}
              </div>
              <div v-html="person.biography" class="modal__person-bio-detail" />
                <!-- {{ person.biography }} -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
  Person,
  peopleData,
  getPersonImage,
  isGoogleDataCorrupted,
  findPersonByName,
} from "@/components/usePeople";
import Image from "@/components/Image.vue";

const props = defineProps<{
  modelValue?: any;
}>();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const hoursToMinutes = (time: string) => {
  const hours = parseInt(time.substr(0, 2));
  const minutes = parseInt(time.substr(3, 2));
  return hours * 60 + minutes;
};

const minutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  return `${hours}:${minutesLeft < 10 ? "0" + minutesLeft : minutesLeft}`;
};

const formatDuration = (start: string, duration: string) => {
  const startMinutes = hoursToMinutes(start);
  const durationMinutes = hoursToMinutes(duration);
  const end = minutesToHours(startMinutes + durationMinutes);
  return `${start} - ${end}`;
};
const closeModal = () => {
  
  
  modalContent.value = null;
};

const emit = defineEmits<{
  (e: "update:modelValue", modalContent: any): void;
}>();

const modalContent = computed({
  get: (): any => props.modelValue,
  set: (modalContent: any): void => emit("update:modelValue", modalContent),
});
</script>

<style scoped>
.modal__dropdown {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.modal {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  top: 110px;
  position: relative;
  flex: 1;
  width: 93%;
  flex-direction: column;
  overflow: auto;
  max-height: 75vh;
}

.modal__close {
  position: absolute;
  cursor: pointer;
  top: -0.2rem;
  right: 1rem;
  font-size: 20px;
  color: #333;
  padding: 10px;
}

.modal__close-wrap {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: -1rem;
  margin-top: -2rem;
}
.modal__abstract {
  font-size: 14px;
  margin-bottom: 2rem;
  color: var(--col-primary-action);
}

.modal__description-text {
  font-size: 14px;
  margin-bottom: 3.5rem;
  color: black;
  white-space: pre-line;
}

@media (min-width: 970px) {
  .modal {
    width: 80%;
    padding: 50px;
  }
}

.modal__description {
  font-size: 15px;
  font-weight: normal;
  margin-bottom: 20px;
}

.text-content {
  max-width: 1100px;
  margin-top: 50px;
  color: black;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 25px;
  line-height: 35px;
}

.modal__title {
  font-size: 15px;
  /* line-height: 22px; */
  color: var(--col-primary-action);
  text-transform: uppercase;
  margin-top: 3.5rem;
}

.modal__date-duration-place {
  font-size: 15px;
  /* line-height: 22px; */
  color: grey;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

@media (min-width: 970px) {
  .modal__title {
    font-size: 17px;
  }
}



.modal__person {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 20px;
}

@media (min-width: 600px) {
  .modal__person {
    flex-direction: row;

  }
}

.modal__person-image--purple-filter {
  filter: brightness(56%) invert(17%) sepia(100%) saturate(631%)
    hue-rotate(214deg) brightness(120%) contrast(131%);
}

.modal__person-image {
  width: 120px;
  height: 120px;
  border-radius: 250px;
  object-fit: cover;
}

.modal__person-bio {
  display: flex;
  flex-direction: column;

}

.modal__person-bio-name {
  font-size: 15px;
  /* line-height: 22px; */
  color: var(--col-primary-action);
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.modal__person-bio-detail {
  font-size: 14px;
  /* line-height: 22px; */
  color: black;
  margin-bottom: 2rem;
}

.modal__description, .modal__abstract, .modal__description-text, .modal__person-bio-detail, .modal__person-bio-name, .modal__date-duration-place,   {
    white-space: pre-line;
  }

@media (min-width: 1120px) {
  .modal__title, .modal__date-duration-place, .modal__person-bio-name {
    font-size: 25px;
    line-height: 29px;
  }

  .modal__description, .modal__abstract, .modal__description-text, .modal__person-bio-detail  {
    font-size: 17px;
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
