import React from "react"
import { Provider } from "react-redux"

import { InMemoryAuthRepository } from "./src/repositories/InMemoryAuthRepository"

import { init } from "./src/redux/store"
import { InMemoryLocationService } from "./src/services/InMemoryLocationService"
import { GatsbyLocationService } from "./src/services/GatsbyLocationService"

export default ({ element }) => {
  const AuthRepository = new InMemoryAuthRepository()
  const LocationService = new GatsbyLocationService()

  AuthRepository.register({
    email: "inmemory@gmail.com",
    firstName: "John",
    lastName: "Doe",
    username: "John Doe",
  })

  const { store } = init({}, [
    { key: "AuthRepository", value: AuthRepository },
    { key: "LocationService", value: LocationService },
  ])

  return <Provider store={store}>{element}</Provider>
}
