<template>
  <div class="widget-card elevation-2">
    <div class="widget-card-title">{{ props.title }}</div>
    <div class="widget-card-body">
      <slot name="default"></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String
})
</script>
<style scoped lang="scss">
.widget-card {
  border-radius: 10px;
  background-color: white;
  .widget-card-title{
    font-size: 16px;
    font-weight: 500;
    margin: 12px;
    border-bottom: 1px solid $text-lighter;
  }
  .widget-card-body{

  }
}
</style> 