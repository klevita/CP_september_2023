<template>
  <div class="common-table-wrapper">
    <div v-if="tableData.tableRows.length" class="common-table-body">
      <div class="common-table-selectors">
        <v-text-field v-model="search" label="Поиск" color="#523ae5" variant="underlined"
          prepend-inner-icon="mdi-magnify"></v-text-field>
      </div>
      <v-data-table v-model:items-per-page="countRows" :headers="tableData.tableHeaders" :items="tableItemsFiltered"
        item-value="name"></v-data-table>
    </div>
  </div>
</template>
<script setup>
import { VDataTable } from "vuetify/lib/labs/components.mjs";
import { ref, onMounted, watch, computed } from "vue";

const countRows = ref(10)

const search = ref("");
const tableData = ref({ tableHeaders: [], tableRows: [] });


const tableItemsFiltered = computed(() => {
  if (search.value.length) {
    return tableData.value.tableRows.filter((v) => v.name.includes(search.value))
  }
  return tableData.value.tableRows
});

const props = defineProps({
  tableRows: Object,
  tableHeaders: Object
})
watch([() => props.tableRows, () => props.tableHeaders], ([rows, headers]) => {
  tableData.value = { tableHeaders: headers, tableRows: rows }
  console.log(tableData.value)
})
</script>
<style scoped lang="scss">
.common-table-wrapper {
  @apply shadow-sm;
  border-radius: 20px;
  background-color: white;

  .common-table-body {
    .common-table-selectors {
      display: flex;
      height: 84px;
      margin-top: 24px;

      &> :nth-child(1) {
        flex-grow: 1;
        margin-right: 12px;
      }

      &> :nth-child(2) {
        max-width: 500px;
        margin-left: 12px;
      }
    }
  }
}
</style>
