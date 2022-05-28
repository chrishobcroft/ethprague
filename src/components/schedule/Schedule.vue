<template>
  <div id="Schedule" class="schedule">
    <div
      :class="[
        'schedule__header',
        { 'schedule__header-speakers': showSection === Sections.SPEAKERS },
      ]"
    >
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

      <div v-if="showSection === Sections.SCHEDULE">
        <div class="schedule__dates-buttons">
          <a :href="getLocalLinkForDates('#Friday')">
            <button
              @click="onDateClick(Dates.FRIDAY)"
              :class="headerDatesButtonClasses(Dates.FRIDAY)"
            >
              FRIDAY 10. JUNE
            </button>
          </a>
          <a :href="getLocalLinkForDates('#Saturday')">
            <button
              @click="onDateClick(Dates.SATURDAY)"
              :class="headerDatesButtonClasses(Dates.SATURDAY)"
            >
              SATURDAY 11. JUNE
            </button>
          </a>
          <a :href="getLocalLinkForDates('#Sunday')">
            <button
              @click="onDateClick(Dates.SUNDAY)"
              :class="headerDatesButtonClasses(Dates.SUNDAY)"
            >
              SUNDAY 12. JUNE
            </button>
          </a>
        </div>
        <div class="schedule__venues">
          <div class="schedule__venue">La Fabrika</div>
          <div class="schedule__venue">Paralelni Polis</div>
        </div>
      </div>
    </div>

    <div class="schedule__loading" v-if="loadingData">loading...</div>
    <Speakers
      v-if="showSection === Sections.SPEAKERS"
      :speakers="speakers"
      :allEvents="allEvents"
    />

    <div
      class="schedule__content"
      v-if="scheduleJsonData && showSection === Sections.SCHEDULE"
    >
      <div class="schedule__content--mobile">
        <div id="Friday-mobile" class="schedule__day-title">
          Friday 10. June
        </div>
        <ScheduleEventBox
          v-for="event in friday"
          :key="event.id"
          @click="setModalContent(event)"
          :event="event"
        />

        <div id="Saturday-mobile" class="schedule__day-title">
          Saturday 11. June
        </div>
        <ScheduleEventBox
          v-for="event in saturday"
          :key="event.id"
          @click="setModalContent(event)"
          :event="event"
        />
        <div id="Sunday-mobile" class="schedule__day-title">
          Sunday 12. June
        </div>
        <ScheduleEventBox
          v-for="event in sunday"
          :key="event.id"
          @click="setModalContent(event)"
          :event="event"
        />
      </div>
      <div class="schedule__content--desktop">
        <div id="Friday-desktop" class="schedule__day-title">
          Friday 10. June
        </div>
        <div class="schedule__content-desktop-columns">
          <table class="schedule__table">
            <tbody>
              <tr v-for="rowData in prepareDataForTable(friday)" :key="rowData.startTime">
                <td class="schedule__table-cell">
                  <ScheduleEventBox
                    v-if="rowData.laFabrika"
                    @click="setModalContent(rowData.laFabrika ? rowData.laFabrika.event : '')"
                    :event="rowData.laFabrika.event"
                  />
                </td>
                 <td class="schedule__table-cell">
                  <ScheduleEventBox
                    v-if="rowData.paralelniPolis"
                    @click="setModalContent(rowData.paralelniPolis ? rowData.paralelniPolis.event : '')"
                    :event="rowData.paralelniPolis.event"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="Saturday-desktop" class="schedule__day-title">
          Saturday 11. June
        </div>
        <div class="schedule__content-desktop-columns">
          <table class="schedule__table">
            <tbody>
              <tr v-for="rowData in prepareDataForTable(saturday)" :key="rowData.startTime">
                <td class="schedule__table-cell">
                  <ScheduleEventBox
                    v-if="rowData.laFabrika"
                    @click="setModalContent(rowData.laFabrika ? rowData.laFabrika.event : '')"
                    :event="rowData.laFabrika.event"
                  />
                </td>
                 <td class="schedule__table-cell">
                  <ScheduleEventBox
                    v-if="rowData.paralelniPolis"
                    @click="setModalContent(rowData.paralelniPolis ? rowData.paralelniPolis.event : '')"
                    :event="rowData.paralelniPolis.event"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="Sunday-desktop" class="schedule__day-title">
          Sunday 12. June
        </div>
        <div class="schedule__content-desktop-columns">
          <table class="schedule__table">
            <tbody>
              <tr v-for="rowData in prepareDataForTable(sunday)" :key="rowData.startTime">
                <td class="schedule__table-cell">
                  <ScheduleEventBox
                    v-if="rowData.laFabrika"
                    @click="setModalContent(rowData.laFabrika ? rowData.laFabrika.event : '')"
                    :event="rowData.laFabrika.event"
                  />
                </td>
                 <td class="schedule__table-cell">
                  <ScheduleEventBox
                    v-if="rowData.paralelniPolis"
                    @click="setModalContent(rowData.paralelniPolis ? rowData.paralelniPolis.event : '')"
                    :event="rowData.paralelniPolis.event"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
  <ModalSchedule v-model="modalContent" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted, computed } from "vue";
