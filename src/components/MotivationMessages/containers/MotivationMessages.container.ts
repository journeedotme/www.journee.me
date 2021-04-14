import { connect, ConnectedProps } from "react-redux"
import { TaskEntity } from "../../../entities/TaskEntity"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState) => ({
  show: state.tasks.tasks.length <= 1,
})

const mapDispatch = (dispatch: any) => ({})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
