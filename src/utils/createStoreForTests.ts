import { init as createStore } from "../redux/store"
import { actions } from "../redux/actions"

import { InMemoryAuthRepository } from "../repositories/InMemoryAuthRepository"

export const createStoreForTests = (initialState = {}) => {
  const AuthRepository = new InMemoryAuthRepository()

  const { store } = createStore(initialState, [
    { key: "AuthRepository", value: AuthRepository },
  ])

  return {
    store,
    actions,
    di: {
      AuthRepository,
    },
  }
}
