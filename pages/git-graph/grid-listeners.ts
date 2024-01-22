import type { CellClickedEvent } from 'ag-grid-community'
import { useGraphStore } from './store'

const { copy } = useClipboard({ legacy: true })

function cellClicked(event: CellClickedEvent) {
  if (event.colDef.field !== 'hash') return

  const { snackbar, snackbarText } = storeToRefs(useGraphStore())

  // const toast  = useToast()
  copy(event.value).then(() => {
    // toast.add({title: '复制成功!', timeout: 1000})
    snackbar.value = true
    snackbarText.value = '复制成功!'
  })
}

export const gridListeners = {
  cellClicked
}
