import { connect, ConnectedProps } from "react-redux"
import { CheckEntity, TaskEntity } from "../../../../../entities/TaskEntity"
import { actions } from "../../../../../redux/actions"
import { RootState } from "../../../../../redux/store"

const mapState = (
  state: RootState,
  props: { id: CheckEntity["id"]; task: TaskEntity["id"] }
) => {
  const task = state.tasks.tasks.find(
    task => task.id === props.task
  ) as TaskEntity

  const check = task.checks.get(props.id)

  return { active: !!check }
}

const mapDispatch = (
  dispatch: any,
  props: { id: CheckEntity["id"]; task: TaskEntity["id"] }
) => ({
  onClick: () => {
    dispatch(actions.tasks.$toggle({ id: props.id, task: { id: props.task } }))
  },
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
