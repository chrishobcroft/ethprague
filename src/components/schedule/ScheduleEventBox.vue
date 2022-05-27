<template>
  <div class="schedule-event__box">
        <div
          class="schedule-event__box-time"
          :style="getEventTrackColor(event.track)"
        >
          <div class="schedule-event__box-time-start">{{ event.start }}</div>
          <div class="schedule-event__box-time-duration">
            {{ hoursToMinutes(event.duration) }} min
          </div>
        </div>

        <div class="schedule-event__box-abstract">
          <div>
            <div class="schedule-event__box-title">
              {{ event.title }}
            </div>
            <span
              class="schedule-event__box-persons-name"
              v-for="(person, index) in event.persons"
              :key="person.public_name"
            >
              {{ event.persons.length === index + 1 ? person.public_name : person.public_name + ', ' }}
            </span>
            <div class="schedule-event__box-abstract-text">
              {{ event.abstract }}
            </div>
          </div>

          <div class="schedule-event__box-footer">
            <div class="schedule-event__box-track">
              {{ event.track }}
            </div>
            <div class="schedule-event__box-room">
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
  const hours = parseInt(time.substr(0, 2));
  const minutes = parseInt(time.substr(3, 2));
  return hours * 60 + minutes;
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

.schedule-event__box {
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
  .schedule-event__box {
    flex-direction: row;
  }
}

@media (min-width: 1120px) {
  .schedule-event__box {
    margin: 0;
    height: 100%;
  }
}

.schedule-event__box:hover {
  filter: drop-shadow(-8px 8px 8px rgba(0, 0, 0, 0.15));
}
.schedule-event__box-time {
  border-radius: 18px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.schedule-event__box-time-start {
  font-size: 17px;
}

@media (min-width: 650px) {
  .schedule-event__box-time-start {
    font-size: 25px;
  }
}


.schedule-event__box-time-duration {
  font-size: 12px;
}

@media (min-width: 650px) {
  .schedule-event__box-time-duration  {
    font-size: 15px;
  }
}

.schedule-event__box-abstract {
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.schedule-event__box-title {
  font-size: 15px;
  color: black;
  text-transform: uppercase;
  line-height: 20px;
}

@media (min-width: 650px) {
  .schedule-event__box-title{
    font-size: 25px;
    line-height: 29px;
  }
}

.schedule-event__box-abstract-text {
  font-size: 14px;
  color: black;
  line-height: 19px;
  margin: 1.5rem 0 2.5rem;
}

@media (min-width: 650px) {
  .schedule-event__box-abstract-text {
  font-size: 17px;
  line-height: 22px;
}
}

.schedule-event__box-persons-name{
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
}

@media (min-width: 650px) {
  .schedule-event__box-persons-name {
    font-size: 25px;
    color: rgba(0, 0, 0, 0.5);
  }
}

.schedule-event__box-track, .schedule-event__box-room {
  color: black;
}
.schedule-event__box-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  font-size: 14px;
}

@media (min-width: 650px) {
  .schedule-event__box-footer {
    flex-direction: row;
  }
}


@media (min-width: 1120px) {
  .schedule-event__box-abstract-text {
    display: none;
  }

  .schedule-event__box-room {
    display: none;
  }
}

</style>