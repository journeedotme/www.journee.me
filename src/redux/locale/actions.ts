import { ThunkAction } from "redux-thunk"
import { getLang } from "../../configuration/getTranslations"
import { RootState } from "../store"
import * as types from "./types"

export const store = (
  payload: types.storeAction["payload"]
): types.LocaleActionTypes => ({
  type: types.store,
  payload,
})

export const $load = (): ThunkAction<any, RootState, any, any> => async (
  dispatcher,
  getState
) => {
  const { di } = getState()

  const { locale } = await di.LangRepository.get()

  const lang = getLang(locale)

  dispatcher(store({ lang }))
}
