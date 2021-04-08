import React from "react"
import { CustomIntlProvider } from "./src/components/CustomIntlProvider/CustomIntlProvider"

export default ({ element, props }) => {
  return (
    <CustomIntlProvider langKey={props.pageContext.langKey}>
      {element}
    </CustomIntlProvider>
  )
}
