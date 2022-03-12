<template>
  <div class="section-title">
    {{title}}
  </div>
</template>

<script setup lang="ts">
import { toRefs, defineProps } from 'vue'

const props = defineProps<{
  title: string
}>()

const { title } = toRefs(props)
</script>

<style scoped>

.section-title {
  background-color: var(--col-primary-accent);
  color: var(--col-primary-action);

  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
}
</style>