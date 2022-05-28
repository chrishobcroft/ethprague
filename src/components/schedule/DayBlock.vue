<template>
  <div :id="`${dayName}-desktop`" class="schedule__day-title">
    {{ title }}
  </div>
  <div class="schedule__content-desktop-columns">
    <table class="schedule__table">
      <tbody>
        <tr
          v-for="rowData in prepareDataForTable(dayData)"
          :key="rowData.startTime"
        >
          <td
            :style="getCellStyle(rowData, rowData.laFabrika)"
            class="schedule__table-cell"
            :rowspan="
              rowData.laFabrika && rowData.laFabrika.rowSpan > 1 ? rowData.laFabrika.rowSpan : 1
            "
          >
            <ScheduleEventBox
              v-if="rowData.laFabrika"
              @click="
                emit(
                  'set-modal-content',
                  rowData.laFabrika ? rowData.laFabrika.event : ''
                )
              "
              :event="rowData.laFabrika.event"
            />
          </td>
          <td
          :style="getCellStyle(rowData, rowData.paralelniPolis)"
            class="schedule__table-cell"
            :rowspan="
              rowData.paralelniPolis && rowData.paralelniPolis.rowSpan > 1
                ? rowData.paralelniPolis.rowSpan
                : 1
            "
          >
            <ScheduleEventBox
              v-if="rowData.paralelniPolis"
              @click="
                emit(
                  'set-modal-content',
                  rowData.paralelniPolis ? rowData.paralelniPolis.event : ''
                )
              "
              :event="rowData.paralelniPolis.event"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Venues } from "@/components/schedule/useSchedule";
import ScheduleEventBox from "./ScheduleEventBox.vue";
const props = defineProps<{
  dayName: string;
  title: string;
  dayData: any;
}>();

const emit = defineEmits<{
  (e: "set-modal-content", modalContent: any): void;
}>();

const hoursToMinutes = (time: string) => {
  const hours = parseInt(time.substr(0, 2));
  const minutes = parseInt(time.substr(3, 2));
  return hours * 60 + minutes;
};

const getCellStyle = (rowData: any, venue: any) => {
  const changedPadding = rowData.isInTimeRange ? {padding: '50px'} : {padding: '0'}

  return venue ? {} : changedPadding
}

const minutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  return `${hours}:${minutesLeft < 10 ? "0" + minutesLeft : minutesLeft}`;
};

const prepareDataForTable = (dayObjectWithEvents?: any) => {
  let startTimeInMinutes = 0;
  let resultArray = [];

  const earliestEventTime = dayObjectWithEvents.reduce((min: any, p: any) => hoursToMinutes(p.start) < min ? hoursToMinutes(p.start) : min, 1440);

  const latestEventTime = dayObjectWithEvents.reduce((max: any, p: any) => (hoursToMinutes(p.start) + hoursToMinutes(p.duration)) > max ? (hoursToMinutes(p.start) + hoursToMinutes(p.duration)) : max, 0);


  do {
    const isInTimeRange = startTimeInMinutes > earliestEventTime && startTimeInMinutes < latestEventTime
    
    let laFabrikaEvent = dayObjectWithEvents.find((event: any) => {
      return (
        event.room === Venues.LA_FABRIKA &&
        hoursToMinutes(event.start) < startTimeInMinutes + 29 &&
        hoursToMinutes(event.start) + 29 > startTimeInMinutes
      );
    });

    let polisEvent = dayObjectWithEvents.find((event: any) => {
      return (
        event.room === Venues.PARALELNI_POLIS &&
        hoursToMinutes(event.start) < startTimeInMinutes + 29 &&
        hoursToMinutes(event.start) + 29 > startTimeInMinutes
      );
    });

    const isPolisEventAlreadyInArray: any = resultArray.some((event) => {
      if (event.paralelniPolis && event.paralelniPolis.event && polisEvent)
        return event.paralelniPolis.event.id === polisEvent.id;
    });
    if (isPolisEventAlreadyInArray) {
      polisEvent = undefined;
    }

    const isLaFabrikaAlreadyInArray: any = resultArray.some((event) => {
      if (event.laFabrika && event.laFabrika.event && laFabrikaEvent)
        return event.laFabrika.event.id === laFabrikaEvent.id;
    });
    if (isLaFabrikaAlreadyInArray) {
      laFabrikaEvent = undefined;
    }

      resultArray.push({
        paralelniPolis:
          polisEvent && !isPolisEventAlreadyInArray
            ? {
                event: polisEvent,
                duration: hoursToMinutes(polisEvent.duration),
                rowSpan: Math.floor(hoursToMinutes(polisEvent.duration) / 30),
              }
            : undefined,
        laFabrika:
          laFabrikaEvent && !isLaFabrikaAlreadyInArray
            ? {
                event: laFabrikaEvent,
                duration: hoursToMinutes(laFabrikaEvent.duration),
                rowSpan: Math.floor(
                  hoursToMinutes(laFabrikaEvent.duration) / 30
                ),
              }
            : undefined,
        startTime: startTimeInMinutes,
        isInTimeRange
      });

    startTimeInMinutes += 30;
  } while (startTimeInMinutes < hoursToMinutes("23:59"));

  
  return resultArray;
};
</script>

<style scoped>
.schedule__content-desktop-columns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: -15rem;
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
