import type { DefaultLogFields } from 'simple-git'

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
    return () => <div>{data.refs}{data.message}</div>
  }
})