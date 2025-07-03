import type { StylePanelConfig } from '@/types'

export const extractDefaultValues = (stylePanelConfig?: StylePanelConfig) => {
  if (!stylePanelConfig || !stylePanelConfig.groups) {
    return {}
  }

  const result: Record<string, any> = {}

  stylePanelConfig.groups?.forEach((group) => {
    group.rows?.forEach((row) => {
      row.columns?.forEach((column) => {
        if (column.key) {
          if ('defaultValue' in column) {
            result[column.key] = column.defaultValue
          } else {
            result[column.key] = null
          }
        }
      })
    })
  })

  return result
}
