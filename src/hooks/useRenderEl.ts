import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { RenderEl } from '@/types'

export const useRenderEl = () => {
  const renderElList = ref<RenderEl[]>([])

  const renderElMap: ComputedRef<Record<string, RenderEl>> = computed(() =>
    renderElList.value.reduce((acc: Record<string, RenderEl>, cur) => {
      acc[cur.id] = cur
      return acc
    }, {})
  )

  return {
    renderElList,
    renderElMap
  }
}
