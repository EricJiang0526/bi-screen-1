<template>
  <a-select v-model="modelValue" :options="options" style="width: 100%"></a-select>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>('modelValue')

const { options } = defineProps<{
  options?: Array<{
    label: string
    value: string
  }>
}>()
</script>
