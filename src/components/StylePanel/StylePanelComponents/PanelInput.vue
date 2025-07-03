<template>
  <a-input v-model="modelValue" style="width: 100%"></a-input>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>('modelValue')
</script>
