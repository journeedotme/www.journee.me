import * as types from "./types"
import { IAuthRepository } from "../../interfaces/IAuthRepository"
import { InMemoryAuthRepository } from "../../repositories/InMemoryAuthRepository"

type DiState = {
  AuthRepository: IAuthRepository
}

const initialState: DiState = {
  AuthRepository: new InMemoryAuthRepository(),
}

export function diReducer(
  state = initialState,
  action: types.DiActionTypes
): DiState {
  if (action.type === types.register) {
    return {
      ...state,
      [action.payload.key]: action.payload.value,
    }
  }

  return state
}
