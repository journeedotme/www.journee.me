import React from "react"
import { Provider } from "react-redux"

import { InMemoryAuthRepository } from "./src/repositories/InMemoryAuthRepository"

import { init } from "./src/redux/store"

export default ({ element }) => {
  const AuthRepository = new InMemoryAuthRepository()

  AuthRepository.register({
    email: "inmemory@gmail.com",
    firstName: "John",
    lastName: "Doe",
    username: "John Doe",
  })

  const { store } = init({}, [{ key: "AuthRepository", value: AuthRepository }])

  return <Provider store={store}>{element}</Provider>
}
