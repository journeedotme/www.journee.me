import { LangEntity } from "../entities/LangEntity"
import { ILangRepository } from "../interfaces/ILangRepository"

export class NavigatorLangRepository implements ILangRepository {
  async store(lang: LangEntity): Promise<LangEntity> {
    return lang
  }

  async get() {
    const lang = localStorage.getItem("language") || navigator.language

    return { id: lang, locale: lang }
  }
}
