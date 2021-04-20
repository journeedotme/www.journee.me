import { IAuthRepository } from "./IAuthRepository"
import { ILangRepository } from "./ILangRepository"
import { ILocationService } from "./ILocationService"
import { ITasksRepository } from "./ITasksRepository"

export type Modules = {
  AuthRepository: IAuthRepository
  LocationService: ILocationService
  TasksRepository: ITasksRepository
  LangRepository: ILangRepository
}

export interface IModule {
  build(): Modules
}
