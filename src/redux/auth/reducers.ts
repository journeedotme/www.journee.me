import { UserEntity } from "../../entities/UserEntity"
import * as constants from "./types"

interface AuthState {
  user: UserEntity | null
  authenticated: boolean
  fetching: boolean
}

const initialState: AuthState = {
  user: {
    email: "demo@journee.me",
    firstName: "John",
    lastName: "Doe",
    username: "John Doe",
    id: "demo",
  },
  authenticated: true,
  fetching: false,
}

export function authReducer(
  state = initialState,
  action: constants.AuthActionTypes
): AuthState {
  if (action.type === constants.authenticate) {
    return {
      ...state,
      authenticated: true,
      user: { ...action.payload.user },
    }
  }

  if (action.type === constants.logout) {
    return { ...initialState }
  }

  if (action.type === constants.fetching) {
    return {
      ...state,
      fetching: true,
    }
  }

  if (action.type === constants.fetchEnd) {
    return {
      ...state,
      fetching: false,
    }
  }

  return state
}
