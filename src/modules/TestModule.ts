import { IModule } from "../interfaces/IModule"
import { InMemoryAuthRepository } from "../repositories/InMemoryAuthRepository"
import { InMemoryTasksRepository } from "../repositories/InMemoryTasksRepository"
import { InMemoryLocationService } from "../services/InMemoryLocationService"

export class TestModule implements IModule {
  build() {
    const AuthRepository = new InMemoryAuthRepository()
    const TasksRepository = new InMemoryTasksRepository()
    const LocationService = new InMemoryLocationService()

    return { AuthRepository, TasksRepository, LocationService }
  }
}
