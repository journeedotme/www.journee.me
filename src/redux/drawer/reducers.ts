import * as types from "./types"

interface DrawerState {
  isOpen: boolean
}

const initialState: DrawerState = {
  isOpen: false,
}

export function DrawerReducer(
  state = initialState,
  action: types.DrawerActionTypes
): DrawerState {
  return state
}
