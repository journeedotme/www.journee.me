import * as types from "./types"
import { IAuthRepository } from "../../interfaces/IAuthRepository"
import { InMemoryAuthRepository } from "../../repositories/InMemoryAuthRepository"
import { InMemoryLocationService } from "../../services/InMemoryLocationService"
import { ILocationService } from "../../interfaces/ILocationService"
import { ITasksRepository } from "../../interfaces/ITasksRepository"
import { InMemoryTasksRepository } from "../../repositories/InMemoryTasksRepository"

type DiState = {
  AuthRepository: IAuthRepository
  LocationService: ILocationService
  TasksRepository: ITasksRepository
}

const initialState: DiState = {
  AuthRepository: new InMemoryAuthRepository(),
  TasksRepository: new InMemoryTasksRepository(),
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
