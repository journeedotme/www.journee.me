import { TaskEntity } from "../../entities/TaskEntity"
import * as types from "./types"

interface TaskState {
  tasks: TaskEntity[]
}

const initialState: TaskState = {
  tasks: [],
}

export function tasksReducer(
  state = initialState,
  action: types.TasksActionTypes
): TaskState {
  if (action.type === types.store) {
    return {
      ...state,
      tasks: action.payload.tasks,
    }
  }

  if (action.type === types.add) {
    return {
      ...state,
      tasks: [action.payload.task, ...state.tasks],
    }
  }

  if (action.type === types.rename) {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.payload.task.id ? action.payload.task : task
      ),
    }
  }

  if (action.type === types.remove) {
    return {
      ...state,
      tasks: state.tasks.filter(task => task.id !== action.payload.id),
    }
  }

  return state
}