import ModalSchedule from "./ModalSchedule.vue";
import ScheduleEventBox from "./ScheduleEventBox.vue";
import Speakers from "./Speakers.vue";
import { peopleData, fetchPeopleData } from "@/components/usePeople";

const axios = require("axios").default;

enum Venues {
  LA_FABRIKA = "La Fabrika",
  PARALELNI_POLIS = "Paralelní Polis - Institute of Cryptoanarchy",
}

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
const fridayDesktopTitleElement = ref();
const saturdayDesktopTitleElement = ref();
const sundayDesktopTitleElement = ref();

const fridayMobileTitleElement = ref();
const saturdayMobileTitleElement = ref();
const sundayMobileTitleElement = ref();

const isOnDateClick = ref();
const modalContent = ref<any | null>(null);
const speakers = ref();
const allEvents = ref();

const MOBILE_BREAKPOINT = 1120;

const getEventsFromVenue = (venue: string, events: any) => {
  switch (venue) {
    case Venues.LA_FABRIKA:
      return events.filter((event: any) => event.room === Venues.LA_FABRIKA);
    case Venues.PARALELNI_POLIS:
      return events.filter(
        (event: any) => event.room === Venues.PARALELNI_POLIS
      );
  }
};

const headerSectionsButtonClasses = (section: string) =>
  `schedule__header-sections-button ${
    showSection.value === section
      ? "schedule__header-sections-button-active"
      : ""
  }`;

const onDateClick = (date: Dates) => {
  showDate.value = date;
  isOnDateClick.value = true;
  setTimeout(() => {
    isOnDateClick.value = false;
  }, 1000);
};

const headerDatesButtonClasses = (date: string) =>
  `schedule__header-dates-button ${
    showDate.value === date ? "schedule__header-dates-button-active" : ""
  }`;

const mergeEvents = (scheduleJsonData: any) => {
  const venues = [
    ...scheduleJsonData[Venues.PARALELNI_POLIS],
    ...scheduleJsonData[Venues.LA_FABRIKA],
  ];
  return venues.sort((a: any, b: any) => {
    return (
      Date.parse("01/01/2022 " + a.start) - Date.parse("01/01/2022 " + b.start)
    );
  });
};

const hoursToMinutes = (time: string) => {
  const hours = parseInt(time.substr(0, 2));
  const minutes = parseInt(time.substr(3, 2));
  return hours * 60 + minutes;
};

const prepareDataForTable = (dayObjectWithEvents?: any) => {
  
  let startTimeInMinutes = 0;
  let resultArray = [];

  do {
    let laFabrikaEvent = dayObjectWithEvents.find((event: any) => {
      return (
        event.room === Venues.LA_FABRIKA &&
        hoursToMinutes(event.start) < startTimeInMinutes + 29 && hoursToMinutes(event.start) + 29 > startTimeInMinutes 
      );
    });
    
    let polisEvent = dayObjectWithEvents.find((event: any) => {
      return (
        event.room === Venues.PARALELNI_POLIS &&
        hoursToMinutes(event.start) < startTimeInMinutes + 29 && hoursToMinutes(event.start) + 29 > startTimeInMinutes
      );
    });

    const isPolisEventAlreadyInArray: any = resultArray.some((event) => {
      if (event.paralelniPolis && event.paralelniPolis.event && polisEvent) return event.paralelniPolis.event.id === polisEvent.id
    })
    if (isPolisEventAlreadyInArray) {
      polisEvent = undefined
    }

    const isLaFabrikaAlreadyInArray: any = resultArray.some((event) => 
    {
      if (event.laFabrika && event.laFabrika.event && laFabrikaEvent) return event.laFabrika.event.id === laFabrikaEvent.id
    })
    if (isLaFabrikaAlreadyInArray) {
      laFabrikaEvent = undefined
    }
      
    if (polisEvent || laFabrikaEvent) {
      resultArray.push({
        paralelniPolis: (polisEvent && !isPolisEventAlreadyInArray) ? {
          event: polisEvent,
          duration: hoursToMinutes(polisEvent.duration),
          rowSpan: Math.floor(hoursToMinutes(polisEvent.duration) / 30),
        } : undefined,
        laFabrika: (laFabrikaEvent && !isLaFabrikaAlreadyInArray) ? {
          event: laFabrikaEvent,
          duration: hoursToMinutes(laFabrikaEvent.duration),
          rowSpan: Math.floor(hoursToMinutes(laFabrikaEvent.duration) / 30),
        } : undefined,
        startTime: startTimeInMinutes,
      });
    }

    startTimeInMinutes += 30;
  } while (startTimeInMinutes < hoursToMinutes("23:59"));

  return resultArray;
};

