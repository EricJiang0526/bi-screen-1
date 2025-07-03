<template>
  <a-radio-group v-model="modelValue" :options="options" style="width: 100%"></a-radio-group>
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
