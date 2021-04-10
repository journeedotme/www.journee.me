import { getTranslations } from "../../../configuration/getTranslations"
import _ from "lodash"

describe("i18n test suite", () => {
  it("all languages should be translated", () => {
    const translations = getTranslations()
    const languages = Object.keys(translations)
    const keys = languages.map(language => ({
      language,
      keys: Object.keys(translations[language]).sort(),
    }))

    keys.forEach((actual, index) => {
      const compare = keys[index + 1] || keys[0]
      const differences = _.difference(actual.keys, compare.keys)

      expect(
        differences,
        `${actual.language} is different to ${compare.language} `
      ).toEqual([])
    })
  })
})
