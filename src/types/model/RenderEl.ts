import type { WidgetBase, StylePanelConfig } from '@/types'

export interface RenderEl extends WidgetBase {
  id: string
  x: number
  y: number
  styleProps: Record<string, any>
  data: Record<string, any>
  stylePanelConfig: StylePanelConfig
  dataPanelOptions: Record<string, any>
}
