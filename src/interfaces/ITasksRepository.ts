import { TaskEntity, TaskEntityWithoutId } from "../entities/TaskEntity"

export type RenameResponse =
  | {
      task: TaskEntity
      error: null
      status: 200
    }
  | { task: null; error: "tasks/not-exists"; status: 500 }

export type RemoveResponse =
  | {
      error: null
      status: 200
    }
  | { error: "tasks/not-allowed"; status: 500 }
  | { error: "tasks/not-exists"; status: 500 }

export interface ITasksRepository {
  findAllByUserId(user: {
    id: TaskEntity["id"]
  }): Promise<{ tasks: TaskEntity[] }>
  create(task: TaskEntityWithoutId): Promise<{ task: TaskEntity }>

  rename(params: {
    id: TaskEntity["id"]
    name: TaskEntity["name"]
  }): Promise<RenameResponse>

  remove(params: { id: TaskEntity["id"] }): Promise<RemoveResponse>
}
