<template>
  <div class="widget-list">
    <div v-for="group in widgetGroup" :key="group.key" class="widget-group">
      <div class="widget-group-title">{{ group.title }}</div>
      <div class="widget-group-items">
        <div
          v-for="widget in group.widgets"
          :key="widget.name"
          draggable
          @dragstart="$emit('onDragStart', widget)"
          class="widget-item"
        >
          <img :src="widget.img" alt="" style="width: 100%; height: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import blankWidgetConfig from '../Widgets/Blank/widgetConfig'
import lineChartWidget from '../Widgets/LineChart/widgetConfig'

const widgetGroup = [
  {
    title: 'Test',
    key: 'test',
    widgets: [blankWidgetConfig, lineChartWidget]
  }
]
</script>

<style lang="less" scoped>
.widget-list {
  width: 100%;
}
</style>
