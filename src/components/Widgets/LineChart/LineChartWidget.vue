<template>
  <div>
    <!-- <Echarts :option="option"></Echarts> -->
    {{ styleProps }}
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { ComputedRef } from 'vue'
import Echarts from '@/components/Business/Echarts/index.vue'
import type { EChartsOption } from 'echarts'
import type { RenderEl } from '@/types'

const props = defineProps<{
  renderEl: RenderEl
}>()

const { styleProps = {}, data = {} } = toRefs(props.renderEl)

const option: ComputedRef<EChartsOption> = computed(() => ({}))
</script>
