

<script setup lang="ts">
import { useGraphStore } from '../store'


const props = defineProps<{
  modelValue: string[]
}>()
const emit = defineEmits(['update:modelValue'])

const value = useVModel(props, 'modelValue', emit)

const { branchSummary, branchKeyword } = storeToRefs(useGraphStore())


const items = computed(() => {
  if (!branchKeyword.value) {
    return branchSummary.value?.all
  }
  const pattern = new RegExp(branchKeyword.value, 'i')
  return branchSummary.value?.all?.filter(item =>  pattern.test(item))

})


</script>


<template>
  <v-select
    v-model="value"
    label="请选择分支"
    :items="items"
    multiple
    clearable
  >
    <template #prepend-item>
      <v-text-field
        v-model="branchKeyword"
        autofocus
        placeholder="请输入搜索"
      />
      <v-divider class="mt-2" />
    </template>
  </v-select>
</template>

<style scoped>

</style>