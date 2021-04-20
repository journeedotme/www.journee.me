import { LangEntity } from "../entities/LangEntity"

export interface ILangRepository {
  get(): Promise<LangEntity>
  store(lang: LangEntity): Promise<LangEntity>
}
