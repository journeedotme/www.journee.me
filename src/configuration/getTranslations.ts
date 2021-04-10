import configuration from "./languages.json"

export const getTranslations = () => {
  const languages = configuration.languages as Array<string>
  return languages.reduce((accumulator, language) => {
    accumulator[language] = require(`../i18n/messages/${language}`).default
    return accumulator
  }, {}) as { [key: string]: { [key: string]: string } }
}
