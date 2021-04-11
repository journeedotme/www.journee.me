import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"

export const open = (): ThunkAction<any, RootState, any, any> => (
  dispatcher,
  getState
) => {
  const { di } = getState()

  const location = di.LocationService.getLocation()

  di.LocationService.navigate(location.pathname + "#drawer=open")
}
