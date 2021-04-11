import { IAuthRepository } from "../../interfaces/IAuthRepository"

export type DiInjectable = { key: "AuthRepository"; value: IAuthRepository }

export const register = "REDUX_DI_REGISTER"
export interface registerAction {
  type: typeof register
  payload: DiInjectable
}

export type DiActionTypes = registerAction
