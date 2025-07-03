import type { StylePanelConfig } from '@/types'

export interface WidgetBase {
  type: string
  name: string
  width?: number
  height?: number
  minWidth?: number
  minHeight?: number
}

export interface WidgetConfig extends WidgetBase {
  img: string
  description: string
  category: string
  stylePanelConfig?: StylePanelConfig
  dataPanelOptions?: Record<string, any>
}
