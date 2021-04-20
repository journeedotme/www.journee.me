const path = require(`path`)
const { languages, defaultLanguage } = require("./src/configuration/languages")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  languages.forEach(lang => {
    createPage({
      path: lang === defaultLanguage ? "/" : `/${lang}/`,
      component: path.resolve(`./src/templates/static/home.tsx`),
      context: { langKey: lang },
    })
  })

  createPage({
    path: `/app/`,
    component: path.resolve(`./src/templates/static/app.tsx`),
  })
}
