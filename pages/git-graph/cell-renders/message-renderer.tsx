import type { DefaultLogFields } from 'simple-git'
import { useGraphStore } from '~/pages/git-graph/store'

export default defineComponent({
  name: 'MessageRenderer',
  props: {
    params: {
      type: Object ,
      default: () => ({})
    },

  },
  setup(props) {
    const data = props.params.data as DefaultLogFields

    const refList = formatRefs(data.refs)

    const { remoteMap } = storeToRefs(useGraphStore())


    const Refs = refList.map(item => {

    })

    return () => <div>{data.refs}{data.message}</div>
  }
})

export function formatRefs(str: string) {
  return str.split(', ').map(label => {

    const item = {
      label
    }

    return item
    
  })
}