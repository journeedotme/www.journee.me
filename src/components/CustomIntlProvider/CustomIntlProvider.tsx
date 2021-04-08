import React from "react"
import { IntlProvider } from "react-intl"

import { getLanguages } from "../../configuration/getTranslations"

const messages = getLanguages()

export const CustomIntlProvider: React.FC<{ langKey: string }> = props => {
  return (
    <IntlProvider locale={props.langKey} messages={messages[props.langKey]}>
      {props.children}
    </IntlProvider>
  )
}
