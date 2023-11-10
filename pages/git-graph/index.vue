
<script lang="ts" setup>
import { AgGridVue } from 'ag-grid-vue3'  // the AG Grid Vue Component
import { reactive, onMounted, ref } from 'vue'
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css' // Optional theme CSS
import type { LogResult, } from 'simple-git'
import { gridOptions } from './grid-options'
import {gridListeners} from './grid-listeners'

const logData = reactive({
  result: {} as LogResult
})

async function getData() {
  const { data } = await useFetch('/api/git', {})
  logData.result = data.value as LogResult
}

onMounted( () => {
  getData()
})

const gridApi = ref(null) // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params) => {
  gridApi.value = params.api
  getData()
}


</script>

<template>
  <div>
    <ag-grid-vue
      class="ag-theme-material"
      style="height: 70vh; width: 100%;"
      v-bind="gridOptions"
      :row-data="logData.result?.all ?? []"
      v-on="gridListeners"
      @grid-ready="onGridReady"
    />
  </div>
</template>

<style></style>

