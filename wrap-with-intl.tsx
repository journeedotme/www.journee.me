import React from "react"
import { CustomIntlProvider } from "./src/components/CustomIntlProvider/CustomIntlProvider"
import { App } from "./src/components/App/App"

import "dayjs/locale/fr"

export default ({ element, props }) => {
  return (
    <CustomIntlProvider langKey={props.pageContext.langKey}>
      <App>{element}</App>
    </CustomIntlProvider>
  )
}
