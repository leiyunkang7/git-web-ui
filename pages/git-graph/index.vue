
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const logData = ref()

onMounted(async () => {
  const { data } = await axios.get('/api/git')
  logData.value = data

})

</script>

<template>
  <div>
    {{ logData }}
  </div>
</template>

<style>

</style>

