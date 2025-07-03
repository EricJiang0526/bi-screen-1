<template>
  <div v-if="current" class="style-panel">
    <div class="style-panel-header">样式面板</div>
    <div class="style-panel-content">
      <a-tabs default-active-key="1" type="card">
        <a-tab-pane key="1" title="数据"></a-tab-pane>
        <a-tab-pane key="2" title="样式">
          <StylePanel
            v-model:style-props="current.styleProps"
            :style-panel-config="current?.stylePanelConfig"
          ></StylePanel>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import StylePanel from '../StylePanel/index.vue'
import type { RenderEl } from '@/types'

const current = defineModel<RenderEl | null>('current', {
  type: Object,
  default: null
})
</script>
