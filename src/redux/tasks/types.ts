import { CheckEntity, TaskEntity } from "../../entities/TaskEntity"

export const store = "REDUX_TASKS_STORE"
export interface storeAction {
  type: typeof store
  payload: {
    tasks: TaskEntity[]
  }
}

export const done = "REDUX_TASKS_DONE"
export interface doneAction {
  type: typeof done
  payload: {
    task: { id: TaskEntity["id"] }
    id: CheckEntity["id"]
  }
}

export const undone = "REDUX_TASKS_UNDONE"
export interface undoneAction {
  type: typeof undone
  payload: {
    task: { id: TaskEntity["id"] }
    id: CheckEntity["id"]
  }
}

export const remove = "REDUX_TASKS_REMOVE"
export interface removeAction {
  type: typeof remove
  payload: {
    id: TaskEntity["id"]
  }
}

export const add = "REDUX_TASKS_ADD"
export interface addAction {
  type: typeof add
  payload: {
    task: TaskEntity
  }
}

export const rename = "REDUX_TASKS_RENAME"
export interface renameAction {
  type: typeof rename
  payload: {
    task: TaskEntity
  }
}

export type TasksActionTypes =
  | storeAction
  | addAction
  | renameAction
  | removeAction
  | doneAction
  | undoneAction
