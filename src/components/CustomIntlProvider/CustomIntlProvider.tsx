import React from "react"
import { IntlProvider } from "react-intl"

import { getTranslations } from "../../configuration/getTranslations"

const messages = getTranslations()

export const CustomIntlProvider: React.FC<{ langKey: string }> = props => {
  return (
    <IntlProvider locale={props.langKey} messages={messages[props.langKey]}>
      {props.children}
    </IntlProvider>
  )
}
