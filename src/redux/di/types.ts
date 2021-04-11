import { IAuthRepository } from "../../interfaces/IAuthRepository"
import { ILocationService } from "../../interfaces/ILocationService"

export type DiInjectable =
  | { key: "AuthRepository"; value: IAuthRepository }
  | { key: "LocationService"; value: ILocationService }

export const register = "REDUX_DI_REGISTER"
export interface registerAction {
  type: typeof register
  payload: DiInjectable
}

export type DiActionTypes = registerAction
