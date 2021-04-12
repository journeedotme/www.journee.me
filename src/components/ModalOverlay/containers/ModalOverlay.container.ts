import { connect, ConnectedProps } from "react-redux"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState, props) => {
  return {
    isOpen: !!state.modal.open,
  }
}

const mapDispatch = (dispatch: any) => ({
  onClick: () => dispatch(actions.modal.close()),
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
