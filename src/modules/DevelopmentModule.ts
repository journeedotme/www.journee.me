import { IModule } from "../interfaces/IModule"
import { InMemoryAuthRepository } from "../repositories/InMemoryAuthRepository"
import { InMemoryTasksRepository } from "../repositories/InMemoryTasksRepository"
import { GatsbyLocationService } from "../services/GatsbyLocationService"

export class DevelopmentModule implements IModule {
  build() {
    const AuthRepository = new InMemoryAuthRepository()
    const TasksRepository = new InMemoryTasksRepository()
    const LocationService = new GatsbyLocationService()

    AuthRepository.register({
      //@ts-ignore
      id: "demo",
      email: "john.doe@journee.me",
      image: null,
      username: "John Doe",
    })

    TasksRepository.create({
      name: "Building Journee",
      checks: new Map(),
      user: {
        id: "demo",
      },
    })

    return { AuthRepository, TasksRepository, LocationService }
  }
}
