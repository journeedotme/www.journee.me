import { connect, ConnectedProps } from "react-redux"
import { TaskEntity } from "../../../entities/TaskEntity"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState, props: { id: TaskEntity["id"] }) => ({
  task: state.tasks.tasks.find(task => task.id === props.id) as TaskEntity,
})

const mapDispatch = (dispatch: any, props: { id: TaskEntity["id"] }) => ({
  onActions: () =>
    dispatch(actions.modal.open({ type: "actions-task", id: props.id })),
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
