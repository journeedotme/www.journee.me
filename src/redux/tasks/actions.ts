import { ThunkAction } from "redux-thunk"
import * as types from "./types"
import { fetching, fetchEnd, logout } from "../auth/types"
import { RootState } from "../store"
import { TaskEntity, TaskEntityWithoutId } from "../../entities/TaskEntity"

export const store = (
  payload: types.storeAction["payload"]
): types.TasksActionTypes => ({
  type: types.store,
  payload,
})

export const remove = (
  payload: types.removeAction["payload"]
): types.TasksActionTypes => ({
  type: types.remove,
  payload,
})

export const add = (
  payload: types.addAction["payload"]
): types.TasksActionTypes => ({
  type: types.add,
  payload,
})

export const rename = (
  payload: types.renameAction["payload"]
): types.TasksActionTypes => ({
  type: types.rename,
  payload,
})

export const $findAll = (): ThunkAction<any, RootState, any, any> => async (
  dispatcher,
  getState
) => {
  const { di, auth } = getState()

  const { tasks } = await di.TasksRepository.findAllByUserId({
    id: auth.user?.id as string,
  })

  dispatcher(store({ tasks }))
}

export const $create = (params: {
  name: TaskEntity["name"]
}): ThunkAction<any, RootState, any, any> => async (dispatcher, getState) => {
  const { di, auth } = getState()

  if (!auth.authenticated || !auth.user) return

  const { task } = await di.TasksRepository.create({
    name: params.name,
    user: { id: auth.user.id },
  })

  dispatcher(add({ task }))
}

export const $rename = (params: {
  id: TaskEntity["id"]
  name: TaskEntity["name"]
}): ThunkAction<any, RootState, any, any> => async (dispatcher, getState) => {
  const { di, auth } = getState()

  if (!auth.authenticated || !auth.user) return

  const response = await di.TasksRepository.rename({
    id: params.id,
    name: params.name,
  })

  if (response.status === 200) dispatcher(rename({ task: response.task }))
}

export const $remove = (params: {
  id: TaskEntity["id"]
}): ThunkAction<any, RootState, any, any> => async (dispatcher, getState) => {
  const { di, auth } = getState()

  if (!auth.authenticated || !auth.user) return

  const response = await di.TasksRepository.remove({
    id: params.id,
  })

  if (response.status === 200) dispatcher(remove({ id: params.id }))
}