const setModalContent = (event: any) => {
  modalContent.value = event;
};

const getLocalLinkForDates = (day: string) =>
  `${day}-${window.innerWidth < MOBILE_BREAKPOINT ? "mobile" : "desktop"}`;

const updateScroll = () => {
  if (showSection.value !== Sections.SCHEDULE) return;

  let fridayYPosition;
  let saturdayYPosition;
  let sundayYPosition;

  if (window.innerWidth < MOBILE_BREAKPOINT) {
    fridayYPosition = fridayMobileTitleElement.value.getBoundingClientRect().y;
    saturdayYPosition =
      saturdayMobileTitleElement.value.getBoundingClientRect().y;
    sundayYPosition = sundayMobileTitleElement.value.getBoundingClientRect().y;
  } else {
    fridayYPosition = fridayDesktopTitleElement.value.getBoundingClientRect().y;
    saturdayYPosition =
      saturdayDesktopTitleElement.value.getBoundingClientRect().y;
    sundayYPosition = sundayDesktopTitleElement.value.getBoundingClientRect().y;
  }

  if (isOnDateClick.value) return;

  if (
    fridayYPosition - 185 < 0 &&
    saturdayYPosition - 185 > 0 &&
    sundayYPosition > 0
  ) {
    showDate.value = Dates.FRIDAY;
  } else if (saturdayYPosition - 185 < 0 && sundayYPosition - 185 > 0) {
    showDate.value = Dates.SATURDAY;
  } else if (sundayYPosition - 185 < 0) {
    showDate.value = Dates.SUNDAY;
  }
};

const getSpeakersFromEvents = (allEvents: any) => {
  const speakers = [];
  for (const event of allEvents) {
    for (const person of event.persons) {
      if (person.biography) {
        speakers.push(person);
      }
    }
  }
  return speakers;
};

onMounted(async () => {
  if (!peopleData.value) fetchPeopleData();

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
  const res = prepareDataForTable(friday.value);

  allEvents.value = [...friday.value, ...saturday.value, ...sunday.value];
  speakers.value = getSpeakersFromEvents(allEvents.value);

  window.addEventListener("scroll", updateScroll, { passive: true });
});

onUpdated(() => {
  fridayMobileTitleElement.value =
    window.document.getElementById("Friday-mobile");
  saturdayMobileTitleElement.value =
    window.document.getElementById("Saturday-mobile");
  sundayMobileTitleElement.value =
    window.document.getElementById("Sunday-mobile");

  fridayDesktopTitleElement.value =
    window.document.getElementById("Friday-desktop");
  saturdayDesktopTitleElement.value =
    window.document.getElementById("Saturday-desktop");
  sundayDesktopTitleElement.value =
    window.document.getElementById("Sunday-desktop");
});

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

.schedule__venues {
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
}

@media (min-width: 1120px) {
  .schedule__venues {
    display: flex;
  }
}

.schedule__venue {
  margin: auto;
  color: var(--col-primary-action);
  font-size: 25px;
}

.schedule__loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 26vh;
}
.schedule__content {
  background-color: var(--col-light-gray-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px var(--app-padding) 20rem;
  margin-top: -20rem;
}

.schedule__content--desktop {
  display: none;
}

@media (min-width: 1120px) {
  .schedule__content--mobile {
    display: none;
  }

  .schedule__content--desktop {
    display: flex;
    flex-direction: column;
  }
}

.schedule__content-desktop-columns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: -15rem;
}

.schedule__content-desktop-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.schedule__header {
  background-color: white;
  width: 100%;
  padding: 100px var(--app-padding) 0;
  position: sticky;
  top: -91px;
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
  color: var(--col-primary-action);
  padding: 17rem 0 2rem 0;
  text-align: center;
}

@media (min-width: 650px) {
  .schedule__day-title {
    font-size: 30px;
  }
}

@media (min-width: 1120px) {
  .schedule__day-title {
    padding: 25rem 0 2rem 0;
  }
}

.schedule__table {
  height: 100%;
  width: 100%;
  border-collapse: collapse;
}

.schedule__table-cell {
  width: 50%;
  border: none;
  position: relative;
  height: 100%;
}
</style>
