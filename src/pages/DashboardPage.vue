<template>
  <div class="dashboard-wrapper">
    
    <div class="indicators-group">
      <WidgetComponent title="Бублик">
        <template #default>
          <PieChart :chart-data="{
            name: 'lal', data: [{ value: 10, name: 'kek' }, { value: 20, name: 'kak' }]
          }" />
        </template>
      </WidgetComponent>
      <div class="indicators-grid">
        <IndicatorComponent title="kek" value="22%" percentage="22%" />
        <IndicatorComponent title="kek" value="22%" percentage="22%" />
        <IndicatorComponent title="kek" value="22%" percentage="22%" />
        <IndicatorComponent title="kek" value="22%" percentage="22%" />
        <IndicatorComponent title="kek" value="22%" percentage="22%" />
        <IndicatorComponent title="kek" value="22%" percentage="22%" />
        <IndicatorComponent title="kek" value="22%" percentage="22%" />
        <IndicatorComponent title="kek" value="22%" percentage="22%" />
      </div>
    </div>
  </div>
</template>
<script setup>
import IndicatorComponent from '@/components/IndicatorComponent.vue';
import WidgetComponent from '@/components/WidgetComponent.vue';
import PieChart from '@/components/charts/PieChart.vue'
</script>
<style scoped lang="scss">
.dashboard-wrapper {
  display: flex;
  flex-direction: column;
  padding: 24px;

  .indicators-group {
    display: flex;

    &> :first-child {
      height: 400px;
      width: 400px;
    }

    .indicators-grid {
      margin-left: 24px;
      flex-grow: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 24px;
      grid-column-gap: 24px;
      grid-auto-rows: min-content;
    }
  }
}
</style>