<template>
  <div>
    <a-form :model="styleProps" label-align="left" auto-label-width>
      <a-collapse>
        <a-collapse-item
          v-for="group in props.stylePanelConfig?.groups || []"
          :key="group.name"
          :header="group.name"
        >
          <a-form-item v-for="row in group.rows" :key="row.label" :label="row.label">
            <div v-for="column in row.columns" :key="column.key">
              <component
                :is="panelComponentMap[column.component]"
                v-model="styleProps[column.key]"
                v-bind="column.props || {}"
              ></component>
            </div>
          </a-form-item>
        </a-collapse-item>
      </a-collapse>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import PanelInput from './StylePanelComponents/PanelInput.vue'
import PanelSelect from './StylePanelComponents/PanelSelect.vue'
import PanelRadioGroup from './StylePanelComponents/PanelRadioGroup.vue'
import type { StylePanelConfig } from '@/types'
import type { Component } from 'vue'

const props = defineProps<{
  stylePanelConfig?: StylePanelConfig
}>()

const styleProps = defineModel('styleProps', {
  type: Object,
  default: () => ({})
})

const panelComponentMap: Record<string, Component> = {
  PanelInput,
  PanelSelect,
  PanelRadioGroup
}
</script>
