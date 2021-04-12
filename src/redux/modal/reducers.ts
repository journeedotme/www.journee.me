import { IModal } from "../../interfaces/IModal"
import * as types from "./types"

interface ModalState {
  open: IModal["types"] | null
}

const initialState: ModalState = {
  open: null,
}

export function modalReducer(
  state = initialState,
  action: types.ModalActionTypes
): ModalState {
  if (action.type === types.open) {
    return {
      ...state,
      open: action.payload,
    }
  }

  if (action.type === types.close) {
    return {
      ...state,
      open: null,
    }
  }

  return state
}
