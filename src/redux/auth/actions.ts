import * as types from "./types"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import { ErrorEntity } from "../../entities/ErrorEntity"
import { getUrl } from "../../configuration/getTranslations"

export const authenticate = (
  payload: types.authenticateAction["payload"]
): types.AuthActionTypes => ({
  type: types.authenticate,
  payload,
})

export const logout = (): types.AuthActionTypes => ({
  type: types.logout,
})

export const fetching = (): types.AuthActionTypes => ({
  type: types.fetching,
})

export const fetchEnd = (): types.AuthActionTypes => ({
  type: types.fetchEnd,
})

export const $authenticateWithGoogle = (): ThunkAction<
  any,
  RootState,
  any,
  any
> => async (dispatcher, getState) => {
  const { di } = getState()

  dispatcher(fetching())

  const response = await di.AuthRepository.authenticateWithGoogle()

  if (!response.authenticated)
    return new ErrorEntity(response.error).getMessage()

  dispatcher(authenticate({ user: response.user }))

  di.LocationService.navigate("/app/")

  dispatcher(fetchEnd())
}

export const $isAuthenticated = (): ThunkAction<
  any,
  RootState,
  any,
  any
> => async (dispatcher, getState) => {
  const { di } = getState()

  dispatcher(fetching())

  return di.AuthRepository.isAuthenticated().then(response => {
    dispatcher(fetchEnd())
    if (!response.authenticated)
      return di.LocationService.navigate("/app/signin/")
    dispatcher(authenticate({ user: response.user }))
    return response
  })
}

export const $logout = (): ThunkAction<any, RootState, any, any> => async (
  dispatcher,
  getState
) => {
  const { di } = getState()

  dispatcher(fetching())
  dispatcher(logout())

  await di.AuthRepository.logout()
  di.LocationService.navigate("/app/signin/")

  dispatcher(fetchEnd())
}
