import { IAuthRepository } from "./IAuthRepository"
import { ILocationService } from "./ILocationService"
import { ITasksRepository } from "./ITasksRepository"

export type Modules = {
  AuthRepository: IAuthRepository
  LocationService: ILocationService
  TasksRepository: ITasksRepository
}

export interface IModule {
  build(): Modules
}
