import React, { useEffect, useState } from "react"

import { IntlProvider } from "react-intl"
import en from "../../i18n/messages/en"
import fr from "../../i18n/messages/fr"

const messages = { en, fr }

export const CustomIntlProvider = props => {
  const [dynamicLanguage, setDynamicLanguage] = useState(null)
  const { langKey } = props

  useEffect(() => {
    const { languages } = navigator
    const language = localStorage.getItem("language")
    const selectTheRightLanguage =
      language ||
      languages.find(value => /(^fr)|(^en)/gim.exec(value)) ||
      "en"

    const [lang] = selectTheRightLanguage.split("-")
    const locale = window.location.pathname.includes("/app/") ? lang : langKey

    setDynamicLanguage(locale)
  }, [])

  return (
    <IntlProvider
      locale={dynamicLanguage || langKey}
      messages={messages[dynamicLanguage || langKey]}
    >
      {props.children}
    </IntlProvider>
  )
}
