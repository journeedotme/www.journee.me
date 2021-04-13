import { UserEntity } from "./UserEntity"

export interface TaskEntity {
  id: string
  name: string
  user: { id: UserEntity["id"] }
  checks: Array<{ date: Date; done: boolean }>
}

export type TaskEntityWithoutId = Omit<TaskEntity, "id">
