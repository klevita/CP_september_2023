<template>
  <WidgetComponent title="Бар" style="width:100%;height:600px">
    <template #default>
      <v-select variant="underlined" class="mx-14 ml-14" hide-details :items="['positive', 'negative', 'neutral']"
        v-model="select" @update:model-value="getData()"></v-select>
      <div style="height:460px">
        <BarChart :chart-data='chartData' />
      </div>
    </template>
  </WidgetComponent>
</template>
<script setup>
import { onMounted } from 'vue';
import WidgetComponent from './WidgetComponent.vue';
import BarChart from './charts/BarChart.vue';
import { AnalyticController } from "@/api/controllers/AnalyticController"
import { ref } from "vue"
import { useRoute } from 'vue-router';

const route = useRoute()
const chartData = ref([])

const select = ref("positive")
const getData = async () => {
  chartData.value = await AnalyticController.getTop(route.query.id, select.value)
  console.log(chartData.value)
}
onMounted(getData)
</script>
<style scoped lang="scss"></style>