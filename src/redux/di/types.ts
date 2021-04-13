import { IAuthRepository } from "../../interfaces/IAuthRepository"
import { ILocationService } from "../../interfaces/ILocationService"
import { ITasksRepository } from "../../interfaces/ITasksRepository"

export type DiInjectable =
  | { key: "AuthRepository"; value: IAuthRepository }
  | { key: "LocationService"; value: ILocationService }
  | { key: "TasksRepository"; value: ITasksRepository }

export const register = "REDUX_DI_REGISTER"
export interface registerAction {
  type: typeof register
  payload: DiInjectable
}

export type DiActionTypes = registerAction
