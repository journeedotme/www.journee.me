import { IModule } from "../interfaces/IModule"
import { FirebaseAuthRepository } from "../repositories/FirebaseAuthRepository"
import { FirebaseTasksRepository } from "../repositories/FirebaseTasksRepository"
import { Firebase } from "../services/Firebase"
import { GatsbyLocationService } from "../services/GatsbyLocationService"

export class ProductionModule implements IModule {
  build() {
    const firebase = new Firebase()
    const AuthRepository = new FirebaseAuthRepository(firebase)
    const TasksRepository = new FirebaseTasksRepository(firebase)
    const LocationService = new GatsbyLocationService()

    return { AuthRepository, TasksRepository, LocationService }
  }
}
