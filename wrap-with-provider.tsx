import React from "react"
import { Provider } from "react-redux"

import { FirebaseAuthRepository } from "./src/repositories/FirebaseAuthRepository"

import { init } from "./src/redux/store"
import { GatsbyLocationService } from "./src/services/GatsbyLocationService"
import { FirebaseTasksRepository } from "./src/repositories/FirebaseTasksRepository"
import { Firebase } from "./src/services/Firebase"

export default ({ element }) => {
  const firebase = new Firebase()
  const AuthRepository = new FirebaseAuthRepository(firebase)
  const TasksRepository = new FirebaseTasksRepository(firebase)
  const LocationService = new GatsbyLocationService()

  const { store } = init({}, [
    { key: "AuthRepository", value: AuthRepository },
    { key: "TasksRepository", value: TasksRepository },
    { key: "LocationService", value: LocationService },
  ])

  return <Provider store={store}>{element}</Provider>
}
