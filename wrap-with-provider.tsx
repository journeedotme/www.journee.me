import React from "react"
import { Provider } from "react-redux"
import { init } from "./src/redux/store"
import { ModuleProvider } from "./src/modules/ModuleProvider"

export default ({ element }) => {
  const {
    AuthRepository,
    TasksRepository,
    LocationService,
  } = new ModuleProvider().build()

  const { store } = init({}, [
    { key: "AuthRepository", value: AuthRepository },
    { key: "TasksRepository", value: TasksRepository },
    { key: "LocationService", value: LocationService },
  ])

  return <Provider store={store}>{element}</Provider>
}
