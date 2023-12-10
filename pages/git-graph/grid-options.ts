import { reactive, } from 'vue'
import { DateTime } from 'luxon'
import type { GridOptions, ValueFormatterParams } from 'ag-grid-community'
import MessageRenderer from './cell-renders/message-renderer'

export const gridOptions = reactive<GridOptions>({  
  defaultColDef: {   
    sortable: true,
  },   
  columnDefs: [   
    { field: 'message', headerName: '描述', resizable: true,
      cellRenderer: 'MessageRenderer',
      flex: 5, filter: 'agTextColumnFilter', tooltipField: 'message', },
    { field: 'date', headerName: '日期', valueFormatter:
     formatDate, resizable: true, minWidth: 160, 
    filter: 'agDateColumnFilter', },
    { field: 'author_name', headerName: '作者',
      resizable: true, flex: 1, minWidth: 120, 
      filter: 'agTextColumnFilter', tooltipField: 'author_name', },
    { field: 'hash',
      headerName: '提交', 
      resizable: true, valueFormatter: formatHash, 
      minWidth: 120, filter: 'agTextColumnFilter', 
      tooltipField: 'hash',cellStyle: { cursor: 'pointer' }  },
  ],
  rowSelection: 'multiple',
  animateRows: true,
  tooltipShowDelay: 500,
  tooltipMouseTrack: true,
  components: {
    MessageRenderer
  }
},)

function formatDate(params: ValueFormatterParams) {
  return DateTime.fromISO(params.value).toFormat('yyyy-MM-dd HH:mm')
}

function formatHash(params: ValueFormatterParams) {
  return params.value.slice(0, 7)
}