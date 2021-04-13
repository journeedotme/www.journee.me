import { connect, ConnectedProps } from "react-redux"
import { actions } from "../../../redux/actions"

const mapDispatch = (dispatch: any, props: { lang: string }) => ({
  onMount: () => {
    dispatch(actions.locale.store({ lang: props.lang }))
  },
})

export const connector = connect(null, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
