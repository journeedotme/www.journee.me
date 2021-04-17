import { connect, ConnectedProps } from "react-redux"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState) => ({
  tasks: state.tasks.tasks,
})

const mapDispatch = (dispatch: any) => ({
  onMount: async () => {
    await dispatch(actions.tasks.$findAll())
  },
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
