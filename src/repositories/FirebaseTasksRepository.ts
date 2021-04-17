import { Firebase } from "../services/Firebase"
import { FirebaseUtils } from "../utils/FirebaseUtils"
import {
  DoneResponse,
  ITasksRepository,
  RemoveResponse,
  RenameResponse,
  UndoneResponse,
} from "../interfaces/ITasksRepository"
import {
  CheckEntity,
  TaskEntity,
  TaskEntityWithoutId,
} from "../entities/TaskEntity"
import dayjs from "dayjs"

export class FirebaseTasksRepository
  extends FirebaseUtils
  implements ITasksRepository {
  constructor(private firebase: Firebase) {
    super()
  }

  async done(params: {
    task: { id: string }
    id: string
  }): Promise<DoneResponse> {
    const response = await this.firebase
      .database()
      .collection("tasks")
      .doc(params.task.id)
      .collection("checks")
      .doc(params.id)
      .set({ id: params.id, date: new Date(params.id) })

    return { status: 200, error: null }
  }

  async undone(params: {
    task: { id: string }
    id: string
  }): Promise<UndoneResponse> {
    const response = await this.firebase
      .database()
      .collection("tasks")
      .doc(params.task.id)
      .collection("checks")
      .doc(params.id)
      .delete()

    return { status: 200, error: null }
  }

  async findAllByUserId(user: {
    id: string
  }): Promise<{ tasks: TaskEntity[] }> {
    try {
      const response = await this.firebase
        .database()
        .collection("tasks")
        .where("user.id", "==", user.id)
        .get()

      const tasks = this.mapQuerySnapshot<TaskEntity>(response)
      const tasksWithChecks = await Promise.all(
        tasks.map(async task => {
          const { checks } = await this.findChecksByTaskId({ id: task.id })

          return {
            ...task,
            checks: new Map(checks.map(check => [check.id, check])),
          }
        })
      )

      return { tasks: tasksWithChecks }
    } catch (error) {
      console.log(error)
      return { tasks: [] }
    }
  }

  async findChecksByTaskId(task: {
    id: string
  }): Promise<{ checks: CheckEntity[] }> {
    const sevenDaysAgo = dayjs().subtract(7, "days")
    const response = await this.firebase
      .database()
      .collection("tasks")
      .doc(task.id)
      .collection("checks")
      .where("date", ">=", sevenDaysAgo.toDate())
      .get()

    const checks = this.mapQuerySnapshot<CheckEntity>(response)

    return { checks }
  }

  async create(task: TaskEntityWithoutId): Promise<{ task: TaskEntity }> {
    const document = this.firebase.database().collection("tasks").doc()
    const { checks, ...all } = task
    const entity = { ...all, id: document.id }

    await document.set(entity)

    return { task: { ...entity, checks } }
  }

  async rename(params: { id: string; name: string }): Promise<RenameResponse> {
    try {
      const response = await this.firebase
        .database()
        .collection("tasks")
        .doc(params.id)
        .update({
          name: params.name,
        })

      return { error: null, status: 200 }
    } catch (error) {
      return { error: null, status: 200 }
    }
  }

  async remove(params: { id: string }): Promise<RemoveResponse> {
    try {
      const response = await this.firebase
        .database()
        .collection("tasks")
        .doc(params.id)
        .delete()

      return { error: null, status: 200 }
    } catch (error) {
      return { error: null, status: 200 }
    }
  }
}
