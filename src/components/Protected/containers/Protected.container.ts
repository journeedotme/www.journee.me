import { connect, ConnectedProps } from "react-redux"
import { actions } from "../../../redux/actions"
import { RootState } from "../../../redux/store"

const mapState = (state: RootState, props) => {
  return {
    authenticated: state.auth.authenticated,
  }
}

const mapDispatch = (dispatch: any) => ({
  onMount: () => {
    dispatch(actions.auth.$isAuthenticated())
  },
})

export const connector = connect(mapState, mapDispatch)
export type ContainerProps = ConnectedProps<typeof connector>
