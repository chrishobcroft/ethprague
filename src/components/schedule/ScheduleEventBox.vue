<template>
  <div class="schedule-event-box">
        <div
          class="schedule-event-box__time"
          :style="getEventTrackColor(event.track)"
        >
          <div class="schedule-event-box__time-start">{{ event.start }}</div>
          <div class="schedule-event-box__time-duration">
            {{ hoursToMinutes(event.duration) }} min
          </div>
        </div>

        <div class="schedule-event-box__abstract">
          <div>
            <div class="schedule-event-box__title-row">
                <div class="schedule-event-box__title">
                  {{ event.title }}
                </div>
                <!-- <a @click.stop href="#" rel="noopener noreferrer" class="schedule-event-box__calendar-icon">
                  <img @click.stop width="25" src="../../assets/calendar.png" />
                </a> -->
            </div>
            <span
              class="schedule-event-box__persons-name"
              v-for="(person, index) in event.persons"
              :key="person.public_name"
            >
              {{ event.persons.length === index + 1 ? person.public_name : person.public_name + ', ' }}
            </span>
            <div class="schedule-event-box__abstract-text">
              {{ event.abstract }}
            </div>
          </div>

          <div class="schedule-event-box__footer">
            <div class="schedule-event-box__track">
              {{ event.track }}
            </div>
            <div class="schedule-event-box__room">
              {{ event.room }}
            </div>
          </div>

        </div>
      </div>
</template>

<script setup lang="ts">
import { toRefs, computed, ref } from 'vue'

const props = defineProps<{
  event?: any
}>()

const hoursToMinutes = (time: string) => {
  const hours = parseInt(time.substr(0, 2))
  const minutes = parseInt(time.substr(3, 2))
  return hours * 60 + minutes
};

const getEventTrackColor = (eventType: string) => {
  switch (eventType) {
    case "Hands-on":
      return {
        backgroundColor: "rgb(1, 255, 229)",
        color: 'black'
      };
    case "Societal challenges":
      return {
        backgroundColor: "#81ff70",
        color: 'black'
      };
    case "Ethereum stack":
      return {
        backgroundColor: "#5400ff",
        color: 'white'
      };
    case "Community":
      return {
        backgroundColor: "#ffff01",
        color: 'black'
      };
    case "Miscellaneous":
      return {
        backgroundColor: "black",
        color: 'white'
      };
    default:
      return {
        backgroundColor: "rgb(255, 255, 255)",
        color: 'black'
      };
  }
};


</script>

<style scoped>

.schedule-event-box {
  max-width: 1100px;
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  background-color: white;
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  flex-direction: column;
}

@media (min-width: 650px) {
  .schedule-event-box {
    flex-direction: row;
  }
}

@media (min-width: 1120px) {
  .schedule-event-box {
    margin: 0;
    height: 100%;
  }
}

.schedule-event-box:hover {
  filter: drop-shadow(-8px 8px 8px rgba(0, 0, 0, 0.15));
}
.schedule-event-box__time {
  border-radius: 18px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.schedule-event-box__time-start {
  font-size: 17px;
}

@media (min-width: 650px) {
  .schedule-event-box__time-start {
    font-size: 25px;
  }
}

.schedule-event-box__time-duration {
  font-size: 12px;
}

@media (min-width: 650px) {
  .schedule-event-box__time-duration  {
    font-size: 15px;
  }
}

.schedule-event-box__abstract {
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.schedule-event-box__title {
  font-size: 15px;
  color: black;
  text-transform: uppercase;
  line-height: 20px;
}

@media (min-width: 650px) {
  .schedule-event-box__title{
    font-size: 25px;
    line-height: 29px;
  }
}

.schedule-event-box__abstract-text {
  font-size: 14px;
  color: black;
  line-height: 19px;
  margin: 1.5rem 0 2.5rem;
}

@media (min-width: 650px) {
  .schedule-event-box__abstract-text {
  font-size: 17px;
  line-height: 22px;
}
}

.schedule-event-box__persons-name{
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
}

@media (min-width: 650px) {
  .schedule-event-box__persons-name {
    font-size: 25px;
    color: rgba(0, 0, 0, 0.5);
  }
}

.schedule-event-box__track, .schedule-event-box__room {
  color: black;
}
.schedule-event-box__footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  font-size: 14px;
}

.schedule-event-box__title-row {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
}

.schedule-event-box__calendar-icon {

}

@media (min-width: 650px) {
  .schedule-event-box__footer {
    flex-direction: row;
  }
}

@media (min-width: 1120px) {
  .schedule-event-box__abstract-text {
    display: none;
  }

  .schedule-event-box__room {
    display: none;
  }
}
</style>
