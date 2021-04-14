import { TaskEntity } from "../../entities/TaskEntity"
import * as types from "./types"

interface TaskState {
  lang: string
}

const initialState: TaskState = {
  lang: "en",
}

export function localeReducer(
  state = initialState,
  action: types.LocaleActionTypes
): TaskState {
  if (action.type === types.store) {
    return {
      ...state,
      lang: action.payload.lang,
    }
  }

  return state
}
