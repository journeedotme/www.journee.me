import { connect, ConnectedProps } from "react-redux"
import { TaskEntity } from "../../../entities/TaskEntity"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState, props) => {
  if (state.modal.open?.type !== "remove-task")
    return {
      isOpen: false,
      id: "false-id",
    }

  return {
    isOpen: true,
    id: state.modal.open.id as TaskEntity["id"],
  }
}

const mapDispatch = (dispatch: any) => ({
  onClose: () => dispatch(actions.modal.close()),
  onRemove: (id: string) => {
    dispatch(actions.tasks.$remove({ id }))
    dispatch(actions.modal.close())
  },
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
