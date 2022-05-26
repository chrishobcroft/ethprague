<template>
  <div id="Schedule" class="schedule">
    <div class="schedule__header">
      <div class="schedule__section-buttons">
        <button
          @click="showSection = Sections.SCHEDULE"
          :class="headerSectionsButtonClasses(Sections.SCHEDULE)"
        >
          schedule
        </button>
        <!-- <button
          @click="showSection = Sections.SPEAKERS"
          :class="headerSectionsButtonClasses(Sections.SPEAKERS)"
        >
          speakers
        </button> -->
      </div>

      <div class="schedule__dates-buttons">
        <a href="#Friday">
          
          <button
          @click="showDate = Dates.FRIDAY"
          :class="headerDatesButtonClasses(Dates.FRIDAY)"
        >
          FRIDAY 10. JUNE
        </button>
        </a>
        <a href="#Saturday">
          <button
            @click="showDate = Dates.SATURDAY"
            :class="headerDatesButtonClasses(Dates.SATURDAY)"
          >
            SATURDAY 11. JUNE
          </button>

        </a>
        <a href="#Sunday">
          <button
            @click="showDate = Dates.SUNDAY"
            :class="headerDatesButtonClasses(Dates.SUNDAY)"
          >
            SUNDAY 12. JUNE
          </button>
        </a>
      </div>
    </div>

    <div v-if="scheduleJsonData" class="schedule__content">
      <div id="Friday" class="schedule__day-title">
        Friday 10. June
      </div>
      <ScheduleEventBox v-for="event in friday" :key="event.id" @click="setModalContent(event)" :event="event"/>

      <div id="Saturday" class="schedule__day-title">
        Saturday 11. June
      </div>
      <ScheduleEventBox v-for="event in saturday" :key="event.id" @click="setModalContent(event)" :event="event"/>
      <div id="Sunday" class="schedule__day-title">
        Sunday 12. June
      </div>
      <ScheduleEventBox v-for="event in sunday" :key="event.id" @click="setModalContent(event)" :event="event"/>
      </div>

    </div>

    <ModalSchedule 
      v-model="modalContent"
    />
</template>

<script setup lang="ts">
import { toRefs, computed, ref, onMounted } from "vue";
import ModalSchedule from "./ModalSchedule.vue";
import ScheduleEventBox from "./ScheduleEventBox.vue";

const axios = require("axios").default;

enum Sections {
  SCHEDULE = "schedule",
  SESSIONS = "sessions",
  SPEAKERS = "speakers",
}

enum Dates {
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}
const showSection = ref(Sections.SCHEDULE);
const showDate = ref(Dates.FRIDAY);
const scheduleJsonData = ref();
const loadingData = ref(true);
const friday = ref();
const saturday = ref();
const sunday = ref();

const modalContent = ref<any | null>(null);

const headerSectionsButtonClasses = (section: string) =>
  `schedule__header-sections-button ${
    showSection.value === section
      ? "schedule__header-sections-button-active"
      : ""
  }`;

const headerDatesButtonClasses = (date: string) =>
  `schedule__header-dates-button ${
    showDate.value === date ? "schedule__header-dates-button-active" : ""
  }`;

const mergeEvents = (scheduleJsonData: any) => {
  const venues = [
    ...scheduleJsonData["Paralelní Polis - Institute of Cryptoanarchy"],
    ...scheduleJsonData["La Fabrika"],
  ];
  return venues.sort((a: any, b: any) => {
    return (
      Date.parse("01/01/2022 " + a.start) - Date.parse("01/01/2022 " + b.start)
    );
  });
};

const setModalContent = (event: any) => {
  modalContent.value = event
  
}

onMounted(async () => {
  try {
    loadingData.value = true;
    const jsonDataFetch = await axios.get(
      "https://cfp.paralelnipolis.cz/ethprague-2022/schedule/export/schedule.json"
    );
    scheduleJsonData.value = jsonDataFetch.data.schedule.conference.days;
    
    loadingData.value = false;
  } catch (e) {
    loadingData.value = false;
  }
  friday.value = mergeEvents(scheduleJsonData.value[0].rooms);
  saturday.value = mergeEvents(scheduleJsonData.value[1].rooms);
  sunday.value = mergeEvents(scheduleJsonData.value[2].rooms);
  
});
</script>

<style scoped>
.schedule {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.schedule__content {
  background-color: var(--col-light-gray-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px var(--app-padding);
}

.schedule__header {
  background-color: white;
  width: 100%;
  padding: 100px var(--app-padding) 0;
  position: sticky;
  top: -100px;
  z-index: 10;
  overflow: auto;
}

@media (min-width: 650px) {
  .schedule__header {
    padding: 100px var(--app-padding) 0;
  }
}

.schedule__section-buttons {
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 7px;
  margin-bottom: 5rem;
}
.schedule__header-sections-button {
  border-radius: 0;
  border: 1px solid #000000;
  padding: 9px 22px;
  margin-left: 10px;

  font-weight: 300;
  text-transform: uppercase;
  font-size: 17px;
  line-height: 22px;
}

.schedule__header-sections-button-active {
  border: 1px solid var(--col-primary-accent);
  background-color: var(--col-primary-accent);
  color: var(--col-primary-action);
  font-weight: 300;
}


.schedule__dates-buttons {
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 7px;
  margin-bottom: 0.5rem;
}

@media (min-width: 650px) {
  .schedule__dates-buttons {
    justify-content: center;
    margin-bottom: 2rem;
  }
}

.schedule__header-dates-button {
  border-radius: 18px;
  border: 1px solid #000000;
  padding: 9px 22px;
  margin: 0;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 22px;
}

.schedule__header-dates-button-active {
  border: 1px solid var(--col-primary-action);
  background-color: var(--col-primary-action);
  color: white;
  font-weight: 300;
}

.schedule__day-title {
  font-size: 25px;
  margin: 5rem 0 2rem 0;
  color: var(--col-primary-action);
  scroll-margin-top: 160px;
}

@media (min-width: 650px) {
  .schedule__day-title {
    font-size: 30px;
    text-align: center;
    /* scroll-margin-top: 100px; */
  }
}
</style>
