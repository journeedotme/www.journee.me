import { init as createStore } from "../redux/store"
import { actions } from "../redux/actions"

import { InMemoryAuthRepository } from "../repositories/InMemoryAuthRepository"
import { InMemoryLocationService } from "../services/InMemoryLocationService"

export const createStoreForTests = (initialState = {}) => {
  const AuthRepository = new InMemoryAuthRepository()
  const LocationService = new InMemoryLocationService()

  const { store } = createStore(initialState, [
    { key: "AuthRepository", value: AuthRepository },
    { key: "LocationService", value: LocationService },
  ])

  return {
    store,
    actions,
    di: {
      AuthRepository,
      LocationService,
    },
  }
}
