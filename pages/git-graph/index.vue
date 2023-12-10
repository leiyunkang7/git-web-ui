
<script lang="ts" setup>
import { AgGridVue } from 'ag-grid-vue3'  // the AG Grid Vue Component
import 'ag-grid-community/styles/ag-grid.css' // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css' // Optional theme CSS
import type { LogResult, } from 'simple-git'
import { gridOptions } from './grid-options'
import {gridListeners,} from './grid-listeners'
import BranchSelect from './components/branch-select.vue'
import { useGraphStore } from './store'

const { 
  snackbar, 
  snackbarText, 
  showRemoteBranch
} = storeToRefs(useGraphStore())

const logData = reactive({
  result: {} as LogResult
})

async function getData() {

  const { data } = await useFetch('/api/git/log',
    { method: 'post', body: branchList.value }
  )
  logData.result = data.value as LogResult
}

const branchList = ref([])

watch(branchList, () => {
  getData()
}, {immediate: true})

const gridApi = ref(null) // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params:any) => {
  gridApi.value = params.api
  getData()
}


</script>

<template>
  <div>
    <div class="mb-2 flex items-center space-x-6">
      <BranchSelect
        v-model="branchList"
        class="flex-5 w-1/3"
      />
      <v-checkbox
        v-model="showRemoteBranch"
        label="显示远程分支"
      />

      <v-btn
        icon="mdi-cog"
        title="Repositroy Settings"
      />


      <v-btn
        icon="mdi-cloud-download-outline"
        title="Fetch from Remote(s)"
      />

      <v-btn
        icon="mdi-refresh"
        title="Refresh"
      />
    </div>
    <ag-grid-vue
      class="ag-theme-material"
      style="height: 70vh; width: 100%;"
      v-bind="gridOptions"
      :row-data="logData.result?.all ?? []"
      v-on="gridListeners"
      @grid-ready="onGridReady"
    />

    <v-snackbar
      v-model="snackbar"
      color="success"
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<style></style>

