<script setup>
import * as echarts from 'echarts';
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';

const props = defineProps({
	option: { type: Object, required: true },
	theme: { type: String, default: undefined }, // 支持主题
	loading: { type: Boolean, default: false },
	events: { type: Object, default: () => ({}) } // 事件：{ click: handler, ... }
});

const chartRef = ref(null);
let chartInstance = null;

// 初始化图表
const initChart = () => {
	if (chartRef.value) {
		chartInstance = echarts.init(chartRef.value, props.theme);
		chartInstance.setOption(props.option);

		// 注册事件
		for (const [event, handler] of Object.entries(props.events)) {
			chartInstance.on(event, handler);
		}

		// resize
		window.addEventListener('resize', chartInstance.resize);
	}
};

// 销毁图表
const disposeChart = () => {
	if (chartInstance) {
		window.removeEventListener('resize', chartInstance.resize);
		chartInstance.dispose();
		chartInstance = null;
	}
};

// 监听 option 更新
watch(
	() => props.option,
	(newVal) => {
		if (chartInstance && newVal) {
			chartInstance.setOption(newVal, true);
		}
	},
	{ deep: true }
);

onMounted(() => {
	initChart();
	if (props.loading) chartInstance?.showLoading();
});

onBeforeUnmount(() => {
	disposeChart();
});
</script>

<template>
	<div ref="chartRef" class="echarts"></div>
</template>

<style lang="less" scoped>
/* 让组件自适应容器大小 */
.echarts {
	display: block;
	width: 100%;
	height: 100%;
}
</style>
