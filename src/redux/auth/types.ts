import { UserEntity } from "../../entities/UserEntity"

export const fetching = "REDUX_AUTH_FETCHING"
export interface fetchingAction {
  type: typeof fetching
}

export const fetchEnd = "REDUX_AUTH_FETCH_END"
export interface fetchEndAction {
  type: typeof fetchEnd
}

export const authenticate = "REDUX_AUTH_AUTHENTICATE"
export interface authenticateAction {
  type: typeof authenticate
  payload: { user: UserEntity }
}

export const logout = "REDUX_AUTH_LOGOUT"
export interface logoutAction {
  type: typeof logout
}

export type AuthActionTypes =
  | fetchEndAction
  | fetchingAction
  | authenticateAction
  | logoutAction
