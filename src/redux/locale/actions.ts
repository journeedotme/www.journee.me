import * as types from "./types"

export const store = (
  payload: types.storeAction["payload"]
): types.LocaleActionTypes => ({
  type: types.store,
  payload,
})
