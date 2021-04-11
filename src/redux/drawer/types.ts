export const open = "REDUX_DRAWER_OPEN"
export interface openAction {
  type: typeof open
}

export const close = "REDUX_DRAWER_CLOSE"
export interface closeAction {
  type: typeof close
}

export type DrawerActionTypes = closeAction | openAction
