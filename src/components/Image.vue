<template>
  <img  :class="cssClass" :src="imageSrc" @error="isError = true"/> 
</template>

<script setup lang="ts">
import { toRefs, computed, ref } from 'vue'

const props = defineProps<{
  cssClass?: any
  src: string
  fallbackImageA?: string
  fallbackImageB?: string
}>()
const isError = ref(false)

const { src, fallbackImageA, fallbackImageB, cssClass } = toRefs(props)

const imageSrc = computed(() => {
  if (isError.value) {
    try {
      if (fallbackImageA) {
        return fallbackImageA.value
      }
    } catch (err) {
      if (fallbackImageB) {
        return fallbackImageB.value
      }
    }
  }

  return src.value
})


</script>

<style scoped>

.section-title {
  background-color: var(--col-primary-accent);
  padding: 10px 20px 6px;
  max-width: fit-content;
  align-self: flex-start;

  color: var(--col-primary-action);
  text-transform: uppercase;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
}
</style>