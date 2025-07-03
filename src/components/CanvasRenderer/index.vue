<template>
  <div
    class="canvas-renderer"
    @dragover.prevent.stop
    @drop="
      (e) => {
        $emit('onDrop', e)
      }
    "
  >
    <ComponentRenderer
      v-for="component in props.renderElList"
      :key="component.id"
      :w="component.width"
      :h="component.height"
      :x="component.x"
      :y="component.y"
      :min-width="component.minWidth"
      :min-height="component.minHeight"
      :is-activated="props.currentRenderEl?.id === component.id"
      prevent-deactivation
      @activated="onActivated"
      @deactivated="$emit('deactivated', component.id)"
      @delete="$emit('delete', component.id)"
    >
      <component :is="componentMap[component.name]" :render-el="component" />
    </ComponentRenderer>
  </div>
</template>

<script setup lang="ts">
import ComponentRenderer from '../ComponentRenderer/index.vue'

import BlankWidget from '../Widgets/Blank/BlankWidget.vue'
import LineChartWidget from '../Widgets/LineChart/LineChartWidget.vue'
import type { RenderEl } from '@/types'
import { type Component } from 'vue'

const props = defineProps<{
  renderElList: Array<RenderEl>
  currentRenderEl: RenderEl | null
}>()

const emits = defineEmits<{
  (event: 'activated', id: string): void
  (event: 'deactivated', id: string): void
}>()

const componentMap: Record<string, Component> = {
  BlankWidget,
  LineChartWidget
}

const onActivated = (id: string) => {
  if (props.currentRenderEl?.id === id) {
    return
  } else {
    emits('activated', id)
  }
}
</script>

<style lang="less" scoped>
.canvas-renderer {
  width: 800px;
  height: auto;
  min-height: 600px;
  position: relative;
  background-color: #fff;
}
</style>
