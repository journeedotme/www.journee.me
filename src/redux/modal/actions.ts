import * as types from "./types"

export const close = (): types.ModalActionTypes => ({
  type: types.close,
})

export const open = (payload: types.openAction["payload"]): types.ModalActionTypes => ({
  type: types.open,
  payload,
})

