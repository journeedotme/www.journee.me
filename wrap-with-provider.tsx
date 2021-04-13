import React from "react"
import { Provider } from "react-redux"

import { InMemoryAuthRepository } from "./src/repositories/InMemoryAuthRepository"

import { init } from "./src/redux/store"
import { InMemoryLocationService } from "./src/services/InMemoryLocationService"
import { GatsbyLocationService } from "./src/services/GatsbyLocationService"
import { InMemoryTasksRepository } from "./src/repositories/InMemoryTasksRepository"

export default ({ element }) => {
  const AuthRepository = new InMemoryAuthRepository()
  const TasksRepository = new InMemoryTasksRepository()
  const LocationService = new GatsbyLocationService()

  AuthRepository.register({
    // @ts-ignore
    id: "demo",
    email: "inmemory@gmail.com",
    firstName: "John",
    lastName: "Doe",
    username: "John Doe",
  })

  TasksRepository.create({
    // @ts-ignore
    id: "demo",
    name: "Meditation",
    user: { id: "demo" },
  })

  const { store } = init({}, [
    { key: "AuthRepository", value: AuthRepository },
    { key: "TasksRepository", value: TasksRepository },
    { key: "LocationService", value: LocationService },
  ])

  return <Provider store={store}>{element}</Provider>
}
