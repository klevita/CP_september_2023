<template>
  <WidgetComponent title="emotional destribution">

    <v-select hide-details v-model="select" @update:model-value="getData" :items="['negative', 'positive', 'neutral', 'count']"></v-select>
    <TableComponent :table-headers="tableH" :table-rows="tableR"></TableComponent>
  </WidgetComponent>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import TableComponent from './TableComponent.vue';
import { useRoute } from 'vue-router';
import { AnalyticController } from "@/api/controllers/AnalyticController"
import WidgetComponent from './WidgetComponent.vue';

const route = useRoute()
const select = ref('count')

const tableR = ref([])
const tableH = ref([])

async function getData(v){
  const resp = await AnalyticController.getEmotionalDestribution(route.query.id, v)
  const tableRows = resp
  const tableHeaders = []
  Object.keys(tableRows[0]).forEach((v) => {
    tableHeaders.push({ title: v, key: v })
  })
  tableH.value = tableHeaders
  tableR.value = tableRows
}

onMounted(async () => {
  const resp = await AnalyticController.getEmotionalDestribution(route.query.id, select.value)
  const tableRows = resp
  const tableHeaders = []
  Object.keys(tableRows[0]).forEach((v) => {
    tableHeaders.push({ title: v, key: v })
  })
  tableH.value = tableHeaders
  tableR.value = tableRows
})
</script>
<style lang="scss" scoped></style>