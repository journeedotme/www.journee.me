import { connect, ConnectedProps } from "react-redux"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState, props: { withTimeline?: boolean }) => {
  return {
    withTimeline: props.withTimeline,
  }
}

const mapDispatch = (dispatch: any) => ({
  onOpen: () => dispatch(actions.drawer.open()),
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
