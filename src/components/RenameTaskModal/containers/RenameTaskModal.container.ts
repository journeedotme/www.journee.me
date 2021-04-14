import { connect, ConnectedProps } from "react-redux"
import { TaskEntity } from "../../../entities/TaskEntity"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState, props) => {
  if (state.modal.open?.type !== "rename-task")
    return {
      isOpen: false,
      id: "false-id",
      name: "",
    }

  const id = state.modal.open.id

  return {
    isOpen: true,
    id,
    name: state.tasks.tasks.find(task => task.id === id)
      ?.name as TaskEntity["name"],
  }
}

const mapDispatch = (dispatch: any) => ({
  onClose: () => dispatch(actions.modal.close()),
  onRename: (params: { id: TaskEntity["id"]; name: TaskEntity["name"] }) => {
    dispatch(actions.tasks.$rename(params))
    dispatch(actions.modal.close())
  },
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
