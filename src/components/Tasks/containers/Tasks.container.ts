import { connect, ConnectedProps } from "react-redux"
import { TaskEntity } from "../../../entities/TaskEntity"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState) => ({
  tasks: state.tasks.tasks,
})

const mapDispatch = (dispatch: any) => ({
  onMount: async () => {
    // TODO remove authenticate here
    await dispatch(actions.auth.$authenticateWithGoogle())
    await dispatch(actions.tasks.$findAll())
  },
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
