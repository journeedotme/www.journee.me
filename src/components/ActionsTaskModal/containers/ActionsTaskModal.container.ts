import { connect, ConnectedProps } from "react-redux"
import { TaskEntity } from "../../../entities/TaskEntity"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState, props) => {
  return {
    isOpen: state.modal.open?.type === "actions-task",
  }
}

const mapDispatch = (dispatch: any) => ({
  onClose: () => dispatch(actions.modal.close()),
  onRename: (id: TaskEntity["id"]) =>
    dispatch(actions.modal.open({ type: "rename-task", id })),
  onRemove: (id: TaskEntity["id"]) =>
    dispatch(actions.modal.open({ type: "remove-task", id })),
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
