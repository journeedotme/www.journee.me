import { connect, ConnectedProps } from "react-redux"
import { TaskEntity } from "../../../entities/TaskEntity"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState) => ({})

const mapDispatch = (dispatch: any, props: { id: TaskEntity["id"] }) => ({
  onActions: () =>
    dispatch(actions.modal.open({ type: "actions-task", id: props.id })),
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
