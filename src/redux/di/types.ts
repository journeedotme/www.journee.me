import { IAuthRepository } from "../../interfaces/IAuthRepository"
import { ILangRepository } from "../../interfaces/ILangRepository"
import { ILocationService } from "../../interfaces/ILocationService"
import { Modules } from "../../interfaces/IModule"
import { ITasksRepository } from "../../interfaces/ITasksRepository"

export type DiInjectable = Modules

export const register = "REDUX_DI_REGISTER"
export interface registerAction {
  type: typeof register
  payload: DiInjectable
}

export type DiActionTypes = registerAction
