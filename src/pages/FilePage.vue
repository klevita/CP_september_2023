<template>
  <div class="file-wrapper">
    <div class="file-group">
      <v-file-input v-model="file" :loading="fileLoading" color="primary" @update:model-value="uploadFile" show-size variant="solo"
        label="Файл zip опроса"></v-file-input>
      <div class="file-file elevation-2 mx-1" v-for="i in files">
        <div>
          {{ i.name }}
        </div>
        <v-btn color="danger" icon="mdi-trash-can-outline" @click="deleteFile(i.id)" density="comfortable" variant="text"></v-btn>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { FileController } from '@/api/controllers/FileController';
import { onMounted } from 'vue';

const file = ref();
const fileLoading = ref(false)
const files = ref([])
async function uploadFile(v) {
  fileLoading.value = true
  await FileController.postFile(v[0]);
  fileLoading.value = false
  files.value = await FileController.getFiles();
}
async function deleteFile(id) {
  await FileController.deleteFile(id);
  files.value = await FileController.getFiles();
}
onMounted(async () => {
  files.value = await FileController.getFiles();
})
</script>
<style scoped lang="scss">
.file-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;

  .file-group {
    padding-top: 36px;
    width: 100%;
    max-width: 600px;

    &>div {
      margin-bottom: 12px;
    }

    .file-file {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: white;
      border-radius: 10px;
      padding: 4px 10px 4px 10px;
      transition: all 0.4s ease;
      cursor: pointer;




      &:hover {
        box-shadow: 0 0 9px 0px $primary !important;
      }
    }
  }
}
</style>