export interface StylePanelConfig {
  groups: StylePanelGroup[]
}

export interface StylePanelGroup {
  name: string
  rows: StylePanelRow[]
}

export interface StylePanelRow {
  label: string
  columns: StylePanelColumn[]
}

export interface StylePanelColumn {
  key: string
  component: string
  props?: any
  defaultValue?: any // 可根据实际类型设为 string | number | boolean 等
}
