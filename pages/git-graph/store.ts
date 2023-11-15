import type { BranchSummary } from 'simple-git'

export const useGraphStore = defineStore('graph', () => {
  const snackbar = ref(false)

  const snackbarText = ref('')

  const showRemoteBranch = ref(true)

  const branchKeyword = ref('')

  const { branchSummary } = branchLogical({showRemoteBranch,branchKeyword})
  
  return {
    snackbar,
    snackbarText,
    showRemoteBranch,
    branchSummary,
    branchKeyword
  }
})

function branchLogical({
  showRemoteBranch,
  branchKeyword
}:{
    showRemoteBranch:Ref<boolean>
    branchKeyword:Ref<string>
  }) {
  const branchSummary = ref<BranchSummary | null>()
  watch(showRemoteBranch, async (showRemoteBranch) => {
    branchKeyword.value = ''
    const url = showRemoteBranch? '/api/git/branch': '/api/git/branchLocal'
    const { data } =  await useFetch<BranchSummary>(url, {method: 'post',})
    branchSummary.value = data.value

  }, {immediate: true})

  return {
    branchSummary
  }
}