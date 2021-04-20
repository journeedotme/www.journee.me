import { LangEntity } from "../entities/LangEntity"
import { ILangRepository } from "../interfaces/ILangRepository"

export class InMemoryLangRepository implements ILangRepository {
  private lang: LangEntity = { id: "en", locale: "en" }

  async get() {
    return this.lang
  }

  async store(lang: LangEntity) {
    this.lang = lang
    return lang
  }
}
