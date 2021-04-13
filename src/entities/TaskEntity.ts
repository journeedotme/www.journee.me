import { UserEntity } from "./UserEntity"

export interface TaskEntity {
  id: string
  name: string
  user: { id: UserEntity["id"] }
  checks: Map<CheckEntity["id"], CheckEntity>
}

export interface CheckEntity {
  id: string
  task: TaskEntity["id"]
}

export type TaskEntityWithoutId = Omit<TaskEntity, "id">
