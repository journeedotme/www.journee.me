import { TaskEntity } from "../entities/TaskEntity"

export interface IModal {
  types:
    | {
        type: "rename-task"
        id: TaskEntity["id"]
      }
    | { type: "add-task" }
    | { type: "remove-task"; id: TaskEntity["id"] }
    | { type: "actions-task"; id: TaskEntity["id"] }
}
