<template>
  <div id="Schedule" class="schedule">
    <div :class="['schedule__header', {'schedule__header-speakers': showSection === Sections.SPEAKERS}]">
      <div class="schedule__section-buttons">
        <button
          @click="showSection = Sections.SCHEDULE"
          :class="headerSectionsButtonClasses(Sections.SCHEDULE)"
        >
          schedule
        </button>
        <button
          @click="showSection = Sections.SPEAKERS"
          :class="headerSectionsButtonClasses(Sections.SPEAKERS)"
        >
          speakers
        </button>
      </div>

      <div v-if="showSection === Sections.SCHEDULE" class="schedule__dates-buttons">
        <a href="#Friday">
          
          <button
          @click="onDateClick(Dates.FRIDAY)"
          :class="headerDatesButtonClasses(Dates.FRIDAY)"
        >
          FRIDAY 10. JUNE
        </button>
        </a>
        <a href="#Saturday">
          <button
            @click="onDateClick(Dates.SATURDAY)"
            :class="headerDatesButtonClasses(Dates.SATURDAY)"
          >
            SATURDAY 11. JUNE
          </button>

        </a>
        <a href="#Sunday">
          <button
            @click="onDateClick(Dates.SUNDAY)"
            :class="headerDatesButtonClasses(Dates.SUNDAY)"
          >
            SUNDAY 12. JUNE
          </button>
        </a>
      </div>
    </div>

    <Speakers v-if="showSection === Sections.SPEAKERS" :speakers="speakers" :allEvents="allEvents"/>
    
    <div v-if="scheduleJsonData && showSection === Sections.SCHEDULE" class="schedule__content">
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
import { toRefs, computed, ref, onMounted, onUpdated, onActivated, onUnmounted } from "vue";
import ModalSchedule from "./ModalSchedule.vue";
import ScheduleEventBox from "./ScheduleEventBox.vue";
import Speakers from "./Speakers.vue";

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
const fridayTitleElement = ref()
const saturdayTitleElement = ref()
const sundayTitleElement = ref()

const isOnDateClick = ref()
const modalContent = ref<any | null>(null);
const speakers = ref()
const allEvents = ref()

const headerSectionsButtonClasses = (section: string) =>
  `schedule__header-sections-button ${
    showSection.value === section
      ? "schedule__header-sections-button-active"
      : ""
  }`;

const onDateClick = (date: Dates) => {
  showDate.value = date
  isOnDateClick.value = true
  setTimeout(() => {
    isOnDateClick.value = false
  }, 1000);
}

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

const updateScroll = () => {
  if (showSection.value !== Sections.SCHEDULE) return
  
  const fridayYPosition = fridayTitleElement.value.getBoundingClientRect().y
  const saturdayYPosition = saturdayTitleElement.value.getBoundingClientRect().y
  const sundayYPosition = sundayTitleElement.value.getBoundingClientRect().y
  if (isOnDateClick.value) return

  if (fridayYPosition - 185 < 0 && saturdayYPosition - 185 > 0 && sundayYPosition > 0) {
    showDate.value = Dates.FRIDAY
  } else if (saturdayYPosition - 185 < 0 && sundayYPosition - 185 > 0) {
    showDate.value = Dates.SATURDAY
  } else if (sundayYPosition - 185 < 0) {
    showDate.value = Dates.SUNDAY
  }
}

const getSpeakersFromEvents = (allEvents: any) =>{
  const speakers = []
  for (const event of allEvents) {
    for (const person of event.persons) {
      if (person.biography) {
          speakers.push(person)
        }
      }
    }
  return speakers
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

  allEvents.value = [...friday.value, ...saturday.value, ...sunday.value]
  speakers.value = getSpeakersFromEvents(allEvents.value);

  window.addEventListener("scroll", updateScroll, { passive: true });
});

onUpdated(() => {
  fridayTitleElement.value = window.document.getElementById("Friday");
  saturdayTitleElement.value = window.document.getElementById("Saturday");
  sundayTitleElement.value = window.document.getElementById("Sunday");
})

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
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

.schedule__header-speakers {
  position: relative;
  top: 0;
}

@media (min-width: 650px) {
  .schedule__header {
    padding: 100px var(--app-padding) 0;
  }
}

.schedule__section-buttons {
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 5rem;
}

.schedule__header-sections-button {
  border-radius: 0;
  border: 1px solid #000000;
  padding: 9px 22px;
  margin-left: 10px;
  margin: 0;

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
  gap: 12px;
  margin-bottom: 1.5rem;
}

..schedule__dates-buttons:last-child {
  margin-bottom: var(--app-padding);
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
  scroll-margin-top: 180px;
}

@media (min-width: 650px) {
  .schedule__day-title {
    font-size: 30px;
    text-align: center;
    /* scroll-margin-top: 100px; */
  }
}
</style>
