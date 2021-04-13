import { TaskEntity, TaskEntityWithoutId } from "../entities/TaskEntity"
import {
  ITasksRepository,
  RemoveResponse,
  RenameResponse,
} from "../interfaces/ITasksRepository"

export class InMemoryTasksRepository implements ITasksRepository {
  private tasks: Map<TaskEntity["id"], TaskEntity> = new Map()

  async create(task: TaskEntityWithoutId): Promise<{ task: TaskEntity }> {
    const id = (Math.random() * Date.now()).toString()

    const entity = { id, ...task }

    this.tasks.set(entity.id, entity)

    return { task: entity }
  }

  async remove(params: { id: TaskEntity["id"] }): Promise<RemoveResponse> {
    const task = await this.findById(params)
    if (!task) return { error: "tasks/not-exists", status: 500 }

    this.tasks.delete(params.id)

    return { error: null, status: 200 }
  }

  async rename(params: {
    id: TaskEntity["id"]
    name: TaskEntity["name"]
  }): Promise<RenameResponse> {
    const task = this.tasks.get(params.id)

    if (!task) return { error: "tasks/not-exists", task: null, status: 500 }

    const entity = { ...task, name: params.name }

    this.tasks.set(entity?.id, entity)

    return { task: entity, error: null, status: 200 }
  }

  async findAllByUserId(user: {
    id: string
  }): Promise<{ tasks: TaskEntity[] }> {
    const values = Array.from(this.tasks.values())
    const tasks = values.filter(task => task.user.id === user.id)
    return { tasks }
  }

  async findById(params: { id: string }): Promise<TaskEntity | null> {
    return this.tasks.get(params.id) || null
  }
}
