export const store = "REDUX_LOCALE_STORE"
export interface storeAction {
  type: typeof store
  payload: {
    lang: string
  }
}

export type LocaleActionTypes = storeAction
