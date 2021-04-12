import { IModal } from "../../interfaces/IModal"

export const open = "REDUX_MODAL_OPEN"
export interface openAction {
  type: typeof open
  payload: IModal["types"]
}

export const close = "REDUX_MODAL_CLOSE"
export interface closeAction {
  type: typeof close
}

export type ModalActionTypes = openAction | closeAction
