<template>
  <VueDraggableResize :parent="true" :preventDeactivation="true" :active="props.isActivated">
    <div class="hover-wrapper" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div class="component-renderer-content">
        <slot></slot>

        <a-dropdown
          trigger="hover"
          :popup-visible="dropdownVisible"
          @popup-visible-change="onDropdownVisibleChange"
        >
          <a-button v-show="showDropdown" size="small" class="component-renderer-content__btn">
            <icon-more-vertical />
          </a-button>

          <template #content>
            <a-doption>查看SQL</a-doption>
            <a-doption>查看数据</a-doption>
            <a-doption>复制</a-doption>
            <a-divider style="margin: 0" />
            <a-doption @click="$emit('delete')">删除</a-doption>
          </template>
        </a-dropdown>
      </div>
    </div>
  </VueDraggableResize>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueDraggableResize from '../VueDraggableResize/vue-draggable-resizable.vue'

const props = defineProps<{
  isActivated?: boolean
}>()

const showDropdown = ref(false)
const dropdownVisible = ref(false)

const onMouseEnter = async () => {
  await new Promise((resolve) => setTimeout(resolve, 200))
  showDropdown.value = true
}

const onMouseLeave = async () => {
  // 仅当 dropdown 不可见时才隐藏按钮
  if (!dropdownVisible.value) {
    await new Promise((resolve) => setTimeout(resolve, 200))
    showDropdown.value = false
  }
}

const onDropdownVisibleChange = (val: boolean) => {
  dropdownVisible.value = val
  if (val) {
    showDropdown.value = true
  } else {
    // 离开菜单也隐藏按钮
    showDropdown.value = false
  }
}
</script>

<style lang="less" scoped>
.hover-wrapper {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
  .component-renderer-content {
    width: 100%;
    height: 100%;
    .component-renderer-content__btn {
      position: absolute;
      top: 4px;
      right: 4px;
      z-index: 1;
      border-radius: 50%;
      padding: 0 6px;
    }
  }
}
</style>
