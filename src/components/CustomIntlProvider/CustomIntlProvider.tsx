import dayjs from "dayjs"
import React from "react"
import { IntlProvider } from "react-intl"
import { getTranslations } from "../../configuration/getTranslations"
import {
  connector,
  ContainerProps,
} from "./containers/CustomIntlProvider.container"

const messages = getTranslations()

export type Props = { langKey: string }

export const Wrapper: React.FC<Props> = props => {
  dayjs.locale(props.langKey)

  return (
    <IntlProvider locale={props.langKey} messages={messages[props.langKey]}>
      {props.children}
    </IntlProvider>
  )
}

export const Container: React.FC<ContainerProps> = props => (
  <Wrapper {...props} />
)

export const CustomIntlProvider = connector(Container)
