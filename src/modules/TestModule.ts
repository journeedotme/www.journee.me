import { IModule } from "../interfaces/IModule"
import { InMemoryAuthRepository } from "../repositories/InMemoryAuthRepository"
import { InMemoryLangRepository } from "../repositories/InMemoryLangRepository"
import { InMemoryTasksRepository } from "../repositories/InMemoryTasksRepository"
import { InMemoryLocationService } from "../services/InMemoryLocationService"

export class TestModule implements IModule {
  build() {
    const AuthRepository = new InMemoryAuthRepository()
    const TasksRepository = new InMemoryTasksRepository()
    const LocationService = new InMemoryLocationService()
    const LangRepository = new InMemoryLangRepository()

    return { AuthRepository, TasksRepository, LocationService, LangRepository }
  }
}
