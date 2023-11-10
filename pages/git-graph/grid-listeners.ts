import type {CellClickedEvent } from 'ag-grid-community'

const {  copy,   } = useClipboard({ legacy: true })

function cellClicked(event:CellClickedEvent) {
  if(event.colDef.field !== 'hash') return
  const toast  = useToast()
  copy(event.value).then(() => {
    toast.add({title: '复制成功!', timeout: 1000})
  })
  
}
 
export const gridListeners = {
  cellClicked
}