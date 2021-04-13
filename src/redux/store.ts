import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import { actions } from "./actions"
import { authReducer } from "./auth/reducers"
import { diReducer } from "./di/reducers"
import { modalReducer } from "./modal/reducers"
import { tasksReducer } from "./tasks/reducers"
import { DiInjectable } from "./di/types"

const enhancer = composeWithDevTools(applyMiddleware(thunk))

export const reducers = combineReducers({
  auth: authReducer,
  di: diReducer,
  modal: modalReducer,
  tasks: tasksReducer,
})

export type RootState = ReturnType<typeof reducers>

export const init = (initialState = {}, di: DiInjectable[]) => {
  const store = createStore(reducers, initialState, enhancer)

  di.forEach(({ key, value }) => {
    store.dispatch(
      //@ts-ignore
      actions.di.register({
        key,
        value,
      })
    )
  })

  return { store }
}
