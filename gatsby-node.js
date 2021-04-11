const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const {
  languages,
  defaultLanguage,
} = require("./src/configuration/languages.json")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  languages.forEach(lang => {
    createPage({
      path: lang === defaultLanguage ? "/" : `/${lang}/`,
      component: path.resolve(`./src/templates/static/home.tsx`),
      context: { langKey: lang },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: lang === defaultLanguage ? "/app/" : `/${lang}/app/`,
      component: path.resolve(`./src/templates/static/app.tsx`),
      context: { langKey: lang },
    })
  })
}
