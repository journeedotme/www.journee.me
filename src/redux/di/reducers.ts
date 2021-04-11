import * as types from "./types"
import { IAuthRepository } from "../../interfaces/IAuthRepository"
import { InMemoryAuthRepository } from "../../repositories/InMemoryAuthRepository"
import { InMemoryLocationService } from "../../services/InMemoryLocationService"
import { ILocationService } from "../../interfaces/ILocationService"

type DiState = {
  AuthRepository: IAuthRepository
  LocationService: ILocationService
}

const initialState: DiState = {
  AuthRepository: new InMemoryAuthRepository(),
  LocationService: new InMemoryLocationService(),
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
