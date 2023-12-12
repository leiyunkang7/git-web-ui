import type { BranchSummary,RemoteWithRefs } from 'simple-git'
import {computed} from 'vue'

export const useGraphStore = defineStore('graph', () => {
  const snackbar = ref(false)

  const snackbarText = ref('')

  const showRemoteBranch = ref(true)

  const branchKeyword = ref('')

  const { branchSummary } = branchLogical({showRemoteBranch,branchKeyword})

  const {remoteList, remoteMap} = remoteLogical()
  
  return {
    snackbar,
    snackbarText,
    showRemoteBranch,
    branchSummary,
    branchKeyword,
    remoteList,
    remoteMap
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

function remoteLogical() {
  const remoteList = ref<RemoteWithRefs[] | null>(null)


  useFetch(
    '/api/git/remote', 
    {method: 'post', body:{verbose:true} }).then(({data}) => {

    remoteList.value = (data.value ?? [] )as RemoteWithRefs[]
  })

  const remoteMap = computed(() => {
    const map:{[x in string]: RemoteWithRefs} = {}
    remoteList.value?.forEach((remote) => {
      map[remote.name] = remote
    })
    return map
  })
  
  return {
    remoteList,
    remoteMap
  }
}