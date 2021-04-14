import { connect, ConnectedProps } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState) => ({
  user: state.auth.user,
})

const mapDispatch = (dispatch: ThunkDispatch<RootState, any, any>) => ({
  //TODO do it in redux
  onClose: () => window?.history.back(),
  onLogout: () => {
    dispatch(actions.auth.$logout())
  },
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
