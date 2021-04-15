import React from "react"
import { CustomIntlProvider } from "./src/components/CustomIntlProvider/CustomIntlProvider"
import { App } from "./src/components/App/App"
import dayjs from "dayjs"

import "dayjs/locale/fr"

export default ({ element, props }) => {
  dayjs.locale(props.pageContext.langKey)

  return (
    <CustomIntlProvider langKey={props.pageContext.langKey}>
      <App lang={props.pageContext.langKey}>{element}</App>
    </CustomIntlProvider>
  )
}
