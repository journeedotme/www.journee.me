import React from "react"
import { CustomIntlProvider } from "./src/components/CustomIntlProvider/CustomIntlProvider"
import dayjs from "dayjs"

import "dayjs/locale/fr"

export default ({ element, props }) => {
  dayjs.locale(props.pageContext.langKey)

  return (
    <CustomIntlProvider langKey={props.pageContext.langKey}>
      {element}
    </CustomIntlProvider>
  )
}
