import { connect, ConnectedProps } from "react-redux"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState) => ({
  authenticated: state.auth.authenticated,
})

const mapDispatch = (dispatch: any) => ({
  onClick: () => dispatch(actions.auth.$authenticateWithGoogle()),
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
