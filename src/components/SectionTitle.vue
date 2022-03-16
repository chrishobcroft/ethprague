<template>
  <div class="section-title">
    {{title}}
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps<{
  title: string
}>()

const { title } = toRefs(props)
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