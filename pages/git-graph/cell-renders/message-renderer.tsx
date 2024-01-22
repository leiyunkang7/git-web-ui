import type { DefaultLogFields } from 'simple-git'
import { formatRefs } from './refs'

export default defineComponent({
  name: 'MessageRenderer',
  props: {
    params: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const data = props.params.data as DefaultLogFields

    // const refList = data.refs.split(', ').map(label => {

    //   const item = {
    //     label
    //   }

    //   return item

    // })

    const refList = formatRefs(data.refs)

    // debugger

    // })

    return () => (
      <div>
        {refList.length && JSON.stringify(refList)}
        {data.message}
      </div>
    )
  }
})
