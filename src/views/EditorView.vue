<template>
  <div class="editor-view">
    <div class="editor-top"></div>
    <div class="editor-main">
      <div class="editor-left">
        <WidgetList @onDragStart="onDragStart"></WidgetList>
      </div>
      <div class="editor-content">
        <CanvasRenderer
          :render-el-list="renderElList"
          :current-render-el="currentRenderEl"
          @onDrop="onDrop"
          @activated="onActivated"
          @deactivated="onDeactivated"
          @delete="onDelete"
        >
        </CanvasRenderer>
      </div>
      <div class="editor-right">
        <RightPanel :current="currentRenderEl"></RightPanel>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import WidgetList from '@/components/WidgetList/index.vue'
import CanvasRenderer from '@/components/CanvasRenderer/index.vue'
import RightPanel from '@/components/RightPanel/index.vue'
import { useRenderEl } from '@/hooks/useRenderEl'
import type { WidgetConfig, RenderEl } from '@/types'
import { nanoid } from 'nanoid'
import { extractDefaultValues } from '@/utils/stylePanelConfigDefaultValueBuilder'

const { renderElList, renderElMap } = useRenderEl()

const currentRenderEl = ref<RenderEl | null>(null)

let currentWidget: WidgetConfig | null = null

const onDragStart = (widget: WidgetConfig) => {
  console.log('Drag started with widget:', widget)
  currentWidget = widget
}

const onDrop = (e: DragEvent) => {
  console.log('Widget dropped', e)
  if (!currentWidget) {
    return
  }
  console.log('Dropping widget:', currentWidget)

  const { offsetX, offsetY } = e
  const {
    height = 100,
    width = 100,
    minHeight = 100,
    minWidth = 100,
    stylePanelConfig,
    dataPanelOptions,
    ...rest
  } = currentWidget

  const x = offsetX - width / 2 < 0 ? 0 : offsetX - width / 2
  const y = offsetY - height / 2 < 0 ? 0 : offsetY - height / 2

  const renderEl: RenderEl = {
    id: nanoid(),
    x,
    y,
    height: height,
    width: width,
    minHeight: minHeight,
    minWidth: minWidth,
    styleProps: extractDefaultValues(stylePanelConfig),
    data: {},
    stylePanelConfig: stylePanelConfig || { groups: [] },
    dataPanelOptions: dataPanelOptions || {},
    ...rest
  }
  console.log('Creating new renderEl:', renderEl)
  renderElList.value.push(renderEl)
}

const onActivated = (id: string) => {
  console.log('Component activated:', id)
  if (!renderElMap.value[id]) {
    console.warn(`Component with id ${id} not found in renderElMap`)
    return
  }
  console.log('Setting currentRenderEl to:', renderElMap.value[id])

  currentRenderEl.value = renderElMap.value[id]
}

const onDeactivated = (id: string) => {
  console.log('Component deactivated:', id)
  currentRenderEl.value = null
}

const onDelete = (id: string) => {
  console.log('Component deleted:', id)
  const index = renderElList.value.findIndex((el) => el.id === id)
  if (index !== -1) {
    renderElList.value.splice(index, 1)
    currentRenderEl.value = null
  } else {
    console.warn(`Component with id ${id} not found in renderElList`)
  }
}
</script>

<style lang="less" scoped>
.editor-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .editor-top {
    width: 100%;
    height: 60px;
    background: lightblue;
  }
  .editor-main {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    justify-content: space-between;
    .editor-left {
      flex: 0 0 260px;
    }
    .editor-content {
      flex: 1 0 auto;
      border: 1px solid #ccc;
      border-top: none;
      border-bottom: none;
      background-color: antiquewhite;
      display: flex;
      justify-content: center;
    }
    .editor-right {
      flex: 0 0 360px;
    }
  }
}
</style>
