import { UserEntity } from "./UserEntity"

export interface TaskEntity {
  id: string
  name: string
  user: { id: UserEntity["id"] }
}

export type TaskEntityWithoutId = Omit<TaskEntity, "id">
