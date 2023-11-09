
<script lang="ts" setup>

const logData = ref()

onMounted(async () => {
  const { data } = await useFetch('/api/git')
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

