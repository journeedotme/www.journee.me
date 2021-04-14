import { init as createStore } from "../redux/store"
import { actions } from "../redux/actions"

import { InMemoryAuthRepository } from "../repositories/InMemoryAuthRepository"
import { InMemoryLocationService } from "../services/InMemoryLocationService"
import { InMemoryTasksRepository } from "../repositories/InMemoryTasksRepository"

export const createStoreForTests = (initialState = {}) => {
  const AuthRepository = new InMemoryAuthRepository()
  const TasksRepository = new InMemoryTasksRepository()
  const LocationService = new InMemoryLocationService()

  const { store } = createStore(initialState, [
    { key: "AuthRepository", value: AuthRepository },
    { key: "TasksRepository", value: TasksRepository },
    { key: "LocationService", value: LocationService },
  ])

  return {
    store,
    actions,
    di: {
      AuthRepository,
      LocationService,
      TasksRepository,
    },
  }
}
