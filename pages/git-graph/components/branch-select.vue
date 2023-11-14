

<script setup lang="ts">

const props = defineProps<{
  modelValue: string[]
}>()
const emit = defineEmits(['update:modelValue'])

const value = useVModel(props, 'modelValue', emit)


const { data,   } =  useFetch('/api/git/branch', {method: 'post',})

const keyword = ref('')

const items = computed(() => {
  if (!keyword.value) {
    return data.value?.all
  }
  return data.value?.all?.filter(item => item.includes(keyword.value))

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
        v-model="keyword"
        autofocus
        placeholder="请输入搜索"
      />
      <v-divider class="mt-2" />
    </template>
  </v-select>
</template>

<style scoped>

</style>