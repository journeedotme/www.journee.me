import { connect, ConnectedProps } from "react-redux"
import { actions } from "../../../redux/actions"

const mapDispatch = (dispatch: any) => ({
  onMount: () => {
    dispatch(actions.locale.$load())
  },
})

export const connector = connect(null, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
